## Vue中的computed计算属性

我们可以在HTML中为绑定的值做一些基本的运算，但是运算多容易造成代码冗余。
computed就是拓展出来，用于辅助参数做计算操作，功能与methods和filter稍有些重叠

### computed

1）示例一

```
    <div id="app">
        <h1>{{dealNum}}</h1>
    </div>
    <script>
        new Vue({
            el: '#app', 
            data: {
                nums: 10
            },
            computed: {
                dealNum(){
                    return this.nums += 20;
                }
            }
        })
    </script> 
```

2）示例二

```
    <div id="app">
        <input type="text" v-model="nums">
        <h1>{{dealNum}}</h1>
    </div>
    <script>
        new Vue({
            el: '#app', 
            data: {
                nums: 10
            },
            computed: {
                dealNum(){
                    return this.nums > 10? this.nums + ' :大于10': this.nums + ' :不大于10'
                }
            }
        })
    </script> 
```


