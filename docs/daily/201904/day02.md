
  ## [html] 第2天 html的元素有哪些（包含H5）？ 区分出行内元素、块级元素、空元素并在后面简要标注下作用. #4

    行内元素
    label, span, img, input, button, strong, b, i, td, audio, video, canvas

        备注：img、input属于行内替换元素。height/width/padding/margin均可用。效果等于块元素。

        在 CSS 中，可替换元素（replaced element）的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。

        简单来说，它们的内容不受当前文档的样式的影响。CSS 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。某些可替换元素，例如 iframe 元素，可能具有自己的样式表，但它们不会继承父文档的样式。

    块级元素
    div, p, h1 - h6, ol,oi, ul, li, header / main / footer / aside / article / section/ nav / menu / canvas / dt, dd,form,table, theader, tbody, tr, th
    head , meat - 申明页面的诸多属性, title, style, body, bir, hr

    去除的元素
    font

  ## [css] 第2天 CSS3有哪些新增的特性

    边框(borders):
      border-radius 圆角
      box-shadow 盒阴影
      border-image 边框图像
    背景:
      background-size 背景图片的尺寸
      background_origin 背景图片的定位区域
      background-clip 背景图片的绘制区域
    渐变：
      linear-gradient 线性渐变
      radial-gradient 径向渐变
    文本效果;
      word-break
      word-wrap
      text-overflow
      text-shadow
      text-wrap
      text-outline
      text-justify
    转换：
      2D转换属性
      transform
      transform-origin
      2D转换方法
      translate(x,y)
      translateX(n)
      translateY(n)
      rotate(angle)
      scale(n)
      scaleX(n)
      scaleY(n)
      rotate(angle)
      matrix(n,n,n,n,n,n)
    3D转换：
      *3D转换属性：

        transform
        transform-origin
        transform-style
        3D转换方法
        translate3d(x,y,z)
        translateX(x)
        translateY(y)
        translateZ(z)
        scale3d(x,y,z)
        scaleX(x)
        scaleY(y)
        scaleZ(z)
        rotate3d(x,y,z,angle)
        rotateX(x)
        rotateY(y)
        rotateZ(z)
        perspective(n)
    过渡
      transition
    动画
      @Keyframes规则
      animation
    弹性盒子(flexbox)
    多媒体查询@media


  ## [js] 第2天 写一个方法去掉字符串中的空格
  
  写一个方法去掉字符串中的空格，要求传入不同的类型分别能去掉前、后、前后、中间的空格



```javascript
  let str = "w an  da  n wa   ny i";

  console.log(str.replace(/\s/g, ""));


  var trim = function(str){
      return str.replace(/\s*/g,"");
  }
  str.replace(/\s*/g,"");       //去除字符串内所有的空格
  str.replace(/^\s*|\s*$/g,""); //去除字符串内两头的空格
  str.replace(/^\s*/,"");       //去除字符串内左侧的空格
  str.replace(/(\s*$)/g,"");    //去除字符串内右侧的空格
```

