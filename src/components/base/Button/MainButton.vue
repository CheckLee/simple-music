<template>
  <div class="button">
    <span class="button" :class="buttonClass" @click="_changeStatus">{{ buttonName }}</span>
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
        },
        buttonSize: {
          type: String,
          required: true
        },
        buttonStatus: {
          type: Boolean,
          default: false
        }
      },
      computed: {
        buttonName() {
          return this.isClicked? this.buttonNameList[1]:this.buttonNameList[0]
        },
        buttonClass() {
          return this.isClicked? `${this.buttonSize}-secondary-button`:`${this.buttonSize}-primary-button`
        }
      },
      methods: {
        _changeStatus() {
          if (this.toggle) {
            this.isClicked = !this.isClicked
          }
          else {
            this.isClicked = true
          }
        }
      },
      created() {
        this.isClicked = this.buttonStatus
      }
    }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./MainButton.styl"
</style>
