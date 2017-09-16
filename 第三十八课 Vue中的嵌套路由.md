## Vue中的嵌套路由

Vue中允许进行路由嵌套

### 嵌套路由

1) 访问地址

```
/test/son
```

2）基础示例

```
    <div id="app">
        <router-link to="/">首页</router-link>
        <router-view></router-view>
    </div>
    <script>
        new Vue({
            el: "#app",
            router: new VueRouter({
                routes: [
                    {
                        path: '/:id',
                        component: {
                            template: '<div><h1>这是主页内容 {{$route.params}}</h1><router-view><router-view></div>'
                        },
                        children: [
                            {
                                path: 'son',
                                component: {
                                    template: '<h2>这是子路由内容 {{$route.hash}}</h2>'
                                }
                            }
                        ]
                    }
                ]
            })
        })
    </script>  
```