<template>
	<div class="pay">
    <column-frame :clickable="clickable" :title="title" :path="path">
      <div class="content">
        <div class="item" v-for="item in items" :key="item.index">
          <div class="pic">
            <span class="desc">{{ item.desc }}</span>
          </div>
          <div class="info">
            <div class="title">{{ item.title }}</div>
            <div class="sub-title">{{ item.subtitle }}</div>
            <div class="play">
              <i class="material-icons">play_arrow</i>
              <span class="text">{{ item.play }}</span>
            </div>
            <div class="price">
              ￥{{ item.price }}
              <span class="vip" v-if="item.vip">/SVIP:￥{{ item.vip }}</span>
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
    name: "pay",
    data() {
      return {
        clickable: true,
        title: '付费精品',
        path: 'pay',
        items: [
          {
            desc: '4月9日更新',
            title: '方文山的音乐诗词课',
            subtitle: "周杰伦等你下课，方文山等你上课",
            play: '东风破（上）：中国古典音乐的骨架啊啊啊啊',
            price: 49
          },
          {
            desc: '4月9日更新',
            title: '方文山的音乐诗词课',
            subtitle: "周杰伦等你下课，方文山等你上课",
            play: '东风破（上）：中国古典音乐的骨架啊啊啊啊',
            price: 49
          },
          {
            desc: '4月9日更新',
            title: '方文山的音乐诗词课',
            subtitle: "周杰伦等你下课，方文山等你上课",
            play: '东风破（上）：中国古典音乐的骨架啊啊啊啊',
            price: 149,
            vip: 99
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
  @import "Pay.styl"
</style>
