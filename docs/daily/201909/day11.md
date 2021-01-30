## [html] input的onblur和onchange事件区别是什么？

onchange是指值改变并且失去焦点时触发的事件

    且先于 onblur 触发。onchange 只有在 input 的值必须与前一次输入不同才会触发。

onblur失去焦点时就触发，不管值有没有改变

## [css] 什么是脱离文档流？有什么办法可以让元素脱离标准的文档流？

文档流就是指元素在 HTML 文档中位置顺序决定排布的过程。HTML 元素有块级元素和行内元素，块级元素一个占一行，行内元素在一行内依次排布。整体元素从上到下的排布顺序如同瀑布一样。

W3C中没有文档流document flow的说法，只有normal flow的概念。
normal flow中的盒子，构成结构化文本，其中包括block和inline，两者不可同时存在，非block即inline，元素按照其在HTML中的位置顺序决定排列的过程。
脱离普通流的三种方法：float，position，fixed。

## [js] 请使用原生的js实现斐波那契数列

斐波那契数列数列从第3项开始，bai每一项都等于前两项之和。

例子：数列 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233，377，610，987，1597，2584，4181，6765，10946，17711，28657，46368........

```javascript
function Fibonacci (n) {
  let arr = [1, 1]
  for (let i = 2; i < n + 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr
 //return arr[n]
}
```
## [软技能] 你知道什么是AST吗？说说你对AST的理解，它的运用场景有哪些？

抽象语法树。

