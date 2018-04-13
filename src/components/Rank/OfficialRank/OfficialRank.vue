<template>
  <div class="official-rank">
    <column-frame :clickable="clickable" :title="title" :path="path">
      <div class="content">
        <div class="item" v-for="item in items" :key="item.index">
          <div class="pic" :class="item.name">
            <span class="desc">{{ item.update }}</span>
          </div>
          <div class="right">
            <p class="right-item" v-for="(song, index) in item.songs" :key="song.index">
              {{ index + 1 }}. {{song.song}} - {{song.singer}}
            </p>
          </div>
        </div>
        <div class="item">
          <div class="pic" :class="aitem.name">
            <span class="desc">{{ aitem.update }}</span>
          </div>
          <div class="right">
            <p class="right-item" v-for="(singer, index) in aitem.singers" :key="singer.index">
              <span>{{ index + 1 }}. {{ singer.name }}</span>
              <i class="material-icons point">thumb_up</i>
              <span class="point">{{ singer.point }}</span>
            </p>
          </div>
        </div>
      </div>
    </column-frame>
  </div>
</template>

<script>
  import ColumnFrame from 'base/ColumnFrame/ColumnFrame'
  
  export default {
    name: "official-rank",
    data() {
      return {
        title: '云音乐官方榜',
        clickable: false,
        path: '',
        items: [
          {
            name: 'raise',
            update: '每天更新',
            songs: [
              {
                song: '我们',
                singer: '陈奕迅'
              },{
                song: '没有理由',
                singer: 'Ryan.B/周延英（英子-effie）'
              },{
                song: '纸短情长（完整版）',
                singer: '烟把儿'
              }
            ]
          },{
            name: 'new',
            update: '每天更新',
            songs: [
              {
                song: '我们',
                singer: '陈奕迅'
              },{
                song: '没有理由',
                singer: 'Ryan.B/周延英（英子-effie）'
              },{
                song: '纸短情长（完整版）',
                singer: '烟把儿'
              }
            ]
          },{
            name: 'original',
            update: '每周四更新',
            songs: [
              {
                song: '我们',
                singer: '陈奕迅'
              },{
                song: '没有理由',
                singer: 'Ryan.B/周延英（英子-effie）'
              },{
                song: '纸短情长（完整版）',
                singer: '烟把儿'
              }
            ]
          },{
            name: 'hot',
            update: '每周四更新',
            songs: [
              {
                song: '我们',
                singer: '陈奕迅'
              },{
                song: '没有理由',
                singer: 'Ryan.B/周延英（英子-effie）'
              },{
                song: '纸短情长（完整版）',
                singer: '烟把儿'
              }
            ]
          },{
            name: 'appreciate',
            update: '实时更新',
            songs: [
              {
                song: '我们',
                singer: '陈奕迅'
              },{
                song: '没有理由',
                singer: 'Ryan.B/周延英（英子-effie）'
              },{
                song: '纸短情长（完整版）',
                singer: '烟把儿'
              }
            ]
          }
        ],
        aitem: {
          name: 'singer',
          update: '每天更新',
          singers: [
            {
              name: '林俊杰',
              point: 670143,
            },{
              name: '薛之谦',
              point: 585872,
            },{
              name: '陈奕迅',
              point: 558712,
            }
          ]
        }
      }
    },
    components: {
      ColumnFrame
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "OfficialRank.styl"
</style>
