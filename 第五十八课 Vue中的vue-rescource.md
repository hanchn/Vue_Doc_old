## Vue中的vue-rescource

Vue中的路由即Vue-rescource用于Ajax和跨域请求，本节课暂时只介绍实现方式，在后面的课程中会结合实例详细介绍

### 环境准备

vue.js和和vue-rescorce.js是分离的，需要开发者自己去下载，并在vue.js之后进行调用：

1）下载地址：

```
<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.3.4"></script>
```

vue-rescorce 封装了Ajax的 GET 和 POST请求以及跨域JSONP请求数据（用ES6 Promise进行了封装）


2 官方示例

```
  // GET /someUrl
  this.$http.get('/someUrl').then(response => {

    // get body data
    this.someData = response.body;

  }, response => {
    // error callback
  });
```

### vue-rescorce中的Ajax请求

1）vue-rescource中的GET请求

例题：向后端发送首页页面请求

```

```