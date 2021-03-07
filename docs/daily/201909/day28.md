## [html] 为什么HTML5里面我们不需要DTD？

先说一下什么是DTD或者说我们为什么在html5之前需要使用DTD
下面是DTD的作用：

* 通过 DTD，您的每一个 XML 文件均可携带一个有关其自身格式的描述。
* 通过 DTD，独立的团体可一致地使用某个标准的 DTD 来交换数据。
* 应用程序也可使用某个标准的 DTD 来验证从外部接收到的数据。

首先在html4中是基于SGML所以需要对DTD进行引用，而html5是全新的不基于SGML所以不必对DTD进行引用，只需要告诉浏览器这是html5就好

## [css] 你有用过clip-path吗？说说你对它的理解和它都有哪些运用场景？

clip-path属性可以创建一个只有元素的部分区域可以显示的剪切区域

* 它的值可以为以下几种

  * : 用 表示剪切元素的路径
  * : 一种形状，其大小和位置由<几何盒>值定义。如果没有指定几何框，则边框将用作参考框
  * : 如果同 一起声明，它将为基本形状提供相应的参考框盒。通过自定义，它将利用确定的盒子边缘包括任何形状边角（比如说，被 border-radius 定义的剪切路径）
  * none: 不创建的剪切路径

## [js] 举例说明如何使用WebSQL？

```javascript
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
var msg;
 
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "菜鸟教程")');
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "www.runoob.com")');
    msg = '<p>数据表已创建，且插入了两条数据。</p>';
    document.querySelector('#status').innerHTML =  msg;
});
 
db.transaction(function (tx) {
tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
    var len = results.rows.length, i;
    msg = "<p>查询记录条数: " + len + "</p>";
    document.querySelector('#status').innerHTML +=  msg;
 
    for (i = 0; i < len; i++){
        msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
        document.querySelector('#status').innerHTML +=  msg;
    }
}, null);
});

```
## [软技能] 说说你对前端工程师日常的开发流程的理解

1. 接到原型图/UI图
2. 分析确定功能点，看有没有难点需要预研
3. 拆分任务，确定接口，规划时间
4. 写代码,中途遇到的坑，在一个地方记录下来
5. 确保代码质量(可读性、可维护性)，提交代码
6. 自测
7. 发布测试
8. 修改BUG
9. 上线
