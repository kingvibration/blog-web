## [html] 说说form-data、x-www-form-urlencoded、raw、binary的区别是什么？

同

发送请求的方式

异

1. multipart/form-data 其请求内容格式为Content-Type: multipart/form-data,用来指定请求内容的数据编码格式，一般用来文件上传。
2. application/x-www-form-urlencoded 是post的默认格式，使用js中URLencode转码方法。
3. raw 可上传任意格式的文本，可以上传text、json、xml、html等各种文本类型。
4. binary 等同于Content-Type:application/octet-stream，只可上传二进制数据。

## [css] 举例说明微信端兼容问题有哪些？

1. 微信自带的下拉出网站信息，苹果自带的滑动回弹，与 fixed 一起，非常非常酸爽
2. 微信视频最好使用全屏模式，否则会有结尾广告、不能被元素覆盖
3. 横屏的项目，微信支付时会竖屏，大部分苹果机支付后无法再横屏了

在ios微信端，当在输入框唤起键盘后，页面会抬升，输入完成键盘退出后，页面并没有自动恢复到原来的样子, 越接近页面底部越明显。

解决方法是使用document.documentElement.scrollIntoView(false),让页面自动回滚。

## [js] 能否正确获取本地上传的文件路径？如果可以怎么做？如果不可以解释下为什么？

无法获取,客户端js脚本没有文件访问权限,只能由浏览器代为操作,可以通过BOM-api获取由浏览器转义的文件路径
```html
<input type="file" id="file">
```
```javascript
file.addEventListener('change', () => {
  var reader = new FileReader();
  reader.readAsDataURL(file.files[0]);
  reader.onload = function (e) {
    console.log(e.target.result);//也许是base64数据  也许是虚拟路径  取决于浏览器的实现
  }
})
```
  
## [软技能] 如果一个项目要你重构成前后端分离，你的方法论是什么？

这个视情况而定,一般有两种情况:

如果原项目只是一个普通的老项目
无需考虑SEO问题,如果项目较复杂,可以直接上SPA框架,优先考虑vue和react

数据库和取数逻辑保持不变,提供api

如果原项目是为了SEO,渲染速度等因素而使用服务端渲染
需要保证原有的需求被满足

将渲染逻辑从后台剥离,后台只提供api

如果项目较简单,加载和渲染可以完全放在客户端,jquery大法

如果项目比较复杂,考虑SPA框架的服务端预加载方案,首屏右后台加载,后续由前台加载和渲染,兼顾性能和可维护性



