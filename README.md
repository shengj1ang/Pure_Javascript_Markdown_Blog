# github-blog-sdk
使用`nodejs`,`marked`,`github-nodejs-sdk`快速构建blog

## 引入
cdn
```
<script src="https://cdn.jsdelivr.net/gh/dezhiShen/github-blog-sdk@master/dist/index.js"></script>
```

## 使用
```
let sdk = new GithubBlogSdk({
    renderContent: (url, html, title) => {
        this.renderContent(url, html, title)
    },
    renderSummary: (url, html) => {
        this.renderSummary(url, html)
    }

})
sdk.initSdk()

```
## 示例
### index.html
```
<html>

<body>
    <div id="app">
        <el-container>
            <el-aside>
                <div style="text-align: center;">
                    <img style="border-radius: 30px;width: 60px;height: 60px;"
                        src="https://avatars.githubusercontent.com/u/26274059?v=4"><br>
                    <a href="https://github.com/dezhiShen">github.com</a>
                </div>
                <div ref="summary"></div>
            </el-aside>
            <el-main>
                <div ref="content"></div>
            </el-main>
        </el-container>

    </div>
</body>
<meta charset="utf-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<link rel="stylesheet" href="../dist/index.css">
<script src='../dist/index.js'></script>
<script>
    var vm = new Vue({
        el: "#app",
        name: "app",
        props: {},
        computed: {},
        data() {
            return {
            }
        },
        methods: {
            renderSummary: function (url, html) {
                this.$refs.summary.innerHTML = html
            },
            renderContent: function (url, html) {
                this.$refs.content.innerHTML = html
            }

        },
        mounted: function () {
            let sdk = new GithubBlogSdk({
                renderContent: (url, html, title) => {
                    this.renderContent(url, html, title)
                },
                renderSummary: (url, html) => {
                    this.renderSummary(url, html)
                }

            })
            sdk.initSdk()
        }
    })
</script>
</html>
```

预览: [https://dezhishen.github.io/github-blog-sdk/examples/index.html](https://dezhishen.github.io/github-blog-sdk/examples/index.html)