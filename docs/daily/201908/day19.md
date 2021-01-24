## [html] 举例说明table怎么合并行和列的？

跨行合并：rowspan 跨列合并：colspan

合并单元格的思想：

将多个内容合并的时候，就会有多余的东西，把它删除。 例如 把 3个 td 合并成一个， 那就多余了2个，需要删除。

公式： 删除的个数 = 合并的个数 - 1

## [css] 使用纯CSS代码实现动画的暂停与播放

可以使用animation-play-state属性；

* paused：暂停动画的运行；
* running：恢复动画的播放；如果是恢复一个状态为已暂停的动画，则是从动画暂停的地方开始进行播放。

## [js] 你有用过webRTC吗？它有什么运用场景？

WebRTC代表“Web实时通信”。这基本上允许在浏览器中进行语音、视频聊天和P2P共享（实时通信）

[实际应用的要求来源](https://www.zhihu.com/question/25497090/answer/43395462)

用WebRTC来做视频直播

一个实现了WebRTC相关协议的客户端。比如Chrome浏览器

架设一个类似MCU系统的服务器

第一步，直播的客户端，比如Chrome浏览器，通过WebRTC相关的媒体API获取图像及声音信源，再用WebRTC中的通信API将图像和声音数据发送到MCU服务器。

第二步，MCU服务器根据需求对图像和声音数据进行必要的处理，比如压缩、混音等。

第三步，需要看直播的用户，通过他们的Chrome浏览器，链接上MCU服务器，并收取服务器转发来的图像和声音流。

[入门](https://zhuanlan.zhihu.com/p/59520779)

## [软技能] 说说你对Web App 、Hybrid App和Native App这三者的理解？

[来源](https://zhuanlan.zhihu.com/p/54624442)

Native App：原生应用，在android端通常使用Java或Kotlin开发，ios端使用OC或者Swift开发

Hybrid App：混合应用，结合Web与Native技术开发

Web App：web应用，网页三剑客html+css+js

Native App开发依旧是移动应用的主导，但如今的Native App或多或少会嵌入一些web页面，诸如淘宝、京东等APP。Hybrid App受到越来越多开发者的追捧与其开发周期短，开发难度小，跨平台离不开，当然APP的效果也成为大家诟病的话题，如首屏打开缓慢，动画效果不够流畅等。
