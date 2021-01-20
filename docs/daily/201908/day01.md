## [html] 网站的TDK该怎么设置？它有什么作用？

刚一看确实不知道TDK是啥，其实就是title, description, keywords的简称，这三个常用于网站的seo；

title可以在head里面使用&lt;title>标签设置；而description和keywords可以通过meta标签设置，meta的使用可以参考
[html 第98天 列举出你最常用的meta标签的写法和作用](https://github.com/haizlin/fe-interview/issues/971#issuecomment-514022706)

作用：ttile和description用于搜索呈现时的网站描述信息，而keywords则是用于搜索引擎的关键字搜索；

## [css] 过渡和动画的区别是什么？

相同：都会让你的页面元素动起来

区别：

**过渡 transition**

1. 需要事件触发，比如hover，focus，checked , js改, @media query
2. 一次性的
3. 只能定义开始和结束状态，不能定义中间状态

举例：

`transition: width 2s;`

**动画 animation**

1. 不需要事件触发
2. 显示地随着时间的流逝，周期性的改变元素的css属性值。区别于一次性。
3. 通过百分比来定义过程中的不同形态，可以很细腻

举例：
原生css实现闪烁的bling bling的效果

```css
@keyframes bling-kf {
   0% { opacity: 1; }
   50% { opacity: 0.5; }
   100% { opacity: 1; }
}
.bling {
    animation: bling-kf 2s ease-in infinite;
}
```
不停的bling bling，很有趣的，:)

## [js] 写一个方法判断给定的字符串是否同态(isomorphic)

好吧，首先要知道什么是同态：

    两个字符串，如果A字符串中的每一个字符都可以在B字符串中找到唯一对应，并且顺序一一对应；如果存在这样的函数，那么A和B同态。

简言之，字符串同态就是字符串拥有同样的字符结构；

```javascript
function isomorphic(str1, str2) {
        if(str1.length != str2.length){
                return false;
        }
        let result = true; 
        let map = {}
        for(var i=0; i<str1.length; i++){
                var code1 = str1.charCodeAt(i);
                var code2 = str2.charCodeAt(i);
                var dif = code1 - code2;
                if (map.hasOwnProperty(str1[i])) {
                        return dif === map[str1[i]]
                } else {
                        map[str1[i]] = dif
                }
        }
        return result;
}
console.log(isomorphic('add', 'egg')) // true
console.log(isomorphic('paper', 'title')) // true
console.log(isomorphic('xyxx', 'xztt')) // false
console.log(isomorphic('error', 'xxccc')) // false
console.log(isomorphic('aaaaa', 'abcda')) // false
```
感谢@HuoXiaoYe 指正错误，确实一一映射需要考虑双向的；还有通过字符差值来判断也学习到了！

## [软技能] 你上家公司前端团队有多少人？是怎么分工的？
