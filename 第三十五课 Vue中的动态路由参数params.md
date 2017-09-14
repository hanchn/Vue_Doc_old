## Vue中的动态路由参数params

动态路径参数 以冒号开头

1）基础示例：

```
{path: '/list/:id', component: list}
```

2）获取动态路由参数

```
let list = {template: '<h1>$route.params.id</h1>'}
```

### 动态路由参数

1）单参

请求地址：

```
/list/测试
```

基础示例：


```
    <div id="app">
        <router-link to="/">首页</router-link>
        <router-link to="/list">列表页面</router-link>
        <router-view></router-view>
    </div>
    <script>
        // 1. 组件的模板创建
        
        let home = {
            template: '<h1>这是首页</h1>'
        }
        
        let list = {
            template: '<h1>这是关于我们页面，当前页面的动态路由参数为：{{$route.params.id}}</h1>'
        }
        
        // 2. 路由实例参数
        
        let routes = [
            {
                path: '/',
                component: home,
            },
            {
                path: '/list/:id',
                component: list,
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

2）多参

请求地址

```
/list/测试/name/三日
```

基础示例

```
    <div id="app">
        <router-link to="/">首页</router-link>
        <router-link to="/list">列表页面</router-link>
        <router-view></router-view>
    </div>
    <script>
        // 1. 组件的模板创建
        
        let home = {
            template: '<h1>这是首页</h1>'
        }
        
        let list = {
            template: '<h1>这是关于我们页面，当前页面的动态路由参数为：{{$route.params.id}} {{$route.params.name}}</h1>'
        }
        
        // 2. 路由实例参数
        
        let routes = [
            {
                path: '/',
                component: home,
            },
            {
                path: '/list/:id/name/:name',
                component: list,
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

