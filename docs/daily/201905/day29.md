
## [html] 有用过WebGL吗？说说你对它的理解

  WebGL (Web图形库) 是一种JavaScript API，用于在任何兼容的Web浏览器中呈现交互式3D和2D图形，而无需使用插件。WebGL通过引入一个与OpenGL ES 2.0紧密相符合的API，可以在HTML5 元素中使用。


## [css] 你有用过哪些css框架？说说它们的特点

  bootstrap 不够全，所以后来基本都是借鉴思路取长补短自己写的 css 类库或原子类库。
  
  animate.css 用起来很爽，主要用于滚动和小动效。过渡动画当然还是 clip.js 来弄的。
  
  Tent CSS，WeUI，amazeUI 我个人用起来很不舒服，改起来麻烦，除非设计直接选用该风格。

  至于 elementUI，antDesign，vantUI，mintUI 这些就是组件库了，需要集成 vue 或 react，
  
  基本采用该库那多半 UI 风格就已经定下了，而且真正来讲更讲究组件功能性，布局影响并不很大。

## [js] 写一个格式化金额的方法

  如果是格式成三位一逗的话 【<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat" target="_blank">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat</a>】

```javascript
var number = 123456.789;
new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'USD' }).format(number)
// expected output: "US$123,456.79"
```

## [软技能] 对于让你接手一个你觉得很烂的老项目，你该怎么办？

  接手一个项目，无论多老多烂，第一点肯定是熟悉它的架构，以及使用的技术栈，分析其架构，如果时间允许，最好重新设计架构，选择新技术，出项目维护文档，这也是为以后做准备，如果时间不允许，我还是建议，主动加加班，重新设计，这是为以后的事情考虑，现在加把劲儿把项目做好，以后再加新需求就轻松、舒服多了，不然每次时间都很紧张，每次做的都很烂，只会越来越烂，每天面对一个烂项目，简直要疯掉。


```javascript

  //手写
  let num = 100000;
  //下方的转localString可任选一个
  let num1 = num.toLocaleString('de-DE'); //德国以 . 分割金钱, 转到德国当地格式化方案即可
  let num2 = num.toLocaleString();
  let price = num2.replace(/,/g,'.'); //替换分隔符即可
  console.log(num1)
  console.log(num2)
  console.log(price)

  //实现

  var number = 123456.789;
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'USD' }).format(number)
  // expected output: "US$123,456.79"

  // 不支持带小数
  let str = "100000000000000";
  let reg = /(?=(\B)(\d{3})+$)/g;

  // 其实是匹配 ?= 前面的空字符
  console.log(str.replace(reg, ','));

  /*
  (?:pattern)
  非获取匹配，匹配pattern但不获取匹配结果，不进行存储供以后使用。这在使用或字符“(|)”来组合一个模式的各个部分是很有用。例如“industr(?:y|ies)”就是一个比“industry|industries”更简略的表达式。
  (?=pattern)
  非获取匹配，正向肯定预查，在任何匹配pattern的字符串开始处匹配查找字符串，该匹配不需要获取供以后使用。例如，“Windows(?=95|98|NT|2000)”能匹配“Windows2000”中的“Windows”，但不能匹配“Windows3.1”中的“Windows”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。
  (?!pattern)
  非获取匹配，正向否定预查，在任何不匹配pattern的字符串开始处匹配查找字符串，该匹配不需要获取供以后使用。例如“Windows(?!95|98|NT|2000)”能匹配“Windows3.1”中的“Windows”，但不能匹配“Windows2000”中的“Windows”。
  (?<=pattern)
  非获取匹配，反向肯定预查，与正向肯定预查类似，只是方向相反。例如，“(?<=95|98|NT|2000)Windows”能匹配“2000Windows”中的“Windows”，但不能匹配“3.1Windows”中的“Windows”。
  (?<!pattern)
  非获取匹配，反向否定预查，与正向否定预查类似，只是方向相反。例如“(?<!95|98|NT|2000)Windows”能匹配“3.1Windows”中的“Windows”，但不能匹配“2000Windows”中的“Windows”。这个地方不正确，有问题
  */


```
