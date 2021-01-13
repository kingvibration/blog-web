
## [html] 浏览器内多个标签页之间的通信方式有哪些？

  完全答案
  
    WebSocket （可跨域）
    postMessage（可跨域）
    Worker之SharedWorker
    Server-Sent Events
    localStorage
    BroadcastChannel
    Cookies

## [css] 简述下你理解的优雅降级和渐进增强

  渐进增强和优雅降级这两个概念是在 CSS3 出现之后火起来的。由于低级浏览器不支持 CSS3，但是 CSS3 特效太优秀不忍放弃，所以在高级浏览器中使用 CSS3，而在低级浏览器只保证最基本的功能。

    优雅降级
    先不考虑兼容，优先最新版本浏览器效果，之后再逐渐兼容低版本浏览器。

    渐进增强
    考虑兼容，以较低（多）浏览器效果为主，之后再逐渐增加对新版本浏览器的支持，以内容为主。也是多数公司所采用的方法。


## [js] 写一个判断数据类型的方法

  Object.prototype.toString.call(obj)


```javascript

  //手写

  function getType(data) {
      if (typeof data  === 'object'){

          if(data instanceof Array){
              return 'array'
          }else if(data === null){
              return 'null'
          }else{
              return 'object'
          }

      }else{
          return typeof data;
      }
  }

  console.log(getType(null))
  console.log(getType(1))
  console.log(getType('1'))
  console.log(getType(true))
  console.log(getType([1,2]))
  console.log(getType({a: 1}))
  console.log(getType(undefined))


  Object.prototype.toString.call([1,2]).replace(/^.{8}(.+)]$/,(m,$1)=> {
        console.log(m, $1)
  })


  //实现

  //. 匹配除换行符（\n、\r）之外的任何单个字符，相等于 [^\n\r]。

  // $1，$2表达的是小括号里面的内容
  function myType(v){
      return Object.prototype.toString.call(v).replace(/^.{8}(.+)]$/,(m,$1)=> $1.toLowerCase());
  }

```
