## Vue中的v-model数据双向绑定

v-model用于非成对DOM的数据绑定({{}}模板数据绑定只适合成对标签)

基础示例

```
<input type="input" v-model="">
```

### 数据双向绑定

1) 数据绑定

```
    <div id="app">
        同步数据：<input type="input" v-model="">
        <h1>
            {{val}}
        </h1>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: 'Hello World !'
            }
        })
    </script>
```


