<template>
  <div class="button">
    <a href="#" class="button medium-primary-button" v-bind:class="{ toggle: isClicked }">{{ buttonName }}</a>
  </div>
</template>

<script>
    export default {
      name: "main-button",
      data() {
        return {
          isClicked: false
        }
      },
      props: {
        toggle: {
          type: Boolean,
          required: true
        },
        buttonNameList: {
          type: Array,
          required: true
        }
      },
      computed: {
        buttonName() {
          return this.isClicked? this.buttonNameList[1]:this.buttonNameList[0]
        }
      }
    }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./MainButton.styl"
</style>
