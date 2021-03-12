## [html] HTML5如何唤醒APP？

* 有以下几种方式
  * URL Scheme：最常见
  * Intent: // ：Android
  * Universal Link ： iOS， 通过传统的 HTTP 链接即可打开 APP
* 唤醒途径
  * iframe的src
  * a标签的src
  * window.location
* 参考资料: [链接](https://juejin.im/post/5b7efb2ee51d45388b6af96c)
* 附一个[URL Scheme大全](https://blog.csdn.net/dkq972958298/article/details/52954195)

## [css] 你是怎么设计css sprites（精灵图）的？有哪些技巧？

首先肯定不会去用PS量，那太费时间了~
没有webpack以前，用Gulp的gulp.spritesmith插件，这里附上配置源码
```javascript
/* gulpfile.js */
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

/**
 * @desc 雪碧图自动合成
 */
gulp.task('sprite', function () {
    return gulp.src('src/assets/sprite/*.png')//需要合并的图片地址
        .pipe(spritesmith({
            imgName: 'assets/sprite.png',
            // cssName: 'css/_sprite.scss',
            cssName: 'scss/_sprite.scss',
            padding: 5,
            algorithm: 'binary-tree',
            cssTemplate: function (data) {
                var arr = [];
                data.sprites.forEach(function (sprite) {
                    arr.push(".icon-" + sprite.name + "{" +
                        "background-image: url('" + sprite.escaped_image + "');" +
                        "background-position: " + sprite.px.offset_x + " " + sprite.px.offset_y + ";" +
                        "width:" + sprite.px.width + ";" +
                        "height:" + sprite.px.height + ";" +
                        "display: inline-block;" +
                        "vertical-align: middle;" +
                        "}\n");
                });
                return arr.join("");
            }
        }))
        .pipe(gulp.dest('dist/'))
        .pipe(gulp.dest('src/'));
});
```
把图放入对应的文件夹中，然后根据文件名对应的类名引用就行了
webpack的话可以使用webpack-spritesmith，安装了webpack-spritesmith之后
```javascript
var SpritesmithPlugin = require('webpack-spritesmith');
//module.exports = {//代码}
plugins: [
    new SpritesmithPlugin({
        // 目标小图标
        src: {
            cwd: path.resolve(__dirname, './src/assets/imgs/icons'),
            glob: '*.png'
        },
        // 输出雪碧图文件及样式文件
        target: {
            image: path.resolve(__dirname, './dist/sprites/sprite.png'),
            css: path.resolve(__dirname, './dist/sprites/sprite.css')
        },
        // 样式文件中调用雪碧图地址写法
        apiOptions: {
            cssImageRef: '../sprites/sprite.png'
        },
        spritesmithOptions: {
            algorithm: 'top-down'
        }
    })
]
```
在index.html中引入css

`<link rel="stylesheet" type="text/css" href="./dist/sprites/sprite.css" />`

最后通过class引入小图标即可


## [js] onload事件和domcontentloaded哪个先执行呢？

DomContentLoaded先执行,它在DOM内容加载完毕,就可以执行,而不必等待img,css加载完成

onload需要所有资源全都加载完成才可以;


## [软技能] 你知道什么是域名备案吗？备案有什么用？可以不备案吗？

当域名解析到国内的服务器是需要备案的，如果不进行备案DNS将无法正常解析到页面，别人无法通过域名访问你的网站。域名备案就是将自己的证件信息，网站信息上传到工信部审核登记，域名备案其实是ZF用来管理国内网站的一种方法，这样可以一定程度上防止非法运营网站

