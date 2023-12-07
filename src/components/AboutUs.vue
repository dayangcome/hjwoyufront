<template>
    <div class="about-us" id="about-us">
        <div class="welcome" id="welcome">
        <div class="welbar">
            <span class="wel-title" id="wel-title" @click="showwelcome">About Us</span>
        </div>
        </div>
        <!-- 顶部导航栏 -->
        <div class="topbar" id="topbar">

            <router-link to="/"><span class="return-home">HOME</span></router-link>

            <span class="top-title" id = 'top-title' @click="toWelcome">😀</span>
            <span id="description-btn" @click="showFeature">Feature</span>
            <span id="period-btn" @click="showPeriod">Time-Line</span>
            <span id="member-btn" @click="showcontact">Contact</span>
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
                            <h1>Genesis~2017</h1>
                            <p>“很久很久以前，我们遥远的祖先就对旅行深深着迷。生活在湖边的人，生活在河边的人，生活在深山里的人，都去旅行。旅人们聚集在一起，堆砌石头，建起巨大的村庄，但仍然渴望着远方的土地，渴望走得尽可能快、尽可能远。</p>
                            <p>“其愿无涯，而人生有涯。</p>
                            <p>“所以从前的人饲养了许多能够飞速奔跑的动物。借助比光还快的龙之力，在遥远的天地间刹那穿梭。不仅是龙，还有在天空中飞翔的巨鹰、在水里游泳的大龟、飞天的麒麟都被他们驯服，一起前往远方。</p>
                            <p>“然而，那些放弃天赐之所、去往异邦的人，终于触怒了神明。驯养的动物受到诅咒，一下子变老了。龙、巨鹰、大龟、麒麟，都成了比人类行走还慢的动物。</p>
                            <p>“人们害怕再度触怒神明，于是选择在出生之地生活，在出生之地死亡。他们毁去石柱，巨大的村庄也归于尘土。</p>
                            <p>“但那时.我们的爷爷的爷爷的爷爷的九百代之前的爷爷，选择了不停留。他希望有一天神明原谅人类， 解开龙的诅咒。他想和慢慢地爬行前进的龙一起生活。于是，龙的路，便成了我们的路。</p>
                            <p>“我们变成了龙的守护人。</p>
                            <p>“当终于有一天，神明宽恕我们，龙再度拥有比光更快的速度时，我们将和龙一起，抵达祝福之地。”</p>
                        </article>
                    </div>
                    <div class="card period2">
                        <article>
                            <h1>2017~2020</h1>
                            <p>白鳞龙快要死了。</p>
                            <p>冬末时节，神铁草开始散落红铜花的时候，这样的流言开始在族人中流传。少年先是不信，也不愿相信。大人们和瞳占师在“墙”的背后窃窃私语，那确实有些不同寻常，但即便是偷听了谈话的朋友们气喘吁吁地跑来告诉少年这个传闻，他也无法接受。</p>
                            <p>不过，他心中因此隐隐作痛。</p>
                            <p>因为对少年来说，白鳞龙是无可替代的朋友。</p>
                            <p>当然，龙不会说话，也不知道它是如何看待少年的。</p>
                            <p>但对少年来说，龙任由他爬到背上晒太阳，钻到肚子下面乘凉。只有在龙的身边，少年才会感到不可动摇的安稳，比年幼时被疾病夺去生命的父亲还令他安心。</p>
                            <p>一起爬上龙背奔跑的弟弟，也因为重感冒去世了。在少年还不会用弓箭猎杀壁蛇的小时候，龙就将巨大的、不胖不瘦的躯体横在草原上，在岁月的流逝中一点点向西爬行。</p>
                            <p>与白色的龙相比，从龙背上俯瞰的褐色帐篷总是在风中摇晃，仿佛遇到暴风便有飞上天空的危险。少年从几十顶帐篷里找到自己的家所在的那一顶，它看起来更加不牢靠。自己居然就生活在那里面，真是不可思议。</p>
                            <p>每当夏至祭典来临时，长老都会坐在龙背上讲述故事，虽然年轻人早已听够了，但少年总像是第一次听到似的，满眼憧憬。</p>
                            <p><br></p>
                            <p>少年在年幼时遇到的那个与画像很相似的少女，是个旅人。</p>
                            <p>在草原中间，距离龙的鼻尖非常近的地方，矗立着“永恒之墙”。那是块晶莹剔透的奇异石头，雕刻着美丽的图案，像雪一样洁白。据说，那是从前的神明在令龙、巨鹰、大龟、麒麟衰老时，为了戒谕人类，将那精美的墙壁立在了此处。所以，没有人敢独自靠近那面墙。</p>
                            <p>少年发现那个少女，是在草叶垂下朝露的清晨，他去捡拾神铁的时候。</p>
                            <p>那个少女用了好几根粗大的树枝当作梯子靠在“永恒之墙”上，爬到高处，正在用手抚摸墙上雕刻的图案。</p>
                            <p>她的嘴角浮现出神秘的笑容，说道:“我来告诉你， 那堵墙上写了什么。</p>
                            <p>当人们开始悄声谈论龙之死的时候，少年回想起的便是她说过的话。那条“龙”不是生物。</p>
                            <p>大人们说，正因为龙濒临死亡，所以速度才会变慢，接近于零。但如果她说的没错，“龙” 之所以几乎不动，不是因为即将死亡，而是经过了漫长的岁月，终于即将抵达终点了。</p>


                        </article>
                    </div>
                    <div class="card period3">
                        <article>
                            <h1>2020~Today</h1>
                            <p>龙死之时，灾祸将至。神所封印的所有古老罪恶都将苏醒，草木将被拔起，大地将被掏空，黑暗的帷幕将会吞噬所有生命。瞳占师宣称自己从幻化出可怕光芒的龙之瞳中接收到神谕的那个晚上，众人在长长的帐篷里展开了漫长的讨论。直到天色将明时，族长才做了决定。</p>
                            <p>“守护者的任务结束了。我们必须向龙告别，开辟自己的道路。”</p>
                            <p>神铁敲响，在晨曦中，他们开始准备离开。叠好帐篷，收拾好皮革餐具，把粮食装进布袋，催促年幼的孩子。</p>
                            <p></p>
                            <p>为了尽早转移，不，是为了尽快逃亡。</p>
                            <p>他们也相信龙一直在守 护着他们，不愿意目睹龙的末日。要去的地方已经选好了。他们将会沿着和龙-起走来的路往回走。</p>
                            <p>向东方。</p>
                            <p>为了尽可能远离龙即将死亡的这个地方。</p>
                            <p>族人中也有人怀疑瞳占师的神谕和族长的决定。然而怀疑的声音骤然断绝，因为天空突然阴云密布，雷电交加， 仿佛证明了灾祸在即似的。</p>
                            <p>一直向西的他们并不知道， 在暴风雨的天气中向东出发是愚猛的行为。倾盆大雨浇透了他们的身体，他们念咒般地呻吟着，不停打着寒战。</p>
                            <p>龙死之时，灾祸将至。</p>
                            <p>必须逃，向东逃。他们在暴风雨中行军。</p>
                            <p>没有人发现，在这一群人中，有一个人悄悄脱离了队伍。失踪的是那个少年。憧憬画中的少女，又被通晓古代语言的少女赋予了禁忌之识的少年。</p>
                            <p>在他心中，牢记着与逃亡者心中截然不同的真相。</p>
                            <p>古代人制造的工具，经过了漫长的时间，终于要抵达目的地了。里面乘坐的人，将要结束极其漫长的旅程，抵达终点。必须有人见证那一幕。</p>
                            <p>少年的脚步轻盈，感觉自己即将成为神话传说中的英雄。然而不久之后，四周涌起了浓雾。蓦然回首，少年发现周围都被牛乳般雪白的雾气之墙挡住了，本来在远处都能清晰可辨的龙，也失去了身影。</p>
                            <p>浓雾之中，少年摸索着继续前进。</p>
                        </article>
                    </div>
                    <div class="card period4">
                        <article>
                            <h1>Today~Tomorrow</h1>
                            <p>引导雾中少年的是一束光。 少年在视野角落里看到某个发光的东西，他一步步走过去。</p>
                            <p>阳光照亮了“永恒之墙”的顶部。</p>
                            <p>看到墙壁，少年的心雀跃起来。龙就在旁边。少年放低身子，摸索着脚下。他很快抵达了神铁消失的道路，找到了那个地方。是龙尾。圆润的外形比其他各处更有生物的感觉。</p>
                            <p>他一幅一幅地数过去，终于找到了从小就憧憬的那一副“画”。然而，少女不在画里。</p>
                            <p>从遥远的过去开始便一直在那里的，褐色眼眸的少女，消失了。里面还有几个变小的人，但唯有她不见了，只剩下空空的座位。</p>
                            <p>少年茫然站在“画”前，心潮翻滚。令人愉悦的轻快音乐在雾中响起。即使“龙”不是生物，如果有人说那就是龙临终的歌声，少年觉得自己也会相信的。因为他正感受着仿佛失去了半边身子的痛苦。</p>
                            <p>少年不愿相信自己失去了什么，在她消失的那幅画旁徘徊许久，随后发现迷雾不知何时已经散去。回头去看，“永恒之墙”也在附近，它的威严在历经风雨之后依然没变。上面的图案一如往昔，少年再次为它的美丽痴迷。也正因为如此，接下来发生的变化，让少年大吃一惊。</p>
                            <p>墙上描绘的大量图案，宛如生物-般从墙上滑落。封印在玻璃中的透明纹理和图案——被那位少女称为文字的东西，互相缠绕、吻合，四处弹开、滚动、旋转、翻转、狂跳，不断膨胀，直至炸裂。文字们仿佛股洪流般倾泻而下， 世界沐浴在耀眼的光芒中。</p>
                            <p>在光芒中闭起双眼的少年，胆战心惊地慢慢睁开眼睛，却发现延伸到地平线尽头的草原，2700年后的绿野，已然不复存在了。</p>
                            <p>伴随着轰鸣声，大地颤抖起来。在“水恒之墙”的下方，无数绿色四的定如明泉服喷酒而出。它们在四处齐发车，转眼间便长出了树干，很快又长出枝叶，彼此交会，遮蔽了天空，果实在枝叶间垂下，一刻不停地展现出清晰的轮廓。嫩叶尖端透过的阳光变成无数吊灯，那灯光映出真实的景象。枝头上膨大的果实继续鼓胀，化作扬声器，化作站牌，化作电子显示牌。几十棵大树化作混凝土支柱，撑起了房顶。</p>
                            <p>一只鸟儿从一根柱子的阴影处飞起。那是金色的风凰，印在毕业证书上的永恒之鸟。它整理自己的羽毛，振翅高飞，羽毛中生出长椅，生出电梯，生出车站小店。凤凰飞向远方的天空。少年站在站台上，听着令人怀念的旋律。那不是龙之歌，而是抵达终点时响起的、仿佛催促着灵魂的音乐。站台上挤满了人，几乎能感觉到他们身上散发的热气。有老人，有年轻人，有孩子。尽管岁月流逝，但你，你们，都没有忘记迷途的旅人。</p>
                            <p>奇迹。在这只能用奇迹形容的景象前，少年震惊得无法动弹。而在他眼角的余光里，白色巨龙身上仿佛剥落了一枚鳞片似的，带着颤抖般的叹息，“希望号” 的门开了。</p>
                            <p>“我回来了，傻逼！阿里云三百元券！”</p>
                        </article>
                    </div>
                </div>
                <!-- 成员/联系 -->
                <div class="member-box"  id="members">
                    <div class="spacer"></div>
                    <div class="card contact1">
                        <article>
                            <h1>Bilibili</h1>
                            <ul>
                                <li><a href="https://space.bilibili.com/667041249" target="_blank">救一人为侠</a></li>
                                <li><a href="https://space.bilibili.com/353689349" target="_blank">黄牙某一分牙</a></li>
                            </ul>
                        </article>
                    </div>
                    <div class="card contact2">
                        <article>
                            <h1>新浪微博</h1>
                            <ul>
                                <li><a href="https://weibo.com/u/7505404200" target="_blank">碗里唱风</a></li>
                            </ul>
                        </article>
                    </div>
                    <div class="card contact3">
                        <article>
                            <h1>豆瓣</h1>
                            <ul>
                                <li><a href="https://www.douban.com/people/252758459" target="_blank">花都</a></li>
                            </ul>
                        </article>
                    </div>
                    <div class="card contact4">
                        <article>
                            <h1>Github</h1>
                            <ul>
                                <li><a href="https://github.com/FENGFFFF" target="_blank">FENGFFFF</a></li>
                            </ul>
                        </article>
                    </div>
                </div>
                <!-- 功能 -->
                <div class="description-box" id="description">
                    <div class="spacer"></div>
                    <div class="card description1">
                        <article>
                            <h1>永恒之墙</h1>
                            <p>欢迎来到怀瑾握瑜，一个汇聚灵感、分享知识的网络家园。以焦作一中之歌命名，怀瑾握瑜旨在成为你学习、交流、分享的全新平台。无论是云盘分享、社区交流、答案之书，还是其他实用工具，我们致力于为你打造一个丰富多彩的在线学习和生活社区。</p>
                            <p>缘起于，阿里云三百元券。</p>
                        </article>
                    </div>
                    <div class="card description2">
                        <article>
                            <h1>功能主治</h1>
                            <ul class="feature-list">
                                <li>
                                    <a href="#">云盘分享：共享收藏的乐园</a>
                                    <p>通过云盘分享，轻松上传和分享文件，让你的学习资源得以快速传播。与小伙伴们一起建立起属于你们的云端资料库。</p>
                                </li>
                                <li>
                                    <a href="#">社区交流：广播式互动</a>
                                    <p>发起讨论、分享动态，让想法在怀瑾握瑜中迸发。点赞、点踩、评论，与他人互动，打造属于你的社交空间。</p>
                                </li>
                                <li>
                                    <a href="#">答案之书：解答一切</a>
                                    <p>你想知道你的前世今生吗？你想知道你的未来命运吗？问，都可以问，通义千问，高科技算命，解答世间所有问题。</p>
                                </li>
                                <li>
                                    <a href="#">其他工具：在线百宝箱</a>
                                    <p>探索怀瑾握瑜的工具箱，发现各种实用的在线工具，满足你学习和生活的多样需求。从学术辅助到生活助手，应有尽有。</p>
                                </li>
                            </ul>
                        </article>
                    </div>
                    <div class="card description3">
                        <article>
                            <h1>更新</h1>
                            <p>
                                客观里边请，面马上就好。
                            </p>
                        </article>
                    </div>
                    <div class="card description4">
                        <article>
                            <h1>构想</h1>
                            <p>
                                朋友们，今天晚上吃什么？
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  export default{
    name: 'AboutUs',
    mounted(){
      // 欢迎界面
        let topbar = document.getElementById('topbar');
        let periodBox = document.getElementById('period');
        let memberBox = document.getElementById('members');
        let descriptionBox = document.getElementById('description');
        let titleTop = document.getElementById('top-title');

        topbar.style.backgroundColor = 'rgba(74, 74, 74, .0)';
        titleTop.style.visibility = 'hidden';
        periodBox.style.display = 'none';
        memberBox.style.display = 'none';
        descriptionBox.style.display = 'none';
    },
    methods:{
        toContent () {
            let welcome = document.getElementById('welcome');
            let topbar = document.getElementById('topbar');
            let titleTop = document.getElementById('top-title');
            topbar.style.backgroundColor = 'rgba(74, 74, 74, .5)';
            if(titleTop.style.visibility === 'hidden') {titleTop.style.visibility = 'visible'};
            if(welcome.style.display !== 'none') {welcome.style.display = 'none'};
        },
        toWelcome () {
            let welcome = document.getElementById('welcome');
            let topbar = document.getElementById('topbar');
            
            let periodBox = document.getElementById('period');
            let memberBox = document.getElementById('members');
            let descriptionBox = document.getElementById('description');
            let titleTop = document.getElementById('top-title');
            topbar.style.backgroundColor = 'rgba(74, 74, 74, .0)';
            titleTop.style.visibility = 'hidden';
            periodBox.style.display = 'none';
            memberBox.style.display = 'none';
            descriptionBox.style.display = 'none';
            welcome.style.display = 'block';
        },
        showPeriod(){
            let periodBox = document.getElementById('period');
            let memberBox = document.getElementById('members');
            let descriptionBox = document.getElementById('description');
            this.toContent();
            if(memberBox.style.display !== 'none') {memberBox.style.display = 'none'};
            if(descriptionBox.style.display !== 'none') {descriptionBox.style.display = 'none'};
            periodBox.style.display = 'block';
        },
        showcontact(){
            let periodBox = document.getElementById('period');
            let memberBox = document.getElementById('members');
            let descriptionBox = document.getElementById('description');
            this.toContent();
            if(periodBox.style.display !== 'none') {periodBox.style.display = 'none'};
            if(descriptionBox.style.display !== 'none') {descriptionBox.style.display = 'none'};
            memberBox.style.display = 'block';
        },
        showFeature(){
            let periodBox = document.getElementById('period');
            let memberBox = document.getElementById('members');
            let descriptionBox = document.getElementById('description');
            this.toContent();
            if(memberBox.style.display !== 'none') {memberBox.style.display = 'none'};
            if(periodBox.style.display !== 'none') {periodBox.style.display = 'none'};
            descriptionBox.style.display = 'block';
        },
        showwelcome(){            
            let periodBox = document.getElementById('period');
            let memberBox = document.getElementById('members');
            let descriptionBox = document.getElementById('description');
            this.toContent();
            if(memberBox.style.display !== 'none') {memberBox.style.display = 'none'};
            if(periodBox.style.display !== 'none') {periodBox.style.display = 'none'};
            descriptionBox.style.display = 'block';
        }
    }
  }
</script>
    
<style scoped>
       *{
            margin: 0;
            padding: 0;
        }
    .about-us {
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
            color: rgb(200, 200, 200);
            text-align: center;
            grid-column: 6;
        }
        .topbar .top-title:hover {
            cursor: pointer;
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
        
        .topbar a, #period-btn, #member-btn, #description-btn{
            text-decoration: none;
            color: rgb(200, 200, 200);
            text-align: center;
            font-size: 16px;
            font-weight: bolder;
        }
        .topbar a:hover, #period-btn:hover, #member-btn:hover, #description-btn:hover {
            cursor: pointer;
            color: rgb(197, 96, 40);
        }

        .welcome {
            width: 100vw;
            height: 100vh;
            background-color: rgba(74, 74, 74, .6);
            position: relative;
        }

        .welbar {
            width: 90%;
            max-width: 952px;
            height: 1em;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            font-size: 80px;
            font-weight: bolder;
            text-align: center;
        }
        .wel-title {
            color: rgba(200, 200, 200, .6);
        }
        .wel-title:hover {
            color: rgb(197, 96, 40);
            cursor: pointer;
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

        #members{
            width: 100%;
        }
        ul, li{
            list-style: circle;
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
        .main-content .card article p {
            /* margin: .5em 0; */
            line-height: 2em;
            text-indent: 2em
        }
        .main-content .card article p:hover {
            font-weight: bold;
            /* color: rgba(178, 71, 25, .9); */
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
