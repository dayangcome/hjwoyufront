<template>
  <div>
    <div class="container">
      <nav>
        <ul style="display: inline-block;">
                  <router-link to="/"><li>网站首页</li></router-link>
                  <router-link to="/inner/community"><li>社区交流</li></router-link>
                  <router-link to="/inner/mygpt"><li>答案之书</li></router-link>
                  <router-link to="/inner/pan"><li>云盘分享</li></router-link>
                  <router-link to="/inner/tools"><li>其他工具</li></router-link>
                  <router-link to="/aboutus"><li>关于我们</li></router-link>
        </ul>

          <el-link v-if="nowname==''||nowname==null" @click="dialogVisible = true" type="primary" style="position: absolute;top: 26.5px;right: 60px;">身份认证</el-link>
          <span v-else style="position: absolute;top: 17.2px;right: 43px;">


            <el-dropdown @command="handleCommand">
                                <span style="cursor: pointer;">
                                  <span><el-avatar size="medium" :src="nowava"></el-avatar></span>
                                  <span style="color: white;margin-left:10px;vertical-align:64%;font-size: 14px;">{{nowname}}</span>
                                </span>
                                <el-dropdown-menu slot="dropdown" style="text-align: center;">
                                <el-dropdown-item command="a"> 取消认证 </el-dropdown-item>
                              </el-dropdown-menu>
            </el-dropdown>  
          </span>
          <el-dialog
            title="你是？"
            center
            :visible.sync="dialogVisible"
            width="35%"
            >

                <div style="display: flex;justify-content:center;height:240px;">

                  <div v-show="status===0" style="display: flex;">
                  <div class="shenfen">
                      <img src="../assets/images/avatar.jpg" @click="c1" alt="">
                      <h3>怀瑾握瑜成员</h3>
                    </div>
                    <div class="shenfen">
                      <img src="https://pic.imgdb.cn/item/657e6598c458853aefc3b8b0.png" @click="c2" alt="">
                      <h3>其他的朋友</h3>
                    </div>
                    <div class="shenfen">
                      <img src="../assets/images/others.png" @click="c3" alt="">
                      <h3>匿名的用户</h3>
                    </div>
                  </div>

                    <div class="choose1" v-show="status===1" style="display: flex;">
                         <div style="margin: 15px;display: flex;flex-direction: column;justify-content: center;padding-bottom:25px;">
                         <img style="margin:10px" src="../assets/images/avatar.jpg" alt="">
                         <h3 style="margin-top: 10px;width: 100px;">怀瑾握瑜成员</h3>
                         </div>
                           <div style="margin:15px;display: flex;flex-direction: column;justify-content:space-around;padding-left: 40px;">
                           <h2>验证怀瑾握瑜宿舍在焦作一中时的宿舍号：</h2>
                           <el-input
                             type="text"
                             placeholder="请输入宿舍号"
                             v-model="hao"
                             maxlength="4"
                             show-word-limit
                           >
                           </el-input>
                           <p style="color: red;" v-show="haoError">输入的宿舍号不正确</p>
                           <div><el-button type="warning" style="margin-right: 35px;" @click="r0" round>上一步</el-button><el-button type="primary" @click="c4" round>下一步</el-button></div>
                           </div>
                         </div>

                    <div class="choose1" v-show="status===2" style="display: flex;width: 100%;">
                         <div style="margin: 15px;display: flex;flex-direction: column;justify-content: center;padding-bottom:25px;">
                         <h3 style="margin-top: 10px;width: 100px;">怀瑾握瑜成员</h3>
                         </div>
                         <div style="margin:15px;display: flex;flex-direction: column;justify-content:space-around;padding-left: 40px;width: 100%;">
                         <h2>验证你的QQ号码：</h2>
                         <el-input
                           type="text"
                           placeholder="请输入你的QQ号"
                           v-model="QQhao"
                           maxlength="20"
                           show-word-limit
                         >
                         </el-input>
                         <p style="color: red;" v-show="qqError">抱歉，该QQ号未能成功验证</p>
                         <div><el-button type="warning" style="margin-right: 35px;" @click="c1" round>上一步</el-button><el-button type="primary" @click="c5" round>下一步</el-button></div>
                         </div>
                    </div>


                    <div class="choose1" v-show="status===3" style="text-align: center;">
                         <h1>恭喜你验证成功！你的身份是：</h1>
                         <img :src="nowava" alt="" style="margin: 15px 0;"/>
                         <h3 style="margin-bottom: 30px;">怀瑾握瑜成员 {{ nowname }}</h3>
                         <el-button style="padding: 10px 20px;" type="primary" size="medium" @click="dialogVisible = false">确定</el-button>
                    </div>


                    <div class="choose2" v-show="status===4" style="display: flex;flex-direction: column;align-items:center">
                         <h1>请你在下方图片中选择一个作为你的头像</h1>
                         <div style="display: flex;flex-wrap: wrap;justify-content:center;margin:8px 0">
                            <img class="cavatar" :class="{ active: choosethis == index }" :src="item" @click="thisava(index)" alt="" v-for="(item,index) in deavatar">
                         </div>
                         <p style="color: red;" v-show="avaError">请选择一个头像再进行下一步</p>
                         <div>
                
                          <el-button type="success" style="margin-right: 35px;" @click="qq0" round>使用网络图片</el-button>
                          <el-button type="warning" style="margin-right: 35px;" @click="r0" round>上一步</el-button>
                          <el-button type="primary" style="margin-top: 10px;" @click="c6" round>下一步</el-button>
                          
                        </div>
                    </div>

                    <div class="choose1" v-show="status===8" style="display: flex;width: 100%;">
                         <div style="margin: 15px;display: flex;flex-direction: column;justify-content: center;padding-bottom:25px;">
                         <img  style="margin:10px" src="https://pic.imgdb.cn/item/657e6598c458853aefc3b8b0.png" alt="">
                         <h3 style="margin-top: 10px;margin-left: 10px; width: 100px;">其他的朋友</h3>
                         </div>
                         <div style="margin:15px;display: flex;flex-direction: column;justify-content:space-around;width: 100%;">
                         <h2>输入网络图片链接，我们会自动获取图片</h2>
                         <el-input
                           type="textarea"
                           placeholder="请输入网络图片链接"
                           v-model="QQhao2"
                           maxlength="120"
                           resize="none"
                           show-word-limit
                           style="margin: 10px 0;"
                         >
                         </el-input>
                         <p style="color: red;" v-show="tuError">该图片链接无法打开</p>
                         <h4 style="color: #9e9e9e;margin: 10px 0;">你可以点击其他工具-聚合图床，把本地图片上传到云床作获取图片链接</h4>
                         <div><el-button type="warning" style="margin-right: 35px;" @click="c2" round>上一步</el-button><el-button type="primary" @click="c8" round>下一步</el-button></div>
                         </div>
                    </div>

                    <div class="choose1" v-show="status===5" style="display: flex;flex-direction: column;align-items: center;">
                         <img :src="nowava" alt="" />
                         <h1 style="margin: 10px 0;">该怎么称呼您呢？</h1>
                         <el-input
                           type="text"
                           placeholder="请输入您的昵称"
                           v-model="nickname"
                           maxlength="12"
                           show-word-limit
                           style="margin-bottom: 15px;width: 300px;"
                         >
                         </el-input>
                         <p style="color: red;margin-bottom: 9px;" v-show="nicknameError">昵称不能为空</p>
                         <div><el-button type="warning" style="margin-right: 35px;" @click="c2" round>上一步</el-button><el-button type="primary" @click="c7" round>下一步</el-button></div>
                    </div>


                    <div class="choose1" v-show="status===6" style="text-align: center;">
                         <h1>恭喜你验证成功！你的身份是：</h1>
                         <img :src="nowava" alt="" style="margin: 15px 0;"/>
                         <h3 style="margin-bottom: 30px;">其他朋友 {{ nowname }}</h3>
                         <el-button style="padding: 10px 20px;" type="primary" size="medium" @click="dialogVisible = false">确定</el-button>
                    </div>

                    <div class="choose1" v-show="status===7" style="text-align: center;">
                         <h1>恭喜你验证成功！你的身份是：</h1>
                         <img src="../assets/images/others.png" alt="" style="margin: 15px 0;"/>
                         <h3 style="margin-bottom: 30px;">匿名的用户</h3>
                         <el-button style="padding: 10px 20px;" type="primary" size="medium" @click="dialogVisible = false">确定</el-button>
                    </div>
                </div>

          </el-dialog>
      </nav>
    </div>
  </div>

</template>

<script>
import {login} from '../api/login'
import eventBus from './event-bus';
  export default {
      name: 'Mynav',
      data() {
        return {
          dialogVisible: false,
          isshow:'show',
          hao:'',
          QQhao:'',
          QQhao2:'',
          status:0,
          nickname:'',
          haoError:false,
          tuError:false,
          qqError:false,
          avaError:false,
          nicknameError:false,
          deavatar:[
            'https://pic.imgdb.cn/item/655b571ac458853aef297eec.jpg',
            'https://z1.ax1x.com/2023/11/20/piUjRqU.jpg',
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage109.360doc.com%2FDownloadImg%2F2021%2F06%2F2906%2F225222932_5_20210629065046911&refer=http%3A%2F%2Fimage109.360doc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1703077057&t=c6c1fac857548b411aac9546aa282288',
            'https://img1.baidu.com/it/u=2945298304,240269462&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            'https://img2.baidu.com/it/u=2028943768,4146320464&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            'http://t14.baidu.com/it/u=640120781,438580266&fm=224&app=112&f=JPEG?w=500&h=500',
            'https://img1.baidu.com/it/u=993869734,1489281842&fm=253&fmt=auto&app=138&f=JPEG?w=380&h=380',
            'https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/7aec54e736d12f2eb2c9eabd49c2d5628435681a.jpg',
            'https://img2.baidu.com/it/u=3972615006,4101417368&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            'https://img2.baidu.com/it/u=2625989459,4221517214&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            'https://img2.baidu.com/it/u=3177522415,1236226892&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200',
            'https://img2.baidu.com/it/u=2401661546,3270487001&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
          ],
          choosethis:-1,
          nowava:'',
          nowname:'',
          nowuser:{}
        };
      },
      methods: {
        c1(){
          this.status=1
        },
        r0(){
          this.status=0
        },
        qq0(){
          this.status=8
          this.tuError=flase
        },
        c4(){
          if(this.hao=='6318'){
            this.status=2
            this.haoError=false
          }else{
            this.haoError=true
          }
        },
        c5(){
          login(this.QQhao).then((res) => {
          if(res.data.code=="100"){
            this.qqError=true
          }else{
            this.nowname=res.data.data.nickname
            this.nowava=res.data.data.avatar
            this.nowuser=res.data.data
            localStorage.setItem("nickname",this.nowname)
            localStorage.setItem("avatar",this.nowava)
            localStorage.setItem("uid",res.data.data.id)
            eventBus.$emit('refresh') //事件总线
            this.status=3
          }
        })
        .catch((err) => {
          console.error(err);
        }); 
        },
        // 定义方法，传入参数为图片链接
        checkImgExists(imgUrl){
            return new Promise(function(resolve, reject){
                var ImgObj = new Image();
                ImgObj.src = imgUrl;
                ImgObj.onload = function(res){
                    resolve(res);
                };
                ImgObj.onerror = function(err){
                    reject(err);
                };
            })
        },
        c8(){
          this.checkImgExists(this.QQhao2).then(()=>{
            this.nowava=this.QQhao2
            localStorage.setItem("avatar",this.nowava)
            this.status=5
          }).catch(()=>{
              console.log("无效链接");
              this.tuError=true
          })
          
        },
        c2(){
          this.status=4
        },
        c3(){
          this.nowava="https://pic.imgdb.cn/item/6573bcb3c458853aefcdf446.png"
          this.nowname="匿名的用户"
          localStorage.setItem("nickname",this.nowname)
          localStorage.setItem("avatar",this.nowava)
          localStorage.setItem("uid",this.generateUniqueRandomNumber())
          eventBus.$emit('refresh',"666") //事件总线
          this.status=7
        },
        thisava(index){
          this.choosethis=index
        },
        c6(){
          if(this.choosethis==-1){
            this.avaError=true
          }else{
            this.avaError=false
            this.nowava=this.deavatar[this.choosethis]
            localStorage.setItem("avatar",this.nowava)
            this.status=5
          }
        },
        c7(){
          if(this.nickname==''){
            this.nicknameError=true
          }else{
            this.nowname=this.nickname
            localStorage.setItem("nickname",this.nickname)
            localStorage.setItem("uid",this.generateUniqueRandomNumber())
            eventBus.$emit('refresh',"666") //事件总线
            this.status=6
          }
        },
        handleCommand(command) {
          if(command=='a'){
              localStorage.removeItem("nickname")
              localStorage.removeItem("avatar")
              localStorage.removeItem("uid")
              eventBus.$emit('refresh') //事件总线
              this.$router.go(0)
              this.status=0
          }
        },
        generateUniqueRandomNumber() {            //生成随机uid
          const timestamp = new Date().getTime(); // 获取当前时间戳
          const randomPart = Math.floor(Math.random() * 1000); // 添加一些额外的随机性
          const uniqueRandomNumber = parseInt(`${timestamp}${randomPart}`, 10);
          return uniqueRandomNumber;
        }
      },
      created() {
        this.nowname=localStorage.getItem("nickname")
        this.nowava=localStorage.getItem("avatar")
      },
      components: {
      }
    };
</script>

<style scoped>
  @import url("../assets/css/firstscreen.css");
  @import url("../assets/css/reset.css");
  @import url("../assets/css/main.css");
  @import url("../assets/css/style.css");
  @import url("../assets/css/members.css");
  @import url("../assets/css/footer.css");
  body{
    background-color: white;
  }
  .container{
    background-color: #3735358a;
  }
  .el-link.el-link--primary{
    color: #fff;
  }
  .el-link.el-link--primary:hover{
    color: #66b1ff;
  }
  .el-dialog--center .el-dialog__body{
    padding: 10px 25px 30px;
  }

  .shenfen{
    display: flex;
    flex-direction:column;
    align-items:center;
    width: 100px;
    margin: 25px;
    cursor: pointer;
  }
  .shenfen img:hover {
    text-shadow: 0 0 10px #25ccf7;
  }

  .shenfen img::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 50%;
    background: #25ccf7;
    transition: 0.6s;
    transform: scale(0.8);
    z-index: -1;
  }

  .shenfen img:hover::before {
    box-shadow: 0 0 19px 2px #25ccf7;
    transform: scale(1.05);
  }


  .shenfen img:hover {
    filter: invert(1)
      drop-shadow(0 0 5px rgba(37, 204, 247));
  }
  .shenfen img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 10px;
  }

  .choose1 img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .cavatar{
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin: 8px;
    cursor: pointer;
  }
  .cavatar:hover{
    border: #ff000070 3px solid;
    box-shadow: 0 0 0 2px #ff000060;
  }
  .active{
    border: #ff000070 3px solid;
    box-shadow: 0 0 0 2px #ff000060;
  }

</style>
