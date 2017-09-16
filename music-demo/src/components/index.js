import music from '../conn/data'

export default {
    data: () => ({
        bread: '主页',
        music: music
    }),
    template: `
                 <div class="play-list">
                 <div class="music">
                    <div class="songOuter">
                         <div class="songInner">
                             <div class="play-btn">
                                    <audio src="http://www.w3school.com.cn/i/song.mp3" controls="controls" autoplay="autoplay">
                                    Your browser does not support the audio element.
                                    </audio> 
                             </div>
                         </div>  
                    </div>  
                    <div class="bars">
                        <div class="pro">
                             <div class="proLine"></div>
                        </div>
                    </div>
                 </div>
                 <table>
                      <thead>
                           <th>ID</th>
                           <th>单曲名</th>
                           <th>主唱歌手</th>
                           <th>立即播放</th>
                           <th>移出列表</th>
                      </thead>
                      <tbody>
                      
                           <tr v-for="(val, key) in music">
                                <td>{{'0' + (key + 1)}}</td>
                                <td>{{music[key].name}}</td>
                                <td>{{music[key].author}}</td>
                                <td><a>播放</a></td>
                                <td><a>删除</a></td>
                           </tr>
                      </tbody>
                 </table>
                 </div>
              `
}