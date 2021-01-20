## [html] 在默认的情况下，使用h1标签呈现出什么效果？

h1: 块级元素，体字加黑加粗，字号：24px。

我在chrome上看到是这个效果：

```css
h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
```
当然，有的地方使用font-size: 2rem;来控制h1标签的字体大小；

## [css] position的relative和absolute定位原点是哪里？

简言之，两者的定位原点都是其**包含块区域**的左上角；只是两种定位元素的包含块有所不同，得出的表明结论就是上述几位所说的。我简单的说一下我对包含块的一些理解：

**包含块**（containing block）：用来确定和影响元素的尺寸和位置属性的矩形区域；

    The size and position of an element are often impacted by its containing block. Percentage values that are applied to the width, height, padding, margin, and offset properties of an absolutely positioned element (i.e., which has its position set to absolute or fixed) are computed from the element's containing block. ——MDN

一个元素的包含块完全受其position属性值的影响：

1. static或relative：最近的块级（display属性值为block，inline-block或list-item）祖先元素的content-box区域；或者最近的建立格式上下文的祖先元素，比如：table容器，flex容器，grid容器或块级容器。

2. absolute：最近的非static（fixed, absolute, relative, or sticky）祖先元素的padding-box区域。

3. fixed：可视窗口viewport本身（属于continuous media类型时）或页面区域page area（属于paged media类型时），即**初始包含块**；

4. 当属性值为fixed或absolute时，其包含块还有可能是最近的含有transform或perspective值不为none的祖先元素的padding-box区域。

注：html元素的包含块叫做**初始包含块**（initial containing block），它具有可视窗口（用于连续媒体）或页面区域（用于分页媒体）的尺寸

## [js] 请描述下js的原型和原型链的理解以及它们之间的关系

原型：

Prototype 里面存储了该对象的内部属性。一般是不可见的，变量的原型可以在Chrome浏览器的调试窗口通过__proto__查看。函数的原型可以通过prototype查看。

原型的作用：

可以通过设置原型给对象添加自定义的方法以供后续调用。

原型链：

原型链是指，每个对象都有自己的__proto__指向自己构造函数的原型，且该构造函数也有自己的原型对象，一直向上直到原型对象为null。至此构成了一个原型链。

作用：

可以通过原型链实现继承。

关系：

原型是原型链的组成部分。

## [软技能] 要你做一个国外的web页面，你需要考虑哪些问题？

需求范围，词条翻译，工期，目标用户群用户行为习惯，交付方式和验收标准，最后一点，也是精髓--报价。

