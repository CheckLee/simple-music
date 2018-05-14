<template>
  <div class="user-rank">
    <column-frame :clickable="clickable" :title="title" :path="path">
      <div class="content">
        <div class="item" v-for="item in items" :key="item.index">
          <div class="pic">
            <div class="update">{{ item.update }}</div>
          </div>
          <div class="rank-title-wrapper">
            <div class="rank-title">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </column-frame>
  </div>
</template>

<script>
  import ColumnFrame from 'base/ColumnFrame/ColumnFrame'
  
  export default {
    name: "user-rank",
    data() {
      return {
        title: '全球榜',
        clickable: false,
        path: '',
        items: [
          {
            name: 'talent',
            title: '音乐达人榜',
            update: '每周一更新'
          }, {
            name: 'rookie',
            title: '音乐新人榜',
            update: '每周一更新'
          }
        ]
      }
    },
    components: {
      ColumnFrame
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "UserRank.styl"
</style>


