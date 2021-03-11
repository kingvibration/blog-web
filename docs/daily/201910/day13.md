## [html] 你有用过HTML5的track标签吗？说说它的运用场景有哪些？

track元素可以为使用video元素播放的视频或使用audio元素播放的音频添加字幕。写在video或audio元素内部。

如果使用标记描述媒体文件，则标记必须被书写在标记之后。track元素是一个空元素，其开始标记与结束标记之间不包含任何内容。

属性
default：默认轨道。（值：default）。default属性用于通知浏览器在用户没有选择使用其他字幕文件的时候可以使用当前 track文件

kind：文本轨道的文本类型（值：captions、chapters、descriptions、metadata、subtitles）。kind属性用于指定字幕文件(即用于存放字幕、章节标题、说明文字或元数据的文件) 的种类。可以对kind属性指定的属性值为subtitles、captions、descriptions、chapters与metadata

label：文本轨道的标签和标题（值：text）。

src：轨道文件的URL，必选属性（值：URL）。src属性用于指定字幕文件的存放路径，该属性是一个必须使用的属性。src属性的属性值可以是一个绝对URL路径，也可以是一个相对URL路径。

srclang：轨道文本数据的语言。（值：language_code ）。srclang属性用于指定字幕文件的语言。例如，srclang="en" 和srclang="zh-cn"分别表示字幕文件为英语和汉语。

浏览器支持（这里提一下是因为w3c说目前主流浏览器不支持）
Internet Explorer 10, Chrome 以及 Opera 支持 标签。

## [css] 请使用css画一个圆，方法可以多种

`<div class="circle"></div>`

1.border-radius
```css
.cirlce{
 width:10vw; height:10vw; background:gray;
 border-radius:50%;
}
```
2.clip-path
```css
.circle{
 width:10vw; height:10vw; background:gray;
 clip-path: circle();
}
```
3.svg background
```css
.circle{
width:10vw; height:10vw; 
 background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50%25' cy='50%25' r='50%25' fill='gray'/%3E%3C/svg%3E");
}
```
4.radial-gradient
```css
.circle{
 width:10vw; height:10vw; 
 background:radial-gradient(gray 70%, transparent 70%);
}
```
5.font
```css
.circle::after {
    content: "●";
    font-size: 10vw;//字体实际大小
    line-height: 1;
}
```
6.mix-blend-mode
```css
.circle{
 width: 10vw;height: 10vw;background: gray;
}
.circle::after {
    content: "";display: block;width: 10vw;height: 10vw;
    mix-blend-mode: lighten;
    background: radial-gradient(#000 70%, #fff 70%);
}
```

## [js] 有什么方案可以提高无限滚动列表的性能？

减少 dom 数，减少可见元素。
即，让超出屏幕的行隐藏或删除，在下一屏中显示或新建行。

防抖和节流


## [软技能] 举例缓存头都有哪些？并说明它们的用处

cache-contral：
每个资源都可以通过 Cache-Control HTTP 头部来定义其缓存策略
Cache-Control 指令控制了谁、在什么条件下来缓存响应，以及缓存多久
Cache-control: private, max-age=0, no-cache

Public vs. Private
No-cache
No-store
max-age
s-maxage
Pragma：
expires：
Expires: Sun, 03 May 2015 23:02:37 GMT

validators：
Last-Modified：头部作为一个常见的校验器，指示了文件最后一次改变的时间
[参考链接](https://juejin.im/post/5a72b7fc6fb9a01cbc6eb9d9#heading-1)
