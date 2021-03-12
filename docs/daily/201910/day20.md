## [html] placeholder如何在兼容IE？

```javascript
$(function(){
  // 兼容IE9下的placeholder
  function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
  }
  if(!placeholderSupport()){ // 判断浏览器是否支持 placeholder
    $("[placeholder]").each(function(){
    var _this = $(this);
    var left = _this.css("padding-left");
    _this.parent().append('' + _this.attr("placeholder") + '');
    if(_this.val() != ""){
      _this.parent().find("span.placeholder").hide();
    }
    else{
      _this.parent().find("span.placeholder").show();
    }
    }).on("focus", function(){
      $(this).parent().find("span.placeholder").hide();
    }).on("blur", function(){
      var _this = $(this);
      if(_this.val() != ""){
        _this.parent().find("span.placeholder").hide();
      }
      else{
        _this.parent().find("span.placeholder").show();
      }
    });
    // 点击表示placeholder的标签相当于触发input
    $("span.placeholder").on("click", function(){
      $(this).hide();
      $(this).siblings("[placeholder]").trigger("click");
      $(this).siblings("[placeholder]").trigger("focus");
    });
  }
})
```
## [css] 相邻兄弟选择器、后代选择器和子选择器三者有什么区别？

后代选择器与子选择的关系：后代选择器>子选择器。

后代选择器：包括父元素的子元素以及孙子元素（代表符号：空格）

子选择器：包括父元素的子元素（仅仅是子元素）（代表符号：>）

相邻兄弟选择器与后续兄弟选择的关系：后续兄弟选择>相邻兄弟选择器

相邻兄弟选择器：紧跟在目标元素后面的第一个兄弟元素（代表符号：+）

后续兄弟选择器：紧跟在目标元素后的所有兄弟元素（代表符号：~）

## [js] 你有使用过FileReader吗？说说它有哪些应用场景？

html5 文件API，可以用于文件断点续传


## [软技能] 你知道什么是人工智能和机器学习吗？说说你对它们的理解认知

机器学习就是建立一个模型，可以想象成一个 function，模型接收对应的输入 input，产生对应的输出output，同时记录一个权重 w，例如：如果多次接收到相同的 input ，则这个 input 的权重就越高。

最后的 output = 输入和权重之间的某种计算结果，每一次计算之后，都会去修改权重 w，相当于学习的过程。当经过大量数据的分析后，权重就几乎能够预测出准确的输出结果。

