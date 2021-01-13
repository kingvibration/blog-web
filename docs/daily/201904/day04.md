
## [html] HTML5的文件离线存储怎么使用，工作原理是什么？

原理：
  HTML5的离线存储是基于一个新建的.appcache文件的，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。

怎么用：
  首先，在html页面头部加入一个manifest的属性:

  !DOCTYPE HTML
  html manifest = "cache.manifest"
  ...
  /html
然后书写cache.manifest文件：

  CACHE MANIFEST
  #v0.11
  CACHE:
  js/app.js
  css/style.css
  NETWORK:
  resourse/logo.png
  FALLBACK:
  / /offline.html
  manifest （即 .appcache 文件）文件是简单的文本文件，可分为三个部分：
  CACHE ：
  在此标题下列出的文件将在首次下载后进行缓存。（由于包含manifest文件的页面将被自动离线存储，所以不需要把页面自身也列出来）
  NETWORK ：
  在此标题下列出的文件需要与服务器的连接，且不会被缓存，离线时无法使用。 
  可以使用 “*” 来指示所有其他资源/文件都需要因特网连接：
  NETWORK: *
  如果在CACHE和NETWORK中有一个相同的资源，那么这个资源还是会被离线存储，也就是说CACHE的优先级更高。
  FALLBACK：
  在此标题下列出的文件规定当页面无法访问时的回退页面。比如上面这个文件表示的就是如果访问根目录下任何一个资源失败了，那么就去访问offline.html。

  浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？
  在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。
  离线的情况下，浏览器就直接使用离线存储的资源。

## [css] CSS选择器有哪些？哪些属性可以继承？

  选择器

    通配符 *
    id    #nav
    class .nav
    标签   div
    后代选择器  >
    子选择器  ???
    兄弟选择器  + / ~
    属性选择器 [name=""]
    伪类选择器 ::after
    伪元素选择器 ???

  可以继承的属性
  
    font-size
    font-weight
    font-style
    font-family
    color

## [js] 写一个方法把下划线命名转成大驼峰命名

```javascript
//手写
let _toDaTuoFeng = function (str) {
   let arr = str.split("_");
   let newArr = arr.map(item => {
       return `${item.slice(0, 1).toUpperCase()}${item.slice(1, item.length)}`
   })
   return newArr.join("")
}


console.log(_toDaTuoFeng("wang_dan_wan_yi"));


// 实现
function toCamelCase(str) {
   if (typeof str !== 'string') {
       return str;
   }
   return str
       .split('_')
       .map(item => item.charAt(0).toUpperCase() + item.substr(1, item.length))
       .join('');
}

```
