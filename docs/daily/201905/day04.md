<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>

    [html] Standards模式和Quirks模式有什么区别？

      standards模式和quirks模式主要是以HTML是否加!DOCTYPE
      quirks主要是为了兼容各个浏览器，远古时期遗留下来的BUG（或者说是当时的标准，对于现在来说的BUG），它并未遵循W3C的标准

      怪异盒模型：元素内容宽度=width-margin2-border2-padding2?

      其实我建议这样说
      标准盒模型：元素内容宽度 = width，元素实际宽度=margin2 + border2 + padding2 + width
      怪异盒模型：元素内容宽度 = width - border2 - padding2，元素实际宽度 = margin2 + border2 + padding2 + width = margin2 + width

      楼上公式其实没必要，其实很简单，标准模式宽度就是内容本身，而怪异模式是内容加上padding加上border，但是不加margin

      可以看到很多网站都使用 * { box-sizing: border-box; } 这个样式，因为浏览器默认是标准模式，也就是 content-box , 而大家其实更习惯使用怪异模式


    [css] 浏览器是怎样判断元素是否和某个CSS选择器匹配？

      先产生一个元素集合，然后从后往前判断；

      浏览器先产生一个元素集合，这个集合往往由最后一个部分的索引产生（如果没有索引就是所有元素的集合）。然后向上匹配，如果不符合上一个部分，就把元素从集合中删除，直到真个选择器都匹配完，还在集合中的元素就匹配这个选择器了。

      举个例子
      有选择器：
      div.ready #wrapper > .bg-red
      先把所有元素 class 中有 bg-red 的元素拿出来组成一个集合，然后上一层，对每一个集合中的元素，如果元素的 parent id 不为 #wrapper 则把元素从集合中删去。 再向上，从这个元素的父元素开始向上找，没有找到一个 tagName 为 div 且 class 中有 ready 的元素，就把原来的元素从集合中删去。
      至此这个选择器匹配结束，所有还在集合中的元素满足。大体就是这样，不过浏览器还会有一些奇怪的优化。

      注意：
      1、为什么从后往前匹配因为效率和文档流的解析方向。效率不必说，找元素的父亲和之前的兄弟比遍历所哟儿子快而且方便。关于文档流的解析方向，是因为现在的 CSS，一个元素只要确定了这个元素在文档流之前出现过的所有元素，就能确定他的匹配情况；应用在即使 html 没有载入完成，浏览器也能根据已经载入的这一部分信息完全确定出现过的元素的属性。

      2、为什么是用集合主要也还是效率。基于 CSS Rule 数量远远小于元素数量的假设和索引的运用，遍历每一条 CSS Rule 通过集合筛选，比遍历每一个元素再遍历每一条 Rule 匹配要快得多。

      总结： 一段CSS选择器，从右到左依次去html里面找，从最开始匹配的元素集合，根据增加的选择器来剔除，得到最终匹配


    [js] 请用canvas写一个关于520浪漫表白的代码


    [软技能] 你了解什么是技术债务吗？

    <a href="https://www.jianshu.com/p/e532a7e4f768" target="_blank">https://www.jianshu.com/p/e532a7e4f768</a>

  </pre>


  <canvas id="pinkboard" width="1905" height="235"></canvas>
</body>

<script>

  //手写

  //实现


  /*
   * Settings
   */
  var settings = {
      particles: {
          length:   500, // maximum amount of particles
          duration:   2, // particle duration in sec
          velocity: 100, // particle velocity in pixels/sec
          effect: -0.75, // play with this for a nice effect
          size:      30, // particle size in pixels
      },
  };

  /*
   * RequestAnimationFrame polyfill by Erik M?ller
   */
  (function(){var b=0;var c=["ms","moz","webkit","o"];for(var a=0;a<c.length&&!window.requestAnimationFrame;++a){window.requestAnimationFrame=window[c[a]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[c[a]+"CancelAnimationFrame"]||window[c[a]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(h,e){var d=new Date().getTime();var f=Math.max(0,16-(d-b));var g=window.setTimeout(function(){h(d+f)},f);b=d+f;return g}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(d){clearTimeout(d)}}}());

  /*
   * Point class
   */
  var Point = (function() {
      function Point(x, y) {
          this.x = (typeof x !== 'undefined') ? x : 0;
          this.y = (typeof y !== 'undefined') ? y : 0;
      }
      Point.prototype.clone = function() {
          return new Point(this.x, this.y);
      };
      Point.prototype.length = function(length) {
          if (typeof length == 'undefined')
              return Math.sqrt(this.x * this.x + this.y * this.y);
          this.normalize();
          this.x *= length;
          this.y *= length;
          return this;
      };
      Point.prototype.normalize = function() {
          var length = this.length();
          this.x /= length;
          this.y /= length;
          return this;
      };
      return Point;
  })();

  /*
   * Particle class
   */
  var Particle = (function() {
      function Particle() {
          this.position = new Point();
          this.velocity = new Point();
          this.acceleration = new Point();
          this.age = 0;
      }
      Particle.prototype.initialize = function(x, y, dx, dy) {
          this.position.x = x;
          this.position.y = y;
          this.velocity.x = dx;
          this.velocity.y = dy;
          this.acceleration.x = dx * settings.particles.effect;
          this.acceleration.y = dy * settings.particles.effect;
          this.age = 0;
      };
      Particle.prototype.update = function(deltaTime) {
          this.position.x += this.velocity.x * deltaTime;
          this.position.y += this.velocity.y * deltaTime;
          this.velocity.x += this.acceleration.x * deltaTime;
          this.velocity.y += this.acceleration.y * deltaTime;
          this.age += deltaTime;
      };
      Particle.prototype.draw = function(context, image) {
          function ease(t) {
              return (--t) * t * t + 1;
          }
          var size = image.width * ease(this.age / settings.particles.duration);
          context.globalAlpha = 1 - this.age / settings.particles.duration;
          context.drawImage(image, this.position.x - size / 2, this.position.y - size / 2, size, size);
      };
      return Particle;
  })();

  /*
   * ParticlePool class
   */
  var ParticlePool = (function() {
      var particles,
          firstActive = 0,
          firstFree   = 0,
          duration    = settings.particles.duration;

      function ParticlePool(length) {
          // create and populate particle pool
          particles = new Array(length);
          for (var i = 0; i < particles.length; i++)
              particles[i] = new Particle();
      }
      ParticlePool.prototype.add = function(x, y, dx, dy) {
          particles[firstFree].initialize(x, y, dx, dy);

          // handle circular queue
          firstFree++;
          if (firstFree   == particles.length) firstFree   = 0;
          if (firstActive == firstFree       ) firstActive++;
          if (firstActive == particles.length) firstActive = 0;
      };
      ParticlePool.prototype.update = function(deltaTime) {
          var i;

          // update active particles
          if (firstActive < firstFree) {
              for (i = firstActive; i < firstFree; i++)
                  particles[i].update(deltaTime);
          }
          if (firstFree < firstActive) {
              for (i = firstActive; i < particles.length; i++)
                  particles[i].update(deltaTime);
              for (i = 0; i < firstFree; i++)
                  particles[i].update(deltaTime);
          }

          // remove inactive particles
          while (particles[firstActive].age >= duration && firstActive != firstFree) {
              firstActive++;
              if (firstActive == particles.length) firstActive = 0;
          }


      };
      ParticlePool.prototype.draw = function(context, image) {
          // draw active particles
          if (firstActive < firstFree) {
              for (i = firstActive; i < firstFree; i++)
                  particles[i].draw(context, image);
          }
          if (firstFree < firstActive) {
              for (i = firstActive; i < particles.length; i++)
                  particles[i].draw(context, image);
              for (i = 0; i < firstFree; i++)
                  particles[i].draw(context, image);
          }
      };
      return ParticlePool;
  })();

  /*
   * Putting it all together
   */
  (function(canvas) {
      var context = canvas.getContext('2d'),
          particles = new ParticlePool(settings.particles.length),
          particleRate = settings.particles.length / settings.particles.duration, // particles/sec
          time;

      // get point on heart with -PI <= t <= PI
      function pointOnHeart(t) {
          return new Point(
              160 * Math.pow(Math.sin(t), 3),
              130 * Math.cos(t) - 50 * Math.cos(2 * t) - 20 * Math.cos(3 * t) - 10 * Math.cos(4 * t) + 25
          );
      }

      // creating the particle image using a dummy canvas
      var image = (function() {
          var canvas  = document.createElement('canvas'),
              context = canvas.getContext('2d');
          canvas.width  = settings.particles.size;
          canvas.height = settings.particles.size;
          // helper function to create the path
          function to(t) {
              var point = pointOnHeart(t);
              point.x = settings.particles.size / 2 + point.x * settings.particles.size / 350;
              point.y = settings.particles.size / 2 - point.y * settings.particles.size / 350;
              return point;
          }
          // create the path
          context.beginPath();
          var t = -Math.PI;
          var point = to(t);
          context.moveTo(point.x, point.y);
          while (t < Math.PI) {
              t += 0.01; // baby steps!
              point = to(t);
              context.lineTo(point.x, point.y);
          }
          context.closePath();
          // create the fill
          context.fillStyle = '#ea80b0';
          context.fill();
          // create the image
          var image = new Image();
          image.src = canvas.toDataURL();
          return image;
      })();

      // render that thing!
      function render() {
          // next animation frame
          requestAnimationFrame(render);

          // update time
          var newTime   = new Date().getTime() / 1000,
              deltaTime = newTime - (time || newTime);
          time = newTime;

          // clear canvas
          context.clearRect(0, 0, canvas.width, canvas.height);

          // create new particles
          var amount = particleRate * deltaTime;
          for (var i = 0; i < amount; i++) {
              var pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());
              var dir = pos.clone().length(settings.particles.velocity);
              particles.add(canvas.width / 2 + pos.x, canvas.height / 2 - pos.y, dir.x, -dir.y);
          }

          // update and draw particles
          particles.update(deltaTime);
          particles.draw(context, image);
      }

      // handle (re-)sizing of the canvas
      function onResize() {
          canvas.width  = canvas.clientWidth;
          canvas.height = canvas.clientHeight;
      }
      window.onresize = onResize;

      // delay rendering bootstrap
      setTimeout(function() {
          onResize();
          render();
      }, 10);
  })(document.getElementById('pinkboard'));

</script>
</html>
