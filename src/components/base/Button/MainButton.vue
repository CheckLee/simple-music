<template>
  <div class="main-button" @click="_emitStatus">
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
        clickable: {
          type: Boolean,
          default: true
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
        secondaryColor: {
          type: String,
          default: 'gray'
        }
      },
      computed: {
        buttonName() {
          return this.isClicked? this.buttonNameList[1]:this.buttonNameList[0]
        },
        buttonClass() {
          return this.isClicked? `${this.buttonSize}-secondary-button ${this.secondaryColor}`:`${this.buttonSize}-primary-button`
        }
      },
      methods: {
        _changeStatus() {
          if (this.clickable) {
            if (this.toggle) {
              this.isClicked = !this.isClicked
            }
            else {
              this.isClicked = true
            }
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

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./MainButton.styl"
</style>
