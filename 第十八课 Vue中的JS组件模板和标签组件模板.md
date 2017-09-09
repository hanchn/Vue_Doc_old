## Vue中的JS组件模板和标签组件模板

Vue中的组件编写方式很多，这个应该算是Vue的缺点吧，本文将介绍Vue的其他组件的编写方式

### JS组件模板

吐槽*非常奇怪的用法，通过JS标签生成组件，使用方式和

1）通过component进行拓展

```
<div id="app">
     <test></test>
</div>  
<script type="x-template" id="test">
        <h1>这是一个通过JS标签生成的组件！</h1>
</script>
<script>
    Vue.component('test', {
        template: '#test'
    })

    new Vue({
        el: '#app'
    })
</script>
```

2）通过components进行拓展

```
<div id="app">
     <test></test>
</div>  
<script type="x-template" id="test">
        <h1>这是一个通过JS标签生成的组件！</h1>
</script>
<script>
    new Vue({
        el: '#app',
        components: {
            test: {
                template: '#test'
            }
        }
    })
</script>
```

### 标签组件模板

1）通过component进行拓展

这种方式比script组件高明不了多少，只是把JS换成了template标签

```
<div id="app">
     <test></test>
</div>  

<template id="test">
    <h1>这是标签组件模板</h1>
</template>

<script>
    Vue.component('test', {
        template: '#test'
    })

    new Vue({
        el: '#app'
    })
</script>
```

2）通过components进行拓展

```
<div id="app">
     <test></test>
</div>  

<template id="test">
    <h1>这是标签组件模板</h1>
</template>

<script>
    new Vue({
        el: '#app',
        components: {
            test: {
                template: '#test'
            }
        }
    })
</script>
```