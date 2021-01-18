## [html] Doctype有什么作用？你知道有多少种Doctype文档类型吗？

DOCTYPE声明指定了浏览器对于HTML文档解析的类型；

HTML5的DOCTYPE只有一种：

`<!DOCTYPE html>`

HTML4.01的DOCTYPE有三种：Strict，Transitional和Frameset；

`
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
`

`
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
`

`
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
`

参考文档：[HTML <!DOCTYPE> 标签](http://www.w3school.com.cn/tags/tag_doctype.asp)

## [css] 如何更改placeholder的字体颜色和大小？

```html
 <style>
    /* Chrome浏览器 */
    input::-webkit-input-placeholder {
      color: red;
    }

    /* 火狐浏览器 */
    input::-moz-placeholder {
      color: red;
    }

    /* IE */
    input:-ms-input-placeholder {
      color: red;
    }
  </style>
<body>
  <input type="text" placeholder="你好">
</body>
```

## [js] 写例子说明如何给li绑定事件（ul下有1000+个li）？

在不考虑任何情况时，直接使用 $('li').addEventListener(event, fun) 就可以对 li 进行事件绑定。

当子元素过多时，可以利用“事件冒泡”在 ul 上进行绑定，实现事件委托。可以利用 event.target 对被触发的子元素进行操作。

```javascript
document.getElementsByTag('ul')[0].addEventListener('event', (e) => {
	// 利用 e.target 对冒泡上来的元素做区分
	// e.target.nodeName, e.target.id 等
})
```
参考文章：[实例分析JavaScript中的事件委托和事件绑定](https://www.diguage.com/archives/71.html)


## [软技能] 你认为前端工程师应该分为哪些级别呢？说说你的看法

以前html4，很多东西都是table布局，毕竟那时候万维网91年才出来。那时候，我们叫网页设计师。

大部分情况下有：

1. 纯纯切图仔（就是只会切图，但是设计师还达不到）
2. 网页设计师和切图仔混合 （小公司居多，极不规范，P图后用Dreamweaver拉，甚者还用上世纪table布局）
3. 前端静态CSS仔 （不用javascript，只需要写前端HTML,CSS UI，CSS写得溜溜的，做出页面就好了）
4. 前端切图，静态CSS，酷炫效果成熟技工 （融合以上技能，js还写得很溜，基本是Jquery一把嗦，上时代流行产物）
5. 动态框架仔（新时代的产物，只会用nodejs数据渲染Vue等框架，忘却前端本质，不如上面仨，既做不到后端，又做不到大前端，只能在黑箱子里搬运代码，多半是半路出家，培训班）
6. 大前端初级工程师（相对专业，融合1234，系统规范的学习，只要有需求，能用最先进的动态框架和库，写出溜得一逼的UI，仍然在黑箱子里，只不过熟能生巧）
7. 大前端中级工程师（能自己造轮子，讲各种前端头头是道，但只是会说，做可能和5差不多）
8. 大前端高级工程师（只是年龄到了，这时可能会很多东西，包括可能连后端的一部分都做了，这时候开始是小组长，带两三人）
9. 大前端资深高级工程师（熬出头了，有一整套前端的开发方案和流程，可喜可贺）
10. 技术总监（谁见到前端做技术总监的？）
11. 大前端大神（写几个库出名，然后出书，演讲，培训，有钱还写什么代码，不写代码后的日子真好）

我觉得分为：

学徒

能干活的人

干活溜的人

指挥家

精神领袖

入行时，都是学徒，干不了活，只能模拟，练习，拿公司工资在公司学习。三个月-六个月过去了，能干活了，可以完成工作，但工作很糟糕，就是能干，但不可维护，效率拉脱。两年后，干活很溜。四五年后，指挥能干活的和干活溜的干活，十年后成为精神领袖，叱咤风云。

《重构与模式》中有一句非常经典的话："如果想成为一名更优秀的软件设计师，了解优秀软件设计的演变过程比学习优秀设计本身更有价值，因为设计的演变过程中隐藏着大智慧"
