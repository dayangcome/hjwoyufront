<template>
    <div id="outbox">
    <div class="overlay" :class="{ 'fade-in': fadeIn, 'fade-out': fadeOut }" ref="overlay"></div>
    <img class="image" src="../assets/images/yuanshen.svg" ref="myimage" alt="Image">
    <!-- <img class="image2" src="https://pic.imgdb.cn/item/657e6ce5c458853aefd9b709.png" ref="myimage2" alt="Image2"> -->
    <img class="image2" src="https://pic.imgdb.cn/item/657e7a6dc458853aef021810.png" ref="myimage2" alt="Image2">
        <div class="mycontainer">
            <!-- 示例工具卡片 -->
            <div class="tool-card" @click="tool1">
            <img src="https://pic.imgdb.cn/item/65786aa9c458853aef9dd6ac.png" alt="Tool 1">
            <h3>音乐播放器</h3>
            <p>可以搜索并播放音乐</p>
            <!-- 可以在此处添加工具的功能或链接 -->
            </div>

            <div class="tool-card" @click="tool2">
            <img src="https://pic.imgdb.cn/item/657e6574c458853aefc356d9.png" alt="Tool 2">
            <h3>提瓦特启动器</h3>
            <p>可以带你进入提瓦特大陆</p>
            <!-- 可以在此处添加工具的功能或链接 -->
            </div>

            <div class="tool-card" @click="tool3">
            <img src="https://pic.imgdb.cn/item/657dc4a4c458853aef4fa7ef.png" alt="Tool 3">
            <h3>论文选题</h3>
            <p>可以帮助你更高效地进行论文选题</p>
            <!-- 可以在此处添加工具的功能或链接 -->
            </div>

            <div class="tool-card" @click="tool4">
            <img src="../assets/images/tuchuang.jpg" alt="Tool 4">
            <h3>聚合图床</h3>
            <p>可以帮你上传图片，把本地的图片转换为链接</p>
            <!-- 可以在此处添加工具的功能或链接 -->
            </div>

            <div class="tool-card" @click="tool6">
            <img src="https://pic.imgdb.cn/item/657e65dbc458853aefc4716a.png" alt="Tool 6">
            <h3>AIChatOS</h3>
            <p>可以进入国内版的ChatGPT镜像，无需魔法，无需注册</p>
            <!-- 可以在此处添加工具的功能或链接 -->
            </div>

            <div class="tool-card" @click="tool5">
            <img src="https://pic.imgdb.cn/item/65786aa9c458853aef9dd702.png" alt="Tool 5">
            <h3>坚果云云盘</h3>
            <p>可以上传文件到云盘，帮助你管理文件</p>
            <!-- 可以在此处添加工具的功能或链接 -->
            </div>

            <div class="tool-card" @click="tool7">
            <img src="https://img.zcool.cn/community/01a75b5af5017ea801207ab454d75c.png" alt="Tool 7">
            <h3>图片压缩</h3>
            <p>可以免费压缩图片，帮助你节省空间</p>
            <!-- 可以在此处添加工具的功能或链接 -->
            </div>

            <div class="tool-card" @click="tool8">
            <img src="https://img0.baidu.com/it/u=3486319172,2806153017&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=422" alt="Tool 8">
            <h3>图片合并</h3>
            <p>可以帮你免费将多张图片合成为一张图片</p>
            <!-- 可以在此处添加工具的功能或链接 -->
            </div>


            <div class="tool-card" @click="tool9">
            <img src="https://img0.baidu.com/it/u=970667574,3271220028&fm=253&fmt=auto&app=138&f=JPEG?w=340&h=191" alt="Tool 9">
            <h3>阿里巴巴矢量图标库</h3>
            <p>免费提供矢量图标</p>
            <!-- 可以在此处添加工具的功能或链接 -->
            </div>


            <div class="tool-card" @click="tool10">
            <img src="https://imgres.golue.com/golue/139/690060-202109281408066152b1460b73a.jpg" alt="Tool 10">
            <h3>removebg</h3>
            <p>免费一键去除图片的背景</p>
            <!-- 可以在此处添加工具的功能或链接 -->
            </div>
            
            <div class="tool-card" @click="tool11">
            <img src="https://img2.baidu.com/it/u=2713880761,1598503882&fm=253&fmt=auto&app=138&f=JPEG?w=759&h=384" alt="Tool 11">
            <h3>Unscreen</h3>
            <p>免费一键去除视频的背景（免费抠像）</p>
            <!-- 可以在此处添加工具的功能或链接 -->
            </div>

            <div class="tool-card" @click="tool12">
            <img src="https://img1.baidu.com/it/u=3781107780,4135489129&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=572" alt="Tool 12">
            <h3>视频字幕库</h3>
            <p>可以获取一些B站主播的直播信息</p>
            <!-- 可以在此处添加工具的功能或链接 -->
            </div>

            
        </div>
        <!-- 添加更多工具卡片 -->
        <div style="margin: 30px auto;width: 100%;text-align: center;font-size: 18px;color: #666;font-weight:800;">更多工具敬请期待！</div>
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
          const myimage = this.$refs.myimage;
          const myimage2 = this.$refs.myimage2;
          overlay.style.visibility = 'visible';
          myimage.style.visibility = 'visible';
          myimage2.style.visibility = 'visible';
          this.fadeIn = true; // 白色背景渐显
          
          setTimeout(() => {      //这里有一个回调地狱，期待大佬能够改进一下
            myimage.style.opacity = 1;
            setTimeout(() => {
              myimage2.style.opacity = 1;
              setTimeout(() => {
                this.fadeIn = false;
                this.fadeOut = true; // 图片和白色背景一起渐隐
                myimage.style.opacity = 0;
                myimage2.style.opacity = 0;
                setTimeout(() => {
                  this.fadeOut = false;
                  overlay.style.visibility = 'hidden';
                  myimage.style.visibility = 'hidden';
                  myimage2.style.visibility = 'hidden';
                }, 2000); // 2000毫秒后执行
              }, 5000); // 5000毫秒后执行
            }, 1000);// 15000毫秒后执行
          }, 3500); // 3500毫秒后执行
        },
        tool3(){
          window.open("https://xuanti.cqvip.com/")
        },
        tool4(){
          window.open("https://www.superbed.cn/")
        },
        tool5(){
          window.open("https://www.jianguoyun.com/")
        },
        tool6(){
          window.open("https://chat18.aichatos.xyz/")
        },
        tool7(){
          window.open("https://tool.tanpok.com/#/ImgCompress")
        },
        tool8(){
          window.open("https://cdkm.com/cn/merge-image")
        },
        tool9(){
          window.open("https://www.iconfont.cn/")
        },
        tool10(){
          window.open("https://www.remove.bg/zh")
        },
        tool11(){
          window.open("https://www.unscreen.com/")
        },
        tool12(){
          window.open("https://zimu.bili.studio/")
        },
        

      }
    }
  </script>
  
  <style scoped>
    #outbox{
        padding-top:33px;
        height: calc(100vh - 64px);
        background-color: #f4f4f5;
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

.image2 {
  position: fixed;
    top: 79%;
    left: 18%;
    width: 996px;
    z-index: 2;
    visibility: hidden; 
    opacity: 0;
    transition: transform 2s ease-in-out, opacity 2s ease-in-out;
}

.image {
  width: 420px;
  position: fixed;
  top: 20%;
  left: 36%;
  z-index: 2;
  visibility: hidden;
  opacity: 0;
  transition: transform 2s ease-in-out, opacity 2s ease-in-out; 
}
  </style>
  