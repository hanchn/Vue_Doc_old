import Vue from 'vue'
import Router from 'vue-router'
import list from '../components/list'
import login from '../components/login'
import update from '../components/update'
import upload from '../components/upload'
import index from '../components/index'
import music from '../components/music'

Vue.use(Router)  //我们要为我们的Vue这个构造函数 拓展 Router 的功能

export default new Router({ // 创建一个 路由实例
    mode: 'history',
    routes: [
        {
            path: '/',
            component: index,  // 列表
        },        
        {
            path: '/list',
            component: list  // 列表
        },
        {
            path: '/login',
            component: login  // 删除
        },
        {
            path: '/update',
            component: update  // 修改
        },
        {
            path: '/upload',
            component: upload  // 上传
        }
    ]
})