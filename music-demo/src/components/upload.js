export default {
    template: `
                  <div class="upload">
                      <div class="inp_">
                           <label>单曲名：</label>
                           <input type="text" value="" placeholder="">
                      </div>

                      <div class="inp_">
                            <label>专辑名：</label>
                            <input type="text" value="" placeholder="">
                      </div>
                 
                      <div class="inp_">
                            <label>主唱歌手：</label>
                            <input type="text" value="" placeholder="">
                      </div>

                      <div class="inp_">
                            <label>发片日期：</label>
                            <input type="text" value="" placeholder="">
                      </div>  
                      
                        <div class="inp_">
                            <label>歌曲文件：</label>
                            <input type="file">
                        </div>
                    
                        <div class="inp_">
                            <label>专辑封面：</label>
                            <input type="file">
                        </div>

                        <div class="inp_">
                            <label>单曲歌词：</label>
                            <input type="file">
                        </div>  
                        
                        <div class="inp_">
                            <label>上线状态</label>
                            <input type="text" value="" placeholder="">
                        </div> 
                        
                        <button class="submit">立即上传</button>
                  </div>
              `
}