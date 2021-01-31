## [html] HTML5有哪些存储类型？它们之间有什么区别？

* cookie: 最大 4k, 基本无兼容问题, 所有同源tab 共享, 每次请求都携带, key-value 存储, value 只存字符串
* sessionStorage 无大小限制, 只在当前 tab 有效, tab 关闭即失效, key-value 存储, value 只存字符串
* localStorage 最大 5M-10M, 所有同源 tab 共享, 能持久化存储, key-value 存储, value 只存字符串
* indexDB key-value 存储,value 可以任意类型, 同源, 支持事务, 最大 250M, 兼容 ie10
* webSQL 支持版本,事务,支持 sql 语句, 不兼容 ie

## [css] 如何写高效的CSS？

使用sass等预加载器，有嵌套，变量之类的。


## [js] 用js模拟实现微信抢红包的算法，并说明你的思路

```javascript
/**
 * 抢红包算法
 * @param {*} money 红包金额数
 * @param {*} people 红包人数
 */
function drawLucky (money, people) {
  let remainMoney = money
  let remainPeople = people

  return {
    // 每一次抢到的红包金额
    draw () {
      let per = remainMoney / remainPeople
      let curMoney = 0
      if (remainPeople === 1) {
        curMoney = Math.round(remainMoney * 100) / 100 // 使数字保留两位小数
        remainPeople--
      } else if (remainPeople > 1) {
        curMoney = Math.round(per * (Math.random() * 1.6 + 0.2) * 100) / 100 // 使数字保留两位小数【随机分配剩余金额，份数为(0.2, 1.8)之间】
        remainPeople--
      }
      remainMoney -= curMoney
      return curMoney
    }
  }
}

let test = drawLucky(100, 20)
let amount = 0
for (let i = 0; i < 20; i++) {
  let cur = test.draw()
  amount += cur
  console.log(cur)
}
console.log(amount)
```
## [软技能] 你有做过扫码枪的开发吗？知道它的原理吗？

当时做的时候用的是移动提供的硬件设备，底层定义好了对应的API，直接使用就可以了；当时的场景需要注意的是连续扫描的时候，前一个扫描结果未处理完的时候需要阻塞下一步扫描，这里就涉及到同步异步的问题了

扫码枪是一种类似键盘的输入设备，扫码完成后会以极快的速度输入扫描到的字符，一般在末尾会带一个换行符。原理是检测 keydown 事件两次输入的间隔如果小于一个值的话就当成扫码枪输入。

???
