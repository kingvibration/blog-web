## [html] iframe的使用场景有哪些？

1：典型系统结构，左侧是功能树，右侧就是一些常见的table或者表单之类的。为了每一个功能，单独分离出来，采用iframe。 

2：ajax上传文件。 

3：加载别的网站内容，例如google广告，网站流量分析。

4： 在上传图片时，不用flash实现无刷新。

5： 跨域访问的时候可以用到iframe，使用iframe请求不同域名下的资源。


## [css] 怎么让body高度自适应屏幕？为什么？

html,body{height:100%}

同楼上，html,body同时设置成100%才有效，html百分比是相对于浏览器而言的，其他元素相对于父元素。


## [js] js延迟加载的方式有哪些？

* defer 属性
* async 属性
* 动态创建DOM方式
* 使用jQuery的getScript方法
* 使用setTimeout延迟方法
* 让JS最后加载

## [软技能] 你平时开发是用mac还是windows系统？至少举三个例子说明两者的区别？

瀏覽器

Windows: IE, Edge
macOS: Safari
如果你的專案特別要支援這些瀏覽器，請留意這點。

Mobile 開發

Windows: Android
macOS: Android, iOS
關於這點，就算是用React Native之類框架來做，最後要Build的時候，
iOS App還是只能交由macOS的Xcode來Build。

Terminal 使用

macOS熟悉Unix的指令人可以很快上手
Windows 就算裝了Cygwin或Win 10 Ubuntu使用體驗仍然沒有像macOS那麼好，
不過微軟最近也在打造新的Terminal，希望這問題可以改善。
https://github.com/microsoft/terminal

內建軟體

macOS 有很多免費的內建軟體
文書編輯: Pages, Numbers, Keynote
影音剪輯: iMovie, GarageBand
而且如果你有iPhone或iPad的話，可以使用iCloud同步
Windows以上的軟體多半要花錢買，比如說Office

Sketch

如果有在使用Sketch做設計的話，
Sketch只支援macOS。
https://www.sketch.com/

總結
其實不管是Windows、Linux或是macOS都有各自的優點或是缺點，
所以身為開發者的我們最重要是找到最適合自己開發情境的OS（或最上手的），
暫時只有想到這些差異，歡迎大家補充。 😃
