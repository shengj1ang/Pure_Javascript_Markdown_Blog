#Refer: https://daniel.feldroy.com/posts/2022-02-blogger-to-markdown-script
"""
!!!!!!
Run 'pip install feedparser typer pyyaml
!!!!!!

How to use this script:
1. Go to your blogger account settings
2. Search for the "Back up content" link
3. Download the content as an XML file
4. Run the script with:

    Usage: python legacy.py [OPTIONS] INPUT_FILE OUTPUT_DIR

    Arguments:
      INPUT_FILE  [required]
      OUTPUT_DIR  [required]

    Options:
        --tag TEXT
            Tag to add to frontmatter
            [default: legacy-blogger]
        --show-original / --no-show-original
            Link MD files to original articles
            [default: show-original]

TODOs
1. Remove the odd 'pydanny' specific items
2. Add pure python way to convert HTML to markdown
"""

import sys
from pathlib import Path

try:
    import feedparser
    import typer
    import yaml
    import markdownify
except ImportError:
    print("Run 'pip install feedparser typer pyyaml markdownify'")


def main(
    input_file: Path,
    output_dir: Path,
    tag: str = typer.Option("legacy-blogger", help="Tag to add to frontmatter"),
    show_original: bool = typer.Option(True, help="Link MD files to original articles"),
):

    typer.secho(f"Parsing data from '{input_file}'", fg=typer.colors.GREEN)
    raw_text = input_file.read_text()
    # parse the historical data
    data = feedparser.parse(raw_text)
    posts = {}
    for entry in data.entries:
        try:
            # Filter out config data and other junk
            if "tag:blogger.com" in entry.link:
                continue
            if "comments" in entry["href"]:
                continue
            if "#settings" in entry.category:
                continue
            if entry.title == "Template: pydanny":
                continue

            # add comments to entries
            if "#comment" in entry.category:
                posts[entry["thr_in-reply-to"]["href"]].comments.append(entry)
                continue

            # Add entries to the posts and prep for comments
            entry["comments"] = []
            posts[entry.link] = entry
        except KeyError:
            continue

    # Write the markdown files
    typer.secho(
        f"Writing {len(posts)} blogger posts to markdown files", fg=typer.colors.GREEN
    )
    with typer.progressbar(posts.items()) as posts_progress:
        for key, value in posts_progress:
            # Get a MD filename from the original HTML URL
            filename = key.replace(".html", ".md")
            filename = filename.replace(data["feed"]["link"], "")
            link = data["feed"]["link"].replace("http", "https")
            filename = filename.replace(link, "")
            # print('\n',link, data['feed']['link'], filename)
            # Catches some of the configuration elements
            if len(filename.strip()) == 0:
                continue
            # bypasses simple pages, TODO: Provide option to create MD pages
            if filename.startswith("p-"):
                continue
            filename = filename.replace("/", "-")
            # Get a list of tags
            tags = [x["term"] for x in value.tags]
            tags = [
                x
                for x in tags
                if x != "https://schemas.google.com/blogger/2008/kind#post"
            ]
            # Add the tag option to list of tags
            tags.append(tag)
            frontmatter = {
                "date": value["published"],
                "published": True,
                "slug": filename.replace(".md", ""),
                "tags": tags,
                "time_to_read": 5,
                "title": value["title"],
                "description": "",
            }
            #with open(f"{output_dir.joinpath(filename)}", "w") as f:
            with open(f"{output_dir.joinpath(value['title'].replace(' ','').replace('/','')+'.md')}", "w") as f:
                # Set the frontmatter
                
                # Do not write frontmatter!!!
                '''
                f.write("---\n")
                f.write(yaml.dump(frontmatter))
                f.write("---\n\n")
                '''

                # Do not show original!!!
                '''
                if show_original:
                    # Set a link to the original content
                    f.write(
                        f"*This was originally posted on blogger [here]({key})*.\n\n"
                    )
                '''
                # Write the HTML, TODO: consider converting to markdown
                f.write(value["published"]+"\n") # Standard: First Line Datatime
                f.write("Visibility: Public\n\n") # Standard: Second Line Visibility

                f.write(markdownify.markdownify(value["summary"], heading_style="ATX")) # Standard: Main Part

                # If any comments, add them
                # Do not write comments!!!
                '''
                if value["comments"]:
                    f.write("\n\n---\n\n")
                    f.write(
                        f'## {len(value["comments"])} comments captured from [original post]({key}) on Blogger\n\n'
                    )
                    for comment in value["comments"]:
                        f.write(
                            f"**{comment['author_detail']['name']} said on {comment['published'][:10]}**\n\n"
                        )
                        f.write(comment["summary"])
                        f.write("\n\n")

                '''

if __name__ == "__main__":
    typer.run(main)
