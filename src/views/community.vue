<template>
  <div id="outbox">
    <div style="margin: 30px 0;"><h1 style="text-align: center;">欢迎来到社区板块！请在下方选择一个分区</h1></div>
    <div class="main">
      
        <div class="chat-room-card" id="game-chat" @click="togame">
          <img src="../assets/images/game.png" alt="游戏区图片">
          <div>
          <h2>游戏区</h2>
          <p>欢迎来到游戏区！讨论最新游戏、分享游戏心得，一起探讨游戏世界的奥秘。</p>
          </div>
        </div>
     
    
      <div class="chat-room-card" id="food-chat" @click="tofood">
          <img src="../assets/images/eatwhat.png" alt="美食区图片">
          <div>
          <h2>今天晚上吃什么</h2>
          <p>今天晚上该吃啥？这是个问题。来这里探讨各种美食吧。</p>
          </div>
      </div>

      <div class="chat-room-card" id="movie-tv-chat" @click="tomovie">
          <img src="../assets/images/video.png" alt="影视区图片">
          <div>
          <h2>影视区</h2>
          <p>喜欢电影和电视剧吗？在这里可以畅谈观后感、推荐影片，一同追剧讨论。</p>
          </div>
      </div>

      <div class="chat-room-card" id="knowledge-chat" @click="toknowledge">
          <img src="../assets/images/know.png" alt="知识区图片">
          <div>
          <h2>知识区</h2>
          <p>知识分享的天地！讨论学术、科技、文化等各种领域的知识，共同学习进步。</p>
          </div>
      </div>

      <div class="chat-room-card" id="imagination-chat" @click="topeach">
          <img src="../assets/images/dream2.png" alt="畅想区图片">
          <div>
          <h2>大家一起想peach</h2>
          <p>释放无限的想象力！在这里分享创意、梦想，一同构建充满幻想的世界。</p>
          </div>
      </div>

      <div class="chat-room-card" id="casual-chat" @click="tochat">
          <img src="../assets/images/chat.png" alt="闲聊区图片">
          <div>
          <h2>闲聊区</h2>
          <p>轻松愉快的聊天时光！无主题限制，随心畅聊，结识新朋友。</p>
          </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default{
    name:'Community',
    methods:{
      togame(){
        this.$router.push('/inner/game')
      },
      tofood(){
        this.$router.push('/inner/food')
      },
      tomovie(){
        this.$router.push('/inner/movie')
      },
      toknowledge(){
        this.$router.push('/inner/knowledge')
      },
      topeach(){
        this.$router.push('/inner/peach')
      },
      tochat(){
        this.$router.push('/inner/chat')
      }
    }
    
  }
</script>

<style scoped>
  #outbox{
    padding-top: 23px;
    padding-bottom: 32px;
    background-color: #f5f5f5;
  }
  .main {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      max-width: 1000px;
      margin: 20px auto;
  }

  .chat-room-card {
      display: flex;
      width: 45%;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      padding: 22px;
      margin-bottom: 24px;
      transition: transform 0.3s ease-in-out;
      cursor: pointer;
  }

  .chat-room-card:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .chat-room-card h2 {
      color: #333;
  }

  .chat-room-card p {
      color: #555;
  }

  footer {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 1em 0;
      position: fixed;
      bottom: 0;
      width: 100%;
  }
  .chat-room-card img{
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }

</style>
