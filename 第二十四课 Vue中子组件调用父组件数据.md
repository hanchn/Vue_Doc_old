## Vue中子组件调用父组件数据

Vue是不建议在不同的组件直接传递值的，我们需要使用props方法来进行组件间的值传递

### 子组件调用父组件数据

父模板的数据，子组件是无法直接调用的

无法直接调用

1）组件调用顶级对象中的data

```
    <div class="vue">
        <per></per>
    </div>
    <script>
        new Vue({
            el: '.vue',
            data: {
                vals: 'Hello World !'
            },
            components: {
                'per': {
                    template: '<span>嵌套组件父 {{vals}}</span>',
                }
            }
        });      
    </script>
```

2）子组件中调用父组件的数据

无法直接调用

```
    <div class="vue">
        <per></per>
    </div>
    <script>
        new Vue({
            el: '.vue',
            components: {
                'per': {
                    data: function(){
                        return {
                            vals: "我是父组件中的数据"
                        }
                    },
                    template: '<span>嵌套组件父 {{vals}} : <son></son></span>',
                    components: { //嵌套子组件的根为 a
                        'son': {
                            template: '<strong>嵌套子组件</strong>'
                        }    
                    }
                }
            }
        });      
    </script> 
```


### props接受数据

props类似于为子组件定义了属性名，用于接受父组件传递进来的值，通过v-bind将定义好的属性并绑定到子组件实例上进行参数绑定。

1）子组件接受父组件的传值

```
    <script>
        new Vue({
            el: '#app',
            components: {
                per: {
                    data: () => ({
                        val: 'Hello World !'
                    }),
                    template: `
                                <div>
                                    <h1>这是父组件的内容 {{val}}</h1>
                                    <son :getVal="val"></son>
                                </div>
                                `,
                    components: {
                        son: {
                            props: ['getVal'],
                            template: '<h1>这是子组件的内容 {{getVal}}</h1>'
                        }
                    } 
                }
            }
        })
    </script>  
```

2）子组件介绍父组件的多值传递

props对应的数组对象，可以接受多值传递

```
    <div id="app">
        <per></per> 
    </div>
    <script>
        new Vue({
            el: '#app',
            components: {
                per: {
                    data: () => ({
                        val: 'Hello World !',
                        nums: 1000
                    }),
                    template: `
                                <div>
                                    <h1>这是父组件的内容 {{val}}</h1>
                                    <son :getVal="val" :getMore="nums"></son>
                                </div>
                                `,
                    components: {
                        son: {
                            props: ['getVal', 'getMore'],
                            template: '<h1>这是子组件的内容 {{getVal}}  {{getMore}}</h1>'
                        }
                    } 
                }
            }
        })
    </script>    
```

### props数据过滤

props后的属性也可以是obj格式的对象，方便针对接受的参数进行过滤操作

1）字符过滤（接受的值是否为字符）

```
    <div id="app">
        <per></per> 
    </div>
    <script>
        new Vue({
            el: '#app',
            components: {
                per: {
                    data: () => ({
                        val: 'Hello World !'
                    }),
                    template: `
                                <div>
                                    <h1>这是父组件的内容 {{val}}</h1>
                                    <son :getVal="val"></son>
                                </div>
                                `,
                    components: {
                        son: {
                            props: {
                                'getVal': [String]
                            },
                            template: '<h1>这是子组件的内容 {{getVal}}</h1>'
                        }
                    } 
                }
            }
        })
    </script>
```

2）多数据类型过滤

当前传递进来的数据，只允许是数值或者字符

```
    <div id="app">
        <per></per> 
    </div>
    <script>
        new Vue({
            el: '#app',
            components: {
                per: {
                    data: () => ({
                        val: 'Hello World !'
                    }),
                    template: `
                                <div>
                                    <h1>这是父组件的内容 {{val}}</h1>
                                    <son :getVal="val"></son>
                                </div>
                                `,
                    components: {
                        son: {
                            props: {
                                'getVal': [String, Number]
                            },
                            template: '<h1>这是子组件的内容 {{getVal}}</h1>'
                        }
                    } 
                }
            }
        })
    </script>
```

3）多种过滤方式

a）为当前空值传递赋默认值
b）类型检测
c）自定义验证函数

官方示例：

```
Vue.component('example', {
  props: {
    // 基础类型检测 (`null` 意思是任何类型都可以)
    propA: Number,
    // 多种类型
    propB: [String, Number],
    // 必传且是字符串
    propC: {
      type: String,
      required: true
    },
    // 数字，有默认值
    propD: {
      type: Number,
      default: 100
    },
    // 数组/对象的默认值应当由一个工厂函数返回
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
  }
})
```



