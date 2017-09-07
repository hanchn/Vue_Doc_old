## Vue中的按键修饰符

Vue中的事件绑定中，键盘事件有些特殊，我们可以通过获取不同的键值操作不同键盘触发不同的事件

Vue为不同键盘定义了不同的键名

### 数字按键修饰符

根据不同的键值，可以获取不同的键盘按键

示例：获取回车键（keyCode为）

```
    <div id="app">
        <input type="button" value="键盘事件" @keydown.13="fun()">
    </div>
    <script>
        new Vue({
            el: '#app',
            methods: {
                fun(){
                    alert('按回车键的到的内容');
                }
            }
        })
    </script>  
```

键盘值有很多，我们可以自行获取（类似于上例）


### 按键修饰符别名

Vue为部分键设置了别名，我们不仅可以通过键值获取按键，也可以通过键名获取按键

```
    <div id="app">
        <input type="button" value="键盘事件" @keydown.enter="fun()">
    </div>
    <script>
        new Vue({
            el: '#app',
            methods: {
                fun(){
                    alert('按回车键的到的内容');
                }
            }
        })
    </script>  
```

### 自定义按键修饰符

自定义按键修饰符通过构造函数中的config进行拓展

1）自定义按键修饰符示例

例子：设置上键别名为test

```
    <div id="app">
        <input type="button" value="键盘事件" @keydown.test="fun()">
    </div>
    <script>
        Vue.config.keyCodes = {
            test: 38
        }

        new Vue({
            el: '#app',
            methods: {
                fun(){
                    alert('按回车键的到的内容');
                }
            }
        })
    </script>  
```

2）自定义按键修饰符 驼峰式命名 无法使用

3）自定义按键修饰符 横杠式命名

横杠是按键修饰符在定义时候需要加引号

```
    <div id="app">
        <input type="button" value="键盘事件" @keydown.test-me="fun()">
    </div>
    <script>
        Vue.config.keyCodes = {
            'test-me': 38
        }

        new Vue({
            el: '#app',
            methods: {
                fun(){
                    alert('按回车键的到的内容');
                }
            }
        })
    </script>  
```

4) 自定义修饰符 数组式多命名

```
    <div id="app">
        <input type="button" value="键盘事件" @keydown.test="fun()">
    </div>
    <script>
        Vue.config.keyCodes = {
            test: [38, 39]
        }

        new Vue({
            el: '#app',
            methods: {
                fun(){
                    alert('按回车键的到的内容');
                }
            }
        })
    </script>  
```


