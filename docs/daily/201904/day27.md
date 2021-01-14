
  <script>
      // Shadow Dom的应用
      // Create a class for the element
      class PopUpInfo extends HTMLElement {
          constructor() {
              // Always call super first in constructor
              super();

              // Create a shadow root
              const shadow = this.attachShadow({mode: 'open'});

              // Create spans
              const wrapper = document.createElement('span');
              wrapper.setAttribute('class', 'wrapper');

              const icon = document.createElement('span');
              icon.setAttribute('class', 'icon');
              icon.setAttribute('tabindex', 0);

              const info = document.createElement('span');
              info.setAttribute('class', 'info');

              // Take attribute content and put it inside the info span
              const text = this.getAttribute('data-text');
              info.textContent = 'sdsd';

              // Insert icon
              let imgUrl;
              console.log(this)
              if(this.hasAttribute('img')) {
                  imgUrl = this.getAttribute('img');
              } else {
                  imgUrl = '/assets/img/default.png';
              }

              const img = document.createElement('img');
              img.src = imgUrl;
              icon.appendChild(img);

              // Create some CSS to apply to the shadow dom
              const style = document.createElement('style');
              console.log(style.isConnected);

              style.textContent = `
                  .wrapper {
                    position: relative;
                  }
                  .info {
                    font-size: 0.8rem;
                    width: 200px;
                    display: inline-block;
                    border: 1px solid black;
                    padding: 10px;
                    background: white;
                    border-radius: 10px;
                    opacity: 0;
                    transition: 0.6s all;
                    position: absolute;
                    bottom: 20px;
                    left: 10px;
                    z-index: 3;
                  }
                  img {
                    width: 1.2rem;
                  }
                  .icon:hover + .info, .icon:focus + .info {
                    opacity: 1;
                  }
                `;

              // Attach the created elements to the shadow dom
              shadow.appendChild(style);
              console.log(style.isConnected);
              shadow.appendChild(wrapper);
              wrapper.appendChild(icon);
              wrapper.appendChild(info);
          }
      }

      // Define the new element
      customElements.define('popup-info', PopUpInfo);
  </script>


## [html] 说说你对影子(Shadow)DOM的了解

  Shadow Dom 是 Web Component 的一种实现，另外 Custom Element 和 Template 亦是如此。

  常见的Video Radio 都是对 Shadow dom 的实践，也就是对一段功能的封装，形成模块化。

  Shadow DOM 可以想象成我们在 Vue 或者 React 中使用的一个个组件，是一种将 HTML 结构、Style 封装起来的结构。我们熟悉的 video 标签，其实就是 Shadow DOM 的封装。

  借用 MDN 上的图，可以看到 Shadow DOM 允许我们在 DOM 文档中插入一个 DOM 的子树。Shadow Tree 会挂在 Shadow host 对应的 DOM 上。之后，Shadow DOM 与外层 DOM 不会相互影响，因此可以放心用来做组件。

  具体的例子可以参考 MDN 给出的案例 popup-info-box

  这个例子告诉我们可以利用 Shadow DOM 封装自己的 tag 标签，并且可以在网页中使用。

  参考文章：
  <a href="https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM" target="_blank">使用 shadow DOM</a>
  <a href="https://aotu.io/notes/2016/06/24/Shadow-DOM/index.html" target="_blank">神奇的 Shadow DOM</a>
  <a href="https://zhuanlan.zhihu.com/p/88373246">基于 Custom Elements 的组件化开发</a>

## [css] 怎样修改chrome记住密码后自动填充表单的黄色背景？

  -webkit-text-fill-color 设置文本颜色，-webkit-box-shadow inset设置填充

## [js] 说说你对arguments的理解，它是数组吗？

  arguments是一个对象。

  js不能像java一样实现重载，arguments对象可以模拟重载。

  js中每个函数都会有arguments这个实例，它引用着函数的实参，可以用数组下标的方式"[]"引用arguments的元素。arguments.length为函数实参个数，arguments.callee引用函数自身。

  arguments他的特性和使用方法

  特性：

  1.arguments对象和Function是分不开的。

  2.因为arguments这个对象不能显式创建。

  3.arguments对象只有函数开始时才可用。

  使用方法：

  虽然arguments对象并不是一个数组，但是访问单个参数的方式与访问数组元素的方式相同

  例如：

  arguments[0],arguments[1]...


## [软技能] 你为什么离职呢？



  <h1>Pop-up info widget - web components</h1>

  <form>
    <div>
      <label for="cvc">Enter your CVC <popup-info img="img/alt.png" data-text="Your card validation code (CVC) is an extra security feature — it is the last 3 or 4 numbers on the back of your card."></popup-info></label>
      <input type="text" id="cvc">
    </div>
  </form>

