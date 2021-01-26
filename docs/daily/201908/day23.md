## [html] 请问WebSql是HTML5的一个规范吗？

WebSqL 并不是 HTML5 的规范。可以理解为在浏览器中操作一个 Sql 数据库，在移动端上支持程度会比较好，现在已经不在支持。

现在如果在前端想要进行大数据的存储应该使用 IndexedDB。

## [css] absolute的containing block（容器块）计算方式和正常流有什么区别？

absolute会先向上找到第一个position不为static或者fixed的祖先元素，然后根据该祖先元素的display属性分类讨论。

如果为块级元素，则为该块级元素的padding box。

如果为行内元素，则为包含该祖先元素内所有行内元素的padding box

如果是正常流，其中元素的containing block是其最近的块级元素的content box

## [js] 举例说明js关闭当前窗口有哪些方法？

`window.close()`

self等价于window，所以也有self.close()

一个需要注意的点是，window.close()在firefox里只能关闭由自己的window.open()打开的弹窗

## [软技能] 关于重复造轮子这件事你是怎么理解的？

个人感觉轮子根据不同的业务需求也会变得多元化，自己在这个多元化的过程中也会看到轮子的方方面面，进而让自己的知识点也会多元化

