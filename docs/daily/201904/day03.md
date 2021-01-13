
## [html] HTML全局属性(global attribute)有哪些（包含H5）？
  全局属性：用于任何HTML5元素的属性

    accesskey:设置快捷键
    class:为元素设置类标识
    contenteditable:指定元素内容是否可编辑
    contextmenu:自定义鼠标右键弹出上下文菜单内容（仅firefox支持）
    data-*:为元素增加自定义属性
    dir：设置元素文本方向（默认ltr；rtl）
    draggable:设置元素是否可拖拽
    dropzone:设置元素拖放类型（copy|move|link,H5新属性，主流均不支持）
    hidden:规定元素仍未或不在相关
    id:元素id，文档内唯一
    lang:元素内容的语言
    spellcheck:是否启动拼写和语法检查
    style:行内css样式
    tabindex:设置元素可以获得焦点，通过tab导航
    title:规定元素有关的额外信息
    translate:元素和子孙节点内容是否需要本地化（均不支持）

## [css] 在页面上隐藏元素的方法有哪些？

  占位:
  
    visibility: hidden;
    
    margin-left: -100%;
    
    opacity: 0;
    
    transform: scale(0);
    
    
  不占位:
  
    display: none;
    
    width: 0; height: 0; overflow: hidden;
    
  仅对块内文本元素:
    text-indent: -9999px;
    font-size: 0;

## [js] 去除字符串中最后一个指定的字符


```javascript
String.prototype.removeLastByte = function(str) {
  if (typeof str !== 'string'){
      alert('请确认要删除的对象为字符串！');
      return false;
  }
  let index = this.lastIndexOf(str);

  return `${this.slice(0, index)}${this.slice(index+1)}`;
}

console.log('wandanwanyi'.removeLastByte('y'))



// 👍
// 先倒转，删除第一个，再倒转，拼接
function delLast(str, target) {
    return str.split('').reverse().join('').replace(target, '').split('').reverse().join('');
}

const str = delLast('asdfghhj', 'h')

console.log(str) // asdfghj

```
