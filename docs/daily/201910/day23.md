## [html] 主框架如何与iframe通信？如何解决跨域？
1. 主域相同，子域不同，可以设置在两个页面都设置document.domain = ‘xxx.com’然后,两个文档就可以进行交互。
2. 主域和子域都不同，则可以使用CDM(cross document messaging)进行跨域消息的传递。

发送消息: 使用postmessage方法

接受消息: 监听message事件
## [css] 请说说颜色中#F00的每一位分别表示什么？为什么会有三位和六位的表示呢？

如遇到 #AABBCC类型的六位颜色表示,即可缩写为#ABC,
颜色三原色模式中,为红绿蓝,用十六进制模式表示,,故有16个字符用来表示等级,0-9,A-F等级,逐渐增高, #F00表示最高等级的红色,最低等级的绿色和蓝色

## [js] 用原生js实现类似getElementsByClassName的方法，不能使用querySelectorAll

```javascript
function getElementsByClassName(className){
    const tags = document.getElementsByTagName('*');
    const tempTags = [];
    for(let i=0, len = tags.length; i< len; i++)
    {
        let tag = tags[i];
        tag.classList.contains(className) && tempTags.push(tag)
    }
    return tempTags;
}
```
## [软技能] 强类型和弱类型语言的区别是什么？

强类型： 变量需要提前定义并指明其类型，变量必须显示的转换数据类型

弱类型：变量可以随用随定，不需要特意指定其类型，变量可以隐式转换其数据类型
