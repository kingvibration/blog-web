## [html] 举例说明你对HTML5的ruby标签的理解，都有哪些应用场景？

标签定义 ruby 注释（中文注音或字符）。

在东亚使用，显示的是东亚字符的发音。

与 以及标签一同使用：

ruby 元素由一个或多个字符（需要一个解释/发音）和一个提供该信息的 rt 元素组成，还包括可选的 rp 元素，定义当浏览器不支持 "ruby" 元素时显示的内容。 (摘自博客)

<section>
  <ruby class="spz">
    <rb>茕</rb>
    <rt>qióng</rt>
    <rb>茕</rb>
    <rt>qióng</rt>
    <rb>孑</rb>
    <rt>jié</rt>
    <rb>立</rb>
    <rt>lì</rt>
    <rb>沆</rb>
    <rt>hàng</rt>
    <rb>瀣</rb>
    <rt>xiè</rt>
    <rb>一</rb>
    <rt>yī</rt>
    <rb>气</rb>
    <rt>qì</rt>
  </ruby>
  <ruby class="spz">
    <rb>踽</rb>
    <rt>jǔ</rt>
    <rb>踽</rb>
    <rt>jǔ</rt>
    <rb>独</rb>
    <rt>dú</rt>
    <rb>行</rb>
    <rt>xíng</rt>
    <rb>醍</rb>
    <rt>tí</rt>
    <rb>醐</rb>
    <rt>hú</rt>
    <rb>灌</rb>
    <rt>guàn</rt>
    <rb>顶</rb>
    <rt>dǐng</rt>
  </ruby>
  <ruby class="spz">
    <rb>绵</rb>
    <rt>mián</rt>
    <rb>绵</rb>
    <rt>mián</rt>
    <rb>瓜</rb>
    <rt>guā</rt>
    <rb>瓞</rb>
    <rt>dié</rt>
    <rb>奉</rb>
    <rt>fèng</rt>
    <rb>为</rb>
    <rt>wéi</rt>
    <rb>圭</rb>
    <rt>guī</rt>
    <rb>臬</rb>
    <rt>niè</rt>
  </ruby>
  <ruby class="spz">
    <rb>龙</rb>
    <rt>lóng</rt>
    <rb>行</rb>
    <rt>xíng</rt>
    <rb>龘</rb>
    <rt>dá</rt>
    <rb>龘</rb>
    <rt>dá</rt>
    <rb>犄</rb>
    <rt>jī</rt>
    <rb>角</rb>
    <rt>jiǎo</rt>
    <rb>旮</rb>
    <rt>gā</rt>
    <rb>旯</rb>
    <rt>lá</rt>
  </ruby>
</section>

## [css] display有哪些值？分别说明他们的作用是什么？

`display:block/inline-block` 给元素转块/转行内块

`display:inline` 把元素转成内联元素（我很少用到）

`display:none` 让元素消失，不显示

`display:flex` 弹性布局

` display:grid;` 网格布局
我常用的就是这些

## [js] 把Script标签放在页面最底部的</body>之前和之后有什么区别？浏览器会如何解析它们？

HTML 2.0起放在“body标签闭合之后”就是不合标准的。之所以但是浏览器却不会报错，是因为如果在“body标签闭合之后”后再出现script或任何元素的开始标签，都是parse error，浏览器会忽略之前的，即视作仍旧在body内。所以实际效果和写在“body标签闭合之前”之前是没有区别的。所以要么放head标签里，要么放 </body> 之前。

## [软技能] Git的reset和revert有什么区别？它们分别适用于什么场景？

`git reset`：将某次提交后的版本全部抹除；变动如下

<pre style="color:#fff;">
O ------> O ------> O                                   O ------> O
^         ^         ^            --[git reset HEAD^]--> ^         ^
版本 A    版本 B    版本 C [HEAD]                        版本 A    版本 B [HEAD]
</pre>
版本 C 造成的更改直接被抹除了，无法在提交记录上看出。
通常，在与他人协作开发时，将已经提交到远端的更改 reset 回去不是一个好主意。如果执意要这么做，那么 push 时应该加上 -f 选项用本地内容强制覆写远端。

`git revert`：创建一次新的提交，将某次提交的更改撤销；变动如下
<pre style="color:#fff;">
O ------> O ------> O                                   O ------> O ------> O -------> O
^         ^         ^            --[git revert HEAD]--> ^         ^         ^          ^
版本 A    版本 B    版本 C [HEAD]                        版本 A    版本 B    版本 C      版本 D [HEAD]
</pre>
其中，版本 D 撤销了版本 C 的更改；它与版本 B 的内容是相同的。

> 适用场景：没有绝对的适用场景，也不存在什么最佳实践。符合你需求的就是最好的，或者你的团队用哪种你就用哪种。

