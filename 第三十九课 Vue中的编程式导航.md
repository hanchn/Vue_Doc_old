## Vue中的编程式导航

1）声明式导航

我们在前几节课介绍了导航的标签式写法（声明式导航）

```
<router-link to="/"></router-link>
```

本节课我们将给大家介绍另外一种导航的写法（编程式导航）

2）编程式导航

编程式导航即用JS实现导航

示例demo

```
router.push(name)
```

### 编程式导航

1）基础示例

```
    <div id="app">
        <input type="button" @click="links" value="点击跳转到首页">
        <router-link to="/about">关于我们</router-link>
        <router-view></router-view>
    </div>
    <script>
        let router = new VueRouter({
                routes: [
                    {
                        path: '/',
                        component: {
                            template: '<div>这是主页的内容</div>'
                        }
                    },
                    {
                        path: '/about',
                        component: {
                            template: '<div>这是关于我们</div>'
                        }
                    }
                ]
            });

        new Vue({
            el: "#app",
            router,
            methods: {
                links(){
                    this.$router.push('/')
                }
            }
        })
    </script>
```

2）官方示例

```
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: 123 }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```


### router.replace

跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

### router.go(n)

这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)。

官方示例：

```
// 在浏览器记录中前进一步，等同于 history.forward()
router.go(1)

// 后退一步记录，等同于 history.back()
router.go(-1)

// 前进 3 步记录
router.go(3)

// 如果 history 记录不够用，那就默默地失败呗
router.go(-100)
router.go(100)
```
