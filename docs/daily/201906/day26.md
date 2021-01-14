## [html] 怎么在IE8及以下实现HTML5的兼容？

通过创建元素createElement来支持!
我记得有个专门的这种js插件

html5shiv.js


## [css] 你对响应式设计的理解是什么？知道它基本的原理是吗？要想兼容低版本的IE怎么做呢？

理解：在不同系统，不同设备，不同尺寸的界面，有良好的用户体验，舒适的阅读体验，交互体验。

原理：根据不同设备尺寸，浏览器自动调整或通过样式调整，来保证用户体验。

兼容：Respond.js

## [js] 说说你对深浅拷贝的理解？并实现一个对数组和对象深拷贝的方法

为什么要进行拷贝
```javascript
var obj1={
    value: 'a'
}
var obj2 = obj1;
obj2.value='b';
console.log(obj1);//{ value: 'b' }
```
因为对象是引用类型，所以赋值时的操作仅是赋予相同的地址，当对其中一个对象进行操作时，就会影响其他的对象。解决这个问题就需要拷贝了。

浅拷贝：
使用原生的Object.assign() 方法就可以实现浅拷贝
```javascript
var obj1={
    value: 'a'
}
var obj2 = Object.assign({},obj1);
obj2.value='b';
console.log(obj1);//{ value: 'a' }
```
但是如果拷贝的源对象当中包含对象时，OBject.assign()方法只会拷贝对象的引用地址
```javascript
var obj1={
    value: 'a',
    obj3:{
        value2: 'c'
    }
}
var obj2 = Object.assign({},obj1);
obj2.obj3.value2='b';
console.log(obj1);//{ value: 'a', obj3:{ value2: 'b' } }
```
深拷贝
如果要拷贝的对象中包含对象，就需要深拷贝了，一般使用原生的方法JSON.parse(JSON.stringify(obj))
```javascript
j1={
    value: 'a',
    obj3:{
        value2: 'c'
    },
    arr:[1,2,3]
}
var obj2 = JSON.parse(JSON.stringify(obj1));
obj2.obj3.value2='b';
obj2.arr[0]= "a";
console.log(obj2);//{ value: 'a', obj3:{ value2: 'b' }, arr:['a',2,3] }
console.log(obj1);//{ value: 'a', obj3:{ value2: 'c' }, arr:[1,2,3] } 没有发生改变
```
实现一个对数组和对象的深拷贝的方法
```javascript
var obj={
    name: 'znl',
    age: 18,
    friend:{
        name: 'borys',
        age: 20
    },
    arr:[1,2,[3,4]]
}

function copy(obj){
    var type=Object.prototype.toString.call(obj);
    if(!(type == '[object Array]' || type == '[object Object]')){
        return 'Type Error!';
    }
    return JSON.parse(JSON.stringify(obj));
}

var obj2= copy(obj);
console.log(obj.friend === obj2.friend)//false
console.log(obj.arr === obj2.arr)//false
```
```javascript
// WeakMap + new obj.constructor() 
// 考虑了 Data,RegExp,循环引用,没处理Symbol,Set,Map等
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj; // 值类型
  if (obj instanceof RegExp) return new RegExp(obj); // RegExp类型
  if (obj instanceof Date) return new Date(obj); // Dete类型
  //! 以下是针对Object类型的处理逻辑
  if (hash.has(obj)) return hash.get(obj); // 防止循环引用
  const temp = new obj.constructor(); // 基于constructor创建新类
  hash.set(obj, temp); // 在WeakMap中缓存
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) // 递归处理自身属性
      temp[key] = deepClone(obj[key], hash);
  }
  return temp;
}
```
参考：

[MDN Object.assign](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

[深拷贝](https://yuchengkai.cn/docs/frontend/#%E6%B5%85%E6%8B%B7%E8%B4%9D)

## [软技能] 做了这么多年开发，说说你最大的感悟是什么？

那时候年轻，开发的时候，感觉这块代码可能会出问题，觉得无所谓，不会有问题的，可后面都是这些觉得会出现问题的，最终都出现问题了！

慢慢地，有一定经验了，知道了，哦，原来这叫 技术债务，所以在第34天的时候，我以自身的经验问了个问题（你了解什么是技术债务吗？）： [#125](https://github.com/haizlin/fe-interview/issues/125)

再后来，变得成熟了，阅读了很多知识，然后我又发现，哦，原来我这曾经的思虑早有人总结出来了，这就是著名的：墨菲定律。它是这么定义的：

* 凡事只要有可能出错，那就一定会出错

它的主要内容有4个方面：

* 任何事情都没有表面看起来那么简单
* 所有的事情都会比你预计的时间长
* 会出错的事总会出错
* 如果你担心某种情况发生，那么它就更会发生
> 所以在工作上：
因为知道了这个道理，所以我就严格要求自己，细心，多思考边界，倒推着我去反思很多问题和去学习了很多知识，比如说程序加监控，代码加单元测试等。如果时间来得及就要把可能会发生的问题解决掉，如果时间来不及那就一定要记录下来，所以我的工作日记里记录着大量的问题，也给这些问题加了个预估解决的时间，一个个去解决，后来发现这代码的质量提高了，返工率大大降低，所以我也要求团队成员，觉得有问题的地方一定要记下来，然后找时间去解决它。

> 所以在生活上：
一些不该说的话就不一能说，比如说有些人，天天把“分手、离婚”4字当口头禅，慢慢地也有些是实现了的他们的愿望。刚认识时我就对我老婆说过，什么话都可以说，唯独这4个字“分手、离婚”坚决不能说，到现在，11年过去了，无论是小吵还是拌嘴，从来都不会说这些话，也造就了我们的感情……因为我们懂得珍惜！

以上就是我最大的感悟！！！
