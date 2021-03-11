## [html] 请使用纯HTML制作一个进度条

progress是HTML5的一个新元素，表示定义一个进度条，用途很广泛，可以用在文件上传的进度显示，文件下载的进度显示，也可以作为一种loading的加载状态条使用。
    
    max属性表示进度条的进度最大值，如果有此值，必须是大于0的有效浮点数。max的默认值是1.
    value属性表示进度条完成的进度之，value值的范围为0-max之间。如果没有设置max属性，那么value属性值的范围要在0-1之间。

## [css] 你知道css的预处理器和后处理器都有哪些吗？它们有什么区别呢？

css的预处理器有sass，less，stylus。代码更加简洁，复用程度比较高，可以嵌套，可读性比较高，也方便维护。最终编译为css。

css的后处理器rework，postcss。对css进行处理，有的可以对css进行压缩，有的可以自动处理兼容性问题。

[参考](https://blog.csdn.net/yushuangyushuang/article/details/79209752)

## [js] 写一个密码生成器，并同时写一个密码强度校验的方法

```javascript
/**
/*方法说明
 *@createPassword 密码范围 {0-9，A-Z, a-z}
 *@param
 * num {num} 生成密码长度
 *  b {num} 密码生成类型，1: 数字， 2:数字+小写，3.数字+大小写
 *@return {str} 
*/
**/
let createPassword = function (num, b) {
    let n = 0 //循环次数
    let arr = new Array // 随机数保存
    let Capitalization = () => Math.floor(Math.random() * b)// 随机取数0-2/0-1
    let randomNumber = [() => Math.floor(Math.random() * (57 - 48 + 1) + 48), () => Math.floor(Math.random() * (122 - 97 + 1) + 97), () => Math.floor(Math.random() * (90 - 65 + 1) + 65)] // 去随机值
    for (let i = 0; i < num; i++) {
        arr.push(randomNumber[Capitalization()]())
    }
    return arr.map(e => String.fromCharCode(e)).join('')
}

/*方法说明
 *@method passwordStrength 密码强度校验
 *@for 所属类名
 *@param 
 *        num{str} 密码
 *        len {num} 密码长度
 *@return {str} 返回密码等级

      str    ASCII
      0-9    48-57
      A-Z    65-90
      a-z    97-122

 */
let passwordStrength = function (num, len) {
    if(num.length<len) return '密码长度不够'
    let passwordLevel = ['弱', '普通', '较强', '强']
    let arr = new Array(4) // 记录密码等级
    num.split('').map(e => e.charCodeAt()).forEach(e => {
        if (e >= 48 && e <= 57) { arr[0] = 1 }
        else if (e >= 65 && e <= 90) { arr[1] = 1 }
        else if (e >= 91 && e <= 122) { arr[2] = 1 }
        else { arr[3] = 1 }
    })
    return passwordLevel[arr.reduce((a, b) => a + b) - 1]
}
```
## [软技能] 你有自己写过爬虫的程序吗？说说你对爬虫和反爬虫的理解？

爬虫是为了获得网站上的数据而写的程序。会对网站有不同程度的影响。与手动点击的区别在于它是批量操作的。
反爬虫维护安全。

反爬虫机制：
1. 基于User-Agent反爬
2. 基于IP反爬

User Agent中文名为用户代理，简称 UA，它是一个特殊字符串头，使得服务器能够识别客户使用的操作系统及版本、CPU 类型、浏览器及版本、浏览器渲染引擎、浏览器语言、浏览器插件等。
[参考文档](https://www.cnblogs.com/tulintao/p/11614577.html)
