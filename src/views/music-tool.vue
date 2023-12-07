<template>
  
  <div>
    
    <div class="wrap">
      <el-alert
    title="您可以通过点击上方“其他工具”返回工具页面。如果有音乐信息没有显示全，您只需要向下滚动鼠标滚轮。另外，在播放音乐前，请注意调整好您的音量，不要外放打扰他人哦。"
    type="info"
    effect="dark"
    show-icon>
  </el-alert>
    <!-- 播放器主体区域 -->
    <div class="play_wrap" id="player">
      <div class="search_bar">
        <img src="../assets/images/player_title.png" alt="" />
        
        <!-- 搜索歌曲 -->
        <div>
          <i class="el-icon-refresh" @click="init1"></i>
          <input type="text" autocomplete="off" v-model="keyword" placeholder="按回车键进行搜索" @keyup.enter="searchMusic" />
          
        </div>
      </div>
      <div class="center_con">
        <div class="music-grid">
              <div class="music-card" v-for="(music, index) in musicData" :key="index">
                <div class="music-image">
                  <img :src="music.pic" :alt="music.title" />
                </div>
                <div class="music-details">
                  <div class="music-title"><span v-html="highlight(music.title)"></span></div>
                  <div class="music-author"><span v-html="highlight(music.author)"></span></div>
                  <el-button size="mini" @click="playMusic(music.url)" round>播放</el-button>
                </div>
              </div>
            </div>
      </div>
      <div class="audio_con">
        <audio ref='audio' :src="musicUrl" controls autoplay loop class="myaudio"></audio>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
import {getmusic} from '../api/music.js'
export default {
  data() {
    return {
      musicData: [
        
      ],
      // 查询关键字
      keyword: "",
      // 歌曲数组
      allmusic:[],
      // 歌曲地址
      musicUrl: "",
      myred:''
    };
  },
  methods: {
    init1() {
        getmusic().then((res) => {
        if(res.status === 200){
          this.allmusic = res.data;
          let start=Math.floor(Math.random() * 102) + 5;
          this.musicData=this.allmusic.slice(start,start+102);
        }else{
          this.$message({
            message: '获取音乐列表失败',
            type: 'warning',
            duration:2000
          });
        }
      });
    },
    
    playMusic(url) {
      this.musicUrl = url;
    },
    searchMusic(){

        if(this.keyword!=''){
            this.musicData=this.allmusic.filter(e =>
                e.author.includes(this.keyword) ||
                e.title.includes(this.keyword) 
            )
            console.log(this.musicData)
            this.myred=this.keyword
        }else{
            this.$message({
            message: '搜索内容不能为空',
            type: 'warning',
            duration:2000
          });
        }

    },
    highlight(v) {
        return v.replaceAll(this.myred, `<span style="color: red">$&</span>`)
    }


  },
  mounted() {
    this.init1();
  },
};
</script>

<style scoped>
/* Add your CSS styles for the component here */
.music-grid {
  display: flex;
  flex-wrap: wrap;
  align-content:flex-start;
  overflow: auto;
}
.music-grid::-webkit-scrollbar {
       width: 0;
 }

.music-card {
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  width: 245px;
  height: 120px;
  margin:10px;
  &:hover {
    transform: scale(1.05);
  }
}

.music-image{
  width: 168px;
}

.music-image img {
  max-width: 100%;

  height: 100px; /* 调整音乐卡片的高度 */
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

.music-details {
  width: 180px;
  padding: 10px;
  overflow: auto;
  text-align: center;
}

.music-details::-webkit-scrollbar {
       width: 0;
 }


.music-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.music-author {
  font-size: 12px;
  color: #555;
}

.wrap {
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/images/bg.jpg") no-repeat;
  background-size: 100% 100%;
}

.play_wrap {
  width: 800px;
  height: 544px;
  position: fixed;
  left: 50%;
  top: 55%;
  margin-left: -400px;
  margin-top: -272px;
  /* background-color: #f9f9f9; */
}

.search_bar {
  height: 60px;
  background-color: #1eacda;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 11;
}

.search_bar img {
  margin-left: 23px;
}

.search_bar input {
  margin-right: 23px;
  width: 296px;
  height: 34px;
  border-radius: 17px;
  border: 0px;
  background: url("../assets/images/zoom.png") 265px center no-repeat
    rgba(255, 255, 255, 0.45);
  text-indent: 15px;
  outline: none;
}

.center_con {
  height: 435px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  position: relative;
}

.audio_con {
  height: 50px;
  background-color: #f1f3f4;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.myaudio {
  width: 800px;
  height: 40px;
  margin-top: 5px;
  outline: none;
  background-color: #f1f3f4;
}


.video_con video {
  position: fixed;
  width: 800px;
  height: 546px;
  left: 50%;
  top: 50%;
  margin-top: -273px;
  transform: translateX(-50%);
  z-index: 990;
}
.video_con .mask {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 980;
  background-color: rgba(0, 0, 0, 0.8);
}
.video_con .shutoff {
  position: fixed;
  width: 40px;
  height: 40px;
  background: url("../assets/images/shutoff.png") no-repeat;
  left: 50%;
  margin-left: 400px;
  margin-top: -273px;
  top: 50%;
  z-index: 995;
}


.music-card {
  display: flex;
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}

.music-image img {
  max-width: 100%;
  height: 120px; /* 调整音乐卡片的高度 */
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

.music-details {
  padding: 10px;
  text-align: center;
}

.music-title {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

.music-author {
  font-size: 12px;
  color: #555;
}


.el-icon-refresh{
    margin-right: 20px;
    color: rgba(255, 255, 255, 0.75);
    vertical-align: -14%;
    font-size: 20px;
    cursor: pointer;
}
.el-icon-refresh:hover{
    color: white;
}
</style>

  



