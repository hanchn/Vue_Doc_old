## Vue组件中的方法

组件中的方法拓展与实例对象中的方法拓展类似

```
<div id="app">
     <test></test>
</div>  

<script>
    Vue.component('test', {
        template: '<input type="button" value="这是个按钮组件" @click="fun()">',
        methods: {
            fun(){
                alert('Hello World !');
            }
        }
    })

    new Vue({
        el: '#app'
    })
</script>
```