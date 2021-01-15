## [html] 你有用过HTML5中的datalist标签吗？说说你对它的理解

1. 定义：H5中新标签，配合 “自动完成”的特性，给用户的选项列表
2. 使用：中排列选项，并与input绑定（中list与中id选项值相同）
3. 兼容：ie9以上

标签规定了 标签中可能的选项列表；
标签中的id要与标签中的list相对应；
实例：

```html
<input list="browsers">
<datalist id="browsers">
  <option value="Internet Explorer">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
```

## [css] 遇到overflow: scroll不能平滑滚动怎么解决？

ipone 上解决方法是这样的，

-webkit-overflow-scrolling: touch;


## [js] 举例说明数组和对象的迭代方法分别有哪些？

Array

* forEach method arr.forEach((val, idx, arr) => { ... }, thisArg)
* for...of (Symbol.iterator) for (let val of arr) { ... }
* for...in (Enumerable Keys) for (let key in arr) { ... }

Object

* for...in (Enumerable Keys) for (let key in obj) { ... }
* Object static method + for...of
* for (let key of Object.keys(obj)) { ... }
* for (let [key, val] of Object.entries(obj)) { ... }

## [软技能] 你有使用过JWT吗？说说你对它的理解

JSON Web Token（缩写 JWT）是目前最流行的跨域认证解决方案。服务器认证以后，生成一个 JSON 对象，由客户端保存，每次服务端通信只要但是这个json对象就可以。方便服务器拓展。

JWT 由三部分组成Header（头部），Payload（负载），Signature（签名）。Header（头部），Payload（负载）都是json对象。Signature 部分是对前两部分的签名。

首先，需要指定一个密钥（secret）。这个密钥只有服务器才知道，不能泄露给用户。

然后，使用 Header 里面指定的签名算法（默认是 HMAC SHA256），按照下面的公式产生签名。

HMACSHA256(
base64UrlEncode(header) + "." +
base64UrlEncode(payload),
secret)

算出签名以后，把 Header、Payload、Signature 三个部分拼成一个字符串，每个部分之间用"点"（.）分隔，就可以返回给用户。


