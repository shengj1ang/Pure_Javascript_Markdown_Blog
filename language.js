function LanguageAutoAlter(){
    if(typeof clang === 'undefined') clang = navigator.language.toLowerCase();
    //console.log(clang);
    switch(clang){
        case 'de':
        case 'de-de':
            console.log("Lang: Deutsch")
            document.getElementById('button_1').title="Index";
            document.getElementById('button_2').title="Artikel";
            document.getElementById('button_3').title="um";
            var blog_language_index= "Index";
            var blog_language_404= "Artikel nicht gefunden";
            break;

        case 'en':
        case 'en-gb':
        case 'en-us':
        case 'en-ca':
        case 'en-au':
        case 'en-nz':
        case 'en-za':
            console.log("Lang: English")
            document.getElementById('button_1').title="Index";
            document.getElementById('button_2').title="Articles";
            document.getElementById('button_3').title="About";
            var blog_language_index= "Index";
            var blog_language_404= "article not found";
            break;

        case 'es':
        case 'es-mx':
        case 'es-ar':
        case 'es-gt':
        case 'es-cr':
        case 'es-pa':
        case 'es-do':
        case 'es-ve':
        case 'es-co':
            console.log("Lang: Español");
            document.getElementById('button_1').title="índice";
            document.getElementById('button_2').title="artículo";
            document.getElementById('button_3').title="acerca de";
            var blog_language_index= "índice";
            var blog_language_404= "artículo no encontrado";
            break;

        case 'fr':
        case 'fr-be':
        case 'fr-ca':
        case 'fr-ch':
        case 'fr-lu':
            console.log("Lang: français");
            document.getElementById('button_1').title="indice";
            document.getElementById('button_2').title="article";
            document.getElementById('button_3').title="à propos";
            var blog_language_index= "indice";
            var blog_language_404= "article introuvable";
            break;

        case 'zh':
        case 'zh-cn':
        case 'zh-hans-cn':
        case 'zh-hans-sg':
            console.log("Lang: 中文简体");
            document.getElementById('button_1').title="首页";
            document.getElementById('button_2').title="文章";
            document.getElementById('button_3').title="关于";
            var blog_language_index= "首页";
            var blog_language_404= "找不到这篇文章";
            break;

        case 'zh-hk':
        case 'zh-tw':
        case 'zh-hant-hk':
        case 'zh-hant-tw':
            console.log("Lang: 中文繁體");
            document.getElementById('button_1').title="首頁";
            document.getElementById('button_2').title="文章";
            document.getElementById('button_3').title="關於";
            var blog_language_index= "首頁";
            var blog_language_404= "找不到這篇文章";
            break;

        case 'ja':
            console.log("Lang: 日本語");
            document.getElementById('button_1').title="表紙";
            document.getElementById('button_2').title="記事";
            document.getElementById('button_3').title="だいたい";
            var blog_language_index= "表紙";
            var blog_language_404= "記事が見つかりません";
            break;
        default:
            console.log("Lang: default");
            document.getElementById('button_1').title="Index";
            document.getElementById('button_2').title="Articles";
            document.getElementById('button_3').title="About";
            var blog_language_index= "Index";
            var blog_language_404= "article not found";
            break;
    }
  }


LanguageAutoAlter()