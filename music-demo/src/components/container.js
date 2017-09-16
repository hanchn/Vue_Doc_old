export default {
    props: ['pathname'],
    template: `
                <div class="container">
                     <div class="breads">
                          <div class="tags">
                             <span>主页</span> / <span>音乐列表</span>                           
                          </div>    
                     </div>
                     <router-view></router-view>
                </div>
              `
}