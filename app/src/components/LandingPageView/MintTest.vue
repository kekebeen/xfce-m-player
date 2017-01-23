<style scoped>
  
</style>



<template>
  <div class="nestp">
    badge
  </div>
</template>

<script>
  import { Badge } from 'mint-ui';

  export default {

    data() {
      return {
        title: 'Naslov',
        body: 'Body'
      }
    },
    
    components: {
      'badge': Badge
    }
  }
</script>