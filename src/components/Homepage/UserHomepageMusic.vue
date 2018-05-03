<template>
  <div class="user-homepage-music">
    UserHomepageMusic
  </div>
</template>

<script>
  export default {
    name: "UserHomepageMusic",
    data() {
      return {
        uid: 1
      }
    },
    created() {
      let path = this.$route.path.split('/')
      this.uid = path[2]
    }
  }
</script>

<style scoped>

</style>
