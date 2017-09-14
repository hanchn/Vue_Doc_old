## Vue中的动态路由参数hash

hash即锚点的意思，我们也可以通过路由功能来获取锚点

1）请求地址

```
/#test
```

2）基础示例

```
    <div id="app">
        <router-link to="/">首页</router-link>
        <router-view></router-view>
    </div>
    <script>
        // 1. 组件的模板创建
        
        let home = {
            template: '<h1>这是首页，向后的请求的参数值为：{{$route.hash}}</h1>'
        }
        
        
        // 2. 路由实例参数
        
        let routes = [
            {
                path: '/',
                component: home,
            }  
        ];
        
        // 3. 创建路由实例
        
        let router = new VueRouter({
            routes
        })
        
        new Vue({
            el: "#app",
            router
        })
    </script>  
```