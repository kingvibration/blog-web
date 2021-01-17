<style>
.container{
	display: flex;
	flex-flow: column nowrap;
	height: 500px;
	border: 2px dashed orange;
}
.area1 {
	flex-basis: 300px;
	background-color: lightblue
}
.area2 {
	flex: 1;
	background-color: darkcyan;
}
</style>
## [html] a标签的href和onclick属性同时存在时哪个先触发？

应该是onclick属性先触发，判断依据是在onclik中使用preventDefault方法可以阻止a标签的跳转，说明a标签的跳转行为是一个默认行为；如下：

`<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a" onclick="event.preventDefault()">test</a>`
## [css] 外层有一个自适应高度的div，里面有两个div，一个高度固定300px，另一个怎么填满剩余的高度？

可以设置外层自适应高度的容器为flex布局，利用flex-basis属性即可实现自动填满剩余高度；代码如下：

<section class="container">
	<div class="area1">300px</div>
	<div class="area2">other</div>
</section>

## [js] js异步加载有哪些方案？

1. 将script标签放在body结束标签之前

2. 在onload方法中给dom树动态添加script标签

3. 使用defer属性

4. 使用async属性

5. 不得不提 &lt;script type="module">（自带 defer 效果） 和 动态加载模块的 import() 函数，配合 async/await 我忍不住说真香！


## [软技能] 说说你对robots文件的理解，它有什么作用？

robots.txt文件对抓取工具（如爬虫）在访问路径等方面做出了规定，用于阻止或引导抓取工具对网站下特定内容的抓取；

参考文档：[Robots.txt 规范  |  搜索 |  Google Developers](https://developers.google.com/search/reference/robots_txt)
