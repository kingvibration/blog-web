## [html] HTML如何创建分区响应图？

分区响应图:一张图片,分成多个模块,点击模块可以链接到不同的URL地址,
实现;
使用map,area

```html
<p>
  <img src="./1.png" usemap="#myMap" />
</p>
<map name="myMap">
  <area href="http://baidu.com" shape="rect" coords="50,106,220,273" />
  <area href="http://google.com" shape="rect" coords="260,106,430,275" />
  <area href="http://juejin.im" shape="default" />
</map>
```
  
## [css] 你有用过table布局吗？说说你的感受

在 div + css 布局成为主流之前，基本都是以 table 布局为主。曾经的三剑客，Dreamever 的所见即所得也是利用 table 来做布局。

table 布局对于排版比较友好，水平居中、垂直居中都可以利用 table 的属性来完成。但缺点也是十分明显的。

* table 布局往往是 table 嵌套 table，会有非常多的 DOM 节点，对于性能来说是一个灾难
* 语义化不明，本身就是标签错误的用法。因此对 SEO 不友好。
* DOM 操作是噩梦，无数的 tr、td 中要寻找到目标 DOM 元素非常困难，代码没有维护性可言。

## [js] 请用js编写一个红绿灯程序

```javascript
 function ryg(color, duration) {
    return new Promise(function (resolve) {
      setTimeout(resolve.bind(this, color), duration);
    })
  }

  async function run() {
    let light;
    while (true) {
      light = await ryg('red', 1000)
      console.log(light)
      light = await ryg('yellow', 2000)
      console.log(light)
      light = await ryg('green', 200)
      console.log(light)

    }
  }
  run()
```
## [软技能] 淘宝、京东、百度他们的网站首页秒开是如何做到的呢？

jd是首页部分可见区域做了ssr，配合懒加载
