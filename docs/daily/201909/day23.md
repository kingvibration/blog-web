## [html] 怎么检测浏览器是否支持HTML5特性？

* 检测window中是否拥有HTML5特有的属性

`'localStorage' in window;
`
* 创建一个HTML5特有的元素，检测是否存在该元素的特有属性

```javascript
function supportCanvas() {
    return !!document.createElement('canvas').getContext;
}
```

* 创建一个元素，然后检测这个元素的DOM对象是否拥有特定方法，同时调用这个方法并检查这个返回值

```javascript
function supportVideoType() {
    return document.createElement("video").canPlayType('video/mp4;codecs="avc1.42E01E,mp4a.40.2"');
}
```

* 创建一个元素，然后检测该元素的DOM对象设定的属性值，然后检查浏览器是否保留了该属性值

```javascript
function supportColorType () {
    var i = document.createElement("input")
    // HTML支持`color`
    i.setAttribute("type", "color");
    console.log(i.type)
    return i.type !== "text"//text为默认的type
}
```

## [css] 判断第一行和第二行的颜色分别是什么？并解释为什么？ [代码]

```html
<style>
.red {color:red;}
.green {color:green;}
</style>

<div class="red green">第一行：颜色是什么？</div>
<div class="green red">第二行：颜色是什么？</div>
```

* 都是green
* CSS的生效规则与标签中class值的声明先后完全没有关系，而是取决于权重
* 如题，.green后定义，把.red覆盖了，所以显示green

## [js] 有些js库习惯在代码开头处添加分号有什么作用呢？除了分号还可以换成别的吗？

js 文件结束 处是 没有 分号的。若几个 js 连在一起时，2个 js 连接处 会发生语法上的混淆。
开头加 ; 用于分隔， 可以避免多文件 压缩 在一起时 引起的 错误。
分号和分号放在一起也没问题，相当于 “空语句”。

## [软技能] 你知道什么是二、三级域名吗？举例说明下

一级域名 .com/.net/.org /.cn等等等

二级域名 github.com/wekipedia.org等等

三级域名www.baidu.com/www.wikipedia.org等等等

可以理解成最右边的字段是顶级等级域名,越左边等级越低 但不要死记硬背应该视情况而定

abc.com.cn,就是个三级域名 在这里.com就不是一级域名了而成为二级域名

![img](./yuming.png)


