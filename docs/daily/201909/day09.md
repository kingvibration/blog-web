## [html] 请说说viewport是什么？在什么时候下使用？有什么作用？

1. 是什么：viewport 是用户网页的可视区域
2. 什么时候用：多用于移动端，也可以用在支持类似“固定到边缘”等特性的桌面浏览器。
3. 什么作用：移动端的浏览器是把页面放在一个虚拟的"窗口"（viewport）中，通常这个虚拟的"窗口"（viewport）比物理屏幕宽，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分。

**其它**

visual viewport尺寸所对应的并不是指屏幕区域里的物理像素，而是CSS 像素。并且它所包含的 CSS 像素的数量也是随着用户缩放而有所改变。
在head加入这行，把默认的layout viewport的宽度设为移动设备的屏幕宽度，也就是把当前的viewport宽度设置为设备物理屏幕的宽度，实现全屏的效果
`<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">`

一般为了自适应布局，普遍的做法是将width设置为device-width

**资料：**

[viewport csdn](https://blog.csdn.net/hjc256/article/details/83097907)
[资料](https://segmentfault.com/a/1190000014735646)

## [css] 移动页面底部工具条有3个图标，如何平分？在设置边框后最后一个图标掉下去了怎么办？

flex-wrap nowrap, 一般flex默认就是nowrap
white-space:nowrap是针对行内元素设置的,默认为normal

## [js] 请举例说明动态操作DOM的方法有哪些？

创建一个元素

createElement()
向元素末尾添加一个子节点

appendChild()
将新的元素插入到指定元素的前面

insertBefore(new,old);
删除一个子节点

removeChild() //接收一个节点类型的；参数是要删除的这个元素；
替换子节点

replaceChild(new,old); //用新的元素替换原有的元素
克隆元素

cloneChild()
//接收一个布尔类型的参数 true,false
//如果不传参数，默认是false；

```javascript
console.log(box.cloneNode(true)); //浅克隆
a.appendChild(box.cloneNode(true))//深克隆
```

## [软技能] 移动端的用户体验有哪些优化的方法？

快速：首次加载的包要小和快速，按需加载；cdn选好一点的；图片不要乱用严格控制大小；雪碧图；能用css和html的地方不用js,能不用的包就不要用；代码不要写一些蜜汁操作。

优雅：界面美观大方，布局不僵硬也不花哨，过渡和留白妥善处理；文案清晰易懂，图标意义明确

强大：别人有的你有，别人没有的你也有...
