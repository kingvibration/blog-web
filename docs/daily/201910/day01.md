## [html] 你知道有哪些常见的视频（音频）编码格式和视频（音频）格式吗？

* 视频编码格式：Xvid、H264、MPEG1、MPEG2
* 音频编码格式：WAV、MP3、AAC、Ogg、APE、FLAC
* 封装标准：AVI、RMVB、MKV、ASF、WMV、MP4、3GP、FLV
* 制作视频的三个步骤：
  * 设置需要的视频编码
  * 设置需要的音频编码
  * 选择需要的容器封装

## [css] 怎么去掉点击a链接或者图片出现的边框？

```css
a:active,
img:active {
    border: none;
    outline: none;
    text-decoration: none;  
}
```

## [js] 如何解决在手机上长时间点击会选中图片？

用事件穿透即可
```css
img {
    pointer-events: none; 
}
```
* 关于 @Davidyanlong 讲的,经测试(iOS13 Safari):
   * CSS 禁止选中user-select:none,并不能解决长按选中图片的问题
   * 长按不会出发contextmenu事件，长按并没有暴露出原生的事件


## [软技能] 写js代码时你喜欢哪种命名方式？

js使用驼峰方式命名 css 使用减号(-)

* JS代码普通变量:小驼峰
* JS代码类名：大驼峰
* JS代码获取接口属性: data['field']
* Node.js暴露接口属性名：全小写下划线
