## [html] 请说说应用缓存中的回退和网络分别是什么？

应用缓存中的回退，指在服务器不可访问时，将会显示某文件。

FALLBACK:<br>
/home/ /homeoffline.html

网络命令描述不需要缓存的文件，例如以下代码中，我们说”home.aspx”永远都不应该被缓存或者离线访问。

NETWORK:<br>
home.aspx

## [css] 你有用过IE css的expression表达式吗？说说你对它的理解和它有什么作用呢？

主要用来解决IE 低版本样式自适应的问题。

比如：height:expression(this.offsetHeight);

缺点：性能问题，会重复执行，可达 1000次/秒

## [js] 请描述下ajax的请求都有哪些步骤？

1. 创建XMLHttpRequest<br/>
let xhr=new XMLHttpRequest;
2. 连接服务器<br/>
xhr.open("get","goods.json",true)<br/>
true代表异步，false代表同步。goods.json代表请求的路径
3. 向服务器发送请求<br/>
xhr.send()
4. 接受服务器响应的数据

ajax的作用：向http服务器发送请求，并可以接收到http服务器响应的数据

## [软技能] 你期望的薪资是多少呢？

薪资要分两部分来看

企业给出的薪资，取决于当前市场需求，随着市场变化而变化。
求职者给出的薪资，可能是听人说的应该那么多，可能是基于相对客观的自我实力的认知。

我的期望薪资是当前能力阶段的max，我始终对 IT 行业保持感恩和敬畏，并且我一直为这个max不懈努力。这种精神，是我一个大学同学教会我的，受益匪浅。
