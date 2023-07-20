import os
import glob


ArticleStartFromYear = 2010
ArticleEndAtYear = 2100

def ArticlesFromSpecificYear(year):
    year=str(year)
    if os.path.exists(year):
        md_files = sorted(glob.glob(year + "/*.md"))
        if len(md_files)<=0:
            pass
        else:
            print("    - "+year)
            for i in md_files:
                print(i)
        



print("* [Index](./)")
for i in range(ArticleStartFromYear, ArticleEndAtYear + 1):
    ArticlesFromSpecificYear(i)
