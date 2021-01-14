## [html] video和audio分别支持哪些格式？
> * video: MP4、WebM、Ogg
> * audio: MP3、Wav、Ogg

补充一下，上面说的并不完全正确。MP4只是容器格式，而不是真正的编码格式。MPEG-4、H264、H265这些编码都可以放入 *.MP4，但是就以H265为例，因为较新，部分较旧的浏览器就不支持。
所以并不是说只要是MP4格式就一定能播放的。

## [css] 怎么改变选中文本的文字颜色和背景色？
```css
::selection {
background-color: #222;
color: white;
}
```
## [js] 写一个字符串重复的repeat函数
```javascript
var str='abcd';
function repeat(str,n){
    var type = typeof(str) === 'string';
    var result='';
    if(!type){
        return 'Type Error';
    }
    for(var i=0;i<n;i++){
        result += str;
    }
    return result;
}
repeat(str,2);//'abcdabcd'
```
```javascript
var str='abcd';
function repeat(str,n){
    if((typeof str) === 'string'){
       return (new Array(n+1)).join(str)
    }
    return 'Type Error'
 }
 repeat(str,3)//abcdabcdabcd

```
```javascript
const repeat = (str, n)=>str.repeat(n)
```
## [软技能] 你知道二维码的原理是什么吗？要把android和ios的下载地址合成一个二维码怎么做呢？
二进制，白块表示“0”，黑块就是“1”。

[参考](https://v.qq.com/iframe/preview.html?amp;auto=0&amp;vid=g03058gs38e)
