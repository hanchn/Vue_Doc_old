## Vue中的显示与隐藏指令

v-show用于显示或隐藏DOM元素，配合布尔值表示显示状态，使用场景较多

基础示例：

```
    <style>
        .test{
            width: 100px;
            height: 100px;
            background: red;
        }
    </style>
    <div id="app">
        <div class="test" v-show="true"></div>
    </div>
    <script>
        new Vue({
            el: '#app'
        })
    </script> 
```

### V-show

1） 配合data使用

指令中也可以传入data参数

```
    <div id="app">
        <div class="test" v-show="val"></div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: false
            }
        })
    </script>   
```

2）配合methods使用

```
    <div id="app">
        <input type="button" value="点击我切换显示效果" @click="show()">
        <div class="test" v-show="val"></div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: false
            },
            methods: {
                show(){
                    this.val = !this.val;
                }
            }
        })
    </script>  
```

3) 条件筛选

```
    <div id="app">
        <div class="test" v-show="val <= 10"></div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: 10
            }
        })
    </script> 
```