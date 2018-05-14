<template>
  <div class="share-item">
    <div class="item-header">
      <div class="item-avatar">
        <img v-lazy="imgObj" alt="share-item-avatar">
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
            'playlist': 'album',
            'resource': 'chat',
            'video': 'videocam',
            'event': 'textsms',
            'song': 'play_arrow',
            'third': 'link',
            'program': 'radio',
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
        },
        imgObj() {
          return {
            src: this.avatarUrl,
            error: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_shareitem_avatar.png',
            loading: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_shareitem_avatar.png'
          }
        }
      },
      methods: {
        _link() {
          console.log(this.itemType)
        }
      }
    }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./ShareItem.styl"
</style>
