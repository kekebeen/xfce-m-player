<style lang="scss" scoped>
  .wrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>

<template>
  <div class="wrapper">
    <Search />
    <SongsList />
    <vue-player :music="{
      title: 'Preparation',
      author: 'Hans Zimmer/Richard Harvey',
      url: 'http://devtest.qiniudn.com/Preparation.mp3',
      pic: 'http://devtest.qiniudn.com/Preparation.jpg',
      lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
    }" theme='3F51B5'></vue-player>
  </div>
</template>

<script>
  import Search from './HomeView/Search.vue'
  import VueAplayer from 'vue-aplayer'
  import SongsList from './HomeView/SongsList.vue'

  export default {
    components:{
      Search,
      'vue-player': VueAplayer,
      SongsList
    },
    name: 'Home'
  }
</script>