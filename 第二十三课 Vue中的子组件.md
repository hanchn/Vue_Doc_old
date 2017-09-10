## Vue中的子组件

Vue中的组件可以拓展自己的子组件

### Vue中的子组件

1）在component上拓展子组件

```
<div id="app">
    <per></per> 
</div>
<script>
    Vue.component('per', {
        template: `
                  <div>
                       <h1>这是父组件的内容</h1>
                       <son></son>
                  </div>
                  `,
        components: {
            son: {
                template: '<h1>这是子组件的内容</h1>'
            }
        }          
    })
    new Vue({
        el: '#app'
    })
</script>
```

2）在components上拓展子组件

```
    <div id="app">
        <per></per> 
    </div>
    <script>
        new Vue({
            el: '#app',
            components: {
                per: {
                    template: `
                                <div>
                                    <h1>这是父组件的内容</h1>
                                    <son></son>
                                </div>
                                `,
                    components: {
                        son: {
                            template: '<h1>这是子组件的内容</h1>'
                        }
                    } 
                }
            }
        })
    </script> 
```
