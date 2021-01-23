## [html] 有使用过HTML5的跟踪元素吗？说说你对它的理解

“跟踪元素”这个名字不是很恰当。虽然“跟踪”和“轨道”都可以体现出其包含的数据随时间变化，但考虑在已有的术语中，"audio track" 被翻译成 “音频轨道”/“音轨”，对于 &lt;track> 元素（包含的内容为“text track”）的翻译应该为“轨道元素”/“文字轨道元素”更为恰当（MDN 也采取了“轨道”这个名称）。


## [css] 说说你对GPU的理解，举例说明哪些元素能触发GPU硬件加速？

GPU: 图形处理器,用于处理图形有关的任务,用于渲染页面

在css中使用 transform: translateZ(0),可以开启GPU硬件加速

## [js] 使用正则去掉html中标签与标签之间的空格
 
 
 ```javascript
 
const html = `
  <div>
    <span class="cls" id="spa">111</span>
    <span>222</span>
  </div>`;

String.prototype._trim = function () {
  return this.replace(/>[\s]+</g, '><')
}
  
```

```javascript

const html = `
<div>
   <span>      我两边怎么有空格？  </span>
</div>
`
console.log(html.replace(/>\s*(\S*)\s*</g, ">$1<"));
```

## [软技能] 你有做过骨架屏吗？它的原理是什么知道吗？

骨架屏的目的和Loading是一样的，安抚用户，最速响应
一般情况下是服务端渲染好html 直接把骨架屏结构先写在html里，用户打开直接先看到页面结构优化了白屏体验,后续js等资源加载完了才渲染出页面，本质和Loading是一样的
难点就在于通用的自构件产出骨架屏，因为每个入口页面结构都是不一样的不像Loading样式一致
有方案是通过webpack打包编写插件,自构结构插入到输出的html文件里

[reference](Jocs/jocs.github.io#22)
