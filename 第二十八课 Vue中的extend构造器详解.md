## Vue中的extend构造器详解

在前文中，我们曾有示例提到extend可以作为句柄挂载到component上，来创建组件

### 通过component挂载

此处的用法类似于通过extend构模板结构，然后挂载到component和components上

1）在component上进行extend挂载

```
    <div id="app">
        <test></test>
    </div>

    <script>
        let test = {
            template: '<h1>这是一个组件模板！</h1>'
        }

        Vue.component('test', test)

        new Vue({
            el:'#app'
        })
    </script>  
```

2）在components上进行extend挂载

```
    <div id="app">
        <test></test>
    </div>

    <script>
        let test = {
            template: '<h1>这是一个组件模板！</h1>'
        };
 
        new Vue({
            el:'#app',
            components: {
                test
            }
        })
    </script> 
```
### 通过$mount挂载extend组件

```
    <div id="app">
        <test></test>
    </div>

    <script>
        let test = Vue.extend({
            template: '<h1>这是一个组件模板！</h1>'
        });

        new test().$mount('test');
 
        new Vue({
            el:'#app'
        });
    </script>
```


