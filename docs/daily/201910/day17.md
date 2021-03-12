## [html] 如何给一个下拉选项进行分组？

```html
<select name="" id="">
    <optgroup label="四川">
            <option value="">绵阳</option>
            <option value="">广汉</option>
    </optgroup>
    <optgroup label="江苏">
            <option value="">苏州</option>
            <option value="">南京</option>
    </optgroup>
</select>
```
## [css] 请描述下你对translate()方法的理解

Single length/percentage value
    
    一个长度值或百分比表示X轴和Y轴使用一样的值进行二维上的平移。等同于translate() （2D 平移）函数指定单个值。

Two length/percentage values

    两个长度值或百分比表示在二维上分别按照指定X轴和Y轴的值进行的平移。等同于translate() （2D 平移）函数指定两个值。

Three length/percentage values

    三个长度值或百分比表示在三维上分别按照指定X轴、Y轴、Z轴的值进行的平移。等同于translate3d() （3D 平移）函数。


## [js] 说下你对面向对象的理解

说点边缘的，现在普遍的观点是在组件化的东西其实并不推荐用面向对象(Class)来做，就如React也推出了hooks，其实extends/implements这些OO的东西并不适用与前端组件化的编程，就像Vue3，也是用函数表示组件，而非很早之前传言的Class。面向对象更适合后端的业务，而非Web前端的UI编程，前端更适合用函数式的编程方式。(小白的一点愚见，欢迎指教，轻喷~)

面向对象思想，就是将万事万物中具有相关的属性，相关的方法的东西，归纳成一个类。

当我们想做某一件事情的时候，先找到能解决这件事情的一个类，然后创建这个类的一个实例，用实例去完成这件事情。

由于一个类中的属性和方法联系非常紧密，并且与另一个类中的属性和方法并不相关，所以能够实现高内聚，低耦合的目的。

## [软技能] 你上家公司的接口是怎么管理的？

开发人员自测的话，使用postman；
测试人员搭了个在线自动测试工具；
接口文档通过配置实现自动生成。
