## [html] HTML5如何调用摄像头？

window.navigator.getUserMedia() (已废弃，不建议使用)

然后接收三个参数，第一个是视频或者音频以及分辨率{video:true}

第二个是成功回调，第三个是失败回调。


还有一种调用

window.navigator.mediaDevices.getUserMedia()

也是三个参数，参数格式和上文一样，区别在于这个api是基于promise实现的。

```javascript
const constraints = {
    video: true,
    audio: false
};
let promise = navigator.mediaDevices.getUserMedia(constraints);
promise.then(stream => {
    let v = document.getElementById('v');
    // 旧的浏览器可能没有srcObject
    if ("srcObject" in v) {
        v.srcObject = stream;
    } else {
        // 防止再新的浏览器里使用它，应为它已经不再支持了
        v.src = window.URL.createObjectURL(stream);
    }
    v.onloadedmetadata = function (e) {
        v.play();
    };
}).catch(err => {
    console.error(err.name + ": " + err.message);
})
```

## [css] 举例说明你知道的css技巧有哪些？

* 事件穿透: 经常用在Canvas和SVG上
`point-events: none;`
* 伪元素的传参
```html
<style>
    .demo {
       position: relative;
    }
    .demo::after {
        content: attr(text);
        position: absolute;
    }
</style>
<div class="demo" text="Github" color="#fff"></div>
```
* margin负值的使用(一般用在父元素上，抵消子元素左右两边的边距)

* font-size:0用于消除inline-block元素产生的4px间距

## [js] 说说你对执行上下文的理解


## [软技能] 你知道时间四象限吗？说说你对它的理解

y轴重要与否
x轴紧急与否

当你有4件以上的事情的时候就可以列出来 根据所在位置去完成
具体给我的感觉就是习惯后,说白了就是分清楚事情的主次.更高效的完成工作
