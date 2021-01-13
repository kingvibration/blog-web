<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>

    [html] 写个例子说明HTML5在移动端如何打开APP？

      <a href="zhihu://">打开知乎</a>
      Android 是利用 deeplink， iOS 是利用 URL Schemes

    [css] 说说你对jpg、png、gif的理解，分别在什么场景下使用？有使用过webp吗？

      jpg, 色彩复杂图片
      png, 色彩简单图片
      gif, 动图, 或者色彩极简的icon等
      webp, 判断能使用webp的浏览器就是用webp

    [js] formData主要是用来做什么的？它的操作方法有哪些？

      1、将form表单元素的name与value进行组合

      2、异步上传表单

      用于后端参数处理为multipart/form-data的情况下 ，现在通常用于上传文件

      利用 FormData 对象，可以通过 JavaScript 键值对来模拟一系列表单控件，还可以使用 XMLHttpRequest的 send() 方法来异步提交表单。

      <input type="file" id="fileBtn">


    [软技能] js动画和css动画有什么区别？

      js 动画
      会进入函数调用栈，走完事件循环才会走渲染，如果过程中还有频繁获取 dom 状态恐怕是药丸。
      但相比 css 动画（不考虑 css 变量），js 动画可配置目标值或速率等，搭配 transition 挺不错。
      且 js 动画做暂停、反向和复杂的节奏都要更棒。
      再比如弧形运动轨迹，对 css 动画而言恐怕就比较难搞了。
      css 动画
      非常简易的 hover active checked 等动效用 css 来写真是太方便了。
      对循环播放的动画，多数情况下也是 css 动画更佳。
      css 动画库的复用感觉会相较高很多。
      至于所谓的 gpu 加速或 will-change 很难讲哟，真的有效，但却不是很懂。


  </pre>


</body>

<script>

  //手写

  //实现

  document.getElementById('fileBtn').onchange = function () {

      //这是传入的内容是空
      var fm = new FormData();
      //给fm对象添加文件内容
      fm.append('icon',this.files[0]);
debugger
      //发送ajax请求
      var xhr = new XMLHttpRequest();
      //设置请求行
      xhr.open('post','getUrl.php');
      //发送数据
      xhr.send(fm);
      //监听事件完成
      xhr.onreadystatechange = function(){
          if(xhr.readyState == 4 && xhr.status == 200) {

              // console.log(xhr.responseText);
              document.querySelector('.imgShow').style.background = "url("+ xhr.responseText +") no-repeat center/cover";
          }
      }
  }

</script>
</html>
