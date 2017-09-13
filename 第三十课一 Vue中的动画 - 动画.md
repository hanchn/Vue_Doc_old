## Vue中的动画 - 动画

关于动画的拓展，其实和之前的过渡效果类似，只不过在之前的基础上增加了自定义帧，也就是keyframes

1）基础示例：DIV的运动

```
    <style>
            .move{
                width: 100px;
                height: 100px;
                background: #000;
                position: fixed;
                left: 0;
                top: 0;
            }

            .move-enter-active{
                animation: test .5s;
            }
        
            .move-leave-active{
                animation: test .5s reverse;
            }

            @keyframes test{
                0%{
                    left: 0px;
                }

                100%{
                    left: 200px;
                }
            }
        
        </style>
        <div id="app">
            <transition name="move">
                <div class="move" v-show="status" @mouseover="status = !status"></div>
            </transition>
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