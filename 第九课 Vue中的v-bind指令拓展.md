## Vue中的v-bind指令

### 示例拓展

1）切换样式

```
    <style>
        .test{
            width: 100px;
            height: 100px;
            border: 3px solid #000;
        }

        .bg{
            background: red;
        }
    </style>
    <div id="app">
        <input type="button" value="点击切换样式" @click="check"> 
        <div class="test" :class="{bg: status}"></div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                class: 'bg',
                status: true
            },
            methods: {
                check(){
                    this.status = !this.status;
                }
            }
        })
    </script> 
```

2) 切换更改状态

```
    <div id="app">
        <input type="button" value="点击切换样式" @click="check"> 
        <input type="text" :disabled="status" placeholder="尝试在这里输入内容">
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                status: true
            },
            methods: {
                check(){
                    this.status = !this.status;
                }
            }
        })
    </script>
```
