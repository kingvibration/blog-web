## [html] 如何让textarea高度自适应呢？

推荐看看 ant-design 和 elementUI 的源码设计即可。

[element](https://github.com/ElemeFE/element/blob/dev/packages/input/src/calcTextareaHeight.js#L73)

[ant-design](https://github.com/ant-design/ant-design/blob/master/components/input/calculateNodeHeight.tsx#L88)

## [css] z-index有时不起作用的原因是什么？怎么解决？

1. 可能是没有设置position
    解决：设置position为relative,absolute,fixed
2. 设置了浮动
    解决：清除浮动
3. 父元素position为relative
    解决：设置为absolute

满足下面任一条件才会形成层叠上下文:

1. 根元素 (HTML),
2. z-index 值不为 "auto"的 绝对/相对定位，
3. 一个 z-index 值不为 "auto"的 flex 项目 (flex item)，即：父元素 display: flex|inline-flex，
4. opacity 属性值小于 1 的元素（参考 the specification for opacity），
5. transform 属性值不为 "none"的元素，
6. mix-blend-mode 属性值不为 "normal"的元素，
7. filter值不为“none”的元素，
8. perspective值不为“none”的元素，
9. isolation 属性被设置为 "isolate"的元素，
10. position: fixed
11. 在 will-change 中指定了任意 CSS 属性，即便你没有直接指定这些属性的值（参考 这篇文章）
12. -webkit-overflow-scrolling 属性被设置 "touch"的元素

## [js] 用js实现页面局部打印和预览原理是什么呢？同时在IE上有什么不同？

```html
<h1>这块内容不需要打印1</h1>
<!--startprint-->
<div class="content">
    这里是需要打印的内容
    .....
</div>
<!--endprint-->
<h1>这块内容不需要打印2</h1>
<button onclick="doPrint()">打印按钮</button>
```
```javascript
function doPrint() {
    bdhtml = window.document.body.innerHTML;
    sprnstr = "<!--startprint-->";
    eprnstr = "<!--endprint-->";
    prnhtml = bdhtml.substr(bdhtml.indexOf(sprnstr) + 17);
    prnhtml = prnhtml.substring(0, prnhtml.indexOf(eprnstr));
    window.document.body.innerHTML = prnhtml;
    window.print();
}
```

## [软技能] 你有玩过Docker吗？你知道它有哪些运用场景吗？

1. 可以配置一个自定义的前端开发环境。在任何一台有docker环境的集群都可以开发。
2. 利用阿里云镜像仓库实现CICD。
