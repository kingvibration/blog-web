## [html] 请说说 &lt;pre> 和 &lt;code> 标签的区别？

pre里的内容会保留换行符和空格，code里的不会保留

单行代码用code，多行代码用pre

pre标签是块级元素，code标签是行内元素

## [css] 如何自定义radio按钮的样式
## [js] 自己实现数组的 map、filter、find 方法

map
```javascript
Array.prototype.newMap = function(fn, context) {
    let newArr = new Array;
    if(typeof fn !== "function") {
        throw new TypeError(fn + "is not a function");
    }
    var context = arguments[1];
    for (var i = 0; i < this.length; i++) {
        newArr.push(fn.call(context, this[i], i, this))
    }
    return newArr
}
```
find
```javascript
Array.prototype.newFind = function(fn, context) {
    let str;
    if(typeof fn !== "function") {
        throw new TypeError(fn + "is not a function");
    }
    var context = arguments[1];
    for (var i = 0; i < this.length; i++) {
        if(fn.call(context, this[i], i, this)) {str = this[i];break; }
    }
    return str
}
```

filter
```javascript
Array.prototype.newfilter = function (fn, context) {
    let newArr = new Array;
    if (typeof fn !== "function") {
        throw new TypeError(fn + "is not a function");
    }
    var context = arguments[1];
    for (var i = 0; i < this.length; i++) {
        if (fn.call(context, this[i], i, this)) { newArr.push(this[i]) }
    }
    return newArr
}
```

## [软技能] 你有自己的博客吗？维护的频率是多久呢？
