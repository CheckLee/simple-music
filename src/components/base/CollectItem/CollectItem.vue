<template>
  <div class="collect-item" :class="collectItemClassName">
    <p class="collect-item-header"><i class="material-icons md-48">{{ headerIconName }}</i></p>
    <div class="collect-item-body">
      <p>{{ itemName }}</p>
      <span class="badge">{{ badgeNum }}</span>
    </div>
    <p class="collect-item-tail"><i class="material-icons md-48">{{ tailIconName }}</i></p>
  </div>
</template>

<script>
    export default {
      name: "collect-item",
      props: ['headerIconName', 'itemName', 'tailIconName', 'badgeNum', 'itemClass'],
      computed: {
        collectItemClassName() {
          return `${this.itemClass}-collect-item`
        }
      }
    }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./CollectItem.styl"
</style>


