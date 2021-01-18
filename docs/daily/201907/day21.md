## [html] 写出以下几个HTML标签：字体、居中、文字加粗、下标

字体：<font>

居中：<center>

文字加粗：<b> 文字强调：<strong>

下标：<sub>

字体和居中的是自己刚开始按照css直接猜的，后来一查还真是这样。而且手册不建议使用这两种标签。

## [css] 行内css和important哪个优先级高？

css 权重（以256进制计算）

！important Infinity

行间样式 1000

id 100

class/伪类/属性 10

元素/伪元素 1

通配符（*） 0

## [js] 要实现一个js的持续动画，你有什么比较好的方法？

requestAnimationFrame，浏览器专门为js动画提供的API。

## [软技能] 说说你对Git的branch, diff, merge的理解？

branch git分支相关操作，可用于查看、新建、删除分支以及分支的重命名操作

diff 用于对比两次修改的差异 可以通过自定义参数来指定对比哪两次修改

merge 用于合并分支或者某次提交 一般用于将分支或修改的内容合并到master上

三者都是git的基本操作指令
