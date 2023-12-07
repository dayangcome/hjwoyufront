<template>
    <div id="outbox">
    <div class="overlay" :class="{ 'fade-in': fadeIn, 'fade-out': fadeOut }" ref="overlay"></div>
    <img class="image" src="../assets/images/yuanshen.svg" ref="myimage" alt="Image">
        <div class="mycontainer">
            <!-- 示例工具卡片 -->
            <div class="tool-card" @click="tool1">
            <img src="../assets/images/tool1.png" alt="Tool 1">
            <h3>音乐播放器</h3>
            <p>可以搜索并播放音乐</p>
            <!-- 可以在此处添加工具的功能或链接 -->
            </div>

            <div class="tool-card" @click="tool2">
            <img src="../assets/images/tool2.png" alt="Tool 2">
            <h3>提瓦特启动器</h3>
            <p>可以带你进入提瓦特大陆</p>
            <!-- 可以在此处添加工具的功能或链接 -->
            </div>

            
        </div>
        <!-- 添加更多工具卡片 -->
        <div style="margin: 30px auto;width: 100%;text-align: center;font-size: 18px;color: #666;font-weight:800W;">更多工具敬请期待！</div>
        <el-alert
        title="免责声明!"
        type="info"
        description="本模块的部分工具为个人学习借鉴使用，本站对版权不负任何法律责任。如果侵犯了您的隐私权益，请联系本站邮箱 2012190160@qq.com 删除。"
        show-icon
        style="position: absolute;bottom: 0;"
        >

        </el-alert>
    </div>
  
  </template>
  
  <script>
    export default{
      name:'Tools',
      data() {
        return {
          fadeIn: false,
          fadeOut: false,
        };
      },
      methods:{
        tool1(){
          this.$router.push('/inner/tools1')
        },
        tool2(){
          const overlay = this.$refs.overlay;
          overlay.style.visibility = 'visible';
          const myimage = this.$refs.myimage;
          myimage.style.visibility = 'visible';
          this.fadeIn = true; // 白色背景渐显
          
          setTimeout(() => {
            myimage.style.opacity = 1;
            setTimeout(() => {
              this.fadeIn = false;
              this.fadeOut = true; // 图片和白色背景一起渐隐
              myimage.style.opacity = 0;
              setTimeout(() => {
                this.fadeOut = false;
                overlay.style.visibility = 'hidden';
                myimage.style.visibility = 'hidden';
              }, 2000); // 2000毫秒后执行
            }, 5000); // 2000毫秒后执行
          }, 3000); // 3000毫秒后执行
        }
      }
    }
  </script>
  
  <style scoped>
    #outbox{
        padding-top:33px;
    }
    .mycontainer {
      max-width: 1200px;
      margin: 20px auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* 调整工具卡片尺寸 */
      grid-gap: 50px;
      padding: 0 20px;
    }

    .tool-card {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      padding: 10px; /* 调整工具卡片内边距 */
      text-align: center;
      transition: transform 0.3s ease;
      cursor: pointer;
    }

    .tool-card:hover {
      transform: scale(1.05); /* 悬停时放大效果 */
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); /* 悬停时阴影效果 */
    }

    .tool-card:active {
      transform: scale(0.95); /* 点击时缩小效果 */
    }

    .tool-card img {
      width: 60px; /* 调整工具图标尺寸 */
      height: 60px; /* 调整工具图标尺寸 */
    }

    .tool-card h3 {
      font-size: 16px; /* 调整工具标题字体大小 */
      margin-bottom: 5px; /* 调整工具标题底部边距 */
    }

    .tool-card p {
      font-size: 12px; /* 调整工具描述字体大小 */
      color: #666;
    }

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0;
  z-index: 1;
  visibility: hidden;
  transition: opacity 3s ease-in-out;
}

.fade-in {
  opacity: 1;
}

.fade-out {
  opacity: 0;
}

.image {
  width: 420px;
  position: fixed;
  top: 27%;
  left: 36%;
  z-index: 2;
  visibility: hidden;
  opacity: 0;
  transition: transform 2s ease-in-out, opacity 2s ease-in-out; 
}
  </style>
  