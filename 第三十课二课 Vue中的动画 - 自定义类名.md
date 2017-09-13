## Vue中的动画 - 自定义类名

Vue推荐Animate.css样式库来拓展丰富Vue的动画效果，如果用别人的动画库就不得不涉及到自定义类名了

1）Animate.css官方库地址

```
https://daneden.github.io/animate.css/
```

2）自定义类名基本状态的格式

* enter-class
* enter-active-class
* enter-to-class (2.1.8+)
* leave-class
* leave-active-class
* leave-to-class (2.1.8+)

### 自定义类名

```
    <style>
        .test{
            width: 100px;
            height: 100px;
            background: red;
        }
    </style>
    <div id="app">
        <transition name="shake" enter-active-class="animated shake" leave-active-class="animated shake">
            <div class="test" v-show="status"></div>
        </transition>
        <input type="button" value="点击展示动画效果" @click="status = !status">
    </div>
    
    <script>
        new Vue({
            el: '#app',
            data: {
                status: true
            }
        })
    </script>
```

### 显性的过渡持续时间

1）:duration

```
<transition :duration="1000">...</transition>
```

2）移入移出时间

```
<transition :duration="{ enter: 500, leave: 800 }">...</transition>
```





