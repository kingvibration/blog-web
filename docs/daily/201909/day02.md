## [html] 如何让textarea标签中的内容原格式输出？

```html
<textarea name="demo" id="" cols="30" rows="10">
   <code>
     <span>
       <i></i>
     </span>
     <div></div>
   </code>
 </textarea>
```
white-space: pre;可以考虑

## [css] 说下background-color:transparent和opacity:0的区别是什么？

background-color:transparents是将背景设置为透明，而opacity:0但是将整个块都做透明，包括里面的内容


## [js] 说下你对柯里化函数(currying)的理解，它有什么运用场景？

柯里化指的是将一个接受多个参数的函数转为一次只接受一个参数的函数，将已接受的参数保存起来，返回接受剩余参数的新函数，当传入参数个数之和等于被柯里化的原函数的参数个数，返回计算结果。
这样可以使得函数变成只接受一个参数，返回一个值的状态，降低了编程复杂性。

不是降低复杂性哦. 最早Curry是为了解决多参数函数在lamda演算里面表达问题.
现在js里面使用主要是为了函数复用.

```javascript
function curry (fn) {
  const ctx = this;
  function inner (...args) {
    if (args.length === fn.length) 
    {
        return fn.call(ctx, ...args);
    }
    return (...innerArgs) => inner.call(ctx, ...args, ...innerArgs);
  }
  return inner;
}
```


## [软技能] 你知道Jenkins吗？有没有用过？说说你对它的理解

之前用jenkins打包部署小程序；在我看来：是用来构建打包、部署流程的；不知道还有啥其他用途嚒
