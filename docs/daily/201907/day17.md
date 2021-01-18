## [html] 请说说你对ISISO8859-2字符集的认识

iso8859是一系列的字符标准,iso8859-2在1的基础之上收集了东欧字符;


## [css] 移动端的布局用过媒体查询吗？写出例子看看

```css
@media [type] and [condition] … not [condition] {
    …
}
@media [condition] and/or/not [condition] … {
    …
}
```
其中：

> type = "all" | "print" | "screen" | "speech"
> condition = equality | comparison
> equality = name ":" value
> comparison = name ("<"|">")? "="? value
> name = <CSS property name>
> value = <CSS property value>

## [js] 解释下为什么{} + ## [] === 0为true？

那个 {} 是空语句块而非空对象

{} + [] === 0

+[] === 0

0 === 0

true

## [软技能] 浏览器在什么情况下会出现“已拦截弹窗式窗口”？怎么解决？

已拦截弹窗式窗口出现的原因是你想打开一个页面，但是这个页面并不是通过你的点击事件实现，而是已其他方式出现的。

使用模拟点击事件，
