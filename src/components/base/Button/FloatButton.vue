<template>
  <div class="float-button">
    <span>
      <i class="material-icons md-light">{{ buttonIconName }}</i>
    </span>
  </div>
</template>

<script>
    export default {
      name: "float-button",
      props: ['buttonIconName'],
      data() {
        return {
          name:"float-button"
        }
      }
    }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./FloatButton.styl"
</style>
