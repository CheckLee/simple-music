<template>
  <div class="toast">
    <p class="toast-content">{{ content }}</p>
  </div>
</template>

<script>
    export default {
      name: "toast",
      props: ['content']
      // props: {
      //   content: {
      //     type: String,
      //     required: true
      //   }
      // }
    }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import './Toast.styl'
</style>
