
## [html] iframe框架都有哪些优缺点？

  优点：
  
    可以实现异步刷新，单个 iframe 刷新不影响整体窗口的刷新（可以实现无刷新上传，在 FormData 无法使用时）
    可以实现跨域，每个 iframe 的源都可以不相同（方便引入第三方内容）
    多页面应用时，对于共同的 header, footer 可以使用 iframe 加载，拆分代码（导航栏的应用）
  
  缺点：
  
    1. iframe会阻塞主页面的 Onload 事件；
    2. 搜索引擎的检索程序无法解读这种页面，不利于SEO;
    3. iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
    4. 使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript
    5. 动态给iframe添加src属性值，这样可以绕开以上两个问题。

## [css] 简述你对BFC规范的理解

  是CSS中的一个渲染机制，BFC就相当于一个盒子，BFC 全称“块级格式化上下文”(Block Formatting Context)，对应的还有 IFC。
  BFC 类似一个“结界”，如果一个 DOM 元素具有 BFC，那么它内部的子元素不会影响外面的元素；外面的元素也不会影响到其内部元素。

  形成条件（任意一条）

    html 根元素
    float的值不是none
    position 的值不是static或者relative
    display的值是inline-block,table-cell,flex,table-caption或者inline-flex
    overflow的值不是visible

  特性

    内部的盒子会在垂直方向上一个接一个的放置
    对于同一个BFC的俩个相邻的盒子的margin会发生重叠，与方向无关。
    每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此
    BFC的区域不会与float的元素区域重叠
    计算BFC的高度时，浮动子元素也参与计算
    BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然

  应用场景
    解决浮动子元素导致父元素，高度坍塌的问题
    解决文字环绕在float 四周的情况
    解决边距重叠问题 （父子，兄弟，空元素等）

## [js] 统计某一字符或字符串在另一个字符串中出现的次数

  ```javascript
  //手写
  function getCount(str) {
      let count = 0;
      while (str.includes(target)) {
          const index = str.indexOf(target);
          count++;
          str = str.substring(index + target.length);
      }
      return count;

  }

  //实现
  function strCount(str, target) {
      let count = 0
      if (!target) return count
      while(str.match(target)) {
          str = str.replace(target, '')
          count++
      }
      return count
  }

  console.log(strCount('abcdef abcdef a', 'abc'))


  function count(str, param) {
      const reg = new RegExp(param, 'g');
      return str.match(reg).length;
  }


  // 赞123，代码少nb啊
  function fn(parent, child) {
      return parent.split(child).length - 1  // 这个没毛病吧
  }
  ```
