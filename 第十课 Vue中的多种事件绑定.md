## Vue中给的多种事件绑定

### 点击事件

基础示例：

1） 点击事件

```
    <div id="app">
        <input type="button" value="点击切换样式" @click="fun"> 
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

2）鼠标事件 - 鼠标经过

```
    <div id="app">
        <input type="button" value="点击切换样式" @mouseover="fun"> 
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

3）其他鼠标事件

* mouseleave（鼠标移开）

### 表单事件

1） focus (进入焦点)

```
    <div id="app">
        <input type="text" v-model="val" @focus="clear()"> 
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: '请填写一些内容'
            },
            methods: {
                clear(){
                    this.val = "";
                }
            }
        })
    </script> 
```

2) 移出焦点

```
    <div id="app">
        <input type="text" v-model="val" @focus="clear()" @blur="blurs()"> 
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: '请填写一些内容'
            },
            methods: {
                clear(){
                    this.val = "";
                },

                blurs(){
                    this.val = "重新赋值";
                }
            }
        })
    </script>  
```

### 键盘事件

*此处暂时先介绍**作用于表单控件**的键盘事件

1）键盘按下

```
    <div id="app">
        <input type="button" value="键盘事件" @keydown="fun()">
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: '请填写一些内容'
            },
            methods: {
                fun(){
                    alert(1);
                }
            }
        })
    </script> 
```

2) 键盘放开

```
    <div id="app">
        <input type="button" value="键盘事件" @keyup="fun()">
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: '请填写一些内容'
            },
            methods: {
                fun(){
                    alert(1);
                }
            }
        })
    </script> 
```