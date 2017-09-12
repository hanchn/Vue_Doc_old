## Vue中的动画

要想使元素或者组件应用到我们所写的过渡动画，需要使用vue提供的transition来封装组件成为过渡组件，transition需要与如下情景中的任一种一起使用：

* v-if（条件渲染）
* v-show（条件展示）
* 动态组件
* 在组建的根节点上，并且被vue实例DOM方法触发，如appendTo方法把组件添加到某个根节点上

官方文档

```
https://cn.vuejs.org/v2/guide/transitions.html
```

### 动画的状态

* v-enter: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。

* v-enter-active: 定义进入过渡的结束状态。在元素被插入时生效，在 transition/animation 完成之后移除。

* v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。

* v-leave-active: 定义离开过渡的结束状态。在离开过渡被触发时生效，在 transition/animation 完成之后移除。

### 动画实例

1）写一个简单的文字淡入淡出效果

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