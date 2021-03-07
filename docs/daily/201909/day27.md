## [html] 前端路由指的是什么？它有什么好处？它有哪些方式可以实现呢？

前端路由在我看来就是url的变化
它的好处是可以做spa吧，不像传统的多页面应用一样由后端控制路由变化来显示不同的html，不用频繁的跳转
本质上就是检测 url 的变化，截获 url 地址，然后解析来匹配路由规则。
实现方式的话大概可以分为两种，一种是history，另一种是hash

history

history是将a标签中的默认跳转替换为ajax请求，然后通过history.pushState来改变路由（ajax可以实现页面不刷新的）
浏览器的前进与后退，会触发window.onpopstate事件，通过绑定popstate事件，就可以根据当前URL地址中的查询内容让对应的菜单执行Ajax载入，实现Ajax的前进与后退效果。
页面首次载入的时候，如果没有查询地址、或查询地址不匹配，则使用第一个菜单的Ajax地址的查询内容，并使用history.replaceState更改当前的浏览器历史，然后触发Ajax操作。

hash

Web 服务并不会解析 hash，也就是说#后的内容Web服务都会自动忽略，但是JavaScript是可以通过 window.location.hash 读取到的，读取到路径加以解析之后就可以响应不同路径的逻辑处理。
hashchange 事件(监听 hash 变化触发的事件)，当用 window.location 处理哈希的改变时不会重新渲染页面，而是当作新页面加到历史记录中，这样我们跳转页面就可以在 hashchange 事件中注册 ajax 从而改变页面内容。

## [css] 你是怎么选择resetting和normalizing的？为什么？

两者都是统一不同浏览器默认样式
resetting 是减法
normalizing 是加法
我选加法
减法意味没有浏览器默认样式，全部样式自己写
加法抹平差异，只有你一些用到的要自己写，其他默认样式比如行高还是有必要的

## [js] 举例说明js如何拖拽排序？

拆分功能，定义2个组件:

1. dragArea 拖拽区组件，就是根据数组遍历生成列表项，做drag事件代理
2. dragItem 单个列表成员渲染，绑定一些必要参数在dom上
每个item元素 打上h5 draggable 属性，并记下所在数组中的序号位置, 如 data-index = "0"
记下在dragArea的dragStart事件中元素序号A，dragEnd事件中的元素序号B
在数组里调整2个序号对应的对象的位置，更新渲染即可


## [软技能] 你平时是如何管理项目的？

git分支管理好,master只发布, 全走mergeRequest
每周一个版本分支beta从master切出
无论啥需求/bug修复全从beta拉单独分支
处理完 rebase beta再合回去
dev是垃圾桶，时不时删了从beta切个新的，只做其他单独分支的验证
