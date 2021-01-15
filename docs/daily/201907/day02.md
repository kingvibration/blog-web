## [html] 说说你对HTML5的img标签属性srcset和sizes的理解？都有哪些应用场景？

srcset：规定了图片的src候选集;

sizes：规定了图片在不同条件下的尺寸取值，根据尺寸取值从srcset中找到对应的图片src；配合srcset属性才能使用；

现在HTML5中对于img标签新增了一个srcset属性。

属性值为以逗号分隔的一个或多个字符串。每个字符串由以下组成：

a. 一个图像的URL。

b. 可选的， 空格后跟以下的其中一个

~ 一个宽度描述符，后面紧跟’w’符号。

~ 一个像素描述符，后面紧跟’x’符号。

当然这个属性可以配合sizes属性结合使用。

如果没有设置srcset属性，或者没值，那么sizes属性也将不起作用。——MDN

应用场景：多用于响应式图片或不同像素密度设备的图片适配；

举个例子：`<img src="1.jpg " srcset="2.jpg 1440w, 3.jpg 800w" />`

当浏览器宽度为1440时显示2.jpg，浏览器宽度为800时显示3.jpg

sizes属性可以设置一些类似媒体查询的规则。

`sizes=’(max-width:300px) 200px, 400px’`
    
这表示，如果满足小于300px的时候，图片宽度为200px，否则宽度为400px。


参考文档：[响应式图片srcset全新释义sizes属性w描述符](https://www.zhangxinxu.com/wordpress/2014/10/responsive-images-srcset-size-w-descriptor/)
[响应式图片的几种解决方案](https://blog.csdn.net/qq_35534823/article/details/69388430)

## [css] 请问display:inline-block在什么时候会显示间隙？

在标签中会回车符，回车符相当于空白符，多个连续的空白符会合并成一个空白符，而产生“空白间隙”。

解决方法
1. 全局font-size设置成0
2. 取消两个div之间的空格

## [js] 请快速答出此题的答案并解释：var x, y = 1; x + y = ?

x // => undefined

y // => 1

x + y // => undefined + 1 => NaN


运算符 + 的implicit type conversion规则：

> 1. 若任何一侧是 string 或 object 则两边转换为 string 进行连接 **[不太正确]**
> 2. 否则均转换为 number 并进行相加
> 3. 注意symbol 相加会 throw TypeError

关于object不是准确的。

举例：
```javascript
const obj = {
  [Symbol.toPrimitive](hint) {
    console.log('hint', hint)
  }
};

'12' + obj; // 此时hint为default
12 + obj; // hint也为default
```

按照ES标准规则，hint为default则会依次调用valueOf和toString

所以不一定是两边转换为string进行连接

eg:
```javascript
const obj = {
  valueOf() {
    return 12;
  },
  toString() {
    return '21';
  }
}

obj + 1; // 13
```
## [软技能] 你会抓包吗？都有用过哪些抓包工具？

Mac版 Charles；用来抓移动设备上请求记录；用重定向来解决前后端分离跨域问题

用过Fiddler，可以用来拦截请求头和响应头，然后对请求头或响应头进行伪造，解决跨域等问题；
