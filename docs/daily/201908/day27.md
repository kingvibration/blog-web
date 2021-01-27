## [html] canvas默认画布的尺寸是多大？怎样设置才能不会变形？

默认画布尺寸为300*150 不加单位。

如果直接在css中设置canvas元素的width和height会导致画面变形。

如果不想画面变形可以直接在标签中设置，或者通过js来设置属性的宽高。

`<canvas width='300' height='200' id= 'a'>`

```javascript
var can = document.getElementById('a')
can.width ='500';
can.height = '300'
```

## [css] 如何使用css3实现一个div设置多张背景图片？

在 CSS3 中，只要在 background 中按顺序添加 url 就可以实现多张背景图片。每一个图片用 , 分开即可。

需要注意的就是浏览器的兼容问题。

`
background-image:url("1.jpg"),url("2.jpg"),url("3.jpg");
background-repeat: no-repeat, no-repeat, no-repeat;
background-position: 0 0, 200px 0, 400px 201px;
`

## [js] 写一个方法，将字符串中的单词倒转后输出，如：my love -> ym evol

`return str.split('').reverse().join('').split(' ').reverse().join(' ')`
## [软技能] 说说你是怎么安排你工作外的时间的？
