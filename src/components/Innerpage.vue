<template>
    <div>
      <Mynav/>
      <router-view></router-view>
    </div>
</template>

<script>
  import Mynav from '../views/Mynav.vue'
  import Community from '../views/community.vue'
  import Mygpt from '../views/mygpt.vue'
  export default{
    name: 'Innerpage',
    components: {
      Mynav,Community,Mygpt
    }
  }
</script>

<style scoped>

</style>
