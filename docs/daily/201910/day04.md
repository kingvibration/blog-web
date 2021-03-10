## [html] 怎样给radio分组呢？

给input[type=radio]设置相同的name值，即可实现radio的分组
```html
<div id="wrap">
    <label for="f">
        <input id="f" name="gender" type="radio" value="female">
        <span>女性</span>
    </label>
    |
    <label for="m">
        <input id="m" name="gender" type="radio" value="male">
        <span>男性</span>
    </label>
</div>
```

## [css] 请说说你对vh、vw的理解以及它们的运用场景是什么？

* vw: 100vw为视窗的宽度，即1vw是视窗宽度的1%
* vh: 100vh为视窗的高度，即1vh是视窗高度的1%
* 运用场景
  * 图片查看大图：img { max-height: 90vh; }
  * 代替rem实现移动端布局

## [js] 写一个根据xpath获取元素的方法
```javascript
function _x(STR_XPATH) {
    var xresult = document.evaluate(STR_XPATH, document, null, XPathResult.ANY_TYPE, null);
    var xnodes = [];
    var xres;
    while (xres = xresult.iterateNext()) {
        xnodes.push(xres);
    }
    return xnodes;
}
```

## [软技能] 浏览器本地存储和服务器端存储有区别呢？

* 浏览器本地存储

  * 浏览器端可以保存一些数据，需要的时候直接从本地获取
  * cookie：每次Http请求都会携带，数据量小
  * localStorage：永久本地存储，数据量大
  * sessionStorage：会话(标签页)级别，数据量大
  * UserData： 只有IE可用，永久存储

* 服务端储存

  * 服务器端也可以保存所有用户的数据，但需要的时候浏览器要向服务器请求数据
  * 服务器端可以保存用户的持久性数据，如数据库和云存储将用户大量数据保存在服务器端
  * 服务器端也可以保存用户的临时会话数据。服务器端的session机制，会话数据仅在一段时间内有效，这个时间就是server端设置session有效日期。
