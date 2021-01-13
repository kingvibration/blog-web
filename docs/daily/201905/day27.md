<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>
    [html] 你了解HTML5的download属性吗？

      download 属性规定被下载的超链接目标，该属性也可以设置一个值来规定下载文件的名称。兼容性各异，Chrome和Firefox仅支持加载同源链接。
      参考CANIUSE：<a href="https://www.caniuse.com/#search=a%20download" target="_blank">https://www.caniuse.com/#search=a%20download</a>

    [css] inline、block、inline-block这三个属性值有什么区别？

      每个元素都两个盒子，外在盒子和内在盒子。外在盒子负责元素是可以一行显示，还是只能换行显示；内在盒子负责宽高、内容呈现什么的。
      外在盒子-内在盒子

      CSS显示模块分为内部显示类型和外部显示类型，内部显示类型是定义子元素如何参与内部布局，外部显示类型定义了父元素如何参与外部整个文档流的布局，所以

      inline -> inline-inline
      block -> block-block
      inline-block -> inline-block


      inline： 行内元素，元素不独占一行，不可以修改宽高
      block： 块级元素，元素独占一行，可以修改宽高
      inline-block： 行内块级元素，元素不独占一行，并且可以修改宽高

    [js] 写一个方法，使得sum(x)(y)和sum(x,y)返回的结果相同


    [软技能] 说说你对浏览器的关键渲染路径的理解

    <a href="https://segmentfault.com/a/1190000008694911" target="_blank">https://segmentfault.com/a/1190000008694911</a>

  </pre>
</body>

<script>

  //手写

  function sum(x, y) {
      if (arguments.length > 1){
          return x + y
      }
      return function (y) {
          return x + y
      }
  }

  let res1 = sum(1)(2);
  let res2 = sum(1,2);

  console.log(res1)
  console.log(res2)

  //实现

  function sum2(x){
      if(arguments[1]){
          var arr = Array.prototype.slice.apply(arguments);
          x = arr.reduce((a, c)=> a + c)
          return x;
      }else{
          function add(b) {
              x = x + b;
              return add;
          }
          add.toString = function() {
              debugger
              return x;
          }
          return add;
      }
  }
  var res3 = sum2(1)(2)(3)(4)(5)(6);
  var res4 = sum2(1,2,3,4,5,6);

  //console.log(res3); //21
  //console.log(res4); //21


  let a = {a: 1};
  let b;
  a.toString = function () {
      return 2
  }
  // 此处会调用toString方法, 所以b = 3
  b = a + 1;

  console.log('a是', a, 'b是', b)
</script>
</html>
