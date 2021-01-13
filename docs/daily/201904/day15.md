
## [html] title与h1的区别、b与strong的区别、i与em的区别？

  title与h1的区别

  定义：
  title是网站标题，一个页面只能有一个
  h1是文章主题

  作用：
  title概括网站信息，可以直接告诉搜索引擎和用户这 个网站是关于什么主题和内容的，是显示在网页Tab栏里的；
  h1突出文章主题，面对用户，更突出其视觉效果，指向 页面主体信息，是显示在网页中的。

  注意：
  如果title为空，但是页面存在h1,b,strong标签，搜索引擎会默认页面title为h1内的内容，所以 得出结论h1是在没有外界干扰下除title以外第二个能强调页面主旨的标记，在一个页面中应该使用且只使用一次h1标记。

  b与strong的区别

  定义：
  b(bold)是实体标签，用来给文字加粗
  strong是逻辑标签，作用是加强字符语气

  区别：
  b标签只是加粗的样式，没有实际含义，常用来表达无强调或着中意味的粗体文字
  strong表示标签内字符重要，用以强调，其默认格式是加粗，但是可以通过css添加样式，使用别的样式强调

  建议：为了符合css3的规范语义化，b应尽量少用而改用strong

  i与em的区别

  定义：
  i(italic)是实体标签，用来使字符倾斜
  em(emphasis)是逻辑标签，作用是强调文本内容

  区别：
  i标签只是斜体的样式，没有实际含义，常用来表达无强调或着重意味的斜体，比如生物学名、术语、外来语；
  em表示标签内字符重要，用以强调，其默认格式是斜体，但是可以通过CSS添加样式。

  建议：为了符合CSS3的规 范，i应尽量少用而改用em

  tootip:
  物理元素是告诉浏览器我应该以何种格式显示文字，逻辑元素告诉浏览器这些文字有怎么样的重要性。
  对于搜索引擎来说em和strong比i和b要重视的多。

## [css] style标签写在body前和body后的区别是什么？

  在 HTML4 的时候，不应该把 style 放到 body 中间。

  浏览器在渲染页面时 DOM 和 CSSOM 是并行的，然后两者结合形成 Render Tree 显示页面。
  从直觉上来说，style 写在 body 前不会对 DOM 的渲染进行阻塞；
  而写在 body 内会对 DOM 渲染进行阻塞。会产生 FOUC（Flash of Unstyled Content) 的现象，既一瞬间的白屏或者样式的突然变化（原因是 Render Tree 重新生成了）。

  不过 W3C 在 HTML5.2 的定义中对于 style 标签的使用的定义中是允许将 style 放到 body 中的。

## [js] 写一个数组去重的方法（支持多维数组）


## [软技能] 对于加班你是怎么看的？

  首先，始终要以工作效率为首要目标，不能出现为了加班而故意降低白天的工作效率。
  其次，在保证了白天的工作效率以后，如果确实需要加班，则可以适度的加班，但不能超过10点，不然肯定影响第二天的效率。

```javascript


  //手写

   let arr = [1,2,3,4,5,6,7,5,4,3,0];

   console.log([...new Set(arr)]);

   function quchong(arr) {
       let res = [];
       arr.forEach(v => {
           if (!res.includes(v)){
               res.push(v)
           }
       })
       return res;
   }

   console.log(quchong(arr));

  //实现


  function flat(arr, target) {
      arr.forEach(item => {
          if (Array.isArray(item)) {
              flat(item, target)
          } else {
              target.push(item)
          }
      })
  }

  function flatArr(arr) {
      let result = []

      flat(arr, result)

      return result
  }

  function uniqueArr(arr) {
      return [...new Set(flatArr(arr))]
  }

  const result = uniqueArr([1, 2, 3, 4, [3, 4, [4, 6]]])

  console.log(result) // 1,2,3,4,6


  //有一个兼容性不太好的写法：

  function uniqueArr2(arr) {
      return [...new Set(arr.flat(Infinity))]
  }



  // 将数组降维
  function resetArray(arr, newArr){
      arr.forEach(item => {
          if (toString.call(item) === "[object Array]") {
              resetArray(item, newArr);
          } else {
              newArr.push(item);
          }
      })
  }
  // 将数组去重
  function uniArr(arr) {
      var newArr = [];
      resetArray(arr, newArr);
      console.log([...new Set(newArr)]);
  }
  arr = [1, 2, 3, [1, 2, [3, 4]], [1]]
  uniArr(arr)
```
