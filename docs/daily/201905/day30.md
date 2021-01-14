
## [html] src、href、link的区别是什么？

  谈谈src和href的区别
  
  src和href都是用于外部资源的引入， src一般引入js文件， 图片文件，href一般链接css资源文件，网页资源文件。这里给出几个使用得例子：

  引用js文件时：src="myscript.js"
  
  引用图片：src="mypic.jpg"
  
  引用css文件时：href="cssfile.css"
  网站链接：href="http://www.webpage.com"
  
  它们之间的主要区别可以用这样一句话来概括：

  src用于替代这个元素，而href用于建立这个标签与外部资源之间的关系。

  例如：

  &lt;a href="www.xxx.com">
    &lt;img src="1.jpg">
  &lt;/a>
  
  a 标签里面的内容是一张图片，a标签加上href属性将图片链接到了www.xxx.com这个网站，但并未替换a标签里面的内容。

  而img标签的src属性则是将这个标签完全替换成了src里面的资源。

  href (Hypertext Reference) 超文本引用

  href这个属性指定web资源的位置，从而定义当前元素（如锚点a）或当前文档（如链接）与目标锚点或目标资源之间的联系。例如当我们写：

  &lt;link href="style.css" rel="stylesheet" />

  浏览器知道这是个样式表文件，<b>html页面的解析和渲染不会暂停，css文件的加载是同时进行的，</b>用@import添加的样式是在页面载入之后再加载，这可能会导致页面因重新渲染而闪烁。所以我们建议使用link而不是@import。

  src (Source)源

  这个属性是将资源嵌入到当前文档中元素所在的位置。例如当我们写：

  &lt;script src="script.js">&lt;/script>

  当浏览器解析到这句代码时，<b>html页面的加载和解析都会暂停，直到浏览器加载、编译、执行完毕js文件。</b>这就像是把js文件里的内容全部注入到这个script标签中，类似于img，img标签是一个空标签，它的内容就是由src这个属性定义，浏览器会暂停加载直到这个图片加载完成，iframe标签也有这样这样得特性。

  这也是为什么要将js文件的加载放在body最后的原因（ 在&lt;body>前面 ）。


## [css] 用css画一个太阳

## [js] 请实现一个flattenDeep函数，把多维数组扁平化

  ES10的flat方法

  参数【可选】：指定嵌套数组中的结构深度，默认值为1, Infinity展开所有

## [软技能] 如何预防掉头发？

  肝藏血，发为血之余，血亏则发枯。肾为先天之本，精血之源，其华在发。-- 老中医

```javascript
  //手写
  // const newArray = arr.flat(depth)
  const temp = [1,2,[1,2, [3,5,6]]];
  console.log(temp.flat(Infinity));
  // [1,2,1,2]

  //实现

  function flattenDeep(arr) {
      return arr.reduce((acc, cur) => {
          const _val = Array.isArray(cur) ? flattenDeep(cur) : [cur]
          return [...acc, ..._val]
      }, [])
  }


  console.log(flattenDeep(
      [
          1, 2, 3, [4, 5, [6, 7, [8, 9]]]
      ]
  ))

  console.log('======= 测试 ========');
  var numbers = [65, 44, 12, 4];
  let result = numbers.reduce((result, item) => {
      console.log(result, item)
      return result + item
  }, 0)
  console.log(result)
  console.log('======= 测试结束 ========')
```
