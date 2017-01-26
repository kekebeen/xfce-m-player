<style lang="scss" scoped>
  .search{
    display: flex;
    flex-direction: row;

    .search__input{
      flex: 1;
      border: 0;
      border-bottom: 1px solid #999;
      padding: 1.5em;
    }
  }
</style>

<template>
  <div class="search">
    <input class="search__input" type="search" placeholder="Search by song name" />
  </div>
</template>

<script>
  export default {
    created () {
      console.log("Search component initialized");
    }
  }
</script>

