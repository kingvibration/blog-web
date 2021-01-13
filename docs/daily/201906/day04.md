<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>
    [html] 写出html提供的几种空格实体（5种以上）

      &nbsp;

      它叫不换行空格，全称No-Break Space，它是最常见和我们使用最多的空格，大多数的人可能只接触了 ，它是按下space键产生的空格。在HTML中，如果你用空格键产生此空格，空格是不会累加的（只算1个）。要使用html实体表示才可累加，该空格占据宽度受字体影响明显而强烈。

      &ensp;

      它叫“半角空格”，全称是En Space，en是字体排印学的计量单位，为em宽度的一半。根据定义，它等同于字体度的一半（如16px字体中就是8px）。名义上是小写字母n的宽度。此空格传承空格家族一贯的特性：透明的，此空格有个相当稳健的特性，就是其占据的宽度正好是1/2个中文宽度，而且基本上不受字体影响。

      &emsp;

      它叫“全角空格”，全称是Em Space，em是字体排印学的计量单位，相当于当前指定的点数。例如，1 em在16px的字体中就是16px。此空格也传承空格家族一贯的特性：透明的，此空格也有个相当稳健的特性，就是其占据的宽度正好是1个中文宽度，而且基本上不受字体影响。

      &thinsp;

      它叫窄空格，全称是Thin Space。我们不妨称之为“瘦弱空格”，就是该空格长得比较瘦弱，身体单薄，占据的宽度比较小。它是em之六分之一宽。

      &zwnj;

      它叫零宽不连字，全称是Zero Width Non Joiner，简称“ZWNJ”，是一个不打印字符，放在电子文本的两个字符之间，抑制本来会发生的连字，而是以这两个字符原本的字形来绘制。Unicode中的零宽不连字字符映射为“”（zero width non-joiner，U+200C），HTML字符值引用为： &#8204;

      &zwj;

      它叫零宽连字，全称是Zero Width Joiner，简称“ZWJ”，是一个不打印字符，放在某些需要复杂排版语言（如阿拉伯语、印地语）的两个字符之间，使得这两个本不会发生连字的字符产生了连字效果。零宽连字符的Unicode码位是U+200D (HTML: &#8205; &zwj;）。

      此外，浏览器还会把以下字符当作空白进行解析：空格（&#x0020;）、制表位（&#x0009;）、换行（&#x000A;）和回车（&#x000D;）还有（&#12288;）等等。

    [css] 举例说明css中颜色的表示方法有几种

      颜色单词: blue / lightblue / skyblue / transparent(透明)
      rgb(0-255, 0-255, 0-255) / rgba(0-255, 0-255, 0-255, 0-1)
      hsl色相: hsl(色调，饱和度，明度) hsla( 色调，饱和度，亮度，不透明度 ) (兼容性)
      十六进制: #000000- #FFFFFF ( #000 - #fff ) ( 0-9 a-f | [A-F] )

    [js] 如何让(a==1 && a==2 && a==3)的值为true，把"=="换成"==="后还能为true吗？

      === 严格相等，会比较两个值的类型和值
      == 抽象相等，比较时，会先进行类型转换，然后再比较值

      "==" 转化规则：
      首先通过valueOf 转换，即 obj.valueOf()方法的返回值
      如果 obj.valueOf()方法的返回值是原始类型，那么直接返回
      如果不是，再通过 obj.toString()方法转换
      如果obj.toString()返回的是原始类型，直接返回该值
      如果还不是原始类型，抛出不能转换异常。


    [软技能] 如果面试官让你先自我介绍下，然后说下你的工作经历，你该怎么说？

      我是xxx，毕业于 xxx，专业是 xxx，在 xxx 开始工作，期间负责 xxx，做过 xxx 项目，在 xxx 年换了工作，期间负责 xxx，做过了 xxx 项目，在工作经历中，涉及了 xxx 技术，xxx 端，好，我的介绍完毕。


  </pre>
</body>

<script>

  //手写

  let a = {
      a: 1
  };
  a.toString = function(){
      return a.a++
  }

  console.log(a==1)
  //console.log(a==1 && a==2 && a==3)

  //实现

  //方案一
  var val = 0;

  Object.defineProperty(window, 'a', {
      get: function(){
          return ++val;
      }
  })


  // 方案二
  // 简单来说就是 == 会触发valueOf()方法 和 toString方法
  let b = {
      value: 0,
      valueOf() {
          return ++this.value;
      }
  }
  b == 1 && b == 2 && b == 3 // true


</script>
</html>
