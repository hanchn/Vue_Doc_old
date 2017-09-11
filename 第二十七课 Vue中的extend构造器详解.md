## Vue中的extend构造器详解

extend可以用来拓展组件**模板**，不能直接运行，可以绑定到component上或者挂载到实例上进行使用

Vue.extend返回的是一个“扩展实例构造器”，也就是预设了部分选项的Vue的实例构造器，它常常服务于Vue.component用来生成组件，可以简单理解为当在模板中遇到该组件作为标签的自定义元素时，会自动调用“扩展实例构造器”来生产组件实例，并挂在到自定义元素上

### 通过extend拓展组件模板

1）extend创建组件模板示例：

```
    <div id="app">
        <test></test>    
    </div>
    <script>
        let test = Vue.extend({
            template: '<h1>这是extend拓展出来的组件模板</h1>'
        });

        new Vue({
            el: '#app',
            data: {
                val: ''
            }
        })
    </script> 
```

以上示例extend并没有创建组件，只是拓展了组件模板并返回了“实例构造器”，网页中不会有任何效果，如果想要使得以上示例产生效果则有两个途径：

1）通过component挂载
2）创建实例并挂载


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

### 创建extend实例并挂载

1）释义

    a）extend相当于拓展出了组件模板

    b）$mount() 相当于定义了组件的名称（标签名）

2）基础示例：

```
    <div id="app">
        <test></test>
    </div>
    <script>
        let test = Vue.extend({
            template: '<h1>这是extend拓展出来的组件模板</h1>'
        });

        new test().$mount('test');

        new Vue({
            el: '#app',
            data: {
                val: ''
            }
        })
    </script> 
```


2）在普通标签上进行挂载

extend拓展的组件也可以在普通标签上进行挂载

```
    <div id="app">
        <div id="test"></div>
    </div>
    <script>
        let test = Vue.extend({
            template: '<h1>在普通的标签上进行extend组件挂载</h1>'
        });

        new test().$mount('#test');

        new Vue({
            el: '#app',
            data: {
                val: ''
            }
        })
    </script>   
```

### 通过实例为组件传值

因为extend方式拓展的组件，实例很可能是自己构造的，父组件的data传递也不太一样

```
    <div id="app">
        <h1>{{val}}</h1>
        <div id="test" :vals="val"></div>
    </div>
    <script>
        let test = Vue.extend({
            template: '<h1>组件调用父级的数据：{{vals}}</h1>',
            props: ['vals']
        });

        new test({propsData: {vals: '从实例上为内部组件传值'}}).$mount('#test');

        new Vue({
            el: '#app'
        })
    </script>
```




