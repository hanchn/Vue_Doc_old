## Vue中的动画 - 过渡

要想使元素或者组件应用到我们所写的过渡动画，需要使用vue提供的transition来封装组件成为过渡组件，transition需要与如下情景中的任一种一起使用：

* v-if（条件渲染）
* v-show（条件展示）
* 动态组件
* 在组建的根节点上，并且被vue实例DOM方法触发，如appendTo方法把组件添加到某个根节点上

官方文档地址

```
https://cn.vuejs.org/v2/guide/transitions.html
```

### 过渡中的类名

以自定义类名+官方定义的过渡状态结合

* v-enter: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。

* v-enter-active: 定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。 这个类可以被用来定义过渡的过程时间，延迟和曲线函数。

* v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入一帧后生效（于此同时 v-enter 被删除），在 transition/animation 完成之后移除。

* v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。

* v-leave-active: 定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。 这个类可以被用来定义过渡的过程时间，延迟和曲线函数。

* v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发一帧后生效（于此同时 v-leave 被删除），在 transition/animation 完成之后移除。

### 动画实例

1）点击切换文字淡入淡出效果

```
<style>
    .fade-enter-active, .fade-leave-active{
        transition: all 0.5s ease-out;
    }

    .fade-enter, .fade-leave-to{
        opacity: 0;
    }

</style>
<div id="app">
    <input type="button" value="切换状态" @click="vals = !vals">
    <transition name="fade">
        <h1 v-show="vals">测试文字</h1>
    </transition>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            vals: true
        }
    })
</script> 
```

2）弹出窗口淡入淡出效果

```
    <style>
            .login{
                width: 300px;
                height: 200px;
                background: #000;
                position: fixed;
                left: 50%;
                top: 50%;
                margin-left: -150px;
                margin-top: -100px;
            }

            .fade-enter-active, .fade-leave-active{
                transition: all 0.5s ease-out;
            }
        
            .fade-enter, .fade-leave-to{
                opacity: 0;
            }
        
        </style>
        <div id="app">
            <input type="button" value="切换状态" @click="show()">
            <transition name="fade">
                 <login v-show="status" @fades = "fade"></login>
            </transition>
        </div>
        
        <script>
            new Vue({
                el: '#app',
                data: {
                    status: false
                },
                methods: {
                    show(){
                        this.status = true;
                    },
                    fade(val){
                        alert(1);
                        console.log("接受发射的值：" + val);
                        this.status = val;
                    }
                },
                components: {
                    login: {
                        data: () => ({
                            changeStatus: false
                        }),
                        template: `
                                     <div class="login">
                                          <input type="button" value="关闭窗口" @click="send(changeStatus)">
                                     </div>
                                  `,
                        methods: {
                            send(val){
                                console.log('发射出值：' + val);
                                this.$emit('fades', val);
                            }
                        }          
                    },

                }
            })
        </script>
```