## [html] 精灵图和base64如何选择呢？

**精灵图**

优点

* 将多个图像加载请求合并为一个请求

弊端

* 难以维护和更新
* 增加内存消耗

**base64**

优点

* 将多个图像加载请求合并为一个CSS文件请求
* 轻松更新生成文件

弊端

* base64编码比原始二进制表示大约大25%
* IE6或IE7不支持

## [css] 说说visibility属性的collapse属性值有什么作用？在不同浏览器下有什么区别？

设置visibility: collapse后对于普通元素来说跟visibility: hidden效果一样，隐藏元素，且占用空间

但对于一些table元素，比如row、columu、group，效果则跟display: none一样，隐藏元素，但不占空间

但这些效果会随着浏览器底层实现不同而改变：

1. 在Chrome下，visibility: collapse都与visibility: hidden没有什么区别，即仍会占用空间
2. 在火狐浏览器、Opera里，使用collapse值的效果就如它的字面意思：table的行会消失，它的下面一行会补充它的位置，不占用空间。
3. 在IE即使设置了visibility: collapse，还是会显示元素。

## [js] 说说你对js包装对象的理解

包装对象是用来处理基础类型数据的对象，使得字符串、布尔值等变量可以直接调用方法，在对字符串、布尔值进行方法调用的时候，js引擎会自动创建一个包装对象，将操作的值作为原始值，这一过程是隐式的。

10.toString(2)报的是Uncaught SyntaxError: Invalid or unexpected token，这是词法分析出错而不是类型错误。错误原因在于js编译器将.视为小数点而非点运算符，由于小数点后出现了非数字字符故而被视为无效的token。

更深层的原因在于js中只存在IEEE 754规范的双精度数字，并没有整数这一类型，出现在数字之后的第一个.会被看作是小数点。

Workaround

1. 10..toString(2)
2. 10 .toString(2)
3. (10).toString(2) // recommended

## [软技能] 知道为何有些网站访不需要端口号？说说你对端口的理解？

所有使用tcp/ip协议的网络应用，都需要端口。

ip只能帮你找到哪一台主机，端口的作用就是帮你找到该主机所对应的的程序。

不加端口号，是以为一些常用的都默认了端口号，如浏览器默认访问80端口。

[想稍加思考可以看](https://blog.csdn.net/codexjli/article/details/89842688)
里面谈到服务器到底是怎么使用端口的以及为什么一个端口上建立了那么多的TCP连接呢，它为什么没有端口冲突的问题，而用一个新应用监听端口就会冲突？

