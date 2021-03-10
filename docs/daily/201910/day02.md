## [html] 什么是Data URI？

Data URLs，即前缀为 data: 协议的URL，其允许内容创建者向文档中嵌入小文件。
`data:text/html,<script>alert('hi');</script>`
一个会执行 JavaScript alert 的 HTML 文档。

* 概念：把小文件直接嵌入文档的方案
* 格式：data:[][;charset=][;base64],
* 注意：使用base64的Data URI比直接使用外链的图片，性能会大大降低，所以在比较在乎性能的情况下要谨慎使用

## [css] 你了解css3的currentColor吗？举例说明它的作用是什么？

* 概念：当前文字颜色
* 应用场景：background-color | gradient | box-shadow
* 实际应用场景参考[张鑫旭老师的博客](https://www.zhangxinxu.com/wordpress/2014/10/currentcolor-css3-powerful-css-keyword/)

currentColor是 color 属性的值，具体意思是指：currentColor关键字的使用值是 color 属性值的计算值。如果currentColor关键字被应用在 color 属性自身，则相当于是 color: inherit。
它的作用在我看来是指定默认color的值，比如

```css
.active{
  color:#C60;
  border:thin  solid;
}
.active{
  color:#C60;
  border:thin  solid currentColor;
}
```

上述代码中的currentColor代替了#C60

## [js] 说说你对ArrayBuffer的理解！它和Array有什么区别？

* ArrayBuffer: 表示通用的、固定长度的原始二进制数据缓冲区。ArrayBuffer 不能直接操作，而是要通过类型数组对象或 DataView 对象来操作
* Array: 是JavaScript数组，可直接修改

## [软技能] 你有做过直播相关开发吗？知道它的原理吗？

* 直播主流的几种协议：

  * HLS
    * 概念：Apple提出，主要的两块内容是 .m3u8 文件和 .ts 播放文件,可以简单的认为 m3u8 就是包含多个 ts 文件的播放列表
    * 兼容性:HLS 在 PC 端仅支持safari浏览器，类似chrome浏览器使用HTML5 video标签无法播放 m3u8 格式，可直接采用网上一些比较成熟的方案，如：sewise-player、MediaElement、videojs-contrib-hls、jwplayer
    * 特点：短链接、延时高，跨平台、使用于H5直播
  * RTMP
    * 概念：对于 FLV 视频格式做的直播分发流，Adobe的方案，基于Flash
    * 特点：长链接、延时低，场景是即时互动
  * HTTP-FLV
    * 概念：HTTP-FLV 和 RTMP 类似，都是针对于 FLV 视频格式做的直播分发流,不一样的地方在于直接发起长连接，下载对应的 FLV 文件、头部信息简单
    * 特点：市场常用，因为基于Flash，手机端不支持，但是现在 flv.js 可以帮助高版本的浏览器，通过 mediaSource 来进行解析

* 前端实现方案：

  1. 底部视频背景使用video视频标签实现播放
  2. 关注、评论模块利用 WebScoket 来实时发送和接收新的消息通过DOM 和 CSS3 实现
  3. 点赞利用 CSS3 动画

* 方案对比：

  * PC端
    * 优先使用 HTTP-FLV，因为它延迟小，性能也不差1080P都很流畅。
    * 不支持 flv.js 就使用 Flash播放器播 RTMP 流。Flash兼容性很好，但是性能差默认被很多浏览器禁用。
    * 不想用Flash兼容也可以用HLS，但是PC端只有Safari支持HLS
  * 移动端
    * 优先使用 HTTP-FLV，因为它延迟小，支持HTTP-FLV的设备性能运行 flv.js 足够了。
    * 不支持 flv.js 就使用 HLS，但是 HLS延迟非常大。
    * HLS 也不支持就没法直播了，因为移动端都不支持Flash。

补充一下各类直播方案的优缺点

1. hls
  * 优点： 完美兼容iOS，有硬解，对性能要求小，适合对ios安卓要求适配高的需求
  * 缺点：延迟高，延迟不稳定，通常在3-10多秒徘徊，不适合对延迟要求高的项目

2. rtmp 兼容性差，基本摒弃

3. http-flv, flvjs
  * 优点： 延迟低，有flvjs成熟的方案，有硬解
  * 缺点： 最大的缺点，依赖mse，不可兼容ios。依赖video标签，在个别安卓浏览器会被强制全屏

4. 获取h264流利用broadway解码成yuv 用canvas渲染
  * 优点: 可以适配ios端和安卓端，canvas兼容性表现好，延迟低
  * 缺点： 只能用h264码流
