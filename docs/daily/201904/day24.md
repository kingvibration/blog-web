<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>

    [html] 说说你对属性data-的理解

      data- 属性是H5新增的自定义属性，也可以用来存储值。我个人用的不多，这个data- 属性倒是和vue中的v-bind 功能相似， 自定义属性，绑定数据。也和上面说的一样可以通过js进行获取使用

      原本 HTML 也允许自定义 attributes 因此在早期前端，为了将数据塞在标签中，往往会采用自定义属性存放数据的方法。

      而 data- 便是 HTML 5 中用来存放数据的标签。使用 data-* 时，需要注意，data- 之后的单词必须是小写的，但是可以用多个 - 连接。而在对应的 DOM 方法中，我们可以通过 ele.dataset[属性名] 进行访问。在这里的属性名可以使用驼峰（转换规则和 vue 的组件名称转换一样）。

      相比之前的自定义属性存放数据，使用 data-* 的方法，在数据的获取上会比较方便。


    [css] 你有用过CSS预处理器吗？喜欢用哪个？原理是什么？

      它能让你的CSS具备更加简洁、适应性更强、可读性更强、层级关系更加明显、更易于代码的维护等诸多好处。
      CSS预处理器种类繁多，目前Sass、Less、用的比较多。
      使用功能：
      1、嵌套：反映层级和约束
      2、变量和计算： 减少重复代码
      3、Extend 和 Mixin 代码片段 (用的少)
      4、循环：适用于复杂有规律的样式
      5、import css 文件模块化


    [js] 如何快速让一个数组乱序，写出来

    [软技能] 你经历过老板要求兼容IE吗？IE几？有什么感悟？

      我在09年的时候被要求兼容过最低的是IE5.5（一小段时间），后面就是IE6两年！！！我觉得那个时候去兼容IE也还好没有这么恐怖，总结一条就是写法要规范，要有好的习惯，比如说该清除浮动的你没有清除这将会导致混乱。IE的hack也是挺有意思的！

  </pre>
</body>

<script>

  //手写



  //实现

  var arr= [1,2,3,4,5];
  arr.sort(function(a,b){return Math.random() > 0.5 ? 1 : -1});
  console.log(arr);// [ 1, 3, 5, 2, 4 ]



  // 使用array.sort()进行乱序存在一定问题，增大样本进行实验之后可以发现这种乱序方案并不是完全随机的（所有元素会大概率停留在自己的初始位置）（v8处理排序是小于10个是插入排序，大于10个是快排，排序算法复杂度介于O(n)与O(n2)之间，也就是存在两个元素都没有比较的机会，因此不是完全随机），这里可以使用Fisher–Yates shuffle（洗牌算法）
  Array.prototype.shuffle = function() {
      var input = this;
      for (var i = input.length - 1; i >= 0; i--) {
          var randomIndex = Math.floor(Math.random()*(i+1));
          var itemAtIndex = input[randomIndex];
          //input[randomIndex] = input[i];
          //input[i] = itemAtIndex;
          // 或
          [input[randomIndex], input[i]] = [input[i], itemAtIndex]
      }
      return input;
  }
  var tempArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  tempArray.shuffle();
  console.log(tempArray);
</script>
</html>
