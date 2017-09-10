## Vue中的父组件调用子组件数据

父组件调用子组件的值比较复杂，需要先用$emit发射器将数据发送到子模板上，再通过子模板接收到的自身数据绑定到父模板中

### 顶级DOM获取子组件中的数据

1）单组件获取顶级对象中的值

```
    <div id="app">
        <h1>通过发射器接收到的子组件的值：{{val}}</h1>
        <tem @val="getVal"></tem> 
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: ''
            },
            methods: {
                getVal(data){
                    this.val = data;
                    console.log(data);
                }
            },
            components: {
                tem: {
                    data: () => ({
                        val: 'Hello World！'
                    }),
                    template: `
                                <div>
                                    <input type="text" v-model="val">
                                    <input type="button" value="将组件的值发射给主构造器" @click="res(val)">
                                    <h1>这是组件的值：{{val}}</h1>
                                </div>
                                `,
                    methods: {
                        res(val){
                            this.$emit('val', val);
                            console.log('发射了数据：' + val);
                        }
                    }            
                }
            }
        })
    </script>  
```

2）父组件获取子组件中的值

```
    <div id="app">
            <per></per>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: ''
            },
            components: {
                per: {
                    data: () => ({
                        perVal: '父组件的数据'
                    }),
                    template: `
                                   <div>
                                         <h1>父组件: {{perVal}}</h1>
                                         <son @sonVal = "getSon"></son>
                                   </div>
                              `,
                    methods: {
                        getSon(sonVal){
                            this.perVal = sonVal;
                        }
                    },          
                    components: {
                        son: {
                            data: () => ({
                                sonVal: '子组件的数据'
                            }),
                            template: `
                                        <div>
                                            <h1>{{sonVal}}</h1>
                                            <input type="button" value="发射子组件的数据到父组件上" @click="sendSon(sonVal)">
                                        </div>
                                      `,
                            methods: {
                                sendSon(sonVal){
                                    this.$emit('sonVal', sonVal);
                                    console.log('成功发射了子组件的数据: ' + sonVal);
                                }
                            }
                        }
                    }          
                }
            }
        })
    </script>  
```

### 使用watch监听动态更新值

```
    <div id="app">
        <h1>通过发射器接收到的子组件的值：{{val}}</h1>
        <tem @val="getVal"></tem> 
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                val: ''
            },
            methods: {
                getVal(data){
                    this.val = data;
                    console.log(data);
                }
            },
            components: {
                tem: {
                    data: () => ({
                        val: 'Hello World！'
                    }),
                    template: `
                                <div>
                                    <input type="text" v-model="val">
                                    <h1>这是组件的值：{{val}}</h1>
                                </div>
                                `,
                    methods: {
                        res(val){
                            this.$emit('val', val);
                            console.log('发射了数据：' + val);
                        }
                    },
                    watch: {
                        val(newVal, oldVal){
                            if(newVal !== oldVal){
                                this.res(this.val);
                            }
                        }
                    }            
                }
            }
        })
    </script>  
```