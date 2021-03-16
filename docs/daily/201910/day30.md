## [html] 举例说明a标签的作用都有哪些？

1. 外部链接：外部页面链接需要一个完整的网页的地址
2. 本地链接：在同一个项目中，href的指向为相对路径
3. 瞄点链接：方便读者浏览网页
4. 下载文件 download属性
5. 利用URL Scheme打开app
   

## [css] 如何给段落的首行缩进？

一看题目居然没想起text-indent🤣，它的规定如下

* 适用于块元素
* 直至单位如下
  * 长度值：px em rem
  * 百分比：取决于包含块的width
  * 关键字： each-line：文本缩进会影响第一行，以及使用
  强制断行后的第一行；hanging：该值会对所有的行进行反转缩进：除了第一行之外的所有的行都会被缩进，看起来就像第一行设置了一个负的缩进值。
  * 全局值：inherit initial unset

## [js] 写一个方法找出一段话里面出现频率最多的词

```javascript
// 不排序，只保存最大的，降低时间复杂度

const fn = (texts) => (',' + texts).split(/\W+/).reduce((acc, i) => (
    i = i.toLowerCase(),
    acc[i] = (acc[i] || 0) + 1,
    acc.$.n < acc[i] ? (acc.$.w = i, acc.$.n = acc[i], acc) : acc
), { $: { w: '', n: -1 } }).$

fn('I have a pen, I have an apple, Uh! apple pen. Pen pineapple apple pen.')
//{ w: 'pen', n: 4 }

```

```javascript
const texts = 'I have a pen, I have an apple, Uh! apple pen. Pen pineapple apple pen.'
const mostFrequentWord = Object.entries(texts.toLowerCase()
	.split(/[\s\,\.\!\?;]/)
	.filter(word => word)
	.reduce((sum, word) => ({ ...sum, [word]: (sum[word] || 0) + 1 }), {}))
	.sort((a, b) => b[1] - a[1])[0];													

console.log(mostFrequentWord);		// ["pen", 4]
```
## [软技能] 你有做过Hybrid APP开发吗？说说你的经验
需要考虑外壳的兼容性

