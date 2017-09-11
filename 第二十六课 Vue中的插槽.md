## Vue中的插槽

插槽（slot）在后端中很常见，主要是利用插槽使得组件具有公共行为

### 不具名公共插槽

1）基础示例：

```
    <div id="app">
          <test></test>
    </div>
    <script>
        Vue.component('test', {
            template: `
                          <div>
                               <slot>公共不具名插槽</slot>
                          </div>
                      `
        })
        new Vue({
            el: '#app',
            data: {
                val: ''
            }
        })
    </script>
```

2）覆盖公共插槽

插槽类似于DOM的默认值部分，可以被替换覆盖

```
    <div id="app">
          <test>
              <h1>覆盖公共不具名插槽</h1>
          </test>
    </div>
    <script>
        Vue.component('test', {
            template: `
                          <div>
                               <slot>公共不具名插槽</slot>
                          </div>
                      `
        })
        new Vue({
            el: '#app',
            data: {
                val: ''
            }
        })
    </script>
```

3）公共插槽的唯一性

以下代码可以运行，也会报错，公共不具名插槽只需要存在一个

```
    <div id="app">
          <test>
              <h1>覆盖公共不具名插槽</h1>
          </test>
    </div>
    <script>
        Vue.component('test', {
            template: `
                          <div>
                               <slot>公共不具名插槽</slot>
                               <slot>第二个公共不具名插槽</slot>
                          </div>
                      `
        })
        new Vue({
            el: '#app',
            data: {
                val: ''
            }
        })
    </script> 
```

### 具名插槽

具名插槽即可以命名的插槽，可以自定义插槽位置并进行覆盖，常用于公共组件部分区位的替换，灵活性较高。

1）基础示例：

```
    <div id="app">
          <test>
             
          </test>
    </div>
    <script>
        Vue.component('test', {
            template: `
                          <div>
                               <slot name="head"><h1>这个是具名head插槽</h1></slot>
                               <slot name="foot"><h1>这个是具名foot插槽</h1></slot> 
                          </div>
                      `
        })
        new Vue({
            el: '#app',
            data: {
                val: ''
            }
        })
    </script>  
```

2）覆盖具名插槽

具名插槽无法直接覆盖，需要配合插槽名进行覆盖

```
    <div id="app">
          <test>
                <h1 slot="head">覆盖具名插槽head</h1>
                <h1 slot="foot">覆盖具名插槽foot</h1>
          </test>
    </div>
    <script>
        Vue.component('test', {
            template: `
                          <div>
                               <slot name="head"><h1>这个是具名head插槽</h1></slot>
                               <slot name="foot"><h1>这个是具名foot插槽</h1></slot> 
                          </div>
                      `
        })
        new Vue({
            el: '#app',
            data: {
                val: ''
            }
        })
    </script>
```