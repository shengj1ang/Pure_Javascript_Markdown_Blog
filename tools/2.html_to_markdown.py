# import markdownify
import markdownify
import sys
def html_to_makrdown(fileaddr):
    with open(fileaddr,"r") as f:
        x=f.readlines()
        html=x[-1]
        date=x[1]
        title=x[-6].encode().decode('unicode-escape').replace("title: \"","")[:-2].replace(" ","")
    # create html
    '''
        html = """  
            <h1> <strong>Geeks</strong>
            for<br>
            Geeks
            </h1>
            """
    '''
    # print HTML
    #print(html)
    
    # convert html to markdown
    h = markdownify.markdownify(html, heading_style="ATX")
    
    res=(f'{title}\n{date}\n---\n{h}\n')
    print(res)
    with open("res/"+title+".md","w") as f:
        f.write(res)

print(sys.argv[1])
html_to_makrdown(sys.argv[1])