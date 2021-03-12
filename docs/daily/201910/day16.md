## [html] HTML5的output是非常棒的一个标签，你对它有了解吗？

output 与 input对应，一个是输入,一个是输出.

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    <input type="range" name="b" value="50" /> +
    <input type="number" name="a" value="10" /> =
    <output name="result"></output>
</form>
```

## [css] 怎样去除图片自带的边距？

空隙产生的原因，换行符，空格符，制表符等你空白符，字体不为0的情况下，都会产生一个字符的空隙，空格符好会占据一定宽度，使用inline-block会产生元素间的空隙。

解决方法：
1. 父元素设置：font-size=0
2. 使用flexbox
3. display:block

## [js] 在js中函数返回多个值有哪些方法？

函数return expression, 这个表达式应该是一个具体的值,这个具体的值可以是一个承载多个值的复杂值, 诸如Array,Object, Map,Set等方式来实现


## [软技能] 说说你对AMD、CMD和CommonJS的理解

AMD,CMD和CommonJs是es6之前推出的模块化方案。

1. CommonJs用在服务端
2. AMD,CMD用在浏览器环境

一、CommonJs是由node推广使用的。
导出module.exports，导入require。

二、AMD是RequireJS在推广过程中对模块定义的规范化
它主要是异步加载模块，模块的加载不影响后面语句的执行；所有依赖这些模块的语句，都定义到一个回调函数中，等依赖模块全部加载完成后，执行回调函数。
特点是推崇依赖前置、提前执行
```javascript
define(['回调函数的依赖模块'], function() {
    // 回调函数，依赖模块的语句
    ...
})

define(['./a', './b'], function(a, b) { // 依赖刚开始就要去加载，加载依赖是异步加载
  // a b 依赖加载完成后，才去执行回调中语句
  a.doSomething()
  b.doSomething()
  ...
}) 
```
三、CMD是SeaJS在推广过程中对模块定义的规范化

它采用就近依赖，同步加载。即在用到依赖的地方，才去加载依赖。
特点是推崇依赖就近、延迟执行
```javascript
define(function(require, exports, module) {
  var a = require('./a') // 依赖等用的时候才去加载，加载依赖是同步加载
  a.doSomething()

  var b = require('./b') 
  b.doSomething()
  // ... 
})
```

四、ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，旨在成为浏览器和服务器通用的模块解决方案。其模块功能主要由两个命令构成：export和import。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。
  
ES6的模块不是对象，import命令会被 JavaScript 引擎静态分析，在编译时就引入模块代码，而不是在代码运行时加载，所以无法实现条件加载。也正因为这个，使得静态分析成为可能。

五、 ES6 模块与 CommonJS 模块的差异
1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。

CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 的import有点像 Unix 系统的“符号连接”，原始值变了，import加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。


运行时加载: CommonJS 模块就是对象；即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。


编译时加载: ES6 模块不是对象，而是通过 export 命令显式指定输出的代码，import时采用静态命令的形式。即在import时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”。


CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。
