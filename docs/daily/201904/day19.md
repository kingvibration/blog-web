
  <style>
    .demo1 {
      quotes: "«" "»" "‹" "›";
    }
    .demo1::before {
      content: no-open-quote open-quote;
    }
    .demo1::after {
      content: close-quote;
    }

    .demo2 {
      quotes: "『" "』";
    }
    .demo2::before {
      content: open-quote;
    }
    .demo2::after {
      content: close-quote;
    }
    .demo3:after{
      content: attr(href);
    }

    dot {
      display: inline-block;
      height: 1em;
      line-height: 1;
      text-align: left;
      vertical-align: -.25em;
      overflow: hidden;
    }

    dot::before {
      display: block;
      content: '...\A..\A.';
      white-space: pre-wrap;
      animation: dot2 1.6s infinite step-start both;
    }

    @keyframes dot2 {
      33% {
        transform: translateY(-2em);
      }

      66% {
        transform: translateY(-1em);
      }
    }

    .demo5::after{
      content: ".";
      animation: dot 1.6s linear both;
    }
    @keyframes dot{
      0%{ content: "." }
      33%{ content: ".." }
      66%{ content: "..." }
      100%{ content: "." }
    }
  </style>

## [html] 说说你对html中的置换元素和非置换元素的理解

  置换元素（Replaced Element）

    简单来说，置换元素可以设置宽 高,他们有自己的属性，和inline-block有一样的属性

    主要是指 img、input、textarea、select、object 等这类默认就有 CSS 格式化外表范围的元素。

    浏览器根据元素的标签和属性，来决定元素的具体显示内容

    例如：浏览器根据标签的src属性显示图片。根据type属性决定显示输入框还是按钮

  非置换元素（non-Replaced Element）:
  
    就是除了 img、input、textarea、select、object 等置换元素以外的元素。

    内容直接展示给浏览器。例如标签，标签里的内容会被浏览器直接显示给用户



## [css] css的属性content有什么作用呢？有哪些场景可以用到？

  认识 :before 和 :after
    默认 display: inline；
    必须设置 content 属性，否则一切都是无用功， content 属性也只能应用在 :before 和 :after 伪元素上；
    默认user-select: none，就是 :before 和 :after 的内容无法被用户选中；
    伪元素可以和伪类结合使用形如：.target:hover:after。
    :before 和 :after 是在CSS2中提出来的，所以兼容IE8；
    ::before 和 ::after 是CSS3中的写法，为了将伪类和伪元素区分开；
    CSS 中其他的伪元素有：::before、::after、::first-letter、::first-line、::selection 等；
    不可通过DOM使用，它只是纯粹的表象。在特殊情况下，从一个访问的角度来看，当前屏幕阅读不支持生成的内容。
    content 定义用法
    content 属性与 :before 及 :after 伪元素配合使用，在元素头或尾部来插入生成内容。

    说明： 该属性用于定义元素之前或之后放置的生成内容。默认地，这往往是行内内容，不过该内容创建的盒子类型可以用属性 display 控制。

    content: uri value 外部资源

    .demo:after{
      content: url(https://img-vip-ssl.a.88cdn.com/img/xunleiadmin/5b9889e14dcdc.png);
    }

        引用符号
    属于引用符号的取值有 4 种，共 2 对，在 CSS 中用了语义较为清晰的关键词来表示： open-quote、 close-quote、no-open-quote、no-close-quote。

      quotes 可以设置多组引用符号，用以应对次级引用：


## [js] "attribute"和"property"有什么不同？

  property是DOM中的属性，是JavaScript里的对象
  attribute是HTML标签上的特性，它的值只能够是字符串

  每一个HTML标签都有默认属性，比如input标签，默认有value属性，id属性等，而这些属性就是property。而attribute是property的一个子集，是实际定义在HTML标签上的属性，这里也包括自定义的一些属性。


  在操作 DOM 时，我们经常会操作 attribute 和 property。不过从两者的所属关系上来说： property 属于 DOM Object，而 atrribute 属于 HTML。

  property 通常比较容易获取，并且有固定的值（当然，类似 JavaScript 的对象，我们可以添加自定义的值，只是这些不会被 DOM 所认识）。比如 el.id、el.value、el.style 都是 property 而设置也只需要 el.id=newId 即可。attribute 的值不是固定的，我们可以自己为 DOM 添加需要的属性（以前常常用来存放数据或者标志位，在 HTML5 有了 data-* 的属性后，一般就利用 data-* 来存放数据了）。对于 attribute 的设定和获取我们使用 setAttribute 和 getAttribute 两个方法。

  在书写方面 property 对于大小写敏感；而 attribute 对于大小写不敏感。

  总的来看 property 的值更偏向于标准而 attribute 的值更偏向于自定义和非标准。

attribute是html中标签的特性

  property是js中的对象
  取值与赋值
  attribute赋值只能是字符串
  attribute需要用getAttribute和setAttribute方法进行取值赋值
  property可以赋任何值
  property用“.”属性就可以取值和赋值
  用property进行赋值后，用getAttribute的方式取到的是旧值
  如

  <input type="text" value="123"/>

  用input.value = 456赋值之后，用input.getAttribute("value")获取到的仍然是123

  但是用setAttribute赋值后，用property可以取到正确的值


## [软技能] 最近都流行些什么？你经常会浏览哪些网站？

  github, zhihu, 慕课网, Google, stackoverflow



  <div class="demo1">1</div>
  <div class="demo2">2</div>

  <a class="demo3" href="https://www.baidu.com"></a>

  <a class="demo4" href="https://www.xunlei.com/" title="精彩，一下就有">精彩，一下就有<dot>...</dot></a>

 <div class="demo5"></div>

