## Vue中的过滤器

Vue2.0以后废除了原始的过滤器，我们可以通过自定义过滤器去进行过滤

自定义过滤器通过属性filter去拓展

基础示例：

```
    <div id="app">
        <h1>{{val | test}}</h1>
    </div>
    <script>
            new Vue({
                el: '#app',
                data: {
                    val: 10
                },
                filters: {
                    test(val){
                         return val > 100? '当前值大于100': '当前值不大于100'
                    }
                }
            })
    </script>  
```

### 自定义单向过滤器

1） 通过构造函数构建过滤器

大小写过滤

```
    <div id="app">
        <input type="text" v-model="val">
        原始输入内容：<h1>{{val}}</h1>
        将大写英文转成小写：<h1>{{val | lowCase}}</h1>
        将小写英文转换成大写：<h1>{{val | upCase}}</h1>
    </div>
    <script>
            new Vue({
                el: '#app',
                data: {
                    val: 'Hello World !'
                },
                filters: {
                    lowCase(val){
                         return val.toLowerCase();
                    },
                    upCase(val){
                         return val.toUpperCase();
                    }
                }
            })
    </script> 
```

2）通过外部单独拓展过滤器

```
<div id="app">
    <input type="text" v-model="val">
    原始输入内容：<h1>{{val}}</h1>
    将大写英文转成小写：<h1>{{val | lowCase}}</h1>
    将小写英文转换成大写：<h1>{{val | upCase}}</h1>
</div>
<script>
        Vue.filter('lowCase', function(val){
            return val.toLowerCase();
        });

        Vue.filter('upCase', function(val){
            return val.toUpperCase();
        })

        new Vue({
            el: '#app',
            data: {
                val: 'Hello World !'
            }
        })
</script>
```

3) 关于参数值传递

fiter过滤器默认值第一位是当前的过滤参数，如果在过滤器传入参数，直接在参数集中传入其他参数即可

```
<div id="app">
    原始输入内容：<h1>{{val | deal('Hello ', 'World !')}}</h1>
</div>
<script>
    new Vue({
        el: '#app',
        data: {
            val: 'Bob'
        },
        filters: {
            deal(val, before, after){
                console.log(val);
                console.log(before);
                console.log(after);
                return before + val + after;
            }
        }
    })
</script> 
```
