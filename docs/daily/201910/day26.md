## [html] 举例说明ul、dl、ol三个标签的区别？
* ul：无序列表。
* dl：定义列表。
* ol：有序列表。
## [css] 解释下为什么css的reset不建议直接这么写：*{ margin:0; padding:0;}？
1. *为通配符，使用通配符，即全局范围遍历，耗费浏览器效率，增大负荷；
2. 会影响后面的设置的部分属性无效，例如：table设置的cellpadding，cellspacing。
## [js] 请写一个获取颜色的正则
```javascript
// 匹配 0-255 ([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-5]{2})
const colorReg = /(#[0-9A-Fa-f]{3,6}$)|(rgb(a)?\(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-5]{2}),([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-5]{2}),([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-5]{2})(,(1|(0\.[0-9]{2})))?\))/;

const colorTest = color => {
  console.log(color, ": ", colorReg.test(color));
};

colorTest("#333");
colorTest("#345613");
colorTest("#aaffee");
colorTest("#afe");
colorTest("#666666666");
colorTest("#6");
colorTest("rgb(1,2,3)");
colorTest("rgba(255,255,255,0.75)");
colorTest("rgba(125,225,255,0.73)");
colorTest("rgba(255,255,666,0.75)");
// 判断了 16 进制和 rgb，但感觉写的有点烦，不知道各位大佬们能不能帮忙优化一下
```
## [软技能] 在工作中，你对开发环境有什么要求吗？
