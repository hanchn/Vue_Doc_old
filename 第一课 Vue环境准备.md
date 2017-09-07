## Vue环境准备

VueJS是原华人谷歌工程师尤雨溪所编写的一款MVC前端JS框架，和Angular类似，轻量适合开发小型项目。

1） Vue官网地址

```
https://cn.vuejs.org/
```

2）项目文件Vue.JS

在进行项目讲解之前需要在网页中引入VueJS的主文件，地址如下：

```
<script src="https://unpkg.com/vue"></script>
```

3）版本选择

Vue2.0较1.0作了较多的改变，很多语法都不太一样了，目前版本是2.x版本（日期：2017/09/07）。

4）调用Vue

静态页面中Vue引入类似于JQuery，将Vue放置进网页即可，自己写的Vue代码要放在引用的JS框架文件之后。

示例：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://unpkg.com/vue"></script>
</head>
<body>
    
</body>
</html>
<script>
// 自己的Vue代码块
</script>
```

5）浏览器支持

目前几乎所有新的框架都对旧版本（IE9之前）的浏览器不再支持，选择本框架前请谨慎。

### 初始化Vue项目环境

1）示例代码

```
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://unpkg.com/vue"></script>
</head>
<body>
    <div id="app"></div> 
</body>
</html>
<script>
// 自己的Vue代码块
new Vue({
    el: '#app'
})
</script>
```

2）确定主环境

在编写Vue的时候，需要确定一个主环境，自己的代码都写在主环境下

以上通过构造函数的形式创建了一个Vue的作用域环境，并绑定了一个父节点ID为'#app'的DOM元素节点。

el属性其实就是类似以下示例的实现：

```
el: '#app' == document.querySelect('#app');
```

### 初始化主环境的多种实现方式

1）el绑定主环境

```
new Vue({
    el: '#app'
})
```

2)$mount手动挂载

```
new Vue({

}).$mount('#app');
```

3)实例$mount挂载

```
let app = new Vue({

});

app.$mount('#app');
```

### 创建第一个Vue应用

```
<div id="app">{{test}}</div>
<script>
new Vue({
    el: '#app',
    data: {
        test: 'Hello World !'
    }
})
</script>
```


