## [html] 如何在HTML5页面中嵌入音频和视频？

嵌入视频

```html

<video src="test.ogg" controls="controls">
your browser does not support the video tag
</video>

```
嵌入音频

```html
<audio src="test.ogg" controls>
Your browser does not support the audio element.
</audio>
```

## [css] 怎么实现移动端的边框0.5px？

一种是通过transform中的scale

```css
    border: 1px solid red;
    transform: scaleY(.5);
```

一种是通过meta viewport中设置init-scale为0.5

`<meta name="viewport" content="width=device-width, initial-scale=0.5">`

一种是设置hr

```css
    border: 0px;
    border-bottom: 1px solid red;
```

一种是基于背景渐变实现

```css
    height: 2px;
    background-image: linear-gradient(0deg, red 50%, transparent 50%)
```    

## [js] 写个方法，找出指定字符串中重复最多的字符及其长度

```javascript
function maxOccurence(str) {
    const dict = {}
    for (const char of str) {
        if (char in dict) dict[char]++
        else dict[char] = 1
    }
    let maxchar = [], maxcount = -1
    for (const char in dict)
        if (dict[char] === maxcount) maxchar.push(char)
        else if (dict[char] > maxcount) {
            maxchar = [char]
            maxcount = dict[char]
        }
    return { char: maxchar, count: maxcount }
}
```

注意到可能出现多种字符出现次数相等的特殊情况，所以采用数组存储结果；
返回值需要语义化，所以返回一个对象 { char: string[], count: number }。

## [软技能] 域名解析它有哪几种方式？

域名的解析也分很多种，以下列出的是我用的比较多的几种类型。

**A类型**

A类型可以将主机记录（二级域名）指向一个ipv4类型的ip地址；但是需要注意的是，该类型不能在ip地址后加上端口；比如：

    主机记录：xx.test.com
    记录值：aa.bb.cc.dd
  
上述记录的意思就是访问xx.test.com的时候实际上是访问ip地址为aa.bb.cc.dd的主机；但是如果在ip地址后加上端口号：

    记录值：aa.bb.cc.dd:port
    
以上的记录值是非法的；其实我就是想将某个二级域名直接解析到主机的某个端口，然后尝试无果……

**CNAME类型**

CNAME类型的记录可以将当前记录指向另一个域名；需要注意的是仅仅是域名，不能在域名的后面添加路径或参数！！！

合法记录值：

    xx.test.com
    test.com
    www.test.com
    
非法记录值：

    test.com/path/
    test.com/123.html
    test.com?a=b
    
**URL转发**

URL转发就是将当前记录跳转到另一个url地址，因此只要是url地址可以访问的，都可以用来转发；不过URL转发还分为显性URL转发和隐性URL转发，它们的区别在于：

显性URL转发使用301永久重定向，即地址栏上的url地址会换成转发后的url地址，而非当前记录使用的url地址；而隐性URL转发使用的是302临时重定向，访问时浏览器地址栏依然是当前记录使用的url地址，但是实际访问的是转发的url地址。
