import Vue from 'vue'
import VueRouter from 'vue-router'
import InnerpageVue from '../components/Innerpage.vue'
import MainpageVue from '../components/Mainpage.vue'
import community from '../views/community.vue'
import mygpt from '../views/mygpt.vue'
import game from '../views/game.vue'
import food from '../views/food.vue'
import movie from '../views/movie.vue'
import knowledge from '../views/knowledge.vue'
import peach from '../views/peach.vue'
import chat from '../views/chat.vue'
import AboutUs from '../components/AboutUs.vue'
import building from '../views/building.vue'
import tools from '../views/tools.vue'
import tools1 from '../views/music-tool.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/',
      component:MainpageVue
    },
    {
      path:'/aboutus',
      component:AboutUs
    },
    {
      path:'/inner',
      component:InnerpageVue,
      children:[
        {
          path:'/inner/community',
          component:community
        },
        {
          path:'/inner/mygpt',
          component:mygpt
        },
        {
          path:'/inner/game',
          component:game
        },
        {
          path:'/inner/food',
          component:food
        },
        {
          path:'/inner/movie',
          component:movie
        },
        {
          path:'/inner/knowledge',
          component:knowledge
        },
        {
          path:'/inner/peach',
          component:peach
        },
        {
          path:'/inner/chat',
          component:chat
        },
        {
          path:'/inner/pan',
          component:building
        },
        {
          path:'/inner/tools',
          component:tools
        },
        {
          path:'/inner/tools1',
          component:tools1
        },
      ]
    }
  ]
})
