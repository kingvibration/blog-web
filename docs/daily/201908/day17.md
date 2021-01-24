## [html] 使用canvas画出一个矩形
```javascript
document.getElementById('cvs').getContext('2d').fillRect(100, 100, 800, 300)
```
## [css] 什么是zoom？它有什么作用？

zoom可以对一个元素设置缩放比例。此属性是IE浏览器的专有属性，Firefox等浏览器不支持。

zoom与tansform:scale()还是有区别的，zoom的缩放基点事左上角，且它是先缩放，然后再计算布局；tansform:scale()缩放的基点在元素正中间，缩放不会影响布局。

## [js] 分析('b' + 'a' + +'a' + 'a').toLowerCase()返回的结果

* 'b'+'a' 为字符串拼接 => ba
* \+ +'a' 第一个 + 为字符串拼接的 +, +'a' 是把 'a' 转为数字 => 由于 'a' 无法转为数字，因此为 NaN
* +'a' 为字符串拼接


```
’b‘ + =>'b'
'b' + 'a' => 'ba'
'ba' + (+'a') => 'ba' + (Number('a')) => 'baNaN'
'baNaN' + 'a' =>'baNaNa'
'baNaNa' .toLowerCase() =>'banana'
```

## [软技能] 你了解雅虎前端优化的35条军规吗？你能说上几条？

1. 合理使用雪碧图
2. 对与js代码进行压缩
3. 合理使用懒加载
4. 减少DNS的查询
5. 根据不同浏览器抉择最大并发下载（请求）数量
6. 合理使用ajax的不同方法
7. 样式文件有限加载，js尽量放在尾部进行加载

[前端性能优化之雅虎35条军规](https://juejin.im/post/6844903657318645767)
