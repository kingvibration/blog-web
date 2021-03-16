## [html] html的a标签属性rel="noopener"有什么作用？
当我们使用targer=_blank打开一个新的标签页时, 新页面的window对象上有一个属性 opener, 它指向的是前一个页面的 window 对象, 因此, 后一个页面就获得了前一个页面的控制权. 甚至在跨域的情况下也可以生效, 你可以使用 window.opener.location.replace更改前一个页面的url.
使用 rel=noopener可以把window.opener置为空, 老一些的浏览器可以使用 rel=noreferer.
## [css] 为什么说不提倡用1px的小尺寸图片做背景平铺？
## [js] 请用js实现一个简单的小区楼的电梯运行程序
## [软技能] 你有在linux下编程过吗？有使用过mac系统吗？说下它和win系统的区别？
首先就是文件路径...windows里是\ \ 而mac 里是 /
这样的坑就是，用Node写cli 动态生成路由配置等功能时，导出的文件路径需要 slash2 库去抹平路径里的 \ \ -> /
然后 mac 里文件名不区分大小写, 导致哪怕 fs.existsSync 确定文件路径存在，还是要写个函数扫一下父目录下的文件列表，找到该路径对应文件的真实名
