## [html] 怎样去除html标签之间换行产生的空格？

1. 不换行
2. 设置父级font-size为 0
3. 设置换行的标签否定边距margin-left;
4. 选用浮动属性float
5. 利用注释排版
```html
<div><!--
    -->内容<!--
--></div>
```

6. 使用返回标签
## [css] Reset CSS和Normalize CSS的区别是什么？

Reset CSS: 将各个浏览器的默认样式重置

Normalize CSS: 保留各个浏览器的样式,只是让它们更加统一通用了

## [js] 分别写出防抖和节流的两个函数，并描述它们分别有什么运用场景？

节流：规定在一个单位时间内，只能触发一次函数。

防抖：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

```typescript
type Timeout = number // browser
// type Timeout = NodeJS.Timeout // node

/**
 * 防抖：生成一个函数，它在被调用后会等待一段时间再执行。
 * 如果在等待期间再次调用，之前还未执行的调用会被取消。
 * @param fn 要防抖的函数
 * @param timeout 超时时间
 */
function debounce(fn: (...args: any[]) => any, timeout: number) {
    let time: Timeout = null
    return function _debounced(...args: any[]) {
        if (time !== null)
            { clearTimeout(time) }
        time = setTimeout(() => {
            fn(...args)
            time = null
        }, timeout)
    }
}

/**
 * 节流：生成一个函数，它在被调用后一段时间内再次被调用不起作用。
 * @param fn 要节流的函数
 * @param timeout 超时时间
 */
function throttle(fn: (...args: any[]) => any, timeout: number) {
    let time: Timeout = null
    return function _throttled(...args: any[]) {
        if (time === null) {
            fn(...args)
            time = setTimeout(() => time = null, timeout)
        }
    }
}
```
防止用户高频操作导致事件处理器处理不来。


## [软技能] 说下你是如何从PS切出图的，有什么技巧？

一般当你在切图的过程中，你就会知道你该怎么布局了，我的团队里，我都是要求成员自己搞定，不需要用UI人员帮忙，因为他们不知道我们想要啥样的，然后还要跟他们沟通，成本很大……（还有UI请假了，UI离职了，事情还得继续做啊，这点技能必备）

其实切图花不了太多的时间，不复杂的图也就一会的事。

还有个好处就是，自己切图，我们可以在用切片的时候，就给图片命好名字了，导出来后就能直接用，非常方便！

综上，前端人员必须掌握点PS技巧！——切片的使用
