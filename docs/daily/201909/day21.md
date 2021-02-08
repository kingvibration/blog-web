## [html] 你有使用过figure标签吗？说说你对它的认识，有哪些应用场景？

用作文档中插图的图像

标签规定独立的流内容（图像、图表、照片、代码等等）。
figure 元素的内容应该与主内容相关，但如果被删除，则不应对文档流产生影响。

* 语义化标签，表示一段独立的内容，是独立于主文档流的独立单元
* 表示插入的内容，如插图、表格、代码片段等等
* 经常与&lt;figcaption>结合使用，&lt;figcaption>表示片段的描述

## [css] 你有用过弹性布局吗？说说你对它的理解

* 弹性布局指弹性盒子即Flex布局
* Flex布局元素可分为容器与容器成员，他们分别有些属性
* 首先要在容器属性上display: flex;声明弹性盒子
* 容器属性
  * flex-deriction: row(默认) | column | row-reverse | column-reverse (声明对齐方式，即声明主轴的方向)
  * flex-wrap: no-wrap(默认) | wrap | wrap-reverse (声明在主轴的换行方式)
  * flex-flow: || (简写)
  * justify-content: flex-start(默认) | flex-end | center | space-arround | space-between (项目在主轴上的对齐方式)
  * align-items: flex-start(默认) | flex-end | center | baseline | stretch (项目在交叉轴的对齐方式)
  * align-content: flex-start(默认) | flex-end | center | space-arround | space-between | stretch (存在多条主轴时，多根轴线的对齐方式)
* 项目属性
  * order: [Number] (定义项目的排序，数值越小，越靠前)
  * flex-grow: [Number] (定义项目的放大比例，默认是0，即存在剩余空间，也不放大)
  * flex-shrink: [Number] (定义项目的缩小比例，默认是1,即剩余空间不足，该项目缩小)
  * flex-basis: [Length] | auto(默认) (定义项目在分配剩余空间前，占据的主轴空间)
  * flex: (前面三个属性的缩写，默认值是1 0 auto)
  * align-self: flex-start | flex-end | center | baseline | stretch | auto(默认) (此项目在交叉轴的对齐方式)

## [js] 举例说明数组的排序方法有哪些？

冒泡排序
```javascript
function bubbleSort(arr) {
    var i = arr.length,
        j;
    var tempExchangVal;
    while (i > 0) {
        for (j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                tempExchangVal = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tempExchangVal;
            }
        }
        i--;
    }
    return arr;
}

var arr = [3, 2, 4, 9, 1, 5, 7, 6, 8];
var arrSorted = bubbleSort(arr);
console.log(arrSorted);
```

快速排序
```javascript
const quickSort = (array) => {
    const sort = (arr, left = 0, right = arr.length - 1) => {
        if (left >= right) {//如果左边的索引大于等于右边的索引说明整理完毕
            return
        }
        let i = left
        let j = right
        const baseVal = arr[j] // 取无序数组最后一个数为基准值
        while (i < j) {//把所有比基准值小的数放在左边大的数放在右边
            while (i < j && arr[i] <= baseVal) { //找到一个比基准值大的数交换
                i++
            }
            arr[j] = arr[i] // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
            while (j > i && arr[j] >= baseVal) { //找到一个比基准值小的数交换
                j--
            }
            arr[i] = arr[j] // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
        }
        arr[j] = baseVal // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
        sort(arr, left, j - 1) // 将左边的无序数组重复上面的操作
        sort(arr, j + 1, right) // 将右边的无序数组重复上面的操作
    }
    const newArr = array.concat() // 为了保证这个函数是纯函数拷贝一次数组
    sort(newArr)
    return newArr
}

console.log(quickSort([6,1,1,3,4]))
```

## [软技能] 你有做过PHP开发？说说你自己对“PHP是世界上最好的语言”这句话的理解

不知道当初具体情形是怎样的，但当我接触到 artTemplate 和 vue 这种数据和模板相结合的开发方式时，觉得非常棒，甚至想大段大段地去使用它。在那个还是 jquery 的时代，也许真的是挺幸福的一种语言吧。

随着交互越发复杂，根据状态改变视图的需求增加，靠 php 来更新视图想想就觉得挺累的，如果只是展示的话，就如同现在的服务端渲染，它还是挺好的。
