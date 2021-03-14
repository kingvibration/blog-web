## [html] 有哪些方法可以将图片和文字显示在同一行上呢？
```html
 <style>
     /* 第一种 */
    img {
       vertical-align: middle; 
    }
    /* 第二种 */
    div {
      display: flex;
      align-items: center;
    }
  </style>
  <div class="box">
    <img width="100" src="./1.png" alt="">
    前端
  </div>
```
## [css] 请使用css写一个多级的下拉菜单
hover
## [js] 写一个方法将html页面生成为图片
html2canvas
## [软技能] 你觉得该不该写注释？你写注释的原则是什么？
注释肯定要写的。
1. 方便阅读理解；
2. 快速定位问题；
3. 有利于代码回滚。
