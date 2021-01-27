module.exports = {
    title: 'kingvibration的博客',
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
            {text: '学习笔记', link: '/studynotes/' },
            {text: '前端基础', link: '/accumulate/' },
            {text: '前端进阶',
                items: [
                    {text: 'heh', link: '/advanced/'}
                ]
            },
            {text: '前端框架',
                items: [
                    {text: 'vue', link: '/framework/vue/'},
                    {text: 'react', link: '/framework/react/'}
                ]

            },
            {text: '数据结构与算法', link: '/algorithm/'},
            {text: '日常积累', link: '/daily/'},
            {text: 'Github', link: 'https://github.com/'}
        ],
         sidebar:{
           '/studynotes/': [
               {
                   title: '计算机基础',path:'fundamentals-of-computer',
               },
               {
                   title: '程序员基础',path:'fundamentals-of-programming',
               },
               {
                   title: 'JS数据结构与算法',path:'js-data-structure-and-algorithm',
               }
           ],
           '/accumulate/': [
               {
                 title: 'dayhtml',
                 children: [
                     { title: 'dayitems02', path:'2'},
                     { title: 'dayitems02', path:'2'},
                 ]
               }
             ],
             '/advanced/': [
                 {
                     title: '调用堆栈',
                     children: [
                         { title: '理解JavaScript 中的执行上下文和执行栈', path:'callstack/1'},
                     ]
                 }
             ],
             '/framework/vue/': [
                 {
                     title: 'vue',
                     children: [
                         { title: '理解JavaScript 中的执行上下文和执行栈', path:'1'},
                     ]
                 }
             ],
             '/framework/react/': [
                 {
                     title: 'react',
                     children: [
                         { title: '理解JavaScript 中的执行上下文和执行栈', path:'1'},
                     ]
                 }
             ],
             '/algorithm/': [
               {
                 title: 'day第二组侧边栏下拉框的标题1',
                 children: [
                     { title: 'dayitems01', path:'1'},
                     { title: 'dayitems02', path:'2'},
                 ]
               }
             ],
             '/daily/': [
                 { title: '201904',
                     children: [
                         { title: 'day01', path:'201904/day01'},
                         { title: 'day02', path:'201904/day02'},
                         { title: 'day03', path:'201904/day03'},
                         { title: 'day04', path:'201904/day04'},
                         { title: 'day05', path:'201904/day05'},
                         { title: 'day06', path:'201904/day06'},
                         { title: 'day07', path:'201904/day07'},
                         { title: 'day08', path:'201904/day08'},
                         { title: 'day09', path:'201904/day09'},
                         { title: 'day10', path:'201904/day10'},
                         { title: 'day11', path:'201904/day11'},
                         { title: 'day12', path:'201904/day12'},
                         { title: 'day13', path:'201904/day13'},
                         { title: 'day14', path:'201904/day14'},
                         { title: 'day15', path:'201904/day15'},
                         { title: 'day16', path:'201904/day16'},
                         { title: 'day17', path:'201904/day17'},
                         { title: 'day18', path:'201904/day18'},
                         { title: 'day19', path:'201904/day19'},
                         { title: 'day20', path:'201904/day20'},
                         { title: 'day21', path:'201904/day21'},
                         { title: 'day22', path:'201904/day22'},
                         { title: 'day23', path:'201904/day23'},
                         { title: 'day24', path:'201904/day24'},
                         { title: 'day25', path:'201904/day25'},
                         { title: 'day26', path:'201904/day26'},
                         { title: 'day27', path:'201904/day27'},
                         { title: 'day28', path:'201904/day28'},
                         { title: 'day29', path:'201904/day29'},
                         { title: 'day30', path:'201904/day30'},
                     ]
                 },
                 {
                     title: '201905',
                     children: [
                         { title: 'day01', path:'201905/day01'},
                         { title: 'day02', path:'201905/day02'},
                         { title: 'day03', path:'201905/day03'},
                         { title: 'day04', path:'201905/day04'},
                         { title: 'day05', path:'201905/day05'},
                         { title: 'day06', path:'201905/day06'},
                         { title: 'day07', path:'201905/day07'},
                         { title: 'day08', path:'201905/day08'},
                         { title: 'day09', path:'201905/day09'},
                         { title: 'day10', path:'201905/day10'},
                         { title: 'day11', path:'201905/day11'},
                         { title: 'day12', path:'201905/day12'},
                         { title: 'day13', path:'201905/day13'},
                         { title: 'day14', path:'201905/day14'},
                         { title: 'day15', path:'201905/day15'},
                         { title: 'day16', path:'201905/day16'},
                         { title: 'day17', path:'201905/day17'},
                         { title: 'day18', path:'201905/day18'},
                         { title: 'day19', path:'201905/day19'},
                         { title: 'day20', path:'201905/day20'},
                         { title: 'day21', path:'201905/day21'},
                         { title: 'day22', path:'201905/day22'},
                         { title: 'day23', path:'201905/day23'},
                         { title: 'day24', path:'201905/day24'},
                         { title: 'day25', path:'201905/day25'},
                         { title: 'day26', path:'201905/day26'},
                         { title: 'day27', path:'201905/day27'},
                         { title: 'day28', path:'201905/day28'},
                         { title: 'day29', path:'201905/day29'},
                         { title: 'day30', path:'201905/day30'},

                     ]
                 },
                 {
                     title: '201906',
                     children: [
                         { title: 'day01', path:'201906/day01'},
                         { title: 'day02', path:'201906/day02'},
                         { title: 'day03', path:'201906/day03'},
                         { title: 'day04', path:'201906/day04'},
                         { title: 'day05', path:'201906/day05'},
                         { title: 'day06', path:'201906/day06'},
                         { title: 'day07', path:'201906/day07'},
                         { title: 'day08', path:'201906/day08'},
                         { title: 'day09', path:'201906/day09'},
                         { title: 'day10', path:'201906/day10'},
                         { title: 'day11', path:'201906/day11'},
                         { title: 'day12', path:'201906/day12'},
                         { title: 'day13', path:'201906/day13'},
                         { title: 'day14', path:'201906/day14'},
                         { title: 'day15', path:'201906/day15'},
                         { title: 'day16', path:'201906/day16'},
                         { title: 'day17', path:'201906/day17'},
                         { title: 'day18', path:'201906/day18'},
                         { title: 'day19', path:'201906/day19'},
                         { title: 'day20', path:'201906/day20'},
                         { title: 'day21', path:'201906/day21'},
                         { title: 'day22', path:'201906/day22'},
                         { title: 'day23', path:'201906/day23'},
                         { title: 'day24', path:'201906/day24'},
                         { title: 'day25', path:'201906/day25'},
                         { title: 'day26', path:'201906/day26'},
                         { title: 'day27', path:'201906/day27'},
                         { title: 'day28', path:'201906/day28'},
                         { title: 'day29', path:'201906/day29'},
                         { title: 'day30', path:'201906/day30'},
                     ]
                 },
                 { title: '201907',
                     children: [
                         { title: 'day01', path:'201907/day01'},
                         { title: 'day02', path:'201907/day02'},
                         { title: 'day03', path:'201907/day03'},
                         { title: 'day04', path:'201907/day04'},
                         { title: 'day05', path:'201907/day05'},
                         { title: 'day06', path:'201907/day06'},
                         { title: 'day07', path:'201907/day07'},
                         { title: 'day08', path:'201907/day08'},
                         { title: 'day09', path:'201907/day09'},
                         { title: 'day10', path:'201907/day10'},
                         { title: 'day11', path:'201907/day11'},
                         { title: 'day12', path:'201907/day12'},
                         { title: 'day13', path:'201907/day13'},
                         { title: 'day14', path:'201907/day14'},
                         { title: 'day15', path:'201907/day15'},
                         { title: 'day16', path:'201907/day16'},
                         { title: 'day17', path:'201907/day17'},
                         { title: 'day18', path:'201907/day18'},
                         { title: 'day19', path:'201907/day19'},
                         { title: 'day20', path:'201907/day20'},
                         { title: 'day21', path:'201907/day21'},
                         { title: 'day22', path:'201907/day22'},
                         { title: 'day23', path:'201907/day23'},
                         { title: 'day24', path:'201907/day24'},
                         { title: 'day25', path:'201907/day25'},
                         { title: 'day26', path:'201907/day26'},
                         { title: 'day27', path:'201907/day27'},
                         { title: 'day28', path:'201907/day28'},
                         { title: 'day29', path:'201907/day29'},
                         { title: 'day30', path:'201907/day30'},
                         { title: 'day31', path:'201907/day31'}
                     ]
                 },
                 { title: '201908',
                     children: [
                         { title: 'day01', path:'201908/day01'},
                         { title: 'day02', path:'201908/day02'},
                         { title: 'day03', path:'201908/day03'},
                         { title: 'day04', path:'201908/day04'},
                         { title: 'day05', path:'201908/day05'},
                         { title: 'day06', path:'201908/day06'},
                         { title: 'day07', path:'201908/day07'},
                         { title: 'day08', path:'201908/day08'},
                         { title: 'day09', path:'201908/day09'},
                         { title: 'day10', path:'201908/day10'},
                         { title: 'day11', path:'201908/day11'},
                         { title: 'day12', path:'201908/day12'},
                         { title: 'day13', path:'201908/day13'},
                         { title: 'day14', path:'201908/day14'},
                         { title: 'day15', path:'201908/day15'},
                         { title: 'day16', path:'201908/day16'},
                         { title: 'day17', path:'201908/day17'},
                         { title: 'day18', path:'201908/day18'},
                         { title: 'day19', path:'201908/day19'},
                         { title: 'day20', path:'201908/day20'},
                         { title: 'day21', path:'201908/day21'},
                         { title: 'day22', path:'201908/day22'},
                         { title: 'day23', path:'201908/day23'},
                         { title: 'day24', path:'201908/day24'},
                         { title: 'day25', path:'201908/day25'},
                         { title: 'day26', path:'201908/day26'},
                         { title: 'day27', path:'201908/day27'},
                         { title: 'day28', path:'201908/day28'},
                         { title: 'day29', path:'201908/day29'},
                         { title: 'day30', path:'201908/day30'},
                         { title: 'day31', path:'201908/day31'},
                     ]
                 },
                 { title: '201909',
                     children: [
                         { title: 'day01', path:'201909/day01'},
                         { title: 'day02', path:'201909/day02'},
                         { title: 'day03', path:'201909/day03'},
                         { title: 'day04', path:'201909/day04'},
                         { title: 'day05', path:'201909/day05'},
                         { title: 'day06', path:'201909/day06'},
                         { title: 'day07', path:'201909/day07'},
                         { title: 'day08', path:'201909/day08'},
                         { title: 'day09', path:'201909/day09'},
                         { title: 'day10', path:'201909/day10'},
                         { title: 'day11', path:'201909/day11'},
                         { title: 'day12', path:'201909/day12'},
                         { title: 'day13', path:'201909/day13'},
                         { title: 'day14', path:'201909/day14'},
                         { title: 'day15', path:'201909/day15'},
                         { title: 'day16', path:'201909/day16'},
                         { title: 'day17', path:'201909/day17'},
                         { title: 'day18', path:'201909/day18'},
                         { title: 'day19', path:'201909/day19'},
                         { title: 'day20', path:'201909/day20'},
                         { title: 'day21', path:'201909/day21'},
                         { title: 'day22', path:'201909/day22'},
                         { title: 'day23', path:'201909/day23'},
                         { title: 'day24', path:'201909/day24'},
                         { title: 'day25', path:'201909/day25'},
                         { title: 'day26', path:'201909/day26'},
                         { title: 'day27', path:'201909/day27'},
                         { title: 'day28', path:'201909/day28'},
                         { title: 'day29', path:'201909/day29'},
                         { title: 'day30', path:'201909/day30'},
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
