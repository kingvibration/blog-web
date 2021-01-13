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
            {text: '前端基础', link: '/accumulate/' },
            {text: '算法题库', link: '/algorithm/'},
            {text: '日常积累', link: '/daily/'},
            {text: '微博', link: 'https://baidu.com'}
        ],
         sidebar:{
           '/accumulate/': [
               {
                 title: 'html',
                 children: [
                     { title: 'items02', path:'2'},
                     { title: 'items02', path:'2'},
                 ]
               }
             ],
             '/algorithm/': [
               {
                 title: '第二组侧边栏下拉框的标题1',
                 children: [
                     { title: 'items01', path:'1'},
                     { title: 'items02', path:'2'},
                 ]
               }
             ],
             '/daily/': [
                 { title: '201904',
                     children: [
                         { title: '01', path:'201904/day01'},
                         { title: '02', path:'201904/day02'},
                         { title: '03', path:'201904/day03'},
                         { title: '04', path:'201904/day04'},
                         { title: '05', path:'201904/day05'},
                         { title: '06', path:'201904/day06'},
                         { title: '07', path:'201904/day07'},
                         { title: '08', path:'201904/day08'},
                         { title: '09', path:'201904/day09'},
                         { title: '10', path:'201904/day10'},
                         { title: '11', path:'201904/day11'},
                         { title: '12', path:'201904/day12'},
                         { title: '13', path:'201904/day13'},
                         { title: '14', path:'201904/day14'},
                         { title: '15', path:'201904/day15'},
                         { title: '16', path:'201904/day16'},
                         { title: '17', path:'201904/day17'},
                         { title: '18', path:'201904/day18'},
                         { title: '19', path:'201904/day19'},
                         { title: '20', path:'201904/day20'},
                         { title: '21', path:'201904/day21'},
                         { title: '22', path:'201904/day22'},
                         { title: '23', path:'201904/day23'},
                         { title: '24', path:'201904/day24'},
                         { title: '25', path:'201904/day25'},
                         { title: '26', path:'201904/day26'},
                         { title: '27', path:'201904/day27'},
                         { title: '28', path:'201904/day28'},
                         { title: '29', path:'201904/day29'},
                         { title: '30', path:'201904/day30'},
                     ]
                 },
                 {
                     title: '201905',
                     children: [
                         { title: '01', path:'201905/day01'},
                         { title: '02', path:'201905/day02'},
                         { title: '03', path:'201905/day03'},
                         { title: '04', path:'201905/day04'},
                         { title: '05', path:'201905/day05'},
                         { title: '06', path:'201905/day06'},
                         { title: '07', path:'201905/day07'},
                         { title: '08', path:'201905/day08'},
                         { title: '09', path:'201905/day09'},
                         { title: '10', path:'201905/day10'},
                         { title: '11', path:'201905/day11'},
                         { title: '12', path:'201905/day12'},
                         { title: '13', path:'201905/day13'},
                         { title: '14', path:'201905/day14'},
                         { title: '15', path:'201905/day15'},
                         { title: '16', path:'201905/day16'},
                         { title: '17', path:'201905/day17'},
                         { title: '18', path:'201905/day18'},
                         { title: '19', path:'201905/day19'},
                         { title: '20', path:'201905/day20'},
                         { title: '21', path:'201905/day21'},
                         { title: '22', path:'201905/day22'},
                         { title: '23', path:'201905/day23'},
                         { title: '24', path:'201905/day24'},
                         { title: '25', path:'201905/day25'},
                         { title: '26', path:'201905/day26'},
                         { title: '27', path:'201905/day27'},
                         { title: '28', path:'201905/day28'},
                         { title: '29', path:'201905/day29'},
                         { title: '30', path:'201905/day30'},

                     ]
                 },
                 {
                     title: '201906',
                     children: [
                         { title: '01', path:'201906/day01'},
                         { title: '02', path:'201906/day02'},
                         { title: '03', path:'201906/day03'},
                         { title: '04', path:'201906/day04'},
                         { title: '05', path:'201906/day05'},
                         { title: '06', path:'201906/day06'},
                         { title: '07', path:'201906/day07'},
                         { title: '08', path:'201906/day08'},
                         { title: '09', path:'201906/day09'},
                         { title: '10', path:'201906/day10'},
                         { title: '11', path:'201906/day11'},
                         { title: '12', path:'201906/day12'},
                         { title: '13', path:'201906/day13'},
                         { title: '14', path:'201906/day14'},
                         { title: '15', path:'201906/day15'},
                         { title: '16', path:'201906/day16'},
                         { title: '17', path:'201906/day17'},
                         { title: '18', path:'201906/day18'},
                         { title: '19', path:'201906/day19'},
                         { title: '20', path:'201906/day20'},
                         { title: '21', path:'201906/day21'},
                         { title: '22', path:'201906/day22'},
                         { title: '23', path:'201906/day23'},
                         { title: '24', path:'201906/day24'},
                         { title: '25', path:'201906/day25'},
                         { title: '26', path:'201906/day26'},
                         { title: '27', path:'201906/day27'},
                         { title: '28', path:'201906/day28'},
                         { title: '29', path:'201906/day29'},
                         { title: '30', path:'201906/day30'},
                     ]
                 },
                 { title: '201907',
                     children: [

                     ]
                 },
                 { title: '201908',
                     children: [

                     ]
                 },
                 { title: '201909',
                     children: [

                     ]
                 },
                 { title: '201910',
                     children: [

                     ]
                 },
                 { title: '201911',
                     children: [

                     ]
                 },
                 { title: '201912',
                     children: [

                     ]
                 },
                 { title: '202001',
                     children: [

                     ]
                 }

             ],
         },
        sidebarDepth: 3, // 侧边栏显示2级
    }
};
