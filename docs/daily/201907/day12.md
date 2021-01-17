## [html] 举例说明如何原样输出HTML代码，不被浏览器解析？

<xmp></xmp>标签已被废弃，建议不要使用了。

推荐使用&lt;pre>或者&lt;code>，需要注意的是将内容中的"<"转义为"\&lt;"，以防止被浏览器当作正常标签解析。

摘自MDN

## [css] 写出几个初始化CSS的样式，并解释说明为什么要这样写

引用css初始化库，如；
normalize.css

1. 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异
2. 初始化CSS样式可以提高编码质量，保持代码的统一性，如果不初始化，重复的CSS样式很多。


## [js] 请写一个sleep（暂停）函数

不要写同步的暂停函数。它会让你的程序卡死。
写一个异步的暂停函数，这样可以在任何 async function 中暂停，且只暂停这一部分代码。
```typescript
function sleep(milliseconds: number) {
    return new Promise<void>(resolve =>
        setTimeout(resolve, milliseconds))
}
void async function main() {
    // … do something …
    await sleep(5000)
    // … do something else …
}()
```
```javascript
function sleep(d){
for(var t = Date.now();Date.now() - t <= d;);
}

sleep(5000); //当前方法暂停5秒
```
> 摘自博客

## [软技能] 你平常都看哪些方面的书？你看书的方法是怎样的？

技術方面多半是看官方文件，如React.js, Redux, Jest...等等。

軟技能的部分可以看「97 Things Every Programmer Should Know」
可以辦個小讀書會，每天讀一篇。（建議有個資深工程師帶領）
https://97-things-every-x-should-know.gitbooks.io/97-things-every-programmer-should-know/en/

軟體工程一定要讀的經典「The Mythical Man-Month 人月神話」。
https://en.wikipedia.org/wiki/The_Mythical_Man-Month

自己習慣的讀書方法是畫重點，並且多看幾次，
每一次畫的重點都用不同顏色的筆畫，
最後那些被畫最多次的重點，就是本書的核心之處了。
關於更多讀書的技巧可以參考「How to Read a Book 如何閱讀一本書」。
[参考](https://en.wikipedia.org/wiki/How_to_Read_a_Book)
