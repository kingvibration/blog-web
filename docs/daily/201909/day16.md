## [html] 使用标签怎样对一个单词标志缩写呢？

<abbr>标签可以用于来展示缩写字符；

`<abbr title="People's Republic of China">PRC</abbr>`

<abbr title="People's Republic of China">PRC</abbr>


## [css] 举例说明在css3中怎么实现背景裁剪？

background-clip:

* border-box(默认,背景延伸至边框外沿,但是在边框的下层)
* padding-box(背景延伸至padding的外沿)
* content-box(背景延伸至内容的外沿)
* text(背景剪裁成文字的样式)

## [js] 你知道1和Number(1)的区别是什么吗？

无论是1还是Number(1) 本质就是一个东西，其结果都是字面量，在你尝试将字面量当成对象并调用其方法时会自动装箱并以这样的形式调用：new Number(1).length


## [软技能] 你有使用过FTP吗？你知道FTP它的作用是什么吗？
FTP 是种文件传输协议，传输文件效率更高。

