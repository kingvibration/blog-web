<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>
    [html] 什么是html的字符实体？版权符号代码怎么写？

      在HTML中，某些字符是预留的，这些预留字符必须被替换为字符实体.。 如： &lt; &gt;

      类似多个空格解析一个，可用&nbsp; &emsp;代替，

      &copy; ==> ©

    [css] 说说position的absolute和fixed共同与不同点分别是什么？

      相同点：
      1、都是用来给元素定位的属性，具有定位元素的一切特点（例如脱离文本流、不占据空间等等）；
      2、改变元素的呈现方式为display：block；
      3.这俩都能触发BFC，与外界布局互不影响。
      4.设置z-index属性能够产生层叠上下文。
      不同点：
      1、fixed的父元素永远是浏览器窗口，不会根据页面滚动而改变位置；absolute的父元素是可以设置的，他会永远跟随父元素的位置的改变而改变。

    [js] 举例子说明javascript的变量声明提升和函数声明提升

      变量声明只提升声明 不提升赋值操作，函数声明 函数体整体被提升。

    [软技能] 说说什么是设计模式，你最常用的设计模式有哪些？

      设计模式 是一种让代码可重用/可拓展/可解偶的拟物化思维，比如接口不同就用适配器之类的。

      创建型设计模式
      简单工厂模式、工厂方法模式、抽象工厂模式、建造者模式、原型模式、单例模式

      结构型设计模式
      外观模式、适配器模式、代理模式、装饰者模式、桥接模式、组合模式、享元模式

      行为型设计模式
      模板方法模式、观察者模式、状态模式、策略模式、职责链模式、命令模式、访问者模式、中介者模式、备忘录模式、迭代器模式、解释器模式

      技巧型设计模式
      链模式、委托模式、数据访问对象模式、节流模式、简单模板方式、惰性模式、参与者模式、等待者模式

      架构型设计
      同步模块模式、异步模块模式、widget模式、mvc模式、mvp模式、mvvm模式

  </pre>
</body>

<script>

  //手写

  //实现

  getName();
  var  getName = function(){
      console.log("小明");
  }
  function getName(){
      console.log("大明");
  }
  getName();

  //提升之后变成：

  var getName;
  function getName(){
      console.log("大明");
  }
  getName();//”大明“
  getName= function(){
      console.log("小明");
  }
  getName();//"小明"


</script>
</html>
