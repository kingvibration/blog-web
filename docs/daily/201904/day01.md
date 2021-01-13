
  ## [html] 第1天 页面导入样式时，使用link和@import有什么区别？
  区别：
  1. link是HTML标签，@import是css提供的。
  2. link引入的样式页面加载时同时加载，@import引入的样式需等页面加载完成后再加载。
  3. link没有兼容性问题，@import不兼容ie5以下。
  4. link可以通过js操作DOM动态引入样式表改变样式，而@import不可以。


  ## [css] 圣杯布局和双飞翼布局的理解和区别，并用代码实现 

  作用：圣杯布局和双飞翼布局解决的问题是一样的，就是两边顶宽，中间自适应的三栏布局，中间栏要在放在文档流前面以优先渲染。
  
  区别：圣杯布局，为了中间div内容不被遮挡，将中间div设置了左右padding-left和padding-right后，将左右两个div用相对布局position: relative并分别配合right和left属性，以便左右两栏div移动后不遮挡中间div。
       双飞翼布局，为了中间div内容不被遮挡，直接在中间div内部创建子div用于放置内容，在该子div里用margin-left和margin-right为左右两栏div留出位置。



  ## [js] 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值 

  这一题是起源题
  描述：

  这是一道大题目，把考点拆成了4个小项；需要侯选人用递归算法实现（限制15行代码以内实现；限制时间10分钟内完成）：
  
  a) 生成一个长度为5的空数组arr。
  
  b) 生成一个（2－32）之间的随机整数rand。
  
  c) 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到arr内[需要使用递归实现，不能使用for/while等循环]
  
  d) 最终输出一个长度为5，且内容不重复的数组arr。



```javascript

  // 手写
  var arr2 = new Array(5);
  console.log(arr2)

  function getArr2(){
      return arr2
  }
  function getRandom2() {
      return Math.ceil(Math.random() * 30 + 2)
  }
  console.log(randomArr2(0));
  console.log(getArr2());
  function randomArr2(index) {
      arr2[index] = getRandom2();
      index++;
    if(index < arr2.length){
        console.log(index);
        return randomArr2(index)
    }else {
        console.log(arr2);
        return arr2
    }
  }


  // 实现

    var arr = new Array(5);
    var num = randomNumber();
    var i = 0;
    randomArr(arr,num);
    function randomArr(arr,num) {
        if (arr.indexOf(num)< 0){
            arr[i] = num;
            i++;
        } else {
            num = randomNumber();
        }
        if (i>=arr.length){
            console.log(arr);
            return;
        }else{
            randomArr(arr,num)
        }
    }
    function randomNumber() {
        return Math.floor(Math.random()*31 + 2)
    }


    console.log("-----------------------测试分割线-------------------------")

  function fn1() {
      return 1;
  }

  function fn2() {
      function fn1() {
          return 1;
      }
      return fn1()
  }
  console.log(fn2())
```
