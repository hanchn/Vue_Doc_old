## Vue中的v-for遍历指令

v-for用于对象遍历（数组/JSON），渲染数据列表

基础示例：

```
    <div id="app">
        <ul>
            <li v-for="val in arr">{{val}}</li>
        </ul>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                arr: ['这是数据测试aaa', '这是数据测试bbb', '这是数据测试ccc', '这是数据测试ddd']
            }
        })
    </script>   
```

### 数组遍历

1）遍历数组值

```
    <div id="app">
        <ul>
            <li v-for="val in arr">{{val}}</li>
        </ul>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                arr: ['这是数据测试aaa', '这是数据测试bbb', '这是数据测试ccc', '这是数据测试ddd']
            }
        })
    </script>  
```

2) 遍历数组键/值

```
    <div id="app">
        <ul>
            <li v-for="(val, key) in arr">{{key}} ： {{val}}</li>
        </ul>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                arr: ['这是数据测试aaa', '这是数据测试bbb', '这是数据测试ccc', '这是数据测试ddd']
            }
        })
    </script> 
```

### 对象遍历

1) 遍历对象

```
    <div id="app">
        <ul>
            <li v-for="val in obj">姓名：{{val.name}} - 年龄：{{val.age}}</li>
        </ul>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                obj: [
                    {'name': 'Bob', 'age': '20'},
                    {'name': 'Jerry', 'age': '18'},
                    {'name': 'Summer', 'age': '15'},
                    {'name': 'Lili', 'age': '21'},
                ]
            }
        })
    </script>  
```

2）遍历对象键/值对

```
    <div id="app">
        <ul>
            <li v-for="(val, key) in obj">ID:{key}} - 姓名：{{val.name}} - 年龄：{{val.age}}</li>
        </ul>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                obj: [
                    {'name': 'Bob', 'age': '20'},
                    {'name': 'Jerry', 'age': '18'},
                    {'name': 'Summer', 'age': '15'},
                    {'name': 'Lili', 'age': '21'},
                ]
            }
        })
    </script>  
```