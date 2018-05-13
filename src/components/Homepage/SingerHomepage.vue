<template>
  <div class="singer-homepage">
    <div class="singer-homepage-header nav-panel-wrapper" ref="nav">
      <div class="nav-panel">
        <span class="nav-header action-backward" @click="_backward">
          <i class="material-icons md-56 md-light">keyboard_arrow_left</i>
        </span>
        <div class="nav-body panel">
          <p v-show="isTitle">{{ singerInfo.name }}</p>
        </div>
        <div class="nav-tail blank"></div>
        <div class="bg" v-show="isCover">
          <img :src="singerInfo.picUrl" alt="background">
        </div>
      </div>
    </div>
    <div class="homepage-routerlink" ref="links" :style="routerStyle">
      <router-link class="tab-item" tag="div" :to="hotSongsPath">
        <span class="tab-link">热门</span>
        <span>{{ hotSongs.length }}</span>
      </router-link>
      <router-link class="tab-item" tag="div" :to="albumsPath">
        <span class="tab-link">专辑</span>
        <span>{{ singerInfo.albumSize }}</span>
      </router-link>
      <router-link class="tab-item" tag="div" :to="mvsPath">
        <span class="tab-link">MV</span>
        <span>{{ singerInfo.mvSize }}</span>
      </router-link>
      <router-link class="tab-item" tag="div" :to="infoPath">
        <span class="tab-link">歌手信息</span>
        <span></span>
      </router-link>
    </div>
    <div class="singer-homepage-body">
      <section class="homepage-bg" ref="bkg">
        <div class="bg">
          <img :src="singerInfo.picUrl" alt="background">
        </div>
      </section>
      <scroll
        :probeType="3"
        :listenScroll="isListenScroll"
        @scroll="_getCurrentPos"
        class="singer-homepage-content">
        <section class="homepage-singer" ref="singer">
          <main-button
            class="collect-btn"
            :toggle="false"
            :clickable="false"
            :button-name-list="['未收藏', '已收藏']"
            button-size="medium"
            :button-status="singerInfo.followed"
            secondary-color="white">
          </main-button>
        </section>
        <section class="homepage-singer-info" ref="info">
          <div class="homepage-cards">
            <keep-alive>
              <router-view
                :id="id"
                :singer-name="singerInfo.name"
                :songs="hotSongs">
              </router-view>
            </keep-alive>
          </div>
        </section>
        <div class="blank"></div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import song from "../../api/song"
  import Scroll from "../base/Scroll/Scroll"
  import MainButton from "../base/Button/MainButton"

  export default {
    name: "SingerHomepage",
    components: {
      Scroll,
      MainButton
    },
    props: ['id'],
    data() {
      return {
        routerArr: ['SingerHotSongs', 'SingerAlbums', 'SingerMV', 'SingerInfo'],
        fromPath: '/',
        scrollY: 0,
        singerTop: 0,
        infoTop: 0,
        isListenScroll: true,
        navHeight: 52,
        linksHeight: 0,
        maxScrollY: 173,
        singerInfo: {
          albumSize:32,
          alias: [
            'Jay Chou'
          ],
          briefDesc:"著名歌手，音乐人，词曲创作人，编曲及制作人，MV及电影导演。新世纪华语歌坛领军人物，中国风歌曲始祖，被时代周刊誉为“亚洲猫王”，是2000年后亚洲流行乐坛最具革命性与指标性的创作歌手，亚洲销量超过3100万张，有“亚洲流行天王”之称，开启华语乐坛“R&B时代”与“流行乐中国风”的先河，周杰伦的出现打破了亚洲流行乐坛长年停滞不前的局面，为亚洲流行乐坛翻开了新的一页，是华语乐坛真正把R&B提升到主流高度的人物，引领华语乐坛革命整十年，改写了华语乐坛的流行方向。",
          followed:true,
          id:6452,
          img1v1Id:109951163111191410,
          img1v1Id_str:"109951163111191410",
          img1v1Url:"http://p4.music.126.net/o-FjCrUlhyFC96xiVvJZ8g==/109951163111191410.jpg",
          musicSize:469,
          mvSize:66,
          name:"周杰伦",
          picId:109951163111196200,
          picId_str:"109951163111196186",
          picUrl:"http://p3.music.126.net/ql3nSwy0XKow_HAoZzRZgw==/109951163111196186.jpg",
          publishTime:1516594084751,
          topicPerson:0,
          trans:"",
        },
        hotSongs: []
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.navHeight = this.$refs.nav.offsetHeight
        this.linksHeight = this.$refs.links.offsetHeight
        this.singerTop = this.$refs.singer.offsetTop
        this.infoTop = this.$refs.info.offsetTop
        this.maxScrollY = this.$refs.singer.offsetHeight + this.singerTop - this.navHeight
      })
    },
    watch: {
      scrollY(val, oldVal) {
        let maxScrollY = 120
        if (val > 0) {
          let scale = 1 + (val/maxScrollY)
          Velocity(this.$refs.bkg, { scaleX: scale, scaleY: scale }, { duration: 0 })
        }
      },
      id(val, oldVal) {
        song.GetSinger(val)
          .then((res) => {
            this._formatBase(res.data)
          })
          .catch((error) => {
            console.log(error)
          })
      },
      '$route'(to, from) {
        if (this._filter(to, from)) {
          this.fromPath = from.path
        }
      }
    },
    computed: {
      routerStyle() {
        let top = 400
        if (this.scrollY < -this.maxScrollY) {
          top = this.navHeight
        }
        else {
          top = this.scrollY + this.maxScrollY + this.navHeight
        }
        return {
          position: 'fixed',
          zIndex: 1,
          top: `${top}px`
        }
      },
      isCover() {
        return this.scrollY < 0? true:false
      },
      isTitle() {
        return this.scrollY < -this.maxScrollY? true:false
      },
      hotSongsPath() {
        return `/singer/${this.id}/hotsongs`
      },
      albumsPath() {
        return `/singer/${this.id}/albums`
      },
      mvsPath() {
        return `/singer/${this.id}/mvs`
      },
      infoPath() {
        return `/singer/${this.id}/info`
      }
    },
    methods: {
      _filter(to, from) {
        return (to.name && to.name === 'SingerHotSongs') && (from.name && this.routerArr.indexOf(from.name) < 0)
      },
      _backward() {
        this.$router.push({path: this.fromPath, query: {transition: 'slide-left'}})
      },
      _getCurrentPos(data) {
        this.scrollY = data.y
      },
      _formatBase(data) {
        this.singerInfo = data.artist
        this.hotSongs = data.hotSongs
      }
    },
    created() {
      song.GetSinger(this.id)
        .then((res) => {
          this._formatBase(res.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" type="text/stylus" scoped>
  @import "./SingerHomepage.styl"
</style>
