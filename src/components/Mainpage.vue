<template>
  <div id="outerbox">
    <div class="bubbles">
      <span style="--i:11;"></span>
      <span style="--i:12;"></span>
      <span style="--i:24;"></span>
      <span style="--i:10;"></span>
      <span style="--i:14;"></span>
      <span style="--i:23;"></span>
      <span style="--i:18;"></span>
      <span style="--i:16;"></span>
      <span style="--i:19;"></span>
      <span style="--i:20;"></span>
      <span style="--i:22;"></span>
      <span style="--i:25;"></span>
      <span style="--i:18;"></span>
      <span style="--i:21;"></span>
      <span style="--i:15;"></span>
      <span style="--i:26;"></span>
      <span style="--i:17;"></span>
      <span style="--i:13;"></span>
      <span style="--i:28;"></span>
      <span style="--i:24;"></span>
      <span style="--i:20;"></span>
      <span style="--i:11;"></span>
      <span style="--i:12;"></span>
      <span style="--i:24;"></span>
      <span style="--i:10;"></span>
      <span style="--i:14;"></span>
      <span style="--i:23;"></span>
      <span style="--i:18;"></span>
      <span style="--i:16;"></span>
      <span style="--i:19;"></span>
      <span style="--i:20;"></span>
      <span style="--i:22;"></span>
      <span style="--i:25;"></span>
      <span style="--i:18;"></span>
      <span style="--i:21;"></span>
      <span style="--i:15;"></span>
      <span style="--i:26;"></span>
      <span style="--i:17;"></span>
      <span style="--i:13;"></span>
      <span style="--i:28;"></span>
      <span style="--i:24;"></span>
      <span style="--i:20;"></span>
    </div>
    <section id="see1" class="panel se1" data-section-name="se1">
    	<div id="first_screen">
            <div class="container">
              <nav>
                <ul>
                  <li @click="main">网站首页</li>
                  <router-link to="/inner/community"><li>社区交流</li></router-link>
                  <router-link to="/inner/mygpt"><li>答案之书</li></router-link>
                  <router-link to="/inner/pan"><li>云盘分享</li></router-link>
                  <router-link to="/inner/tools"><li>其他工具</li></router-link>
                  <router-link to="/aboutus"><li>关于我们</li></router-link>
                </ul>
              </nav>
            </div>
    		<div id="ife_logo">

    		</div>
    		<div id="svg_logo" style="text-align: center;">
                <img src="../assets/images/avatar.jpg" style="height: 150px;width: 150px;border-radius: 50%;" alt="">
    			<div style="color: white;font-size: 60px;margin-top: 40px;"><h1>怀瑾握瑜</h1></div>
            </div>
    		<p id="slogan" style="font-size: 36px;">一首来自焦作一中的歌</p>
    		<div id="scroll_down">

    		</div>
    		<div id="arow_down">
    			<i class="xiangxia" @click="backButtom()">&#xe682;</i>
    		</div>
    	</div>
    	</section>

    	<section id="see2" class="panel se2" data-section-name="se2" style="overflow: hidden;">
        <div class="bubbles">
          <span style="--i:11;"></span>
          <span style="--i:12;"></span>
          <span style="--i:13;"></span>
          <span style="--i:20;"></span>
          <span style="--i:22;"></span>
          <span style="--i:25;"></span>
          <span style="--i:18;"></span>
          <span style="--i:21;"></span>
          <span style="--i:15;"></span>
          <span style="--i:26;"></span>
          <span style="--i:24;"></span>
          <span style="--i:10;"></span>
          <span style="--i:14;"></span>
          <span style="--i:19;"></span>
          <span style="--i:23;"></span>
          <span style="--i:18;"></span>
          <span style="--i:16;"></span>
          <span style="--i:19;"></span>
          <span style="--i:20;"></span>
          <span style="--i:22;"></span>
          <span style="--i:25;"></span>
          <span style="--i:18;"></span>
          <span style="--i:21;"></span>
          <span style="--i:23;"></span>
          <span style="--i:18;"></span>
          <span style="--i:16;"></span>
         <span style="--i:10;"></span>
         <span style="--i:14;"></span>
         <span style="--i:28;"></span>
         <span style="--i:24;"></span>
         <span style="--i:17;"></span>
         <span style="--i:26;"></span>
         <span style="--i:24;"></span>
         <span style="--i:20;"></span>
         <span style="--i:11;"></span>
         <span style="--i:12;"></span>
         <span style="--i:17;"></span>
         <span style="--i:13;"></span>
         <span style="--i:28;"></span>
          <span style="--i:15;"></span>
          <span style="--i:24;"></span>
          <span style="--i:20;"></span>
        </div>
    		<div id="container" style="display: flex;flex-wrap: wrap;justify-content: center;">

        <div class="card">
            <div class="face face1">
                <div class="content" style="text-align: center;">
                    <img src="../assets/images/2.jpg" alt="">
                    <h3 style="margin: 15px 0;">不留遗憾泰宁阴</h3>
                    <h4 style="color: white;margin: 5px 0;">河南 郑州 </h4>
                    <h4 style="color: white;margin: 5px 0;">大四</h4>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>
                        学校：郑州大学
                    </p>
                    <p style="margin: 10px 0;">
                        专业：软件工程
                    </p>
                    <p>
                        介绍：快乐编程，快乐科研！<span class="mycolor">化名大洋，怀瑾握瑜网站建站者。</span> 
                    </p>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="face face1">
                <div class="content" style="text-align: center;">
                    <img src="../assets/images/1.jpg" alt="">
                    <h3 style="margin: 15px 0;">暂且内蒙古</h3>
                    <h4 style="color: white;margin: 5px 0;">陕西 西安 </h4>
                    <h4 style="color: white;margin: 5px 0;">大四</h4>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>
                        学校：西北工业大学
                    </p>
                    <p style="margin: 10px 0;">
                        专业：飞行器动力工程
                    </p>
                    <p>
                        介绍：We have to be very strong， if we want to do something very wrong. <span class="mycolor">怀瑾握瑜寝室长。</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="face face1">
                <div class="content" style="text-align: center;">
                    <img src="../assets/images/3.jpg" alt="">
                    <h3 style="margin: 15px 0;">家电下乡 布局2024</h3>
                    <h4 style="color: white;margin: 5px 0;">辽宁 大连 </h4>
                    <h4 style="color: white;margin: 5px 0;">大四</h4>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>
                        学校：大连理工大学
                    </p>
                    <p style="margin: 10px 0;">
                        专业：计算机科学与技术
                    </p>
                    <p>
                        介绍：脱虚向实。<span class="mycolor">怀瑾握瑜「关于我们」页面设计者。</span>
                    </p>
                </div>
            </div>
        </div>

        

        <div class="card">
            <div class="face face1">
                <div class="content" style="text-align: center;">
                    <img src="../assets/images/5.jpg" alt="">
                    <h3 style="margin: 15px 0;">小鸡屠宰师</h3>
                    <h4 style="color: white;margin: 5px 0;">湖北 武汉 </h4>
                    <h4 style="color: white;margin: 5px 0;">大四</h4>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>
                        学校：武汉大学
                    </p>
                    <p style="margin: 10px 0;">
                        专业：生物科学
                    </p>
                    <p>
                        介绍：I  don't   know  young  frirolous  ,  l  only  know  the  winner. <span class="mycolor">怀瑾握瑜曾经的寝室长。</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="face face1">
                <div class="content" style="text-align: center;">
                    <img src="../assets/images/4.jpg" alt="">
                    <h3 style="margin: 15px 0;">我许文峰做回自己</h3>
                    <h4 style="color: white;margin: 5px 0;">天津 </h4>
                    <h4 style="color: white;margin: 5px 0;">大四</h4>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>
                        学校：天津大学
                    </p>
                    <p style="margin: 10px 0;">
                        专业：电气工程
                    </p>
                    <p>
                        介绍：一切都会过去。
                    </p>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="face face1">
                <div class="content" style="text-align: center;">
                    <img src="../assets/images/6.jpg" alt="">
                    <h3 style="margin: 15px 0;">One&Only</h3>
                    <h4 style="color: white;margin: 5px 0;">河南 郑州 </h4>
                    <h4 style="color: white;margin: 5px 0;">大四</h4>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>
                        学校：郑州大学
                    </p>
                    <p style="margin: 10px 0;">
                        专业：机械工程
                    </p>
                    <p>
                        介绍：晚安，欧亚斯密，嘶哑～
                    </p>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="face face1">
                <div class="content" style="text-align: center;">
                    <img src="../assets/images/7.jpg" alt="">
                    <h3 style="margin: 15px 0;">col.el</h3>
                    <h4 style="color: white;margin: 5px 0;">北京</h4>
                    <h4 style="color: white;margin: 5px 0;">大四</h4>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>
                        学校：中国政法大学
                    </p>
                    <p style="margin: 10px 0;">
                        专业：法学
                    </p>
                    <p>
                        介绍：You were bigger than the whole sky, you were more than just a short time.
                    </p>
                </div>
            </div>
        </div>
        </div>
        <div id="arow_down" style="position: relative;top:18px">
        	<i class="xiangxia" @click="backButtom2()">&#xe682;</i>
        </div>
    	</section>

    	<section id="see3" class="panel se3" data-section-name="se3" style="overflow: hidden;">
        <div class="bubbles">
          <span style="--i:11;"></span>
          <span style="--i:12;"></span>
          <span style="--i:24;"></span>
          <span style="--i:10;"></span>
          <span style="--i:14;"></span>
          <span style="--i:23;"></span>
          <span style="--i:18;"></span>
          <span style="--i:16;"></span>
          <span style="--i:19;"></span>
          <span style="--i:20;"></span>
          <span style="--i:22;"></span>
          <span style="--i:25;"></span>
          <span style="--i:18;"></span>
          <span style="--i:21;"></span>
          <span style="--i:15;"></span>
          <span style="--i:26;"></span>
          <span style="--i:17;"></span>
          <span style="--i:13;"></span>
          <span style="--i:28;"></span>
          <span style="--i:24;"></span>
          <span style="--i:20;"></span>
          <span style="--i:11;"></span>
          <span style="--i:12;"></span>
          <span style="--i:24;"></span>
          <span style="--i:10;"></span>
          <span style="--i:14;"></span>
          <span style="--i:23;"></span>
          <span style="--i:18;"></span>
          <span style="--i:16;"></span>
          <span style="--i:19;"></span>
          <span style="--i:20;"></span>
          <span style="--i:22;"></span>
          <span style="--i:25;"></span>
          <span style="--i:18;"></span>
          <span style="--i:21;"></span>
          <span style="--i:15;"></span>
          <span style="--i:26;"></span>
          <span style="--i:17;"></span>
          <span style="--i:13;"></span>
          <span style="--i:28;"></span>
          <span style="--i:24;"></span>
          <span style="--i:20;"></span>
        </div>
          <div style="height: 285px;"></div>
          <h1 style="font-size: 70px;color: white;text-align: center;margin: 100px 0;position: relative;bottom: 160px;">感谢您的访问!</h1>
          
        <div class="section footer">
            <p>
                &copy; 2024 By <a href="https://github.com/dayangcome">大洋</a>
                &nbsp;
                V 1.1
                <router-link to="/updatelog">更新日志</router-link>
            </p>
        </div>
    	</section>
  </div>
</template>

<script>
export default {
  name: 'Mainpage',

  data() {

      return {
      };

    },

    methods: {
      backButtom(){
        document.querySelector("#see2").scrollIntoView({
          behavior: "smooth", block: "end", inline: "nearest"
        })
      },
      backButtom2(){
        document.querySelector("#see3").scrollIntoView({
          behavior: "smooth", block: "start", inline: "nearest"
        })
      },
      main(){

            this.$notify({
                title: '提示',
                dangerouslyUseHTMLString: true,
                message: '<strong style="font-size: 16px;color:rgba(0, 127, 127, 0.72)"> 客官，您已经在网站首页了哦！ </strong>',
            });
      }

    },

    mounted() {


    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("../assets/css/main.css");
  @import url("../assets/css/style.css");
  @import url("../assets/css/members.css");
  @import url("../assets/css/footer.css");
  @import url("../assets/css/reset.css");
  @import url("../assets/css/firstscreen.css");

  #outerbox{
    background-color: #000;
  }
  .bubbles{
    position: relative;
    display: flex;
  }
  .bubbles span{
    position: relative;
    width: 30px;
    height: 30px;
    background: #4fc3dc;
    margin:0 4px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #4fc3dc44,
    0 0 30px #4fc3dc,
    0 0 50px #4fc3dc;
    animation: animate 15s linear infinite;
    animation-duration: calc(125s / var(--i));
  }

  .mycolor{
    font-weight: 800;
  }
  .bubbles span:nth-child(even){
    background: #ff2d75;
    box-shadow: 0 0 0 10px #ff2d7544,
    0 0 30px #ff2d75,
    0 0 50px #ff2d75;
  }
  @keyframes animate {
    0%{
      transform: translateY(100vh) scale(0);
    }
    100%{
      transform: translateY(-10vh) scale(1);
    }
  }



 #container{
     position: relative;
     display: flex;
     justify-content: space-between;
 }

 #container .card{
     position: relative;
     width: 250px;
     height: 250px;
     margin: 30px;
 }

 #container .card .face{
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     transition: 0.5s;
 }

 #container .card .face.face1{
     background: #333;
     display: flex;
     justify-content: center;
     align-items: center;
     z-index: 1;
     transform-origin: bottom;
 }

 #container .card .face.face1 img{
     max-width: 100px;
     border-radius: 50%;
 }

 #container .card .face.face1 h3{
     margin: 10px 0 0;
     color: #fff;
     text-align: center;
     font-size: 1.5em;
 }

 #container .card:hover .face.face1{
     transform: translateY(-100%) rotateX(90deg);
     background: #ff0057;
 }

 #container .card .face.face2{
     background: #fff;
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 20px;
     transform-origin: top;
     transform: translateY(100%) rotateX(90deg);
 }

 #container .card:hover .face.face2{
     transform: translateY(0%) rotateX(0deg);
 }

</style>
