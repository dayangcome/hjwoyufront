<template>
    <div class="about-us" id="about-us">
        <!-- 顶部导航栏 -->
        <div class="topbar" id="topbar">

            <router-link to="/"><span class="return-home">HOME</span></router-link>

            <span class="top-title" id = 'top-title' >更新日志</span>
            <a href="#" id="top-btn">Top👆</a>
        </div>
        <!-- 主要内容区 -->
        <div class="main-content">
            <div class="container">
                <!-- 时间线 -->
                <div class="period-box" id="period"> 
                    <div class="spacer" ></div>
                    <div class="card period1">
                        <article>
                            <h1><span class="updatetime">2023.12.9</span> <span class="version">V1.0版本</span></h1>
                                <ul>
                                    <li>创建了网站首页、社区交流、答案之书、云盘分享、其他工具、关于我们板块，其中云盘分享板块还在建设当中。</li>
                                    <li>修复了一些初始的BUG，比如在社区交流中举报某些讨论无法举报成功。</li>
                                    <li>优化了网站的访问速度。</li>
                                </ul>
                                
                        </article>
                    </div>
                    <div class="card period2">
                        <article>
                            <h1><span class="updatetime">2023.12.16</span> <span class="version">V1.1版本</span></h1>
                            <ul>
                                <li>更新了社区交流板块的UI设计，给每个交流板块设计了版图。</li>
                                <li>更新了社区交流和答案之书的版图</li>
                                <li>在社区交流板块中，把表示的时间改成了“刚刚”、“1分钟前”等更人性化的表达。</li>
                                <li>更新了其他工具中的一些工具。</li>
                                <li>进一步优化了网站的访问速度。</li>
                                <li>下一步准备放弃“云盘分享”模块，改为其他功能。如果您需要用网盘，请点击 HOME-其他工具-坚果云网盘。</li>
                            </ul>
                        </article>
                    </div>
                    <div class="card period3">
                        <article>
                            <h1><span class="updatetime">2023.12.23</span> <span class="version">V1.2版本</span></h1>
                            <ul>
                                <li>在身份认证时，其他朋友可以选择上传网络图片作为自己的头像进行认证。</li>
                                <li>优化了社区交流-闲聊区中，白边不对齐的问题。</li>
                                <li>更新了其他工具-提瓦特启动器，使其更加高仿。</li>
                                <li>更新了其他工具中的一些工具。</li>
                            </ul>
                        </article>
                    </div>
                    <div class="card period2">
                        <article>
                            <h1>其他</h1>
                            <ul>
                                <li>该网站建站时间短，我们几个都是新手，如果设计方面存在问题，见谅！</li>
                                <li>如果您还有什么高见或者设计灵感，欢迎联系我们！如果对我们的网站有利，我们将不胜感激！</li>
                                <li>QQ邮箱：2012190160@qq.com</li>
                                <li>网易邮箱：dayangcome@163.com</li>
                            </ul>
                        </article>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  export default{
    name: 'Updatelog',
    mounted(){
        window.scrollTo(0, 0);
    }
}
    
</script>
    
<style scoped>
       *{
            margin: 0;
            padding: 0;
        }
    .about-us {
        min-height: 700px;
        background-image: url('../assets/images/bg-body.jpg');
        background-position: center center;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .topbar {
            height: 64px;
            line-height: 64px;
            background-color: rgba(74, 74, 74, .5);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            /* 网格布局 */
            display: grid;
            grid-template-columns: repeat(11, 1fr);
        }
        .topbar .return-home {
            grid-column: 1;
        }
        .topbar .top-title {
            font-size: 24px;
            font-weight: bolder;
            color: rgb(223, 223, 223);
            text-align: center;
            grid-column: 6;
        }
        #description-btn {
            grid-column: 8;
        }
        #period-btn {
            grid-column: 9;
        }
        #member-btn {
            grid-column: 10;
        }
        #top-btn {
            grid-column: 11;
        }

        .version{
            color: rgb(106, 14, 14);
            margin-left: 5px;
        }
        
        .topbar a, #period-btn, #member-btn, #description-btn{
            text-decoration: none;
            color: rgb(223, 223, 223);
            text-align: center;
            font-size: 16px;
            font-weight: bolder;
        }
        .topbar a:hover, #period-btn:hover, #member-btn:hover, #description-btn:hover {
            cursor: pointer;
            color: rgb(197, 96, 40);
        }
        .main-content .container {
            width: 90%;
            max-width: 952px;
            margin: 0 auto;
        }
        .main-content .spacer {
            height: 64px;
            text-align: center;
            line-height: 64px;
            color: rgb(200, 200, 200, .4);
        }
        .main-content .card {
            margin: 30px 0;
            background-color: rgba(200, 200, 200, .6);
            border-radius: 10px;
            box-shadow: 2px 2px 10px black;
            transition: .2s linear all;
            padding: 30px;
            padding-top: 20px;
        }

        #members .card{
            margin: 39px 0;
        }
        .main-content .card:hover {
            box-shadow: 2px 2px 20px black;
            background-color: rgba(200, 200, 200, .7);
        }
        .main-content .card article {
            font-size: 14px;
        }
        .main-content .card article h1 {
            font-size: 16px;
            font-weight: bolder;
            line-height: 2.5em;
        }
        .main-content .card article li {
            /* margin: .5em 0; */
            line-height: 2em;
        }
        .main-content .card article li:hover {
            font-weight: bold;
            /* color: rgba(178, 71, 25, .9); */
        }
        ul li{
            list-style: circle;
        }
        .main-content .card article ul {
            list-style-type: circle;
            margin-left: 1em;
        }
        .main-content .card article .feature-list a{
            font-weight: bold;
        }
        .main-content .card article li a {
            text-decoration: none;
            color: black;
            font-size: 14px;
        }
        .main-content .card article li a:hover {
            cursor: pointer;
            font-weight: bold;
            color: rgb(197, 96, 40);
        }
</style>
