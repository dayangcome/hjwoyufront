<template>
    <div id="outbox">
        <div class="container">
            <div class="header">
                <h1>模块建设中 . . . </h1>
            </div>
            
            <div class="content">
                <p>该模块正在全力建设中，敬请期待我们的精彩呈现！</p>
                <!-- 可以添加更多相关信息、图片、动画等 -->
            </div>
        </div>

        <div class="footer">
            <p>&copy; 2024 By 大洋</p>
        </div>
    </div>
  
  </template>
  
  <script>
    export default{
      name:'Buliding',
    }
  </script>
  
  <style scoped>
        #outbox {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #ecf0f1;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: flex-start;

        }

        .container {
            display: block;
            text-align: center;
            max-width: 600px;
            width: 100%;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            margin-top: 11%;
        }

        .header {
            background-color: #13222a;
            color: #fff;
            padding: 20px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        .header h1 {
            margin: 0;
            font-size: 1.5em;
        }

        .content {
            padding: 20px;
            font-size: 1.2em;
            color: #555;
        }

        .footer {
            background-color: #000000;
            color: #fff;
            padding: 10px;
            position: fixed;
            bottom: 0;
            width: 100%;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
  </style>
  