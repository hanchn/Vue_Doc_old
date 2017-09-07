## Vue中的事件修饰符

事件修饰符的使用场景较多，主要为了处理事件冒泡和默认事件等所带来的一系列问题

### 事件修饰符

1）阻止默认事件

```
    <div id="app">
            <a href="/" v-on:click.prevent="fun()">点击我弹出弹窗</a>
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

2）阻止冒泡

```
        <style>
        .per{
            width: 200px;
            height: 200px;
            border: 2px solid #000;
        }

        .son{
            width: 100px;
            height: 100px;
            background: red;
        }
        </style>
        <div id="app">
                <div class="per" @click="per()">
                    <div class="son" @click.stop="son()"></div>
                </div>
        </div>
        <script>
            new Vue({
                el: '#app',
                methods: {
                    per(){
                        alert('This is per!');
                    },
                    son(){
                        alert('This is son!');
                    }                    
                }
            })
        </script>  
```

3）链式调用

```
        <style>
        .per{
            width: 200px;
            height: 200px;
            border: 2px solid #000;
        }

        .son{
            width: 100px;
            height: 100px;
            background: red;
            display: block;
        }
        </style>
        <div id="app">
                <div class="per" @click="per()">
                    <a class="son" href="/" @click.prevent.stop="son()"></a>
                </div>
        </div>
        <script>
            new Vue({
                el: '#app',
                methods: {
                    per(){
                        alert('This is per!');
                    },
                    son(){
                        alert('This is son!');
                    }                    
                }
            })
        </script>  
```

4）事件捕获模式

```
        <style>
        .per{
            width: 200px;
            height: 200px;
            border: 2px solid #000;
        }

        .son{
            width: 100px;
            height: 100px;
            background: red;
        }
        </style>
        <div id="app">
                <div class="per" @click="per()">
                    <div class="son" @click.capture="son()"></div>
                </div>
        </div>
        <script>
            new Vue({
                el: '#app',
                methods: {
                    per(){
                        alert('This is per!');
                    },
                    son(){
                        alert('This is son!');
                    }                    
                }
            })
        </script>  
```

5) 其他不常用事件修饰符

a）self
b）once