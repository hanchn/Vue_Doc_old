## Vue中的条件语句指令

Vue中提供了条件语句指令，用户无需单独再写条件语句

基础示例：

判断 10 > 5

```
    <div id="app">
        <div v-if="10 > 5">显示</div>
    </div>
    <script>
        new Vue({
            el: '#app'
        })
    </script>  
```

### 条件语句

1） v-if

```
    <div id="app">
        <div v-if="val > 0">V大于0</div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: 1
            }
        })
    </script>  
```

2）v-else 

```
    <div id="app">
        <div v-if="val > 1">V大于1</div>
        <div v-else>V不大于1</div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: 1
            }
        })
    </script>  
```

3）v-else-if

```
    <div id="app">
        <div v-if="val > 1">V大于1</div>
        <div v-else-if=" val == 1">V等于1</div>
        <div v-else>V小于1</div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: 1
            }
        })
    </script>  
```

### 总结

v-if指令与v-show的功能在部分场景重叠，常用语条件判断。