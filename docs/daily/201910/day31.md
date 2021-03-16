## [html] 说下cookie都有哪些缺点？

1. 存储量限制
2. 容易crsf 攻击
3. 明文传输，可篡改，不安全
4. 同域的每个请求都会请求，耗费带宽
5. 客户端没有getCookie/setCookie的api，存取复杂

## [css] 如何使用CSS实现段落首字母或首字放大效果？
方法一：
伪元素选择器
```css
div::first-letter {
   font-size: 24px;
   font-weight: bold;
}
```
方法二：
```css
div {
text-transform: capitalize;
}
```
## [js] 请介绍下js的数据类型

number
数字类型，包含整数和小数，以及NaN

string
字符串

boolean
布尔值，true和false

function
方法类型，包含方法 function(){}、箭头函数 ()=>{} 和生成器 function*(){}

object
对象类型，包含对象、数组和null

null
空类型，但tyepof null 被判定为object，但其实际行为却和object完全不同

undefined
未定义，包含undefined以及未初始化以及未声明。

symbol
符号类型，ES6新引入的数据类型，通常用于创建唯一的键。

bigint
大整数类型，ES6新引入的数据类型，用于表示超过通常整数精度的大整数， 表示方法是在整数后面加个n：1_000_000_000_000_000_000n

## [软技能] 你有做过H5的游戏开发吗？说说它的开发步骤
* 拆分页面、界面；类似确定路由关系
* 选择框架，或自研框架；比如 three.js pixi.js 等
* 整理素材，写好动画 demo；
* 抽象对象、状态，准备组件化开发；
* 整理全局数据，如各角色配置、总分、组件状态等
* 确定各组件间父子兄弟关系
* 开始开发

可以说，游戏开发不搞组件化很难控制私有数据和业务数据，
比如动画到了第几帧这类数据变为私有的不用去关系多棒。

至于 cocos 等的可视化开发，接触较少。
