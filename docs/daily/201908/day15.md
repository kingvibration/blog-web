## [html] 请描述下application cache的更新过程？

application cache需要一个manifest attribuate来链接cache manifest文件。这个功能可以离线储存，降低page loading时间。这个cache.manifest文件主要包含三个部分：
1. cache需要离线储存的内容 
2. network只有online才能看见的内容 
3. fallback 知道基本概念以后，更新过程主要分为5步：

    1. 当浏览器第一次遇到含有manifest attribuate网页，浏览器会根据cache.manifest下载需要储存的内容生成第一版application cache
    2. 之后的浏览加载cache里有的话，浏览器会从application cache里拿，而不是从server里拿。同时浏览器还要去跟window.applicationCache检查自己的文件是否为最新的。
    3. 如果是最新的，浏览器就会给application cache发送noupdate，更新完毕。
    4. 如果不是，会把新版清单里的所有文件通过 applicationCache.add()放入创建一个临时的cache
    5. 检索完毕以后会自动放到application cache
    
现已不推荐使用application cache。知识点比较冷门。
[详细权威介绍](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache)

[中文大神讲解](https://segmentfault.com/a/1190000000732617)

想知道其他离线储存，去第四天有大神们解答。

## [css] 请举例说明伪元素 (pseudo-elements) 有哪些用途？

1. 作为实际DOM元素使用
2. 作为一些视觉装饰性的元素使用

## [js] 请说说escape、encodeURI、decodeURI、encodeURIComponent和decodeURIComponent的区别？

* encodeURI()：将 URI 中的每个字符编码为 1-4 个格式为 %xx 的转义序列（xx 为十六进制数），但不包括 ASCII 数字、字母、URL 分隔符（/、?、,、&、...）、以及其他部分 ASCII 字符。具体见 MDN。
  
    * Example: encodeURI('http://example.com/端点?键=值') => 'http://example.com/%E7%AB%AF%E7%82%B9?%E9%94%AE=%E5%80%BC'

* decodeURI()：将已经编码的 URI 中的转义序列解码为它们表示的字符，但除了 encodeURI() 不会编码的字符。
* encodeURIComponent()：用于编码 URI 中的组成部分。它除了转义 encodeURI() 指定的字符，还会转义 URL 分隔符（/、?、,、&、...）
    * Example: encodeURIComponent('测试/测试?测试=测试') => '%E6%B5%8B%E8%AF%95%2F%E6%B5%8B%E8%AF%95%3F%E6%B5%8B%E8%AF%95%3D%E6%B5%8B%E8%AF%95'
* decodeURIComponent()：将已经编码的 URI 组成部分中的转义序列解码为它们表示的字符，但除了 encodeURIComponent() 不会编码的字符。

另外， escape() 将会把字符串中除了字母、数字以及一部分符号以外的所有转义为 %XX 格式的转义序列，可以通过 unescape() 转回。它们是已经被弃用的方法，不建议使用。

对于之前的错误题目：
urlencode 大概指的是 MIME application/x-www-form-urlencoded，它将键值对信息序列化为 key1=value1&key2=value2&... 的形式，并且可以连接在 url 后面。

## [软技能] 用哪种格式可以存储包含Alpha通道的图像？Alpha通道是指什么？

PSD、TIF、TAG、PNG；

Alpha通道通俗来讲就是指图片的透明度信息。
