## Vue中的数据绑定

Vue中的数据绑定采用大胡子语法，即双{}进行数据绑定

基础示例:

```
<div id="app">{{val}}<div>
<script>
new Vue({
    el: '#app',
    data: {
        val: 'Hello World !'
    }
})
</script>
```

### 数据绑定

1）内置data对象

Vue构造函数内部拓展了内置数据对象data，所有数据放置在data对象内（参考基础示例）

2）大胡子语法

DOM标签通过大胡子语法绑定相应的属性值，直接将data对象中的属性名写入即可（参考基础示例）

### 模板中的运算

模板（大胡子）中允许进行简单的JS运算

1）数值相加

```
    <div id="app">{{val + 2}}</div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: 1
            }
        })
    </script>   
```

2）字符串拼接

```
    <div id="app">{{val + 'Peny'}}</div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: 'Hello '
            }
        })
    </script> 
```

3) 三元运算

```
    <div id="app">{{val > 0 ? 'val大于0': 'val不大于0'}}</div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: 0
            }
        })
    </script>   
```

4） 模板报错行为

a) 不允许出现变量定义行为

```
<div>{{let val = 10}}</div>
```

b) 不允许出现条件判断语句

```
<div>{{ if(true){ return true} }}</div>
```

c) 标签不成对

```
<div>{{ val }}
```
