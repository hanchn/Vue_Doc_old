## 第四十课 Vue中的路由

Vue中的路由是独立出来的，我们在进行项目开发的时候需要在引用VueJS之后再单独引入路由文件

1）路由文件下载地址

```
https://unpkg.com/vue-router/dist/vue-router.js
```

2）构造函数中的路由属性

Vue构造函数中拓展了router属性，用于路由参数的拓展

示例：

```
new Vue({
    el: '#app',
    router: ... // 路由实例
})
```

### 路由超链接标签与组件容器

路由用于链接的跳转切换，超链接必然少不了，但是Vue的路由是需要配合路由标签来使用的

1）超链接标签

Vue的路由有专用的超链接标签，用于解析成跳转a链接，而非直接写a

a）router-link (超链接标签)

b）to（需要跳转的目标地址）

```
<router-link to="/">首页<router-link>
```

2）组件容器

切换导航链接时，相应单页面的内容会发生变化，这边就需要一个容器去接收组件的内容

```
<router-view></router-view>
```

### 创建router实例

VueRouter用于构造一个路由示例用于实现导航的切换效果

结构示例：

```

let router = new VueRouter({
    routes: [
        {
            path: '/',
            component: {
                template: '<h1>这是首页页面的内容</h1>'
            }
        },
        {
            path: '/about',
            component: {
                template: '<h1>这是关于我们页面的内容</h1>'
            }
        }        
    ]
})

new Vue({
    el: '#app',
    router: router
})
```
### router实例解析

1）创建单页面应用的不同页面组件模板

```
let home = {
    template: '<h1>这是主页</h1>'
}

let about = {
    tempalte: '<h1>这是关于我们</h1>'
}
```

2）创建路由参数模板

// 路由实例参数是一个多值参数的数组

```
let routes = [
    {path: '/', component: home},
    {path: '/about', component: about},
]
```

3）创建路由实例

```
let router = new VueRouter({
    routes
})
```

4）将路由实例赋值给顶级Vue实例

```
new Vue({
    router
})
```


### 单页面应用实例效果

基础示例：

```
    <div id="app">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于我们</router-link>
        <router-view></router-view>
    </div>
    <script>
        // 1. 组件的模板创建
        
        let home = {
            template: '<h1>这是首页</h1>'
        }
        
        let about = {
            template: '<h1>这是关于我们</h1>'
        }
        
        // 2. 路由实例参数
        
        let routes = [
            {
                path: '/',
                component: home,
            },
            {
                path: '/about',
                component: about,
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




