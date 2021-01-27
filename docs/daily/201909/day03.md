## [html] 说说你对HTML5的keygen标签的理解，它的作用是什么？

    Deprecated: 该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，
    但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

<keygen>是为了方便生成密钥材料和提交作为 HTML form 的一部分的公钥.这种机制被用于设计基于 Web 的证书管理系统。按照预想， 元素将用于 HTML 表单与其他的所需信息一起构造一个证书请求，该处理的结果将是一个带有签名的证书。
## [css] CSS3中的transition是否可以过渡opacity和display？

transition 可以过渡 opacity 不能过渡 display。

基本常用的 width,height,background,opacity,scale 等属性都可以进行过渡。

所有可以过渡的元素如下：
参考文章：[CSS animated properties](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_animated_properties)

background如果用的是渐变的话也是不能过度的呢


## [js] 说说用原生js实现封装一个选项卡的功能

①Tab栏切换有2个大的模块

②上的模块选项卡，点击某一个，当前这一个底色会是红色，其余不变（排他思想） 修改类名的方式

③下面的模块内容，会跟随上面的选项卡变化。所以下面模块变化写到点击事件里面。

④规律：下面的模块显示内容和上面的选项卡一一对应，相匹配。

⑤核心思路： 给上面的tab_list 里面的所有小li 添加自定义属性，属性值从0开始编号。

（这个案例里面用到了自定义属性！！！！！！！！！！！！！！）

⑥ 当我们点击tab_list 里面的某个小li，让tab_con 里面对应序号的 内容显示，其余隐藏（排他思想）

```javascript
var tab_list = document.querySelector('.tab_list');
var lis = tab_list.querySelectorAll('li');

for(var i = 0; i < lis.length; i++){
    lis[i].onclick = function(){
        for(var j = 0; j < lis.length; j++){
            lis[j].className = '';
        }
        this.className = 'current';
    }
}
```
    
## [软技能] 你会PHP、JAVA、Python或GO吗？都有做过哪些应用呢？
