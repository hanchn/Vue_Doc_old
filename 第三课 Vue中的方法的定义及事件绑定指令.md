## Vue中的方法的定义及事件绑定指令

### 方法定义

方法定义通过Vue对象中的methods属性进行拓展

1）基础示例

```
    new Vue({
        el: '#app',
        methods: {
            fun(){
                alert(1);
            }
        }
    })
```

2）操作对象数据

```
    new Vue({
        el: '#app',
        data: {
            val: 'Hello World !'
        },
        methods: {
            fun(){
                alert(val);
            }
        }
    })
```

### 事件绑定指令

Vue中拓展了事件绑定指令(v-on)，用于绑定自定义的事件

1）基础示例

```
    <div id="app">
        <input type="button" value="点击我" v-on:click="fun()">
    </div>
    <script>
        new Vue({
            el: '#app',
            methods: {
                fun(){
                    alert('Hello World !');
                }
            }
        })
    </script> 
```

2) 简写指令绑定

v-on指令还有较方便的简写方式 @

```
    <div id="app">
        <input type="button" value="点击我" @:click="fun()">
    </div>
    <script>
        new Vue({
            el: '#app',
            methods: {
                fun(){
                    alert('Hello World !');
                }
            }
        })
    </script> 
```

3）综合指令绑定事件示例

```
    <div id="app">
        <input type="button" value="点击我" v-on:click="fun()">
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: 'Hello World !'
            },
            methods: {
                fun(){
                    alert(this.val);
                }
            }
        })
    </script>  
```