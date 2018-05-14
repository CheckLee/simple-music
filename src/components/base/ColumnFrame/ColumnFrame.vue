<template>
  <div class="column-frame">
    <div class="title" ref="title" @click="pathTo">
      <div class="left"></div>
      <div class="text">{{ title }}</div>
      <i class="material-icons right" v-if="this.clickable">navigate_next</i>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "",
    props: {
      clickable: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      path: {
        type: String,
        default: '...'
      }
    },
    methods: {
      pathTo() {
        if (this.clickable) {
          console.log(this.path)
        }
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "ColumnFrame.styl"
</style>
