<template>
  <div class="img-collect-item" :class="collectItemClassName" @click="_emitClickStatus">
    <div class="img-collect-item-header">
      <img v-lazy="imgUrl" alt="itemImg">
      <div class="header-badge" v-show="itemType === 'mv'">
        <i class="material-icons md-36 md-light">play_arrow</i>
        <span>{{ formatBadge }}</span>
      </div>
    </div>
    <div class="img-collect-item-body">
      <h2 class="ellipsis">{{ itemName }}</h2>
      <p v-show="isItemIntro">{{ itemIntro }}</p>
    </div>
    <div class="img-collect-item-tail">
      <slot></slot>
    </div>
  </div>
</template>

<script>
    export default {
      name: "img-collect-item",
      props: {
        imgUrl: {
          type: String,
          required: true
        },
        itemName: {
          type: String
        },
        itemIntro: {
          type: String
        },
        itemType: {
          type: String
        },
        itemBadge: {
          type: Number
        }
      },
      computed: {
        collectItemClassName() {
          return `${this.itemType}-img-collect-item`
        },
        isItemIntro() {
          return !!this.itemIntro
        },
        formatBadge() {
          switch(this.itemType) {
            case 'mv':
              if (this.itemBadge < 100000) {
                return this.itemBadge
              }
              else {
                let dec = parseInt(this.itemBadge / 10000)
                return `${dec}万`
              }
              break
            default:
              return ''
              break
          }
        }
      },
      methods: {
        _emitClickStatus() {
          this.$emit('getClickStatus')
        }
      }
    }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./ImgCollectItem.styl"
</style>
