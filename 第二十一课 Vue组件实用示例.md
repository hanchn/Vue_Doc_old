## Vue组件实用示例

本课主要介绍组件的一些小练习，通过这些小练习巩固下之前课程中的学习

1）组件中值的双向绑定

```
<div id="app">
     <test></test>
</div>  

<script>
    Vue.component('test', {
        template: `
                      <div>
                           <input type="text" v-model="val">
                           <h1>{{val}}</h1>
                      </div>  
                  `,
        data: () => ({
            val: 'Hello World !'
        })  
    })

    new Vue({
        el: '#app'
    })
</script>
```

2）结合methods组合示例

```
<div id="app">
     <test></test>
</div>  

<script>
    Vue.component('test', {
        template: `
                    <div>
                           姓名：<input type="text" v-model="name">
                           年纪：<input type="text" v-model="age">
                           <input type="button" value="录入" @click="insert()">
                        
                            <ul>
                                <li v-for="(val, key) in arr">
                                    ID：{{key}} 姓名：{{val.name}} 年龄：{{val.age}} <button @click="del(key)">删除</button>
                                </li>
                                <li v-show="arr.length < 1">当前暂无数据</li>
                            </ul>

                    </div>
                  `,
        data: () => ({
            arr: [
                // {'name': 'test', 'age': '20'}
            ],
            name: '',
            age: ''
        }),
        methods: {
            insert(){
                this.arr.push({
                    'name': this.name,
                    'age': this.age
                })
            },
            del(key){
                this.arr.splice(key, 1);
            }
        }  
    })

    new Vue({
        el: '#app'
    })
</script>
```