<template>
  <div class="flat-button" @click="_emitStatus">
    <span class="button" :class="[buttonClass, buttonSize]" @click="_changeStatus">{{ buttonName }}</span>
  </div>
</template>

<script>
    export default {
      name: "flat-button",
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
        },
        buttonColor: {
          type: String
        }
      },
      computed: {
        buttonName() {
          return this.isClicked? this.buttonNameList[1]:this.buttonNameList[0]
        },
        buttonClass() {
          return `${this.buttonColor}-flat-button`
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
        },
        _emitStatus() {
          this.$emit('getClickStatus', this.isClicked)
        }
      },
      created() {
        this.isClicked = this.buttonStatus
      }
    }
</script>

<style type="text/stylus" rel="stylesheet/stylus" lang="stylus" scoped>
  @import './FlatButton.styl'
</style>
