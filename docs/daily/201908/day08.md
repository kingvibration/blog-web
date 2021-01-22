## [html] 举例说明HTML5的Canvas元素有什么用途？

* 做页面特效: 粒子效果
* 画常见的图形: 矩形,圆形
* 在画布中插入文字,图片

## [css] 为什么要使用css sprites？

css sprites指的是将该页面请求的图片资源都拼接到一个图片文件上，通过css从拼接好的图片上获取需要的部分。

优点:

* 一个是减少了HTTP请求的发送次数
* 一个是合并后的图片一般小于合并前的图片大小总和

缺点：

* 如果发生改动需要重新做拼接

## [js] 写一个把数字转成中文的方法，例如：101转成一百零一

```javascript
const digitChar = ['', ...'一二三四五六七八九']
const posChar = ['', ...'十百千万   亿']
const placeholder = '零'

function toChineseNumeralUnder万(digits) {
    let revDigits = digits.split('').reverse()
    let result = ''
    for (let pos = 0; pos < revDigits.length; pos++) {
        const digit = Number(revDigits[pos])
        if (digit)
            { result = posChar[pos] + result }
        if (digit !== 1 || pos !== 1)
            { result = digitChar[digit] + result }
        if (!digit && pos && result && !result.startsWith(placeholder))
            { result = placeholder + result }
    }
    return result
}

function toChineseNumeralUnder亿(digits) {
    let highPart = toChineseNumeralUnder万(digits.slice(-8, -4))
    if (highPart)
        { highPart += posChar[4] }
    let lowPart = toChineseNumeralUnder万(digits.slice(-4))
    return highPart + lowPart
}

function toChineseNumeral(digits) {
    let fragment = ''
    const result = []
    for (const digit of digits.split('').reverse()) {
        if (fragment.length === 8) {
            result.unshift(toChineseNumeralUnder亿(fragment))
            fragment = ''
        }
        fragment = digit + fragment
    }
    result.unshift(toChineseNumeralUnder亿(fragment))
    if (result[0].startsWith(placeholder))
        { result[0] = result[0].slice(1) }
    return result.join(posChar[8]) || placeholder
}
toChineseNumeral('0')
// => '零'
toChineseNumeral('101')
// => '一百零一'
toChineseNumeral('1000001')
// => '一百万零一'
toChineseNumeral('123456708')
// => '一亿二千三百四十五万六千七百零八'
toChineseNumeral('3274823947329471041041234567080')
// => '三百二十七万四千八百二十三亿九千四百七十三万二千九百四十七亿一千零四十一万零四百一十二亿三千四百五十六万七千零八十'
```
## [软技能] 你知道什么是B/S和C/S架构吗？说说它们的区别

B/S 即 Browser-Server 架构。用了浏览器代替了传统的客户端，优点在于可以跨平台使用。Windows、Linux、Mac 只要有浏览器（和网）就行。但是在功能上就会受限于浏览器，比如跨域问题以及本地文件访问问题，并且程序的性能也依赖于浏览器。

C/S 即 Client-Server 架构。传统的架构，对平台有限制。如果是用 C# 开发的应用就无法在 Linux 和 Mac 上运行。但优点在于可以调用本地资源（权限比较大）。
