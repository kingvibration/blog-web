## [html] js放在html的body和head有什么区别？

  js 放在 head 中，如果不添加 async 或者 defer 时，当浏览器遇到 script 时，会阻塞 DOM 树的构建，进而影响页面的加载。当 js 文件较多时，页面白屏的时间也会变长。

  在这个过程中，如果解析器遇到了一个脚本(script)，它就会停下来，并且执行这个脚本，然后才会继续解析 HTML。如果遇到了一个引用外部资源的脚本(script)，它就必须停下来等待这个脚本资源的下载，而这个行为会导致一个或者多个的网络往返，并且会延迟页面的首次渲染时间。

  把 js 放到 body 里（一般在 /body 的上面）时，由于 DOM 是顺序解析的，因此 js 不会阻塞 DOM 的解析。对于必须要在 DOM 解析前就要加载的 js，我们需要放在 head 中。

  参考文章：

  <a href="https://zhuanlan.zhihu.com/p/26440626" target="_blank">该把 JS 文件放在 HTML 文档的那个位置</a>


## [css] 说说浏览器解析CSS选择器的过程？

  浏览器对于 CSS 选择器的解析过程是从右向左的。

  .class ul li span {
    // css 属性
  }
  如果是这样的一个结构，浏览器会从右向左开始解析。因为一般来说，最右侧的节点范围反而会比较大，越向左限定的条件就越多。也因此 CSS 的选择器设计上不宜嵌套过多，会带来性能上的问题。

  参考文章：
  <a href="https://segmentfault.com/q/1010000000713509">为什么 CSS 选择器解析的时候是从右往左？</a>

## [js] 你对new操作符的理解是什么？手动实现一个new方法


  模拟new操作前，要先知道new操作是发生了什么，就拿new Object()举例:

    创建一个新对象
    把新对象的原型指向构造函数的prototype
    把构造函数里的this指向新对象
    返回这个新对象



## [软技能] 前端工程师这个职位你是怎么样理解的？聊聊它的前景？

  通过各种终端来向用户展示数据，或者给用户提供一些和后台的交互接口。
  
  前景：首先，在我看来，一切和用户交互的终端都可以属于前端。并且随着现在跨端开发框架的兴起，比如Electron框架等，也使得前端的那套开发技术栈以及开发流程可以复制到桌面端来，使得前端的范畴越来越广泛。
  并且，随着AR，VR技术的兴起，手机app中应用了大量的3维场景来提高用户体验，比如手机app上看房，看车，甚至是看一个城市的街景，都已经有了3D的场景，并且用户还能进行简单的操作。而这些都对前端提出了更高的要求。


```javascript
  //手写

  function _new() {
      // this , prototype
      let obj = {};
      //let Constractor = [].slice.call(arguments, 0, 1);
      let [Constractor, ...arg] = Array.from(arguments);

      Constractor.apply(obj, [...arg]);

      obj.__proto__ = Constractor.prototype;


      return obj
  }


  function Dog(name, age, addr) {
      this.name = name;
      this.age = age;
      this.addr = addr;
  }

  Dog.prototype.jiao = function(){
      console.log('wangwang')
  }

  Dog.prototype.say = function(){
      console.log('hello')
  }
  console.log(new Dog('tony', 21, '洛阳').jiao())
  console.log(_new(Dog, 'tony', 21, '洛阳'))
  console.log(_new(Dog, 'tony', 21, '洛阳').jiao())


  //实现


  /*
  * 模拟的new 暂称为newNew （囡..囡 哈哈~）
    使用：newNew(constructor, arg1, arg2, ..) 第0个参数传入构造函数，1~n个参数是构造函数的形参。
    使用上面的构造函数试一下：
  * */
  function newNew(){
      var newObj = {}
      // 1. 创建一个新对象
      var Con = [].shift.call(arguments)
      // 得到构造函数
      newObj.__proto__ = Con.prototype;
      // 2. 把新对象的原型指向构造函数的prototype
      var res = Con.apply(newObj, arguments)
      // 3. 把构造函数里的this指向新对象
      return typeof res === 'object' ? res : newObj;
      // 4. 返回新对象
  }
  var obj = newNew(Dog, 'willian', 18, 'hangzhou')
  console.log(obj.name, obj.age);//'willian', 18
  console.log(obj.say())//Hello willian




  function __new(Fn, ...arg) {
      const obj = Object.create(Fn.prototype);
      const obj1 = Fn.apply(obj, arg);
      return obj1 instanceof Object ? obj1 : obj;
  }
```
