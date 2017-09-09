## Vue中的组件

Vue中可以自定义模板组件，组件的写法有很多种

### 组件写法

1）在components上拓展组件

```
    <div id="app">
        <test></test>
    </div>
    
    <script>
        new Vue({
            el:'#app',
            components: {
                test: {
                    template: '<h1>这是一个组件模板</h1>'
                }
            }
        })
    </script> 
```

2）在component上拓展组件

```
    <div id="app">
        <test></test>
    </div>
    
    <script>
        Vue.component('test', {
            template: '<h1>这是一个组件模板</h1>'
        })

        new Vue({
            el:'#app'
        })
    </script> 
```

3）将extend挂载到component上

extend可以拓展组件模板，然后可以将extend拓展的模板班挂载到component上

```
    let test = Vue.extend({
        template: '<h1>这是一个组件模板</h1>'
    })

    Vue.component('test', test);

    new Vue({
        el:'#app'
    })
```

4）将extend挂载到components上

```
    <div id="app">
        <test></test>
    </div>
    
    <script>
        let test = Vue.extend({
            template: '<h1>这是一个组件模板</h1>'
        })

        new Vue({
            el:'#app',
            components: {
                test
            }
        })
    </script> 
```

5）JS组件模板语法

```
    <div id="app">
        <test></test>
    </div>
    
    <script type="x-template" id="test">
        <h1>这是一个组件模板</h1>  
    </script>

    <script>
        new Vue({
            el:'#app',
            components: {
                test: {
                    template: '#test'
                }
            }
        })
    </script> 
```

6）template标签组件模板

```
    <div id="app">
        <test></test>
    </div>


    <template id="test">
        <h1>这是一个组件模板</h1>
    </template>

    <script>
        new Vue({
            el:'#app',
            components: {
                test: {
                    template: '#test'
                }
            }
        })
    </script>  
```






