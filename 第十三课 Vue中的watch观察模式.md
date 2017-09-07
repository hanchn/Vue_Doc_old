## Vue中的watch观察模式

watch用于监测数据的变化，如果发生变化会及时返回修改前和修改后的数据

基础示例

```
    <div id="app">
            <input type="text" v-model="val">
            <h1>{{change}}</h1>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: 'Hello World !',
                change: ''
            },
            watch: {
                val(news, olds){
                    this.change = 'new: ' + news + ' old: ' + olds;
                }
            }
        })
    </script> 
```