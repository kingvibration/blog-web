## [html] 举例说明如何实现浏览器桌面通知？

websocket加以 Desktop Notification
```javascript
Notification.requestPermission(function (perm) {  
        if (perm == "granted") {  
            var notification = new Notification("这是一个通知撒:", {  
                dir: "auto",  
                lang: "hi",  
                tag: "testTag",  
                icon: "https://static.cnblogs.com/images/adminlogo.gif",  
                body: "通知content"  
            });  
        }  
})
```
## [css] 举例说明你对相邻兄弟选择器的理解

```css
div+p{ //相邻兄弟选择器
background: red;
}
```
符合两个条件就会被选中：
1. 紧邻在另一个元素后面
2. 两者父元素相同

## [js] 当用户刷新网页时，js的请求有哪些地方会有缓存处理呢？

请求大多会缓存到这几个地方：

* Service Worker
* Memory Cache
* Disk Cache
* Push Cache

1、Service Worker

Service Worker 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能。使用 Service Worker 的话，传输协议必须为 HTTPS。因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全。Service Worker 的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的。

* 自由控制缓存文件
* 可持续性缓存

2、Memory Cache

Memory Cache 也就是内存中的缓存，主要包含的是当前中页面中已经抓取到的资源，例如页面上已经下载的样式、脚本、图片等。读取内存中的数据肯定比磁盘快，内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。一旦我们关闭 Tab 页面，内存中的缓存也就被释放了。

* 容量小
* 读取快
* 缓存时间短

3、Disk Cache

Disk Cache 也就是存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 Memory Cache 胜在容量和存储时效性上。
在所有浏览器缓存中，Disk Cache 覆盖面基本是最大的。它会根据 HTTP Header 中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据。

* 读取慢
* 容量大
* 缓存时间长

浏览器会把哪些文件丢进内存中？哪些丢进硬盘中？

* 对于大文件来说，大概率是不存储在内存中的，存在硬盘中。
* 当前系统内存使用率高的话，文件优先存储进硬盘。

4、Push Cache

Push Cache（推送缓存）是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。它只在会话中存在，一旦会话结束就被释放，并且缓存时间也很短暂，在 Chrome 浏览器中只有 5 分钟左右，同时它也并非严格执行 HTTP 头中的缓存指令。Push Cache 在国内能够查到的资料很少，也是因为 HTTP/2 在国内不够普及。

* 只在会话中存在
* 会话结束后就被释放
* 缓存时间短


## [软技能] 你知道什么是PDCA吗？要怎么运用好它呢？
PDCA 循环的含义是将质量管理分为四个阶段，即计划（Plan）、执行（Do）、检查（Check）、处理（Act）。在质量管理活动中，要求把各项工作按照作出计划、计划实施、检查实施效果，然后将成功的纳入标准，不成功的留到下一循环去解决。

美国质量管理专家休哈特博士首先提出的，由戴明采纳、宣传，获得普及，所以又称戴明环。
