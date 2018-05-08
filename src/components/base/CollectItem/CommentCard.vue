<template>
  <div class="comment-card">
    <div class="comment-header">
      <div class="header-innerwrapper" @click="_linkUser(commentInfo.user.userId)">
        <div class="header-avatar">
          <img :src="commentInfo.user.avatarUrl" :alt="commentInfo.user.nickname">
        </div>
        <div class="header-body">
          <p>{{ commentInfo.user.nickname }}</p>
          <p>{{ createTime }}</p>
        </div>
      </div>
      <div class="header-tail">
        <span v-show="isLiked">{{ commentInfo.likedCount }}</span>
        <i class="material-icons md-36">thumb_up</i>
      </div>
    </div>
    <div class="comment-body">
      <p class="content">{{ commentInfo.content }}</p>
      <div class="replaied" v-show="isReplied">
        <span @click="_linkUser(repliedInfo.user.userId)">@{{ repliedInfo.user.nickname }}</span>
        <p>{{ repliedInfo.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommentCard",
    props: {
      commentInfo: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        name: 'CommentCard'
      }
    },
    computed: {
      isReplied() {
        return !!this.commentInfo.beReplied.length
      },
      isLiked() {
        return this.commentInfo.likedCount !== 0
      },
      createTime() {
        let time = new Date(this.commentInfo.time)
        return time.toLocaleDateString().split('/').join('-')
      },
      repliedInfo() {
        return this.commentInfo.beReplied[0]
      }
    },
    methods: {
      _linkUser(id) {
        this.$router.push({path: `/user/${id}`, query: {transition: 'slide-right'}})
      }
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" type="text/stylus" scoped>
  @import "./CommentCard.styl"
</style>
