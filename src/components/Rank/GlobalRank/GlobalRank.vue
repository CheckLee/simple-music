<template>
	<div class="global-rank">
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
    name: "global-rank",
    data() {
      return {
        title: '全球榜',
        clickable: false,
        path: '',
        items: [
          {
            name: 'electronic',
            title: '云音乐电音榜',
            update: '每周五更新'
          }, {
            name: 'hiphop',
            title: '云音乐嘻哈榜',
            update: '每周五更新'
          }, {
            name: 'acg',
            title: '云音乐ACG音乐榜',
            update: '每周四更新'
          }, {
            name: 'billboard',
            title: '美国Billboard榜',
            update: '刚刚更新'
          }, {
            name: 'electronic',
            title: '云音乐电音榜',
            update: '每周五更新'
          }, {
            name: 'hiphop',
            title: '云音乐嘻哈榜',
            update: '每周五更新'
          }, {
            name: 'acg',
            title: '云音乐ACG音乐榜',
            update: '每周四更新'
          }, {
            name: 'billboard',
            title: '美国Billboard榜',
            update: '刚刚更新'
          }, {
            name: 'electronic',
            title: '云音乐电音榜',
            update: '每周五更新'
          }, {
            name: 'hiphop',
            title: '云音乐嘻哈榜',
            update: '每周五更新'
          }, {
            name: 'acg',
            title: '云音乐ACG音乐榜',
            update: '每周四更新'
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
  @import "GlobalRank.styl"
</style>

