## component组件解析

component组件的写法在众多组件写法中算是比较简单的，component组件结构组成如下：

1）组件名
2）组件模板
3）利用Vue对象进行生成

基础示例：

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

### component组件

我们可以通过在实例外部以component的方式拓展单个组件，当前方式需要在构建全局实例之前进行组件创建，不存在组件提升。（类似于变量提升）

1）创建组件

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

2）分离模板创建组件

```
    <div id="app">
        <test></test>
    </div>

    <script>
        let tem = {
            template: '<h1>这是一个组件模板</h1>'
        }

        Vue.component('test', tem);

        new Vue({
            el:'#app'
        })
    </script> 
```

3）通过components拓展组件

components和methods类似，表示（组件）集合，我们也可以直接通过components进行组件拓展

```
    <div id="app">
        <test></test>
    </div>

    <script>
        new Vue({
            el:'#app',
            components: {
                'test': {
                    template: '<h1>这是一个组件模板</h1>'
                }
            }
        })
    </script> 
```

### 驼峰式命名

驼峰式命名在使用的时候，需要将调用的组件名转换成横杠式

```
    <div id="app">
        <test-me></test-me>
    </div>

    <script>
        Vue.component('testMe', {
            template: '<h1>这是一个组件模板</h1>'
        })

        new Vue({
            el:'#app'
        })
    </script>  
```

### 组件中的DOM包裹规则

1）单DOM组件

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

2）多DOM组件

如果组件涉及的DOM较多，必须要将所有DOM包裹在一个主DOM中，否则将报错

```
    <div id="app">
        <test></test>
    </div>

    <script>
        Vue.component('test', {
            template: '<div><h1>这是一个组件模板</h1><h1>这是第二个组件模板</h1></div>'
        })

        new Vue({
            el:'#app'
        })
    </script> 
```

3）配合ES6模板语法使用


```
    <div id="app">
        <test></test>
    </div>

    <script>
        Vue.component('test', {
            template: `<div>
                            <h1>这是一个组件模板</h1>
                            <h1>这是第二个组件模板</h1>
                      </div>`
        })

        new Vue({
            el:'#app'
        })
    </script> 
```

