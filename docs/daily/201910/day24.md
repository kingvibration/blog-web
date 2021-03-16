## [html] 怎么使用HTML5实现录音的功能？

navigatior.getUserMedia()

这个接口已经被废弃了，请使用 navigator.mediaDevices.getUserMedia()

## [css] 举例说明css有哪些简写的属性和属性值？

几个常用的：
```
border: solid 1px red;

border-style: solid;
border-width: 1px;
border-color: red;
```
```
animation: fadeIn .5s forward ease-in .2s infinite;

animation-name: fadeIn;
animation-duration: 0.5s;
animation-fill-mode: forward;
animation-timing-function: ease-in;
animation-delay: 0.2s;
animation-iteration-count: infinite;
```
```
background: url(images/foo.png) center top/cover no-repeat;

background-image: url(images/foo.png);
background-position-x: center;
background-position-y: top;
background-size: cover;
background-repeat: no-repeat;
```
```
flex: 1;

flex: 1 1 0;

flex-grow: 1;
flex-shrink: 1;
flex-basis: 0;
```

## [js] 举例说明atob和btoa的用法

是window的两个对象，btoa：binary to ascii；(base64的编码) atob：ascii to binary;（base64的解码） 无法用于Unicode字符
示例
```javascript
// Define the string
var string = 'Hello World!';

// Encode the String
var encodedString = btoa(string);
console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

// Decode the String
var decodedString = atob(encodedString);
console.log(decodedString); // Outputs: "Hello World!"
```
// 对于超过 Latin1 范畴的字符，可以使用 encodeURI/decodeURI 进行转换：
```javascript
btoa(encodeURI('字')) // "JUU1JUFEJTk3"
decodeURI(atob('JUU1JUFEJTk3')) // "字"
```
## [软技能] 你有用记事本来写过代码吗？说说你的感受！

缩进
基础
