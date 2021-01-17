## [html] 怎么使用HTML5来获取定位？定位不准怎么解决？

纯HTML5 Geolocation定位能力弱，定位成功率不高

通常使用 高德/百度/腾讯 现成的定位功能

## [css] 说说你对CSS样式覆盖规则的理解

1. 首先看权重，权重高的样式会覆盖权重低大的样式。
!important > #id > .class > tag > *
2. 同等权重时，css 靠后的覆盖靠前的（就近原则），只与 css 书写的顺序有关，与 class 引用的顺序无关
3. 行内样式 > 内联样式 > 外联样式

## [js] 判断instanceof的结果并解释原因 [代码]

* ~~如果函数明确返回值，那么 new 运算符的结果将是这个值。~~
* 如果函数明确返回 non-primitive 值，那么 new 运算符的结果将是这个值。- 感谢 @xxf1996 指正
* 所以，原表达式相当于：test instanceof test。
******
* instanceof 运算符将检测右端值的 prototype 属性是否在左端值的原型链（[[Prototype]] 属性）上；
* 如果不在，则向上查找（[[Prototype]] 的 [[Prototype]]，…），直到找遍左端值的整个原型链。
> 注：[[Prototype]] 属性可以通过 Object.getPrototypeOf(obj) 函数获得，
******

* 左端值 test 是一个 Function，故它的原型链为：
`Function.prototype -> Object.prototype -> null`
* 可以看到，原型链上没有 test.prototype 出现，所以 test 并不是 test 的一个实例。
* 所以 instanceof 运算符返回 false。

## [软技能] 说说你对hosts文件的理解，它都有哪些作用？

hosts 文件可以将名称映射到 IP 地址。在本机上所有对这个名称的访问相当于对它被映射到的 IP 地址的访问。可以说它起到了简易的本地 DNS 的作用。

1. 加快域名解析。 匹配后不再去DNS服务器查询。
2. 自定义域名解析。 可以根据自己的需要来配置。
