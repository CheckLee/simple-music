<template>
  <div class="fans">
    <div class="nav-panel-wrapper">
      <div class="nav-panel">
        <span class="nav-header action-backward" @click="_backward">
          <i class="material-icons md-56 md-light">keyboard_arrow_left</i>
        </span>
        <div class="nav-body panel">
          <p>粉丝</p>
        </div>
        <div class="nav-tail blank"></div>
      </div>
    </div>
    <li 
      v-for="item in fansData" 
      is="ImgCollectItem"
      :key="item.nickname"
      :img-url="item.avatarUrl"
      :item-name="item.nickname"
      :item-intro="item.signature"
      item-type="fans">
      <i class="material-icons md-56">{{ tailIconName }}</i>
    </li>
  </div>
</template>

<script>
  import ImgCollectItem from "../base/CollectItem/ImgCollectItem";
  import api from '../../api/login'
  import { mapGetters } from 'vuex'

  export default {
    components: {ImgCollectItem},
    name: "fans",
    data() {
      return {
        tailIconName: 'more_horiz',
        fromPath: '/account/loginedaccount',
        fansData: []
      }
    },
    computed: {
      ...mapGetters(['uId'])
    },
    methods: {
      _formatFans(fans) {
        this.fansData = fans
      },
      _backward() {
        this.$router.push({path: this.fromPath, query: {transition: 'slide-left'}})
      },
    },
    created() {
      api.GetFansData(this.uId)
      .then((res) => {
        this._formatFans(res.data.followeds)
      })
    }
  }
</script>

<style scoped>

</style>
