## Vue组件中的data

Vue组件中的data是独立的，Vue官方不建议各单元互通数据，每个组件有各自的数据对象，类似于Vue示例中的data。

### 组件中的data对象

组件中的data必须是带有返回值的函数对象

基础示例

```
<div id="app">
     <test></test>
</div>  

<script>
    Vue.component('test', {
        template: '<h1>{{val}}</h1>',
        data: () => ({
            val: 10
        })
    })

    new Vue({
        el: '#app'
    })
</script>
```

### 关于组件中的数据

1）单组件数据共享

以下每个按钮的点击，改变的是同一个数据模型

```
<div id="app">
     <test></test>
</div>  

<script>
    Vue.component('test', {
         template: `
                    <div>
                        <button @click="num+=1">{{num}}</button>
                        <button @click="num+=1">{{num}}</button>
                        <button @click="num+=1">{{num}}</button>
                    </div>    
                   `,
        data: () => ({
            num: 0
        }),
        methods: {
            fun(){
                this.num++;
            }
        }           
    })

    new Vue({
        el: '#app'
    })
</script>
```

2）data数据独立

data对象会为不同组件注册不同的数据，同结构不同的组件可以使用不同的独立数据

```
<div id="app">
     <test></test>
     <test></test>
     <test></test>
</div>  

<script>
    Vue.component('test', {
         template: `
                    <div>
                        <button @click="num+=1">{{num}}</button>
                    </div>    
                   `,
        data: () => ({
            num: 0
        }),
        methods: {
            fun(){
                this.num++;
            }
        }           
    })

    new Vue({
        el: '#app'
    })
</script>
```

3）公共作用域数据

如果data数据的参数值是域外定义的公共数据，那么所有组件会共享数据

```
<div id="app">
     <test></test>
     <test></test>
     <test></test>
</div>  

<script>
    let vals = {
        num: 0  //全局作用的公共数据
    }

    Vue.component('test', {
         template: `
                    <div>
                        <button @click="num+=1">{{num}}</button>
                    </div>    
                   `,
        data: () => (vals),
        methods: {
            fun(){
                this.num++;
            }
        }           
    })

    new Vue({
        el: '#app'
    })
</script>
```