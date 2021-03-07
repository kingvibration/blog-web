## [html] 你有使用过HTML5的output吗？说说它的作用是什么？

定义表单输出
它有以下属性
for: <element_id> 定义输出域相关的一个或多个元素
form: <form_id> 定义输入字段所属的一个或多个表单
name: 定义对象的唯一名称。（表单提交时使用）
Demo
```html
<form id="form" oninput="x.value=parseInt(a.value)+parseInt(b.value)">
    0<input type="range" id="a" value="50">100
    +<input type="number" id="b" value="50">
</form>
=<output form="form" name="x" for="a b"></output>
```


## [css] 移动端的布局用过媒体查询吗？写一个试试

@media(最大或者最小多少) {
满足条件的
}


## [js] 写个给图片加水印的方法

都用Canvas的方案解决

情况一：水印是图片（两张图片canvas.drawImage两次重叠即可）
```html
<input type="file" id="uploadFile" class="clip" accept="image/*">
<label class="ui-button ui-button-primary" for="uploadFile">选择图片</label>
<img id="imgCover" src="./watermark.png" class="clip">
<p id="imgUploadX"></p>
var eleUploadFile = document.getElementById('uploadFile');
var eleImgCover = document.getElementById('imgCover');
var eleImgUploadX = document.getElementById('imgUploadX');

if (history.pushState) {
    eleUploadFile.addEventListener('change', function (event) {
        var reader = new FileReader();
        var file = event.target.files[0] || event.dataTransfer.files[0];

        reader.onload = function (e) {
            var base64 = e.target.result;
            if (base64.length > 1024 * 500) {
                alert('图片尺寸请小于500K');
                return;
            } else {
                // 使用canvas合成图片，并base64化
                imgTogether(base64, function (url) {
                    // 尺寸
                    var size = 180 / (window.devicePixelRatio || 1);
                    // 预览
                    eleImgUploadX.innerHTML = '<img src="' + url + '" width="' + size + '" height="' + size + '">';
                });
            }
        };

        reader.readAsDataURL(file);
    });

    // canvas图片合成
    var imgTogether = function (url, callback) {
        var canvas = document.createElement('canvas');
        var size = 180;
        canvas.width = size;
        canvas.height = size;

        var context = canvas.getContext('2d');

        // 这是上传图像
        var imgUpload = new Image();
        imgUpload.onload = function () {
            // 绘制
            context.drawImage(imgUpload, 0, 0, size, size, 0, 0, size, size);
            // 再次绘制
            context.drawImage(eleImgCover, 0, 0, size, size, 0, 0, size, size);
            // 回调
            callback(canvas.toDataURL('image/png'));
        };
        imgUpload.src = url;
    };
    
} else if (eleImgUploadX) {
    eleImgUploadX.className = 'remind';
    eleImgUploadX.innerHTML = '本演示IE10+下才有效果';
}
```
情况二：水印是纯文字
```html
#wrap {
    display: inline-block;
}
<div id="wrap">
    <img src="http://placekitten.com/600/600" id="xxx" />
</div>
<script src="js/app.js"></script>
(function () {
    // canvas 实现 watermark
    function __canvasWM({
        // 使用 ES6 的函数默认值方式设置参数的默认取值
        // 具体参见 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters
        container = document.body,
        image,
        width = '200px',
        height = '150px',
        textAlign = 'center',
        textBaseline = 'middle',
        font = "20px microsoft yahei",
        fillStyle = 'rgba(184, 184, 184, 0.8)',
        content = '请勿外传',
        rotate = '30',
        zIndex = 1000
    } = {}) {
        var args = arguments[0];
        var canvas = document.createElement('canvas');

        canvas.setAttribute('width', image.width);
        canvas.setAttribute('height', image.height);
        var ctx = canvas.getContext("2d");

        ctx.textAlign = textAlign;
        ctx.textBaseline = textBaseline;
        ctx.font = font;
        ctx.fillStyle = fillStyle;
        ctx.rotate(Math.PI / 180 * rotate);
        ctx.fillText(content, parseFloat(image.width) / 2, parseFloat(image.height) / 2);

        var base64Url = canvas.toDataURL();
        const watermarkDiv = document.createElement("div");
        watermarkDiv.setAttribute('style', `
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index:${zIndex};
        pointer-events:none;
        background-repeat:repeat;
        background-image:url('${base64Url}')`);
        container.style.position = 'relative';
        container.insertBefore(watermarkDiv, container.firstChild);
    }

    window.__canvasWM = __canvasWM;
})();

let imgEl = document.querySelector('#xxx');

imgEl.onload = function() {
    __canvasWM({
        container: document.querySelector('#wrap'),
        image: imgEl,
        content: 'fuck'
    })
}
```

## [软技能] 你知道什么是BLOB URL吗？为什么要使用它？

blob是一种二进制文件格式，不可变，最原始数据的类文件对象
好处就是作为多种文件类型格式的中间态进行传输和转换
我的理解是，二进制文件方便用流分段处理


* Blob URL是一种伪协议，允许Blob对象用作图像，下载二进制数据链接等的URL源
* Blob URL只能由浏览器在内部生成
* Blob是纯粹的二进制字节数组，它不像Data-URI那样具有任何重要的开销，这使得它们处理速度越来越快
