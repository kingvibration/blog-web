## [html] 用HTML5实现手机摇一摇功能你有做过吗？你知道它的原理吗？

[HTML5 实现微信“摇一摇”功能](https://www.cnblogs.com/qieguo/p/5448786.html)

## [css] 写出你遇到过IE6/7/8/9的BUG及解决方法

把以前兼容IE6.7学习的东西搬出来了，还以为不见了。

兼容性问题
1. IE6margin双边距问题
2. IE67 li间隙问题
3. 图片间隙问题——vertical-align：top
4. ie6下高度小于19px处理成19px；font-size:0;或者overflow：hidden
5. ie8以下滤镜问题，filter:alpha(opacity=50)
6. IE6 position:fixed 不兼容，fixed定位ie6兼容，js处理，通过获取滚动高度，赋值给需要固定的元素，设置绝对定位，设置top
7. ie6下父级的overflow：hidden是保不住子级的相对定位的（relative）-解决，给父级加定位
8. ie6下，绝对定位的父级，宽高是奇数的话，定位偏移会出现1px的偏差
9. ie6下，内容会撑开设置好的宽度
10. ie6，7 3px问题
11. <p><h3></h3></p>会把p元素分割成两个，原因，嵌套的规范性，p需要嵌套inline元素
12. 在ie6下，1px dotted #000 不兼容。精度问题，可以用背景平铺
13. ie6下margin传递需要触发haslayout，父级有边框时，子元素margin值消失，解决办法，触发父级haslayout
14. ie6下当一行子元素占有的宽度之和与父级的宽度相差超过3px或者有不满行状态的时候，最后一行子元素的下margin就会失效
15. ie6下的文字溢出bug 条件1，子元素的宽度和父级的宽度相差小于3px的时候，2，两个浮动元素中间有注释或内联元素——解决办法：用div吧注释或内联元素包裹起来
16. ie6下，当浮动元素和绝对定位元素是并列关系的时候，绝对定位会消失，解决办法：给定位元素外面包裹div
17. ie6，7下，输入类型的表单控件上下各有1px的间隙——解决办法：给input加浮动
18. ie6，7下，输入类型的表单控件加border：none无效，还是会出现边框——解决办法：1，给border：0；2，重置input的背景
19. ie6，7下，输入类型的表单控件输入文字的时候，背景图片会跟随移动——解决办法：把背景加给父级
20.处理ie6 png图片兼容问题js插件，DD_belatedPNG.js,也可以用CSS滤镜处理
  a. css处理
  b. 微软behavior扩展，下载iepngfix.htc
  c. js插件
21. css hack \9——IE10之前的浏览器解析，+，*——IE7包括IE7之前的浏览器解析， _ ——IE6包括IE6之前的IE浏览器
22. important兼容问题，在IE6下，在important后面加一条同样的样式，会破坏important优先级作用，按照默认的优先级顺序来走
23. IE6 margin负值不兼容，处理，只要position：relative；这个解决方案在圣杯布局中有出现。圣杯布局，可以用position：absolute；来定位

## [js] 用js实现一个九九乘法口诀表

```javascript
const MAX_WIDTH = 7
let table = ''
for (let rhs = 1; rhs <= 9; rhs++) {
    for (let lhs = 1; lhs <= 9; lhs++) {
        if (lhs <= rhs) table += `${lhs}*${rhs}=${lhs * rhs}`.padEnd(MAX_WIDTH)
    }
    table += '\n'
}
console.log(table)
```
## [软技能] 说下你平时是怎么自学的？怎么安排时间的？

晚上或者周末，学一个小时左右，或者烦躁学不动时去外面走回，又回来继续
