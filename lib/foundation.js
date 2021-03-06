module.exports = {
  "html" : {
    "filters" : "html",
    "profile" : "html",

    "snippets" : {
      "cgh": "<!-- content goes in here -->",
      "off-canvas-icon" : "<a class=\"left-off-canvas-toggle menu-icon\" href=\"#\"><span></span></a>",
      "progress-meter" : "<span class=\"meter\" style=\"width: 100%\"></span>",
      "rns" : "<!-- Right Nav Section -->\n",
      "rbcharview" : "<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n",
      "rbtitle" : "<title>Foundation 5</title>",
      "rbifcss" : "\n<!-- If you are using CSS version, only link these 2 files, you may add app.css to use for your overrides if you like. -->",
      "rbnormalize" : "<link rel=\"stylesheet\" href=\"css/normalize.css\">",
      "rbstylesheet" : "<link rel=\"stylesheet\" href=\"css/foundation.css\">",
      "rbappstylesheet" : "\n<!-- If you are using the gem version, you need this only -->\n<link rel=\"stylesheet\" href=\"css/app.css\">",
      "rbhead" : "<!doctype html>\n<!--[if IE 9]><html class=\"lt-ie10\" lang=\"en\" > <![endif]-->\n<html class=\"no-js\" lang=\"en\" >\n\n",
      "rbmodernizr" : "\n<script src=\"js/vendor/modernizr.js\"></script>\n",
      "fjquery": "\n\n<script src=\"js/vendor/jquery.js\"></script>\n<script src=\"js/foundation.min.js\"></script>",
      "fscript": "<script>\n  \\$(document).foundation();\n</script>",
    },
    "abbreviations": {

      "zf-head": "rbhead>(head>rbcharview>rbtitle>rbifcss>rbnormalize>rbstylesheet>rbappstylesheet>rbmodernizr)>{\n<body>\n\n${1:<!--Your content here-->}|}",
      "zf-footer": "fjquery>fscript>{\n</body>\n</html>}",

      "foundation": "zf-head>zf-footer",

      "zf-row" : "<div class=\"row\">",
      "zf-col" : "<div class=\"columns\">",

      "zf-accordion" : "dl.accordion[data-accordion=data-accordion]>(zf-accordion-active-panel)>(dd*2>(a[href=#panel$@2]{Accordion $@2})>(div#panel$@2.content{Panel $@2 Content}))",
      "zf-accordion-active-panel": "dd>(a[href=#panel$]{Accordion $})>div#panel$.content.active{Panel $ content (this panel has the class active so it will be open at pageload)}",

      "zf-alert" : "{<!-- Optional classes: [success alert secondary] [radius round] -->}>div[data-alert=data-alert].alert-box>cgh>{\n}>(a[href=#].close{&times;})",

      "zf-breadcrumb" : "ul.breadcrumbs>(li*2>a[href=#]{page $})>(li.unavailable>a[href=#]{page 3})>(li.current>a[href=#]{page 4})",

      "zf-button-bar" : "div.button-bar>ul.button-group*2>li*3>a[href=#].button{Button $}",

      "zf-button-group" : "{<!-- Button Group Optional Classes: [radius round] -->}>ul.button-group>li*3>a[href=#].button{Button $}",

      "zf-button" : "{<!-- Size Classes: [tiny small large] -->\n<!-- Radius Classes: [radius round] -->\n<!-- Color Classes: [secondary success alert] -->\n<!-- Disabled Class: disabled -->\n}>a[href=#].button{Default Button}",

      "zf-clearing" : "ul.clearing-thumbs[data-clearing=data-clearing]>(li>a[href=http://placehold.it/350x150&text=full-image-$]>img[src=http://placehold.it/150x150&text=thumbnail-$])*3",

      "zf-dropdown-button": "{<!-- Size Classes: [tiny small medium large] -->\n<!-- Color Classes: [secondary alert success] -->\n<!-- Radius Classes: [radius round] -->\n}>(a[href=# data-dropdown=drop].button.dropdown{Dropdown Button})>{<br>}>ul#drop[data-dropdown-content=dropdown-content].f-dropdown>li*3>a[href=#]{Link $}",

      "zf-full-grid": "zf-row>zf-col.small-12.medium-12.large-12",

      "zf-half-grid": "zf-row>zf-col.small-6.medium-6.large-6*2",

      "zf-offcanvas": "div.off-canvas-wrap[data-offcanvas=data-offcanvas]>div.inner-wrap>(nav.tab-bar>(section.left-small>off-canvas-icon)>{\n}>(section.right.tab-bar-section>h1.title{Foundation}))>{\n\n<!-- Off Canvas Menu -->}>(aside.left-off-canvas-menu>(ul.off-canvas-list>(li>label>{Foundation})>(li>a[href=#]{Link name})))>{\n}>(section.main-section>cgh)>{\n\n}>{<!-- close the off-canvas menu -->\n}>a[href=#].exit-off-canvas",

      "zf-orbit": "ul.example-orbit[data-orbit=example-orbit]>li*5>(div.orbit-caption{image $})>img[src=\"http://placehold.it/1200x450&text=image-$\"]",

      "zf-orbit-content": "ul.example-orbit-content[data-orbit=example-orbit-content]>li[data-orbit-slide=headline-$]*5>div>(h2{Headline $})>(h3{Subheadline})",

      "zf-pagination": "ul.pagination>(li.arrow.unavailable>a[href=#]{&laquo;})>(li.current>a[href=#]{$})>((li>a[href=#]{$@2})*3)>(li.unavailable>a[href=#]{&hellip;})>((li>a[href=#]{$@12})*2)>(li.arrow>a[href=#]{&raquo;})",

      "zf-panel": "div.panel>(h5{This is a callout panel.})>(p{It's a little ostentatious, but useful for important content.})",

      "zf-pricing-table": "ul.pricing-table>(li.title{Standard})>(li.price{\\$99.99})>(li.description{An awesome description})>(li.bullet-item{1 Database})>(li.bullet-item{5GB Storage})>(li.bullet-item{20 Users})>(li.cta-button>a.button[href=#]{Buy now})",

      "zf-progress-bar": "{<!-- Container Width Classes: [small-# large-#] -->\n<!-- Color Classes: [secondary alert success] -->\n<!-- Radius Classes: [radius round] -->\n<!-- Progress Width Classes: [1 - 100] -->}>div.progress>progress-meter",

      "zf-quater-grid": "zf-row>zf-col.small-3.medium-3.large-3*4",

      "zf-reveal": "(a[href=# data-reveal-id=myModal]{Click Me For A Modal})>{\n}>(div#myModal.reveal-modal[data-reveal=data-reveal]>(h2{Awesome. I have it})>(p.lead{Your couch. It is mine.})>(p{Im a cool paragraph that lives inside of an even cooler modal. Wins})>(a[href=#].close-reveal-modal>{&#215;}))",

      "zf-sidenav": "ul.side-nav>(li.active>a[href=#]>{Link $})>(li>a[href=#]>{Link $@2})>(li.divider)>(li>a[href=#]>{Link $@3})*2",

      "zf-split-button": "{<!-- Size Classes: [tiny small medium large] -->\n<!-- Color Classes: [secondary alert success] -->\n<!-- Radius Classes: [radius round] -->\n}>((a[href=#].button.split{Split Button}>span[data-dropdown=drop])>{<br>})>ul[data-dropdown-content=data-dropdown-content]#drop.f-dropdown>(li>a[href=#]{Link $})*3",

      "zf-subnav": "dl.sub-nav>(dt{Filter})>(dd.active>a[href=#]{All})>(dd>a[href=#]{Active})>(dd>a[href=#]{Pending})>(dd>a[href=#]{Suspended})",

      "zf-tabs": "(dl.tabs[data-tab=data-tab]>(dd.active>a[href=#panel$]>{Tab $})>((dd>a[href=#panel$@2]>{Tab $@2})*3))>div.tabs-content>(div.content.active#panel$>p>(lorem15))>((div.content#panel$@2>p>(lorem15))*3)",

      "zf-third-grid": "zf-row>zf-col.small-4.medium-4.large-4*3",

      "zf-topbar": "nav.top-bar[data-topbar=data-topbar]>(ul.title-area>(li.name>h1>a[href=#]>{Something})>(li.toggle-topbar.menu-icon>a[href=#]>{Menu}))>(section.top-bar-section>rns>(ul.right>(li.active>a[href=#]>{Right Nav Button Active})>(li.has-dropdown>(a[href=#]>{Right Button with Dropdown})>ul.dropdown>(li>a[href=#]>{First link in dropdown})))>(ul.left>li>a[href=#]>{Left Nav Button}))",

      "zf-vertical-tabs": "(dl.tabs.vertical[data-tab=data-tab]>(dd.active>a[href=#panel$a]>{Tab $})>((dd>a[href=#panel$@2a]>{Tab $@2a})*3))>div.tabs-content.vertical>(div.content.active#panel$a>p>(lorem15))>((div.content#panel$@2a>p>(lorem15))*3)",

    }
  }
};