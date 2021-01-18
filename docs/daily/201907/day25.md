## [html] HTML5怎么为输入框添加语音输入的功能呢？

x-webkit-speech input 在 chrome 中已经废除了（没查到从哪个版本开始），不过本来这个也只是 chrome 的私有功能，不算 HTML5 规范。目前 chrome 中可以使用 JS 版的语音识别 API： https://caniuse.com/#search=speech%20recognition

`<input type=”text” speech x-webkit-speech />`

原理：在人说话时接收语音，然后放到谷歌后台，谷歌自己写的语音识别系统，再返回数据
缺陷：

只支持google11以上的浏览器
现在谷歌需要翻墙，此功能会失效

## [css] 如何让大小不同的图片等比缩放不变形显示在固定大小的div里？写个例子

图片等比缩放 img{ object-fit: cover/contain;}

div宽高比例固定，跟随屏幕变化而变化，利用padding垂直方向的属性来实现

## [js] 分别封装精确运算的加减乘除四个方法

处理小数计算时的精度问题。

```javascript
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * 专门处理数字运算
 * 并解决，1. 非数字型数字的运算 2. 小数计算的精度问题
 * count('+', 0.1, '0.2'); // 0.3
 */
function count(type, options) {
    var nums = [].slice.call(arguments, 2);
    var _startConfig = { '+': 0, '-': 0, '*': 1, '/': 1 };
    if (!(type in _startConfig)) return new Error('首位入参有误');

    // 可能往后会加入些配置，但如果不是对象则不是配置
    if (!isObject(options)) {
        nums.splice(0, 0, options);
    }

    // 小数点后面最长字符长度，比如 0.1 和 0.234 则返回 3
    var maxDotLength = nums.reduce(function(max, num) {
        return Math.max(max, ([num].toString().split('.')[1] || '').length);
    }, 0);

    // 改造成整数，并计算出结果，比如 0.1 + 0.2 改为 1+2
    var startNum = _startConfig[type];
    var pow = Math.pow(10, maxDotLength);
    var result = nums.reduce(function(re, num, index) {
        num = Number(num) * pow;
        if (type === '-' && index === 0) return num;
        switch (type) {
            case '-': return re - num;
            case '*': return re * num;
            case '/': return re / num;
            case '+': default: return re + num;
        }
    }, startNum);

    // 回退到原小数形态，比如 3 转为 0.3
    var _divideConfig = { '+': pow, '-': pow, '*': pow * pow, '/': 1 };
    result = result / _divideConfig[type];

    return result;
}
```
## [软技能] 你有画过流程图吗？用过什么软件？开始和判定分别用什么图形表示？

XMind或者百度脑图
