<template>
  <div class="img-collect-item" :class="collectItemClassName">
    <div class="img-collect-item-header">
      <img :src="imgUrl" alt="itemImg">
    </div>
    <div class="img-collect-item-body">
      <h2>{{ itemName }}</h2>
      <p>{{ itemIntro }}</p>
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
        }
      },
      computed: {
        collectItemClassName() {
          return `${this.itemType}-img-collect-item`
        }
      }
    }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./ImgCollectItem.styl"
</style>
