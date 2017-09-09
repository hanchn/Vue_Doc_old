## Vue中的组件切换

:is 操作符可以用于组件的切换，配合component标签可以实现根据不同的组件名进行组件的切换效果

### 组件切换实例

1）:is与component实现组件切换

```
<div id="app">
     <button @click="checks()">点击切换组件</button>
     <component :is="tem"></component>
</div>  

<script>
    let titOne = Vue.component('titOne', {
        template: '<h1>这是组件一</h1>'
    });

    let titTwo = Vue.component('titTwo', {
        template: '<h1>这是组件二</h1>'
    });

    new Vue({
        el: '#app',
        data: {
            tem: titOne
        },
        methods: {
            checks(){
                if(this.tem == titOne){
                    this.tem = titTwo;
                } else {
                    this.tem = titOne;
                }                
            }
        }
    })
</script>
```

2）:is与components实现tab切换

```
<style>
.tab{
    color: blue;
    cursor: pointer;
    width: 80px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    float: left;
}    

.tab.h{
    color: red;
    font-size: 18px;
}

h1{
    clear: both;
    width: 200px;
    height: 100px;
    margin-top: 20px;
}
</style>    
<div id="app">
     <div class="tabs">
         <div class="tab" :class="{h:val == hover}" v-for="val in tem" @click="checks(val)">{{val}}</div>
     </div>
     <component :is="hover"></component>
</div>  

<script>
    new Vue({
        el: '#app',
        data: {
            tem: ['one', 'two', 'three'],
            hover: 'one'
        },
        methods: {
            checks(val){
                this.hover = val;
            }
        },
        components: {
            one: {
                template: '<h1>这是组件一</h1>'
            },
            two: {
                template: '<h1>这是组件二</h1>'
            },
            three: {
                template: '<h1>这是组件三</h1>'
            }                      
        }
    })
</script>
```

