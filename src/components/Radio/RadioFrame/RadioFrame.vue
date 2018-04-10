<template>
  <div class="radio-frame">
    <column-frame :clickable="clickable" :title="title" :path="path">
      <div class="content">
        <div class="column">
          <div class="item" v-for="item in items" :key="item.index">
            <div class="pic">
              <div class="pay" style="display: none;" v-if="item.pay">付费精品</div>
              <div class="desc">{{ item.desc }}</div>
            </div>
            <div class="text-wrapper">
              <div class="text">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </column-frame>
  </div>
</template>

<script>
  import ColumnFrame from 'base/ColumnFrame/ColumnFrame'
  
  export default {
    name: "radio-frame",
    props: {
      frame: {
        type: Object,
        default: null
      }
    },
    created() {
      this.clickable = this.frame.clickable
      this.title = this.frame.title
      this.path = this.frame.path
      this.items = this.frame.items
    },
    components: {
      ColumnFrame
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "RadioFrame.styl"
</style>
