## [html] 在新窗口打开链接的方法是什么？那怎么设置全站链接都在新窗口打开？

1.a标签的target属性
2.在head标签下 加上

`<base target="_blank">` : 即可为所有的链接设置默认的打开方式为新窗口打开；

## [css] IE(6/7/8/9/10/11/Edge)下的hack写法分别有哪些？

1. IE9以及<IE9: \9;
2. IE8以及>IE8: \0;
3. IE7以及<IE7: *;
4. IE6:*或_;
5. edge不清楚;

## [js] 举例说明js如何实现继承？

JS实现继承的方式有以下几种：

1. 通过构造函数实现继承：
function Parent1 () {
  this.name= '111';
}
function Child1 () {
  Parent1.call(this);
  this.type='222';
} 
通过这种方式，只能继承定义在父类构造函数内的属性与方法，定义在prototype原型对象内的属性与方法则无法继承，因此对其改进。

2. 通过原型对象进行继承：
function Parent2 () {
  this.name= '111';
}
function Child2 () {
  this.type='222';
} 
Child2.prototype = new Parent2();
通过这种方式，则既能继承构造函数内的属性与方法，也能继承原型链上的属性与方法。但是，由于令其原型对象指向父类的一个实例对象，使得所有子类的实例对象所访问到的属性指向同一个对象，所以会出现改变一个子类实例对象的父类中的属性，另一个子类对象的属性也跟着改变。因此我们有下一个方法来改进：

3. 组合方法进行继承：
function Parent3 () {
  this.name= '111';
}
function Child3 () {
  Parent3.call(this);
  this.type='222';
} 
Child3.prototype = new Parent3();
但是这种方法，使得父类的构造函数执行了两次，为了减少父类的构造函数的不必要的多次执行，如下修改代码。

4. 组合方法进行继承优化：
function Parent4 () {
  this.name= '111';
}
function Child4 () {
  Parent4.call(this);
  this.type='222';
} 
Child4.prototype = Parent4.prototye;
这样解决了前面提到的问题，但是这样简单粗暴的继承，使子类的原型对象指向了父类的原型对象，会导致当子类实例对象通过constructor属性获取其构造函数时，获得的是父类的构造函数（因为constructor属性在prototype属性中被继承），因此再进行优化：

5. 组合方法进行继承优化2：
function Parent5 () {
  this.name= '111';
}
function Child5 () {
  Parent5.call(this);
  this.type='222';
} 
Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5;
由于Object.create()这个api的特性，父类的原型对象会继承在子类的原型对象的原型对象上，实现了子类原型对象与父类原型对象的隔离，这时再给子类的原型对象的constructor属性赋值。为什么直接在第四种方式的后面直接赋值呢？因为这是子类与父类的原型对象指向同一个对象，修改属性会同时修改子类与父类的原型对象。
这样5种实现继承的方法各自的优缺点都明了了。

## [软技能] 你会抓https和移动端的包吗？分别描述下这两种包要怎么抓？

Fiddler 抓取 http 和 https 的包， 抓https的包要从fidder上导出证书信任安装。如果要抓取手机上的包，需要在同一局域网下，然后手机安装fiddler的证书，开启http代理到抓包的ip上。
