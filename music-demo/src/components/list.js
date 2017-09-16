import music from '../conn/data'

export default {
    data: () => ({
        bread: '主页',
        music: music
    }),
    template: `
                 <table>
                      <thead>
                           <th>ID</th>
                           <th>单曲名</th>
                           <th>专辑名</th>
                           <th>主唱歌手</th>
                           <th>发片日期</th>
                           <th>歌曲文件</th>
                           <th>专辑封面</th>
                           <th>单曲歌词</th>
                           <th>上线状态</th>
                           <th>修改信息</th>
                           <th>删除歌曲</th>
                      </thead>
                      <tbody>
                      
                           <tr v-for="(val, key) in music">
                                <td>{{'0' + (key + 1)}}</td>
                                <td>{{music[key].name}}</td>
                                <td>{{music[key].album}}</td>
                                <td>{{music[key].author}}</td>
                                <td>{{music[key].date}}</td>
                                <td>{{music[key].file}}</td>
                                <td>{{music[key].pic}}</td>
                                <td>{{music[key].lrc}}</td>
                                <td>{{music[key].status == true? '已上线': '已下线'}}</td>
                                <td><a>修改信息</a></td>
                                <td><a>删除</a></td>
                           </tr>
                      </tbody>
                 </table>
              `
}