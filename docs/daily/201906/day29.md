## [html] 在a标签上的四个伪类执行顺序是什么？
```link > visited > hover > active```

简称 lvha(love-ha)

伪类的优先级是一样的，所以后出现的伪类会覆盖先出现的伪类（同时激活）

在这里，比如把 hover 放在 active 后面，那么实际你在激活（active）链接的时候就触发了 hover 伪类，hover 在后面覆盖了 active 的颜色，所以始终无法看到 active 的颜色
## [css] 说说你对!important的理解，一般在哪些场景使用？
!important 可以让样式的特指度最高，覆盖任何样式，而且本身不可被覆盖。

一般场景就是用来强制覆盖其他样式，用的比较少，不建议使用，因为别人没法覆盖这个样式，维护性比较。
## [js] 写一个方法随机生成指定位数的字符串
```javascript
function getRandomString (length) {
  let str = Math.random().toString(36).substr(2)
  if (str.length >= length) {
	return str.substr(0, length)
  }
  str += getRandomString(length - str.length)
  return str
}
```
## [软技能] 说下你对互联网行业及前端技术发展趋势的看法
门槛越来越高，前端由百家争鸣到独尊儒术

