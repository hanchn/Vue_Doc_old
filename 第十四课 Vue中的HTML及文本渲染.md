## Vue中的HTML及文本渲染

### HTML渲染

v-html指令可以在DOM中渲染新的子HTML DOM，Vue官方认为HTML渲染是不安全的，并不建议直接做HTML插入操作。

```
    <div id="app">
         <div v-html="vals"></div>
    </div>
    <script>
            new Vue({
                el: '#app',
                data: {
                    vals: '<h1>Hello World !</h1>'
                }
            })
    </script>  
```

### 文本渲染

v-text可以将字符渲染进DOM中

```
    <div id="app">
         <div v-text="vals"></div>
    </div>
    <script>
            new Vue({
                el: '#app',
                data: {
                    vals: '<h1>Hello World !</h1>'
                }
            })
    </script>  
```