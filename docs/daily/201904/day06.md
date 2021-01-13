
## [html] label都有哪些作用？并举相应的例子说明

  前面那些同学已经说到input与label互相关联的机制，这里我就说一下具体实例：

  利用label"模拟"button来解决不同浏览器原生button样式不同的问题

  结合checkbox、radio表单元素实现纯CSS状态切换，这样的实例就太多了。比如控制CSS动画播放和停止。下面是一部分代码。<a href="https://codepen.io/mts123/pen/EzqdbM">详细实例地址</a>

  还有一个基于 radio 的实例：<a href="https://codepen.io/mts123/pen/vqpQvR">摩斯密码键盘</a>

  input的focus事件会触发锚点定位，我们可以利用label当触发器实现选项卡切换效果。下面代码选自张鑫旭《CSS世界》。<a href="https://demo.cssworld.cn/6/4-3.php">实际效果链接</a>


## [css] 用css创建一个三角形，并简述原理

  原理是宽高是两边固定，border不一样，有颜色，且有top、right、bottom、left的选项进行修改。在使用的时候需要宽高为零。三角形就需要数学知识（勾股定理），去考虑为等边、全等。重点是思考


## [js] 写一个去除制表符和换行符的方法

   * \f  匹配换页字符。
   * \n  匹配换行字符。
   * \r  匹配回车符字符。
   * \t  匹配制表字符。
   * \v  匹配垂直制表符。

 
```javascript
//实现
function delkgzb(str) {
    return typeof str === 'string'?str.replace(/[\t\n\r]/g,""):'请输入字符串'
}
  ```



</script>
</html>
