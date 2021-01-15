## [html] HTML5如何识别语音读出的内容和朗读指定的内容？

Web Speech API
目前还是实验性的功能 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Speech_API)

Web Speech API 使您能够将语音数据合并到 Web 应用程序中。 Web Speech API 有两个部分：SpeechSynthesis 语音合成 （文本到语音 TTS）和 SpeechRecognition  语音识别（异步语音识别）。

Speech Synthesis API

## [css] 用CSS画出一个任意角度的扇形，可以写多种实现的方法

想到一个更加简单的方法，直接用 clip-path 切多边形，然后 border-radius 一裁剪就是扇形了！

[四个半圆叠加，过半调整z-index](https://codepen.io/liuxiaole-the-sasster/full/RzQBKV)

## [js] 说说instanceof和typeof的实现原理并自己模拟实现一个instanceof

instanceof : 利用原型链判断“父级”的原型（prototype）对象是否在“实例”的原型链上；

返回 boolean

通过调用 class 的 [Symbol.hasInstance] static method 来判断一个 object 是否是一个 class 的 instance

缺省行为：判断 object 的 prototype chain 中是否有任意一个 prototype 与 class 的 prototype 相等

polyfill:

```typescript
interface IConstructor<T> {
  new(...args: any[]): T
}

function isObject(o: any) {
  return (typeof o === 'object' || typeof o === 'function') && o !== null
}

function instanceOf<T>(obj: any, cls: IConstructor<T>): obj is T {
  if (isObject(cls)) {
    if (typeof cls[Symbol.hasInstance] === 'function')
      return cls[Symbol.hasInstance](obj)
    else if (typeof cls === 'function') {
      if (isObject(cls.prototype))
        return cls.prototype.isPrototypeOf(obj)
      else return false
    } else throw new TypeError('cls is not callable')
  } else throw new TypeError('cls is not an object')
}
```
```javascript
function new_instance_of(leftVaule, rightVaule) { 
    let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值， 构造函数的原型
    leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
    while (true) {
    	if (leftVaule === null) {
            return false;	
        }
        if (leftVaule === rightProto) {  // 一定要严格比较
            return true;	
        } 
        leftVaule = leftVaule.__proto__  // 沿着原型链重新赋值
    }
}
```
typeof ：直接根据变量值得内存标识符进行判断；

返回 'string', 'number', 'undefined', 'boolean', 'object', 'function', 'symbol'

获取数据底层的类型标签。

## [软技能] 你对web服务器软件有了解吗？都使用过哪些？各有哪些优缺点呢？

最主流的三个Web服务器是 Apache、 Nginx 、IIS 吧，
很显然都没用过，最多玩玩 phpstudy 和 xampp 这类傻瓜式可视化的软件。

所以暂时面对的需求，除了配端口指向不同文件夹外暂时还没啥别的尝试。

那么，直接在服务器上跑 npm 的 anywhere 或 http-server 好像也阔以。
如果没有服务器，那用 now-cli 直接随机放在云端，
或结合 git 用 netlify.com 也阔以直接部署静态网站。

当然，这么玩就只是 web 容器了，不算是 web 服务器，就像 nginx 还能配置好多东西。
