<template>
  <div class="share-item">
    <div class="item-header">
      <div class="item-avatar">
        <img :src="avatarUrl" alt="share-item-avatar">
        <div class="item-avatar-layer">
          <i class="material-icons md-light md-48">{{ iconName }}</i>
        </div>
      </div>
      <div class="item-title">
        <p>{{ itemTitle }}</p>
      </div>
    </div>
    <div class="item-tail">
      <p class="item-subtitle">{{ itemSubTitle }}</p>
    </div>
  </div>
</template>

<script>
    export default {
      name: "share-item",
      data() {
        return {
          iconMap: {
            'musicList': 'assignment',
            'commits': 'chat',
            'video': 'videocam',
            'tweets': 'textsms',
            'music': 'album',
            'third': 'link',
            'error': 'error'
          }
        }
      },
      props: {
        avatarUrl: {
          type: String,
          default: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_shareitem_avatar.png'
        },
        itemType: {
          type: String,
          required: true
        },
        itemTitle: {
          type: String,
          required: true
        },
        itemSubTitle: {
          type: String,
          required: true
        }
      },
      computed: {
        iconName() {
          return this.itemType
            ? this.iconMap[this.itemType]
            : this.iconMap['error']
        }
      }
    }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./ShareItem.styl"
</style>
