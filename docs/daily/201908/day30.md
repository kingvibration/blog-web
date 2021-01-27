## [html] HTML5的服务器(server-sent event)发送事件有什么应用场景？

两种服务端推送技术的简单对比:

|SSE|	WebSocket|
|:-|:-:|
|服务器到浏览器的单向通信|	两端之间的双向实时通信|
|不兼容IE|	兼容性更好|
|协议实现断线重连与消息追踪|	不在协议范围内, 需要手动处理|
|实现简单, 复用HTTP|	独立于Http, 实现较复杂|
回到问题, 在客户端请求不影响服务端推送数据或客户端请求以及客户端请求不密集的情况下可以考虑使用SSE代替WebSocket.

具体的应用场景有:

1. 邮箱: 实时获取新邮件
2. 后台性能监控: 实时更新监控数据
3. 天气预报: 实时更新天气信息

## [css] 你有了解css计数器（序列数字字符自动递增）吗？如何通过css的content属性实现呢？

counter-reset:设置计数器 counter-reset: count 0 /* 计数器从1开始 */
counter-increment: 递增数值 counter-increment: count 2 /* 用于count 每次递增2 */
eg.
```html
<ul>
  <li>Item</li>
  <li>Item</li>
  <ul>
    <li>Item</li>
    <li>Item</li>
  </ul>
</ul>
```
```css
ul {
  counter-reset: count;
}
li::before {
  counter-increment: count;
  content: counters(count, '-')'.';
}
```
```
1.Item
2.Item
    2-1.Item
    2-2.Item
 ```
## [js] 用js实现小写金额转大写的方法

```javascript
function digitUppercase(price) {
  const fraction = ['角', '分'];
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟'],
  ];
  let num = Math.abs(price);
  let s = '';
  fraction.forEach((item, index) => {
    s += (digit[Math.floor(num * 10 * (10 ** index)) % 10] + item).replace(/零./, '');
  });
  s = s || '整';
  num = Math.floor(num);
  for (let i = 0; i < unit[0].length && num > 0; i += 1) {
    let p = '';
    for (let j = 0; j < unit[1].length && num > 0; j += 1) {
      p = digit[num % 10] + unit[1][j] + p;
      num = Math.floor(num / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }

  return s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零
```
## [软技能] 你知道什么是微格式(microformat)吗？说说你的理解，它有什么运用场景？

微格式，利用 HTML 的 class 属性来对网页添加附加信息。

vCard（电子名片）
iCalendar（日历数据交换）
应用举例：当你用手机浏览某公司的网站时，手机浏览器识别出了网页中的 hCard 信息。这个 hCard 标记了该公司的多种联络方式，手机浏览器很聪明地提示你“是否保存到通讯录”，于是你可以很经松地保存所需要的信息。

```html
<div class="vcard">
    <div class="fn">Joe</div>
    <div class="org">Company A</div>
    <div class="tel">400-800-12345</div>
    <a href="http://companyA.com" class="url">http://companyA.com</a>
</div>
```

    这里，正式名称 class=”fn”，组织 class=”org”，电话号码 class=”tel” 和 url class=”url” 分别用相应的 class 标示；同时，所有内容都包含在 class="vcard" 里。

