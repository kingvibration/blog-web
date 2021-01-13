<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>

    [html] 请写出唤醒拔打电话、发送邮件、发送短信的例子

      <a href="tel:139xxxxxxxx">一键拨打号码</a>
      <a href="mailto:yuojian@163.com">一键发送邮件</a>
      <a href="sms:139xxxxxxx">一键发送短信</a>

      顺便想起来 input 也有几个类型来影响键盘弹出的样式

      <input type="text" placeholder="请输入文字"/>
      <input type="number" pattern="[0-9]*" placeholder="请输入qq号"/>
      //type="number"限定输入数字，pattern="[0-9]*"限制数字范围
      <input type="tel" placeholder="请输入电话"/>
      <input type="date" placeholder="请输入日期"/>
      <input type="datetime-local" placeholder="请输入时间"/>

    [css] 如何消除transition闪屏？

      看题意不知道在问什么，说明这个问题自己没注意或不熟悉，而不是去怀疑题目出的有问题。

      这个问题自己没有遇到过，或者说没有注意过这个问题，网上搜索了下答案，不知道有没有效果，下次遇到这个问题就可以往这方面排查和思考了：

      补充一下，transition闪屏发生的情况，搜了一下是在IOS的Safari浏览器下，使用transition来进行动画变换时候就会出现

      .css {
          -webkit-transform-style: preserve-3d;
          -webkit-backface-visibility: hidden;
          -webkit-perspective: 1000;
      }

    [js] 举例子说说你对js隐式类型转换的理解

      js在做运算时，如果两边数据不一样，编译器会自动做一个数据转换再进行比较

      转换规则

      字符串连接符(+)，转换为String
      2.关系运算符(>,<,>=,<=,==,===,!==)、算术运算符号(+,-,*,/,%,++,--)，转换为Number
      3.逻辑非运算符(!)，转换为Boolean
      特殊点：
      1.数组、对象等复杂数据类型在隐式转换时会先使用valueOf()获取其原始值，如果原始值不是Number则调用toString()转成String，再转成Number

      2.Boolean转换在以下几种情况下为false：
      0，-0，NaN，undefined，""，null，[]，false

      3.undefined与null的特殊情况
      undefined == undefined // true
      undefined == null // true
      null == null // true

      4.NaN与任何数据比较都是false，包括自己 // 六亲不认的步伐


    [软技能] 你觉得你自己最大的优点和缺点分别是什么？能否举例说明一下？

      这种题基本上就是先说一两个优点，然后再说一个两个缺点，但是，关键是后面要把缺点说成优点，怎么说呢，
      比如你说自己的缺点是太执拗，举例，因为有的时候自己做需求前，总喜欢把需求原委弄清楚，各种准备工作做好了才开始做需求，做的过程中又喜欢把注释和文档都写的整整齐齐，但是这样偶尔会造成让自己需要加班才能完成需求。
      基本上这样说就把一个缺点说成了几个优点：

      弄清楚需求，准备工作做好，说明做事有方法
      注释文档写清楚，说明代码风格好
      加班解决问题，说明能吃苦，愿意付出，对需求质量要求高
      是不是套路。


  </pre>
</body>

<script>

  //手写

  //实现

  //测试代码

  let obj = {a: 1};

  obj.valueOf = function(){
      console.log("会调valueOf方法")
  }

  obj.toString = function(){
      console.log("会调toString方法")
  }
  console.log(obj == false)

</script>
</html>
