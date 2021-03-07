## [html] Shadow DOM和Virtual DOM有什么区别？

Shadow DOM
Shadow DOM是浏览器提供的一个可以允许将隐藏的DOM树添加到常规的DOM树中——它以shadow root为起始根节点，在这个根节点的下方，可以是任意元素，和普通的DOM元素一样。

Virtual DOM
虚拟DOM是由js实现的避免DOM树频繁更新，通过js的对象模拟DOM中的节点，然后通过特定的render方法将它渲染成真实的节点，数据更新时，渲染得到新的 Virtual DOM，与上一次得到的 Virtual DOM 进行 diff，得到所有需要在 DOM 上进行的变更，然后在 patch 过程中应用到 DOM 上实现UI的同步更新。

## [css] css的linear-gradient有什么作用呢？

Gradient 是渐变，CSS3目前有三种渐变方式：

linear-gradient 线性渐变

radial-gradient 径向渐变

conic-gradient 圆锥渐变

## [js] 你了解什么是AOP吗？它的作用是什么？举个例子

概念：AOP(面向切面编程)的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来，这些跟业务逻辑无关的功能通常包括日志统计、安全控制、异常处理等。把这些功能抽离出来之后， 再通过“动态织入”的方式掺入业务逻辑模块中。

好处:AOP的好处首先是可以保持业务逻辑模块的纯净和高内聚性，其次是可以很方便地复用日志统计等功能模块。

demo

Function.prototype.before = function (beforefn) {
    var _self = this;    //保存原函数引用
    return function () { //返回包含了原函数和新函数的"代理函数"
        beforefn.apply(this, arguments); //执行新函数，修正this
        return _self.apply(this, arguments); //执行原函数
    }
};

Function.prototype.after = function (afterfn) {
    var _self = this;
    return function () {
        var ret = _self.apply(this, arguments);
        afterfn.apply(this, arguments);
        return ret;
    }
};

var func = function () {
    console.log("2")
}

func = func.before(function () {
    console.log("1");
}).after(function () {
    console.log("3");
} )

func();

## [软技能] 这么多年来，你值得骄傲坚持的是什么？
