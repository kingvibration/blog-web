<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>
    [html] 网页上的验证码是为了解决什么问题？说说你了解的验证码种类有哪些

      解决的问题：
        防止机器行为，确定是人为操作，比如登陆、发帖等。
        保护服务器，比如12306买票的时候，各种抢购的时候。
      验证码的类型：
        图形验证码
        手机验证码

    [css] 描述下你所了解的图片格式及使用场景

      通常网页在显示的图片（图形）的时候，有以下几种格式：GIF、PNG、JPG、SVG，还有个比较新的WebP格式。

      ▍GIF

      优点：GIF是动态的；支持无损耗压缩和透明度。

      缺点：的详细的图片和写实摄影图像会丢失颜色信息；在大多数情况下，无损耗压缩效果不如 JPEG 格式或 PNG 格式；GIF 支持有限的透明度，没有半透明效果或褪色效果。

      适用场景：主要用于比较小的动态图标。

      ▍PNG

      优点：PNG格式图片是无损压缩的图片，能在保证最不失真的情况下尽可能压缩图像文件的大小；图片质量高；色彩表现好；支持透明效果；提供锋利的线条和边缘，所以做出的logo等小图标效果会更好；更好地展示文字、颜色相近的图片。

      缺点：占内存大,会导致网页加载速度慢；对于需要高保真的较复杂的图像，PNG虽然能无损压缩，但图片文件较大，不适合应用在Web页面上。

      适用场景：主要用于小图标或颜色简单对比强烈的小的背景图。

        补充一下 PNG 的 PNG8 和 PNG24
        PNG8 透明图会有锯齿，低版本ie支持，文件小很多
        PNG24 透明图不会有锯齿，低版本ie不支持，文件大一些

        因为png8和png24存储的透明不是一个量级的。所以png8的透明细节上会出现锯齿。PNG24出来的比较晚所以支持不好可以引入其他方案来解决ie的问题，当然ie都凉了就不说了。

      ▍JPG

      优点：占用内存小，网页加载速度快。

      缺点：JPG格式图片是有损压缩的图片，有损压缩会使原始图片数据质量下降，即JPG会在压缩图片时降低品质。

      适用场景：由于这种格式图片对色彩表现比较好，所以适用于色彩丰富的图片。主要用于摄影作品或者大的背景图等。不合适文字比较多的图片。

      ▍SVG

      优点：SVG是矢量图形，不受像素影响，在不同平台上都表现良好；可以通过JS控制实现动画效果。

      缺点：DOM比正常的图形慢，而且如果其结点多而杂，就更慢；不能与HTML内容集成。

      适用场景：主要用于设计模型的展示等。

      ▍WebP

      优点：WebP格式，谷歌（google）开发的一种旨在加快图片加载速度的图片格式。图片压缩体积大约只有JPEG的2/3，并能节省大量的服务器宽带资源和数据空间。

      缺点：相较编码JPEG文件，编码同样质量的WebP文件需要占用更多的计算资源。

      适用场景：WebP既支持有损压缩也支持无损压缩。将来可能是JPEG的代替品。


    [js] 写一个方法判断字符串是否为回文字符串?

      “回文串”是一个正读和反读都一样的字符串，比如“level”或者“noon”等等就是回文串。

      给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
      说明：本题中，我们将空字符串定义为有效的回文串。

      示例 1:

      输入: "A man, a plan, a canal: Panama"
      输出: true
      示例 2:

      输入: "race a car"
      输出: false

      大概步骤：

      获取有效的字符串，我们利用正则去匹配字母和数字，因为忽略大小写，所以我们转成小写
      然后利用 split('') 把字符串分割成数组，再用数组的 reverse() 去反转，再用 join(‘’) 去拼接
      最后进行比较

    [软技能] 解释下CRLF是什么？

      CRLF是Carriage-Return Line-Feed的缩写，意思是回车换行。

      CR是\r 回车，LF是 \n 换行

      Windows操作系统采用两个字符来进行换行，即 CRLF；
      Unix/Linux/Mac OS X操作系统采用单个字符 LF 来进行换行；

  </pre>
</body>

<script>

  //手写

  // 正则优化，字符串处理合并

  function huiwen(str) {
      let str1 = str.replace(/[:,\n\r\s]/g, "").toLowerCase()
      let str2 = str1.split("").reverse().join("");
      return str1 === str2
  }

  let str1 = "A man, a plan, a canal: Panama";
  let str2 = "race a car";

  console.log(huiwen(str1))
  console.log(huiwen(str2))


  //实现
  /**
   * @param {string} s
   * @return {boolean}
   */
  var isPalindrome = function(s) {
      if (s.length === 1) return true
      const str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
      const strReverse = str.split('').reverse().join('')
      return str === strReverse
  };

</script>
</html>
