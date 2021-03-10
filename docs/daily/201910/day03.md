## [html] 你知道HTML什么是单闭合标签和双闭合标签吗？为何要分为这两种呢？

* 单标签如&lt;meta />，只需将标签名申明一遍的，按照标准，结尾应该有/
* 双标签如div,标签名需在首位各写一遍
* 区别：单标签与双标签都有属性，但是双标签有内容，也就是innerHTML
* 补充,常见的单标签：
```html
<br />
<hr />
<area />
<base />
<img />
<input />
<link />
<meta />
<basefont />
<param />
<col />
<frame />
<embed />
```

## [css] css怎么更改表单的单选框或下拉框的默认样式？

* 下拉框
  * select可以通过appearance:none去除默认样式，然后进行自定义，但是option标签不能通过CSS自定义，所以最佳方案是自定义标签重写select

* 单选框
  * 隐藏input标签，自定义标签通过checked伪类进行实现

## [js] 用js实现一个复制粘贴的功能
核心代码应该就是
```javascript
obj.select();//通过选中对象再执行复制命令
document.execCommand("Copy")
```

```javascript
;(function () {
    const createInput = html => {
        let inputEl = document.createElement('input');
        inputEl.setAttribute('type', 'input');
        inputEl.value = html;
        return inputEl;
    }
    var key = '￥5uA302Tea83￥';
    var inputEl = createInput(key);
    document.body.appendChild(inputEl)
    inputEl.select();
    document.execCommand('copy')
})();
```
## [软技能] 说下你对预加载的理解？

预加载就是提前加载，对于比较大的网页来说打开是很费劲的一个事情，如果对所需要的资源进行提前加载并放到缓存里面会大幅度提高用户浏览的体验，但是有好的一面肯定就会有坏的一面，这毫无疑问会增大服务器的压力。

* 一个图片加载的场景，首先有一张预览图，这是一个比较小的文件，但是查看大图的时候，如果在用户点击时才开始请求网络进行加载，就会比较耗时，影响用户体验。如果条件允许，比较好的做法是，在用户点击查看大图之前，预先请求这张图片，然后在用户点击的时候，通过服务端的设置，客户端已经有这张图片的缓存，就会非常快的加载到大图。
