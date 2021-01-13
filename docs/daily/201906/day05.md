
  <style>
    .heart {
      position: relative;
      width: 100px;
      height: 90px;
    }
    .heart:before,
    .heart:after {
      position: absolute;
      content: "";
      left: 50px;
      top: 0;
      width: 50px;
      height: 80px;
      background: red;
      border-radius: 50px 50px 0 0;
      transform: rotate(-45deg);
      transform-origin: 0 100%;
    }
    .heart:after {
      left: 0;
      transform: rotate(45deg);
      transform-origin: 100% 100%;
    }
  </style>


## [html] html直接输入多个空格为什么只能显示一个空格？

  该行为由 CSS white-space 控制，其默认值 normal 的表现即为多个空格压缩成一个。

  接上，设置为pre-wrap，pre等属性值，是可以解决这个问题的

## [css] 用CSS绘制一个红色的爱心

 <div class="heart"></div>

上面老哥的：https://codepen.io/foreverZ133/pen/XLpJdK

用镂空图的：https://codepen.io/foreverZ133/pen/RzKNZB

用 box-shadow 的：https://wow.techbrood.com/fiddle/27194

用 SVG 的：https://wow.techbrood.com/fiddle/36760

仅拓展思路，不见得项目中会这样玩。

## [js] 说说你对数据类型转换的理解是什么？类型转换的方法有哪些？

  String to Number
    1. Number(str)
    2. +str

  Number to String
    1. toString(num)
    2. ''+num

  All to Boolean
    Boolean(value)
    !!value
  Object to JSON
    JSON.striingify(obj)

  JSON to Object
    JSON.parse(obj)

## [软技能] 最后如果技术面和HR面问你：你还有什么问题吗？你分别会问些什么？

  技术面
  技术面提问的话我会比较关注团队情况，技术栈和方向，以及目前的业务方向
  团队人数，团队里面的工作、学习、生活氛围等。
  目前的技术栈是什么，以及接下来的技术方向是怎样的，比如是否拓展多端能力等
  业务方向，因为很多公司会有很多业务，有些甚至是跨行业的，比如一家教育公司可能有金融业务等，所以了解清楚业务对我来说也比较重要。

  HR面
  HR面提问的话我会比较关注切身的利益，毕竟你都到HR面了，谈谈待遇也无伤大雅的。

  五险一金是否缴纳，社保公积金缴纳比例，这块其实差别还蛮大的，按基础交和全额交，差距挺大。
  公司有哪些福利待遇？
  公司对新人会有培训吗？
  公司有完善的绩效考核系统和职级晋升体系吗？
  公司发薪日
  以上是我目前会比较关注的，当然不同时期可能关注的点会不一样，比如大佬级别后期根本不关注待遇，人家就是去当合伙人的，那也没话说。
