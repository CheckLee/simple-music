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
      data() {
        return {
          buttonIconName: 'create'
        }
      }
    }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./FloatButton.styl"
</style>
