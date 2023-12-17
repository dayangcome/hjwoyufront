<template>
    <div id="outbox-b">
        <div style="text-align: center;">
        <img src="../assets/images/homework.png" style="width: 0px;">
        <h2 style="margin: 0;font-size: 20px;color:rgba(255, 255, 255, 0.9);">——  基于通义千问QUEN-MAX  ——</h2>
        </div>
    <div id="chat-container">
        <div id="chat-messages">
        </div>
        <div id="user-input">
            <input type="text" id="input-text" @keyup.enter="sendMessage" placeholder="答案之书的秘密就在这里...">
            <button id="send-button" @click="sendMessage" >发送</button>
        </div>
    </div>
    <div style="margin: 30px auto;width: 100%;text-align: center;font-size: 18px;color: rgba(255, 255, 255, 0.9);font-weight:800;">如有需要，可以联系管理员更换版图</div>
    </div>
  
  </template>
  
  <script>
    import { getanswer } from '../api/book.js'
    export default{
      name:'Mygpt',
      created(){},
      methods:{
        sendMessage() {
            let nickname=localStorage.getItem('nickname')
            let nowava=localStorage.getItem('avatar')
            if(nickname==null||nickname==''){
                const h = this.$createElement;
                this.$notify({
                    type: 'warning',
                    title: '提示',
                    duration: 8000,
                    message: h('p', { style: 'color: green'}, '请先进行身份认证，才能使用答案之书')
                });
            }else{

                // Handle user input and update the chat-messages section
                var userInput = document.getElementById("input-text").value;
                var chatMessages = document.getElementById("chat-messages");

                // Create a new message element
                var messageElement = document.createElement("div");
                messageElement.classList.add("chat-message", "user-message");

                // Create the message content element
                var messageContentElement = document.createElement("div");
                messageContentElement.classList.add("message-content");
                messageContentElement.innerText = userInput;
                var userava = document.createElement("img");
                userava.classList.add("user-ava");
                userava.style.backgroundImage = "url("+nowava+")";


                // Clear the input field after sending the message
                
                if(userInput.length < 3){
                    this.$message({
                    message: '请至少发送3个字符或汉字',
                    type: 'warning',
                    duration:2000
                    });
                }else if(userInput.length > 100){
                    this.$message({
                    message: '请发送100个字符或汉字以内的消息',
                    type: 'warning',
                    duration:2000
                    });
                }else{
                    document.getElementById("input-text").value = '';
                    // Append the message content element to the message element
                    messageElement.appendChild(messageContentElement);
                    messageElement.appendChild(userava)

                    // Append the message element to the chat-messages section
                    chatMessages.appendChild(messageElement);
                    getanswer(userInput).then(res=>{
                        if(res.data.code==200){
                            messageContentElement.innerText = res.data.data;
                        }else{
                            messageContentElement.innerText = '非常抱歉！答案生成失败 ';
                        }
                    }).catch(err=>{
                        console.log(err)
                        messageContentElement.innerText = '非常抱歉！请求出现了异常... ';
                    })
                    // Create a new message element for the bot's response
                    var messageElement = document.createElement("div");
                    messageElement.classList.add("chat-message", "bot-message");
                
                    // Create the message content element
                    var messageContentElement = document.createElement("div");
                    messageContentElement.classList.add("message-content");
                    messageContentElement.innerText = '稍等，正在生成答案...';

                    var botava = document.createElement("img");
                    botava.classList.add("bot-ava");
                    
                    // Append the message content element to the message element
                    messageElement.appendChild(botava);
                    messageElement.appendChild(messageContentElement);
                    
                
                    // Append the message element to the chat-messages section
                    var chatMessages = document.getElementById("chat-messages");
                    chatMessages.appendChild(messageElement);
                }    

            }


            
        }
      }
    }
  </script>
  
  <style>
  #outbox-b{
    height: calc(100vh - 64px);
    background-color: rgba(108, 183, 253, 0.862);
    background-image: url("https://pic.imgdb.cn/item/657d65cdc458853aef997a1b.jpg");
    background-size: 1535px calc(100vh - 64px);
  }
    #chat-container {
        background-color: white;
            max-width: 1000px;
            margin: 12px auto;
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
            opacity: 0.9;
        }

        #chat-messages {
            padding: 20px;
            overflow-y: scroll;
            max-height: 500px;
        }

        .chat-message {
            margin-bottom: 10px;
        }

        .user-message {
            text-align: right;
        }

        .bot-message {
            text-align: left;
        }

        .message-content {
            display: inline-block;
            padding: 8px;
            border-radius: 4px;
            word-wrap: break-word;
        }

        .user-message .message-content {
            background-color: #4caf50;
            color: #fff;
        }

        .bot-message .message-content {
            background-color: #f0f0f0;
            color: #333;
        }

        #user-input {
            display: flex;
            padding: 10px;
            background-color: #fff;
        }

        #input-text {
            flex: 1;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-right: 10px;
            font-size: 14px;
        }

        #send-button {
            padding: 8px 16px;
            background-color: #4caf50;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
        }
  
    .el-popconfirm__action{
        text-align: center !important;
        margin-top:10px !important;
    }
    .bot-ava{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-image: url("../assets/images/homework.png");
        background-size: cover;
        margin-right: 10px;
        vertical-align: -40%;
    }
   .bot-ava img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .user-ava{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-size: cover;
        margin-left: 10px;
        vertical-align: -40%;
    }
   .user-ava img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
  </style>
  