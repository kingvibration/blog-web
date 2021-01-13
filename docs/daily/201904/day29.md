<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>
    [html] 你了解什么是无障碍web（WAI）吗？在开发过程中要怎么做呢？

      无障碍 web 是指能让视觉障碍的人也能根据屏幕阅读器的提示阅读网页。这一块只知道一个大致概念，国内使用较少（甚至还遇到过加了 title 被测试提 bug 的情况）

      目前能想到的只有下面几点：

      尽可能地使用语义化标签，如 section, article 等标签
      img 标签添加 alt
      button 或者按钮上添加 title
      表单尽量使用 label for 可以和控件的 id 进行关联
      参考文章：
      <a href="https://mp.weixin.qq.com/s/3QNXBpGB0ZiroV8OGnXCbA" target="_blank">无障碍 Web</a>

    [css] 请描述css的权重计算规则

      权重值计算

      <table border="1">
      <tr><td>选择器	           </td><td>         案例	        </td><td>   权重值 </tr>
      <tr><td>!important	     </td><td>         !important	  </td><td>   Infinity </tr>
      <tr><td>内联样式	         </td><td>         style=".."	  </td><td>   1000 </tr>
      <tr><td>ID	             </td><td>         #id	        </td><td>   100</tr>
      <tr><td>class	           </td><td>         .class       </td><td>	  10</tr>
      <tr><td>属性	             </td><td>         [type='text']</td><td>	  10</tr>
      <tr><td>伪类              </td><td>	       :hover	      </td><td>   10</tr>
      <tr><td>标签	             </td><td>         p	          </td><td>   1</tr>
      <tr><td>伪元素	           </td><td>         ::first-line </td><td>	  1</tr>
      <tr><td>相邻选择器、子代选择器、通配符</td><td>* > +	        </td><td>   0</tr>
      </table>
      比较规则

        1000>100。也就是说从左往右逐个等级比较，前一等级相等才往后比。
        在权重相同的情况下，后面的样式会覆盖掉前面的样式。
        继承属性没有权重值
        通配符、子选择器、相邻选择器等的。虽然权值为0，但是也比继承的样式优先。
        ie6以上才支持important，并且尽量少用它。

      参考：

      <a href="https://www.jb51.net/css/597210.html" target="_blank">参考1</a>
      <a href="http://www.cnblogs.com/dq-Leung/p/4213375.html" target="_blank">参考2</a>
      <a href="https://blog.csdn.net/qq_36130706/article/details/81415469" target="_blank">参考3</a>
      <a href="https://blog.csdn.net/Street_Partners/article/details/83051546" target="_blank">参考4</a>

    [js] 写一个获取数组的最大值、最小值的方法

    [软技能] 在工作中能让你最有成就感的是什么？并介绍下你最得意的作品吧


  </pre>


  <div class="red blue">css计算规则和class先后顺序无关</div>
  <div class="blue red">css计算规则和class先后顺序无关</div>
  <style>
    .red {
      color: red;
    }

    .blue {
      color: blue
    }
  </style>
</body>

<script>

  //手写

  let arr = [1,2,3,4]
  Math.max(...arr)
  Math.min(...arr)


  //实现

  Math.max.apply(Array,[25,62,91,78,34,62]) //  91
  Math.min.apply(Array,[27,64,90,78,34,62]) //  27


  // 利用 reduce 冒泡排序

  // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

  const getMax = arr => arr.reduce((acc, val) => acc = acc < val ? val : acc)
  let res = getMax([25, 62, 91, 78, 34, 62]) // 91
  console.log('getMax', res)

  // 一点感悟：每次返回的值，内部会赋值给acc，第一个参数，total,像是缓存的感觉

  const getMax2 = function(arr) {
      return arr.reduce(function(acc, val) {
          console.log('acc', acc);
          return acc < val ? val : acc
      })
  }

  let res2 = getMax2([25, 62, 91, 78, 34, 62]);
  console.log('getMax2', res2)

</script>
</html>
