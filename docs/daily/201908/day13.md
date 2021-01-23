## [html] 说说你对富文本的理解，你有用过哪些富文本编辑器呢？

富文本是指在提供类似word的文本格式编辑方式的编辑器，可以让不会CSS样式的用户也可以通过简单的按钮点击设置出自己想要的文本格式。

一般现在是出现在留言板或者论坛的发帖和博客的发博文等功能块。

一般会支持图片上传，插入默认表情，设置基本的加粗等文本样式

用过wangEditor,vue-quill-editor

## [css] 你有没有自己写过一套UI库？说下遇到哪些难点？

有啊。这是一个基于web-components的UI组件库

[地址](http://xy-ui.codelabo.cn/docs)

感觉如何设计组件的整体主题样式和配置项是个难点

这里采用css自定义属性

```css
:root{
    --themeColor:#42b983
}
```
比如有一种组件，有的人可能喜欢上面一种风格，有的人可能喜欢下面那种风格

```html
<xy-select>
    <xy-option>AAA</xy-option>
    <xy-option>BBB</xy-option>
</xy-select>
<!--or-->
<xy-select values=['AAA','BBB']></xy-select>
```

## [js] 写一个方法把多维数组降维

```javascript
// ES10新增的内置方法
const arr = [1, 2, [3, 4, [5, 6]]]
arr.flat(Infinity)
// [1, 2, 3, 4, 5, 6]
```

```javascript
//递归
function flat (arr) {
  let ret = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof (Array)) {
      ret = ret.concat(flat(arr[i]))
    }
    else {
      ret.push(arr[i])
    }
  }
  return ret
}
```

```javascript
//抄MDN上的，会把空项过滤。也是递归
function flattenDeep(arr) {
   return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
```
## [软技能] 你对jsfuck有了解吗？它的原理是什么？请举例说明

之前好像看过一点，反正这种代码可读性很差；简言之，JSFuck就是用[、]、(、)、! 和 +这六个字符完成JS代码。

这个东西转换出来就不是为了给人直接读的，算是一种js代码的混淆加密方法。但是转换出来代码量太大，真要应用也只能挑一些核心代码进行加密。

