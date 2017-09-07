## Vue中的v-bind指令

v-bind用于属性绑定，使得属性可以动态修改

### v-bind动态修改class

动态修改的class名来源于data对象，而非手动给定

1) 基础示例

```
    <style>
        div{
            width: 100px;
            height: 100px;
            border: 3px solid #000;
        }

        .bg {
            background: red;
        }
    </style>
    <div id="app">
        <div v-bind:class="bg"></div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                bg: 'bg'
            }
        })
    </script> 
```

2) v-bind简写

v-bind可以利用:作为简写方式

```
    <style>
        div{
            width: 100px;
            height: 100px;
            border: 3px solid #000;
        }

        .bg {
            background: red;
        }
    </style>
    <div id="app">
        <div :class="bg"></div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                bg: 'bg'
            }
        })
    </script> 
```

3) 多class名**不冲突**

动态绑定的class与原生class名不冲突，最终会合并成为一个

```
    <style>
        .test{
            width: 100px;
            height: 100px;
            border: 3px solid #000;
        }

        .bg {
            background: red;
        }
    </style>
    <div id="app">
        <div class="test" :class="bg"></div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                bg: 'bg'
            }
        })
    </script> 
```

4） v-bind绑定多class名

```
        <style>
        .test{
            width: 100px;
            height: 100px;
            border: 3px solid #000;
        }

        .bg {
            background: red;
        }

        .color{
            color: blue;
        }
    </style>
    <div id="app">
        <div class="test" :class="[bg, color]">{{val}}</div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: 'Hello World !',
                bg: 'bg',
                color: 'color'
            }
        })
    </script> 
```


5) class状态控制

v-bind中的内容可以以{}运算符配合，进行简单的JS运算

1） 动态切换class

```
        <style>
        .test{
            width: 100px;
            height: 100px;
            border: 3px solid #000;
        }

        .bg {
            background: red;
        }
    </style>
    <div id="app">
        <input type="button" value="点击我切换显示状态" @click="fun()">
        <div class="test" :class="{bg: status}"></div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                bg: 'bg',
                status: true
            },
            methods: {
                fun(){
                    this.status = !this.status;
                }
            }
        })
    </script> 
```

### v-bind绑定内嵌样式

v-bind style 可以进行内嵌样式编写，属性值为字符，多属性用逗号分隔

1） 基础示例

```
    <style>
        .test{
            width: 100px;
            height: 100px;
            border: 3px solid #000;
        }
    </style>
    <div id="app">
        <div class="test" :style="{background: 'red', width: 200 + 'px'}"></div>
    </div>
    <script>
        new Vue({
            el: '#app',
        })
    </script> 
```

2） 动态内嵌样式

```
    <style>
        .test{
            width: 100px;
            height: 100px;
            border: 3px solid #000;
        }
    </style>
    <div id="app">
        <div class="test" :style="style"></div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                style: {background: 'red', width: 200 + 'px'}
            }
        })
    </script> 
```

3) 多样式合并

```
    <style>
        .test{
            width: 100px;
            height: 100px;
            border: 3px solid #000;
        }
    </style>
    <div id="app">
        <div class="test" :style="[style1, style2]"></div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                style1: {background: 'red', width: 200 + 'px'},
                style2: {height: 200 + 'px'}
            }
        })
    </script> 
```









