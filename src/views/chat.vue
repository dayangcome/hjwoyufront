<template>
    <div id="outbox">
        <div class="mycontainer">
            <div class="game-list">
                <!-- 聊天话题列表和介绍 -->
                <h2>热门聊天话题</h2>
                <div style="display: grid;grid-template-columns: 1fr 1fr 1fr;">
                    <div v-for="item in gameitems" class="game-item" @click="playgame(item)" style="display: flex;flex-direction: column;width: 70px;margin:8px 20px;">  	
                        <img :src="item.imgsrc" class="image" style="width: 70px;height: 70px;border-radius: 6px;margin-bottom: 5px;">
                        <div style="text-align: center;">
                            <span style="display: inline-block;font-size: 17px;">{{item.iname}}</span>
                        </div>
                    </div>
                    
                    <el-dialog title="聊天话题详情" :visible.sync="dialogTableVisible" width="40%">
                        

                        <div class="gamecard">
                            <div class="gamecard-header">
                                    <img :src="nowitem.imgsrc" style="width: 100px;height: 100px;border-radius: 6px;margin-bottom: 10px;" alt="">
                                    <h3>{{nowitem.iname}}</h3>
                                    <h3>聊天话题评分: {{nowitem.rating}}</h3>
                                    <div class="block" style="width: 130px;">
                                        <br/>
                                        <el-rate
                                            v-model="value2"
                                            :colors="colors">
                                        </el-rate>
                                        <span style="text-align: center;display:inherit;margin-top: 4px;margin-bottom: 5px;">我的评分：{{ value2 }}</span>
                                        <span style="color:rgb(0, 179, 255);">tips：当前评分功能尚在测试之中，仅供参考。</span>
                                    </div>
                            </div>
                            <div class="gamecard-body">
                                
                                <div class="game-info">
                                <p>聊天话题所属领域: {{nowitem.manufacturer}}</p><br>
                                <p>聊天话题简介: {{nowitem.description}}</p>
                                </div>
                                
                
                        
                            </div>
                            
                        </div>
                        <div class="btn-container">
                                <button @click="likeitem(nowitem.id)" class="btn btn-learn-more">点赞({{ nowitem.prepared1 }})</button>
                        </div>
                    </el-dialog>
                </div>
            </div>
            <div style="display: flex;justify-content: center;">
                <el-button type="primary" @click="others" plain style="margin: 10px 15px;"><i class="el-icon--left el-icon-back"></i>其他分区</el-button>
                <el-button type="success" @click="addgames" plain style="margin: 10px 15px;"><i class="el-icon--left el-icon-plus"></i>添加聊天话题</el-button>
            </div>

            <el-dialog
            title="添加聊天话题"
            :visible.sync="addgamesVisible"
            width="40%"
            >
            <!-- 表单 -->
            <el-form :model="gameForm" ref="gameForm" label-position="left" label-width="150px" label-align="left">
                <el-form-item label="聊天话题名称" prop="name">
                <el-input v-model="gameForm.name" required></el-input>
                </el-form-item>
                <el-form-item label="聊天话题所属领域" prop="developer">
                <el-input v-model="gameForm.developer" required></el-input>
                </el-form-item>
                <el-form-item label="聊天话题简介" prop="description">
                <el-input type="textarea" resize="none" v-model="gameForm.description" required></el-input>
                </el-form-item>
                <el-form-item label="聊天话题图片链接" prop="imageUrl">
                <el-input v-model="gameForm.imageUrl" required></el-input>
                </el-form-item>
            </el-form>
            <span style="color:rgb(0, 179, 255);">tips：请不要乱添加聊天话题哦！会有后台管理员进行审核，审核通过后即可看到该聊天话题，如有疑问，请联系管理员QQ：2012190160。</span>
            <!-- 按钮 -->
            <span slot="footer" class="dialog-footer">
                <el-button type="info" @click="addgamesVisible = false">取消</el-button>
                <el-button type="primary" @click="submitForm">确定</el-button>
            </span>
            </el-dialog>

        
        </div>

        <div class="player-activities">
            <!-- 玩家动态 -->
       
            
     
            <div class="center_top">

                    <div class="info_send" style="margin: 0 100px;">
                        <div class="post-box" id="post-box">
                            <textarea id="post-content"  v-model="mytext" placeholder="分享你的想法..."></textarea>
                            
                            <div class="post-options">
                                

                                <el-popover
                                placement="bottom"
                                width="400"
                                trigger="click">
                                <div style="display: flex;flex-wrap: wrap;">
                                    <div v-for="(item,index) in emojilist" class="emoji-item" @click="addemoji(index)">
                                        {{ item }}
                                    </div>
                                </div>
                                <button id="add-emoji-btn" class="post-btn" slot="reference" style="float: left;">😊 添加表情</button>
    
                                </el-popover>



                                
                                <button id="add-topic-btn" @click="addtopic" class="post-btn" style="float: left;"># 添加话题</button>
                                <button id="publish-btn" @click="publish" class="post-btn" style="float: right;">发表讨论</button>
                                <p :class="mytext.length <= 200? 'notoverflow' : 'hasoverflow'"><span class="wdcount">{{mytext.length}}</span>/200</p>
                            </div>
                            
                        </div>

                    </div>
                
            </div>
            <el-link class="new active"  @click="positive" style="margin: 0 5px 0 45px;">最新</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link class="hot" @click="negitive" style="margin: 0 5px;">最热</el-link>
                <el-divider></el-divider>
            <div class="center_bottom"  >
                
                    <div v-for="(item,index) in dyitems" class="card">
                        <div class="header">
                            <img :src="item.authorPic" alt="Author Avatar" class="avatar">
                            <div class="author-info">
                                <span class="author-name">{{ item.authorName }} </span>
                                <span class="post-time"> 发表于 {{getDateDiff(item.createDate)}}</span>
                            </div>


                           
                            <el-link v-show="item.authorId != nowuid && nowuid!='' && nowuid!=null " @click="report(item)" class="delete-btn" style="color: rgb(255, 255, 255);" > 举报讨论 </el-link>
                            


                            <el-dialog title="举报讨论" :visible.sync="freezeVisible" width="40%">
                            <el-form>
                                <el-form-item label="举报原因" label-width="120px">
                                <el-select v-model="reason" placeholder="请选择举报原因">
                                    <el-option label="个人信息违规" value="个人信息违规"></el-option>
                                    <el-option label="散播谣言" value="散播谣言"></el-option>
                                    <el-option label="涉嫌欺诈" value="涉嫌欺诈"></el-option>
                                    <el-option label="涉嫌人身攻击" value="涉嫌人身攻击"></el-option>
                                    <el-option label="传播色情" value="传播色情"></el-option>
                                    <el-option label="侵犯他人隐私" value="侵犯他人隐私"></el-option>
                                    <el-option label="多次引战" value="多次引战"></el-option>
                                    <el-option label="其他" value="其他"></el-option>
                                </el-select>
                                </el-form-item>
                                
                                <el-form-item label="详细说明" label-width="120px">
                                    <el-input
                                    type="textarea"
                                    placeholder="请输入详细说明"
                                    v-model="des"
                                    resize="none"
                                    maxlength="50"
                                    show-word-limit
                                    rows="2">
                                    </el-input>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button type="info" @click="freezeVisible = false">取 消</el-button>
                                <el-button  type="primary" @click="reporture" >确 定</el-button>
                            </div>
                            </el-dialog>
                          
                            <el-popconfirm
                            v-show="item.authorId == nowuid"
                            confirm-button-text='确定'
                            cancel-button-text='取消'
                            confirm-button-type="danger"
                            cancel-button-type="info"
                            icon="el-icon-info"
                            icon-color="red"
                            title="确定要删除该讨论吗？"
                            @confirm="deleteitem(item.id)"
                            >
                            <el-link slot="reference" class="delete-btn" style="color: white;" > 删除讨论 </el-link>
                            </el-popconfirm>

                           
                        </div>

                        <div class="content">
                            <p v-html="topic(item.contents)"></p>
                        </div>
                        <div class="myfooter">
                            <button v-if="mylike.indexOf(item.id) == -1" style="width: 130px;" @click="like(item.id)" class="like-btn">👍 赞 <span class="like-count">{{item.likeCounts}}</span></button>
                            <button v-else style="background-color: #007bff3a;width: 130px;"  class="like-btn">👍 已点赞 <span class="like-count">{{item.likeCounts}}</span></button>

                            <button v-if="mydislike.indexOf(item.id) == -1"  @click="dislike(item.id)" style="width: 130px;" class="dislike-btn">👎 踩 <span class="dislike-count">{{item.dislikeCounts}}</span></button>
                            <button v-else style="background-color: #007bff3a;width: 130px;" class="dislike-btn">👎 已点踩 <span class="dislike-count">{{item.dislikeCounts}}</span></button>
                            
                            <button v-if="commentvisable != item.id"  style="width: 130px;" @click="comment(item.id)" class="comment-btn">💬 评论 <span class="comment-count">{{item.commentCounts}}</span></button>
                            <button v-else style="width: 130px;border-radius: 0%;background-color: #f5f5f5bd;" @click="comment2" class="comment-btn">💬 评论 <span class="comment-count">{{item.commentCounts}}</span></button>
                        </div>


                        <!-- 评论区 -->
                        <div class="comments-container" v-show=" commentvisable == item.id">
                            <div class="mycomment" v-for="(item,index) in commentlist">
                                <div class="user-avatar">
                                    <img :src="item.authorAva" alt="User Avatar">
                                </div>
                                <div class="comment-content">
                                <div class="user">
                                    {{item.authorName}}


                                    <el-popconfirm
                                    v-show="item.authorId == nowuid"
                                    confirm-button-text='确定'
                                    cancel-button-text='取消'
                                    confirm-button-type="danger"
                                    cancel-button-type="info"
                                    icon="el-icon-info"
                                    icon-color="red"
                                    title="确定要删除该评论吗？"
                                    @confirm="deletecomment(item)"
                                    >
                                    <el-link slot="reference" style="float: right;margin-right: 30px;margin-top:10px;font-size: 15px;">删除</el-link>
                                    </el-popconfirm>
                                    
                                    <el-link style="float: right;margin-right: 30px;margin-top:10px;font-size: 15px;" @click="reply(item)" >回复</el-link>
                                </div>
                                <div class="timestamp">发表于 {{ getDateDiff(item.createDate) }}</div>
                                <div class="message">{{item.content}}</div>
                                </div>
                            </div>

                            <div class="comment-form">
                                <textarea v-model="pinglun" placeholder="期待你的神评论"></textarea>
                                <button @click="commitcom(item.id)">发表评论</button>
                                <!--发表一个评论给原讨论+2热度 -->
                            </div>
                        </div>

                    </div>
            </div>
   
        </div>    
            
   
    </div>
  </template>
  
  <script>
  import { getitem,additem,getdy,publish,deldy,changedy,getdylike,getdydislike,likeitem,getcomments,addcomments,delcomment,feedback } from '../api/community.js';
  import eventBus from './event-bus';
   export default{
    name:'game',
    data(){
        return{
            mytext:'',
            nowitem:{},
            gameitems:[],
            dyitems:[], 
            emojilist:[
                "😭","😪","😥","😅","🥰","😐","😤","😍","😇","😀","🤣","😃","😂",
                "😮","🤤","🤐","🙄","😯","🙂","😔","😎","🤔","😄","😉","🥵","👿",
                "🤗","😆","😘","😊","😒","✌","❓","💧","👀","🙏","⭐","👌","✋",
                "❤","💕","👍"
            ],
            dialogTableVisible:false,
            value2: null,
            colors: ['#99A9BF', '#F7BA2A', '#FF9900'] , // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
            nowuid:'',
            mylike:[],
            mydislike:[],
            pagestatus:0,
            commentvisable:-1,
            commentlist:[],
            pinglun:'',
            freezeVisible:false,
            addgamesVisible:false,
            reason:'',
            des:'',
            jubaoitem:{},
            gameForm: {
                name: '',
                developer: '',
                description: '',
                launchUrl: '',
                imageUrl: ''
            },
        }
    },
    methods:{
        initgames(){
            getitem(6).then(res=>{
                if(res.data.code==200){
                    this.gameitems=res.data.data
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        initdys(){
            getdy(6).then(res=>{
                if(res.data.code==200){
                    this.dyitems=res.data.data
                    if(this.pagestatus==1){         //考虑如果此时是按热度排序的可能性
                        this.negitive()
                    }
                }
            }).catch(err=>{
                console.log(err)
            })
            this.nowuid=localStorage.getItem('uid')
            if(this.nowuid!=null&&this.nowuid!=''){

                    getdylike(6,this.nowuid).then(res=>{
                        if(res.data.code==200){
                            this.mylike=res.data.data
                        }
                    }).catch(err=>{
                        console.log(err)
                    })

                    getdydislike(6,this.nowuid).then(res=>{
                        if(res.data.code==200){
                            this.mydislike=res.data.data
                        }
                    }).catch(err=>{
                        console.log(err)
                    })
            }
            
        },
        cmpdys(a,b){
            return b.hots-a.hots
        },
        positive(){
            this.initdys()
            document.querySelector(".hot").classList.remove("active")
            document.querySelector(".new").classList.add("active")
            this.pagestatus=0
        },
        negitive(){
            this.dyitems=this.dyitems.sort(this.cmpdys)
            document.querySelector(".new").classList.remove("active")
            document.querySelector(".hot").classList.add("active")
            this.pagestatus=1
        },
        like(iid){
            if(this.nowuid!=''&&this.nowuid!=null){
                changedy(1,this.nowuid,iid).then(res=>{
                    if(res.data.code==200){
                            this.$message({
                            title: '提示',
                            message: '点赞成功',
                            type:'success'
                        });
                        this.initdys()
                    }
                }).catch(err=>{
                    console.log(err)
                })
            }else{
                const h = this.$createElement;
                this.$notify({
                    type: 'warning',
                    title: '提示',
                    duration: 8000,
                    message: h('p', { style: 'color: green'}, '请先进行身份认证，才能够点赞')
                });
            }
        },
        dislike(iid){
            if(this.nowuid!=''&&this.nowuid!=null){
                changedy(2,this.nowuid,iid).then(res=>{
                    if(res.data.code==200){
                        this.$message({
                            title: '提示',
                            message: '点踩成功',
                            type:'success'
                        });
                        this.initdys()
                    }
                }).catch(err=>{
                    console.log(err)
                })
            }else{
                const h = this.$createElement;
                this.$notify({
                    type: 'warning',
                    title: '提示',
                    duration: 8000,
                    message: h('p', { style: 'color: black'}, '请先进行身份认证，才能够点踩')
                });
            }
        },
        comment(iid){
            this.commentlist=[]
            getcomments(iid).then(res=>{
                if(res.data.code==200){
                    this.commentlist=res.data.data
                }
            }).catch(err=>{
                console.log(err)
            })
            this.commentvisable=iid
        },
        comment2(){
            this.commentvisable=-1
        },
        getDateDiff(dateTimeStamp) {
			if(dateTimeStamp){
				// 时间字符串转时间戳
			    var timestamp = new Date(dateTimeStamp).getTime();
			    var minute = 1000 * 60;
			    var hour = minute * 60;
			    var day = hour * 24;
			    var now = new Date().getTime();
			    var diffValue = now - timestamp;
			    var result;
			    if (diffValue < 0) {
			        return;
			    }
			    var dayC = diffValue / day;
			    var hourC = diffValue / hour;
			    var minC = diffValue / minute;
				if (dayC >= 2) {
				    result = dateTimeStamp.split(" ")[0];
				}else if (dayC < 2 && dayC > 1) {
			        result = "昨天";
			    } else if (hourC >= 1) {
			        result = "" + parseInt(hourC) + "小时前";
			    } else if (minC >= 1) {
			        result = "" + parseInt(minC) + "分钟前";
			    } else
			        result = "刚刚";
			    return result.replace(/T/g, ' ');
			}else{
				return ''
			}  
		},
        publish(){
            let nickname=localStorage.getItem('nickname')
            let avatar=localStorage.getItem('avatar')
            if(nickname==null||nickname==''){
                const h = this.$createElement;
                this.$notify({
                    type: 'warning',
                    title: '提示',
                    duration: 8000,
                    message: h('p', { style: 'color: teal'}, '请先进行身份认证，才能够发表讨论')
                });
            }
            else if(this.mytext.length<5){
                this.$message({
                    message: '请至少输入5个汉字或字符',
                    type: 'warning'
                });
            }
            else if(this.mytext.length>200){
                this.$message({
                    message: '请不要输入超过200个汉字或字符',
                    type: 'warning'
                });
            }else{
                const dynamic = {
                    commentCounts:0,
                    dislikeCounts:0,
                    likeCounts:0,
                    jubaoCounts:0,
                    contents:this.mytext,
                    authorName:nickname,
                    authorPic:avatar,
                    hots:0,
                    category:6,
                    authorId:this.nowuid,
                    
                };
                publish(dynamic).then(res=>{
                    if(res.data.code!=200){
                        this.$message({
                            message: '发表失败',
                            type:'error'
                        });
                    }else{
                        this.mytext=''
                        this.initdys()
                        this.$message({
                            message: '发表成功',
                            type:'success'
                        });
                    }
                }).catch(err=>{
                    console.log(err)
                })

            }
            

        },
        addemoji(index){
            this.mytext+=this.emojilist[index]
        },
        playgame(item){
            this.nowitem=item
            this.dialogTableVisible=true;
            

        },
        commitcom(iid){         //发表评论
            let nickname=localStorage.getItem('nickname')
            let avatar=localStorage.getItem('avatar')
            let uid=localStorage.getItem('uid')
            if(nickname==null||nickname==''){
                const h = this.$createElement;
                this.$notify({
                    type: 'warning',
                    title: '提示',
                    duration: 8000,
                    message: h('p', { style: 'color: orange'}, '请先进行身份认证，才能够发表评论')
                });
            }
            else if(this.pinglun.length<2){
                this.$message({
                    message: '请至少输入2个汉字或字符',
                    type: 'warning'
                });
            }
            else if(this.pinglun.length>100){
                this.$message({
                    message: '请不要输入超过100个汉字或字符',
                    type: 'warning'
                });
            }else{
                const mycomment = {
                    content:this.pinglun,
                    likes:0,
                    authorId:uid,
                    parentId:iid,
                    authorAva:avatar,
                    authorName:nickname
                };
                addcomments(mycomment).then(res=>{
                    if(res.data.code!=200){
                        this.$message({
                            message: '发表失败',
                            type:'error'
                        });
                    }else{
                        this.pinglun=''
                        this.$message({
                            message: '发表成功',
                            type:'success'
                        });
                        this.comment(iid)
                        this.initdys()  
                        
                    }
                }).catch(err=>{
                    console.log(err)
                })

            }
        },
        others(){
            this.$router.push('/inner/community')
        },
        report(item){
            this.freezeVisible=true
            this.jubaoitem=item
        },
        reporture(){
            let nickname=localStorage.getItem('nickname')
            let uid=localStorage.getItem('uid')
            if(nickname==null||nickname==''){
                const h = this.$createElement;
                this.$notify({
                    type: 'warning',
                    title: '提示',
                    duration: 8000,
                    message: h('p', { style: 'color: red'}, '请先进行身份认证，才能够进行举报')
                });
            }
            else if(this.reason.length<1){
                this.$message({
                    message: '请选择举报原因',
                    type: 'warning'
                });
            }
            else if(this.des.length<1){
                this.$message({
                    message: '请填写举报描述',
                    type: 'warning'
                });
            }
            else if(this.des.length>100){
                this.$message({
                    message: '请不要输入超过100个汉字或字符',
                    type: 'warning'
                });
            }else{
                const myfeedback = {
                    content:this.jubaoitem.contents,
                    type:1,
                    useruid:uid,
                    reporttype:this.reason,
                    message:this.des,
                    reportiid:this.jubaoitem.id,
                };
                feedback(myfeedback).then(res=>{
                    if(res.data.code!=200){
                        this.$message({
                            message: '举报失败',
                            type:'error'
                        });
                    }else{
                        this.des=''
                        this.reason=''
                        this.freezeVisible=false
                        this.$message({
                            message: '举报成功，已经反馈到管理员后台！',
                            type:'success'
                        });
                        
                    }
                }).catch(err=>{
                    console.log(err)
                })

            }
        },
        addtopic(){
            this.mytext+="  # 在此输入话题 #  "
        },
        topic(v){
            return v.replaceAll(/#([^#]*)#/g, `<span style="color:dodgerblue;cursor: pointer">#$1#</span>`)
        },
        likeitem(itemid){
            likeitem(itemid).then(res=>{
                if(res.data.code!=200){
                    this.$message({
                        message: '点赞失败',
                        type:'error'
                    });
                }else{
                    this.$message({
                        message: '点赞成功',
                        type:'success'
                    });
                    this.nowitem.prepared1=this.nowitem.prepared1+1

                }
                
            }).catch()
        },
        deleteitem(dyid){
            deldy(dyid).then(res=>{
                if(res.data.code!=200){
                    this.$message({
                        message: '删除失败',
                        type:'error'
                    });
                }else{
                    this.$message({
                        message: '删除成功',
                        type:'success'
                    });
                    this.initdys()
                }
                
            }).catch(err=>{
                console.log(err)
            })
        },
        reply(item){
            this.pinglun=`回复 @${item.authorName}： `
        },
        deletecomment(item){
            delcomment(item.id).then(res=>{
                if(res.data.code!=200){
                    this.$message({
                        message: '删除失败',
                        type:'error'
                    });
                }else{
                    this.$message({
                        message: '删除成功',
                        type:'success'
                    });
                    this.comment(item.parentId)
                    this.initdys()
                }
                
            }).catch(err=>{
                console.log(err)
            })
        },
        addgames(){
            this.addgamesVisible=true
        },
        showDialog() {
            this.addgamesVisible = true;
        },
        submitForm() {
            // 提交表单逻辑，这里可以发送请求或执行其他操作
            if(this.gameForm.name.length<1){
                this.$message({
                    message: '请输入聊天话题名称',
                    type:'warning'
                });
            }else if(this.gameForm.developer.length<1){

                this.$message({
                    message: '请输入聊天话题',
                    type:'warning'
                });
            }else if(this.gameForm.description.length<1){
                this.$message({
                    message: '请输入聊天话题简介',
                    type:'warning'
                });
            }else if(this.gameForm.imageUrl.length<1){
                this.$message({
                    message: '请输入聊天话题图片链接',
                    type:'warning'
                });
            }else if(this.gameForm.name.length>30){
                this.$message({
                    message: '聊天话题名称太长，请简化一下',
                    type:'warning'
                });
            }else if(this.gameForm.developer.length>30){

                this.$message({
                    message: '聊天话题太长，请简化一下',
                    type:'warning'
                });
            }else if(this.gameForm.description.length>1000){
                this.$message({
                    message: '聊天话题简介太长，请简化一下',
                    type:'warning'
                });
            }else if(this.gameForm.imageUrl.length>600){
                this.$message({
                    message: '聊天话题图片链接太长，请更换链接',
                    type:'warning'
                });
            }else{
                    
                const game={
                    iname:this.gameForm.name,
                    rating:5.0,
                    category:6,
                    manufacturer:this.gameForm.developer,
                    description:this.gameForm.description,
                    imgsrc:this.gameForm.imageUrl,
                    playsrc:this.gameForm.launchUrl,
                }
                additem(game).then(res=>{
                    if(res.data.code!=200){
                        this.$message({
                            message: '添加失败',
                            type:'error'
                        });
                        
                    }else{
                        this.$message({
                            message: '添加成功，管理员会在后台进行审核，审核通过后即可看到该聊天话题！',
                            type:'success'
                        });
                        this.$refs.gameForm.resetFields();
                    }
                    
                }).catch(err=>{
                    console.log(err)
                })
                // 关闭对话框
                this.addgamesVisible = false;
            }

        }
    },
    mounted(){
        this.initgames()
        this.initdys()
        eventBus.$on('refresh',this.initdys)
        console.log("欢迎您，来访者！\n如果有什么问题欢迎联系网站管理员QQ：2012190160！")
    },
    beforeDestroy(){
        eventBus.$off('refresh',this.initdys)
    }
    }
       
  </script>
  
  <style scoped>

  #outbox{
      height: calc(100vh - 64px);
      padding: 5px;
      display: flex;
      background-color: rgb(198, 214, 230);
      background-image: url('https://pic.imgdb.cn/item/657d655bc458853aef976e7b.jpg');
      background-size:contain;
  }
  .mycontainer {
      display: flex;
      flex-direction: column;
      margin: 0 5px 5px 5px;
      background-color: #f5f5f5bd;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      overflow: hidden;
      width: 25%;
      height: 100%;
  }
  
  .el-popconfirm__action{
        text-align: center;
        margin-top: 10px ;
        height: 100%;
    }
  .game-list, .player-activities {
      flex: 1;
      padding: 20px;
      height: 100%;
      overflow: auto;
  }
  
  .player-activities::-webkit-scrollbar {
         width: 0;
   }
  
  h2 {
      color: #333;
  }
  
  ul {
      list-style: none;
      padding: 0;
  }
  
  li h3 {
      color: #007bff;
  }
  
  .player-activities {
      background-color: #f5f5f5bd;
      overflow-x:hidden;
      border-radius: 8px;
  }
  
  #post-form {
      margin-bottom: 20px;
  }
  
  #post-input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
  }
  
  button {
      color: #fff;
      border: none;
      padding: 10px 15px;
      cursor: pointer;
      border-radius: 4px;
  }
  
  
  .activity-item {
      border: 1px solid #ccc;
      padding: 15px;
      margin-bottom: 15px;
      background-color: #f5f5f5bd;
      border-radius: 4px;
      transition: transform 0.3s ease-in-out;
  }
  
  .activity-item:hover {
      transform: scale(1.02);
  }
  
  .activity-item p {
      margin: 0 0 10px 0;
  }
  
  /* 添加其他样式和动画效果 */
  /* 游戏列表项的样式 */
  li {
      position: relative;
  }
  
  img {
      width: 100%;
      height: auto;
      border-radius: 8px;
  }
  
  h3 {
      color: #333;
  }
  
  .details-link {
      position: absolute;
      bottom: 10px;
      left: 10px;
      color: #007bff;
      text-decoration: none;
      font-weight: bold;
  }
  
  .details-link:hover {
      text-decoration: underline;
  }
  
  .post-box {
      max-width: 700px;
      margin: 0 auto;
      border: 2px solid #f5f5f5;
      border-radius: 10px;
      padding: 14px;
      box-sizing: border-box;
      background-color: #f5f5f5;
      transition: border-color 0.3s ease;
  }
  
  .post-box:focus-within {
      border-color: #384338f6;
  }
  
  #post-content {
      width: 100%;
      height: 70px;
      border: none;
      resize: none;
      background-color: #f5f5f500;
      margin-bottom: 15px;
      border-radius: 8px;
      padding: 12px;
      font-size: 16px;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      outline: none; /* 取消 textarea 的默认聚焦样式 */
  }
  
  .post-options {
      margin-bottom: 38px;
  }
  
  .post-btn {
      padding: 10px 15px;
      margin-left: 9px;
      margin-right: 5px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      background-color: #384338f6;
      color: white;
      transition: background-color 0.3s ease;
  }
  
  .post-btn:hover {
      background-color: #384338e0;
  }
  
  /* 动态卡片样式 */
  .card {
      width: 100%;
      max-width: 1000px;
      margin: 20px auto;
      border: 1px solid #eaeaea;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      overflow: hidden;
  }
  
  .card:hover{
      box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
  }
  
  .header {
      display: flex;
      align-items: center;
      padding: 10px 15px;
      background-color: #384338;
      color: white;
  }
  
  .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
  }
  
  .author-info {
      flex-grow: 1;
  }
  
  .author-name {
      font-weight: bold;
      margin-right: 5px;
  }
  
  .post-time {
      color: #ccc;
      font-size: 13px;
  }
  
  
  .content {
      padding: 15px;
  }
  
  
  .like-btn,
  .dislike-btn,
  .comment-btn {
      background: none;
      border: none;
      cursor: pointer;
      color:#555;
      font-size: 14px;
      margin-right: 5px;
  }
  
  .like-count,
  .dislike-count,
  .comment-count {
      margin-right: 10px;
      font-size: 14px;
      color: #555;
  }
  
  .myfooter button:hover{
      background-color: #007bff3a;
  }
  .emoji-item{
      cursor: pointer;
      width: 40px;
      height: 40px;
      font-size: 20px;
      box-sizing: border-box;
      padding: 5px;
      text-align: center;
  }
  
  .emoji-item:hover{
      background-color: #384338f6;
  }
  
  .game-item{
      cursor: pointer;
  }
  
  .game-item:hover{
      color: red;
  }
  
  .game-item img:hover{
     
      border:#ff0000 2px solid;   
  }
  
  .notoverflow{
      margin:14px;
      font-size: 15.5px;
      float: right;
      color: #929292;
  }
  
  .hasoverflow{
      margin:14px;
      font-size: 15.5px;
      float: right;
      color: #ff0000;
  }
  
  .delete-btn{
      margin-right: 20px;
  }
  
  .delete-btn:hover{
      color: #ff0000;
  }
  
  .gamecard {
        background-color: #ffffff;
        display: flex;
        overflow: hidden;
      }
  
      .gamecard-header {
        display: flex;
        flex-direction: column;
        margin: 0 15px 20px 15px;
        width: 30%;
        align-items:center;
      }
      .gamecard-body {
        padding:0 10px 20px 10px;
      }
  
  
      .game-info {
        margin-bottom: 20px;
        font-size: 16px;
      }
  
      .game-info h3 {
        margin-top: 0;
      }
  
      .player-rating {
        margin-bottom: 20px;
      }
  
      .btn-container {
        text-align: center;
      }
  
      .btn {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        text-align: center;
        text-decoration: none;
        border-radius: 5px;
        margin-right: 10px;
      }
  
      .btn-start {
        background-color: #27ae60;
        color: #ffffff;
        margin-right: 30px;
      }
  
      .btn-start:hover {
        background-color: #229954;
      }
  
      .btn-learn-more {
        background-color: #e74c3c;
        color: #ffffff;
      }
      .btn-learn-more:hover {
        background-color: #c0392b;
      }
     
      .el-divider--horizontal{
          margin: 7px 45px;
          width: 1000px;
      }
      
      .el-divider{
          background-color: #60626652;
      }
  
      .active{
          color: #409EFF !important;
      }
  
      .comments-container {
        max-width: 1000px;
        background-color: #f5f5f5bd;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        /* border-radius: 8px; */
        overflow: hidden;
      }
  
      .mycomment {
        display: flex;
        align-items: flex-start;
        padding: 15px;
        border-bottom: 1px solid #acabab;
        transition: background-color 0.3s;
      }
  
      /* .mycomment:hover {
        background-color: #f9f9f9;
      } */
  
      .mycomment:last-child {
        border-bottom: none;
      }
  
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 15px;
        overflow: hidden;
      }
  
      .user-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
  
      .comment-content {
        flex: 1;
      }
  
      .mycomment .user {
        font-weight: bold;
        color: #2c3e50;
      }
  
      .mycomment .timestamp {
        color: #7f8c8d;
        font-size: 0.8em;
      }
  
      .mycomment .message {
        margin-top: 10px;
        color: #333;
      }
  
      .comment-form {
        display: flex;
        flex-direction: column;
        padding: 15px;
        /* background-color: #ecf0f1; */
        /* border-top: 1px solid #bdc3c7; */
      }
  
      .comment-form textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #bdc3c7;
        background-color: #f5f5f5;
        border-radius: 4px;
        resize: none;
        transition: border-color 0.3s;
      }
  
      .comment-form textarea:focus {
        border-color: #3498db;
      }
  
      .comment-form button {
        align-self: flex-end;
        padding: 8px 15px;
        background-color: #384338f5;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
      }
  
      .comment-form button:hover {
        background-color: #384338e0;
      }
  
  
    </style>
  