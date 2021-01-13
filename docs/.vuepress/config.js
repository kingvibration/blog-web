module.exports = {
    title: 'kingvibration\'s blog',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav:[ // 导航栏配置
            {text: '前端基础', link: '/views/accumulate/' },
            {text: '算法题库', link: '/views/algorithm/'},
            {text: '微博', link: 'https://baidu.com'}
        ],
         sidebar:{
           '/views/accumulate/': [
               {
                 title: '前端积累',
                 children: [
                     { title: 'items01', path:'1'},
                     { title: 'items02', path:'2'},
                 ]
               }
             ],
             '/views/algorithm/': [
               {
                 title: '第二组侧边栏下拉框的标题1',
                 children: [
                     { title: 'items01', path:'1'},
                     { title: 'items02', path:'2'},
                 ]
               }
             ]
         },
        sidebarDepth: 2, // 侧边栏显示2级
    }
};
