## Vue中的动态路由参数query

query用于获取用户通过get方式向后端请求页面传递的参数值

1）请求地址

```
/?userName="admin"&userPwd="123"
```

2）请求示例

```
    <div id="app">
        <router-link to="/">首页</router-link>
        <router-view></router-view>
    </div>
    <script>
        // 1. 组件的模板创建
        
        let home = {
            template: '<h1>这是首页，向后的请求的参数值为：{{$route.query}}</h1>'
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