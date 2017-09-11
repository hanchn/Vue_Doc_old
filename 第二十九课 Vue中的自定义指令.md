## Vue中的自定义指令

Vue中允许自定义指令，结合directive属性即可

1）组成结构

```
Vue.directive(指令名, 指令实现内容)
```

2）基础示例：

使得当前作用节点颜色变成红色

```
    <div id="app">
        <h1 v-red="color">测试自定义指令</h1>
    </div>
    <script>
        Vue.directive('red', function(el, bingding){
            el.style.color = bingding.value;
        })

        new Vue({
            el: '#app', 
            data: {
                vals: 'Hello Wolrd !',
                color: 'red'
            }
        })
    </script> 
```

### directive中的钩子函数

不同的钩子表示当前自定义指令所处的周期是在哪一环节：

1）bind 

只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作

2）inserted 

被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）

3）update

被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新

4）componentUpdated

被绑定元素所在模板完成一次更新周期时调用

5）unbind

只调用一次，指令与元素解绑时使用


### 钩子函数中的参数

1）el 

指令所绑定的元素，可以用来直接操作 DOM 。

2）binding

 一个对象，包含以下属性： 

    * name: 指令名，不包括 v- 前缀。

    * value: 指令的绑定值， 例如： v-my-directive="1 + 1"，value 的值是 2。

    * oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。

    * expression: 绑定值的字符串形式。 例如 v-my-directive="1 + 1" ， expression 的值是 "1 + 1"。

    * arg: 传给指令的参数。例如 v-my-directive:foo， arg 的值是 "foo"。

    * modifiers: 一个包含修饰符的对象。 例如： v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。

3）vnode

 Vue 编译生成的虚拟节点。

4）oldVnode

 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。


### 自定义指令拖拽功能

```
    <style>
        *{
            padding: 0;
            margin: 0;
        }

        .test{
            width: 100px;
            height: 100px;
            background: red;
            cursor: pointer;
            position: absolute;
            left: 0;
            top: 0;
        }
    </style>
    <div id="app">
        <div class="test" v-drag></div>
    </div>
    <script>
    </script>
    <script>
        Vue.directive('drag', function(el, e){
            let x = 0, y = 0, l = 0, t = 0, mx = 0, my = 0, status = 0;
            
            el.onmousedown = function(e){
                status = 1;
                x = e.pageX;
                y = e.pageY;
                l = el.offsetLeft;
                t = el.offsetTop;
                mx = x - l;
                my = y - t;
            };

            el.onmousemove = function(e){
                if(status == 1){
                    el.style.left = e.pageX - mx + "px";
                    el.style.top = e.pageY - my + "px";
                }
            };


            window.onmouseup = function(){
                status = 0;
            }

            window.onmouseup = function(){
                status = 0;
            }
        })

        new Vue({
            el: '#app', 
            data: {
                vals: 'Hello Wolrd !',
                color: 'red'
            }
        })
    </script>    
```