<template>
	<div ref="wrapper" class="list-wrapper" @click="_emitCurrentY">
    <div class="scroll-content">
      <div ref="listWrapper">
        <slot></slot>
      </div>
      <slot name="pullup"
            :pullUpLoad="pullUpLoad"
            :isPullUpLoad="isPullUpLoad">
        <div class="pullup-wrapper" v-if="pullUpLoad">
          <div class="before-trigger" v-if="!isPullUpLoad">
            <span>{{ pullUpTxt }}</span>
          </div>
          <div class="after-trigger" v-else>
            <inf-circle-loader :color="circleColor"></inf-circle-loader>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import InfCircleLoader from 'base/Loader/InfCircleLoader'



  export default {
    name: "scroll",
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: false
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: null
      },
      pullup: {
        type: Boolean,
        default: false
      },
      beforeScroll: {
        type: Boolean,
        default: false
      },
      refreshDelay: {
        type: Number,
        default: 20
      },
      pullUpLoad: {
        type: null,
        default: false
      },
      // props added by jw
      isEndScroll: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isPullUpLoad: false,
        pullUpDirty: true,
        circleColor: 'red'
      }
    },
    computed: {
      pullUpTxt() {
        const moreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.more
        const noMoreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.noMore
        // 判断是否加载过程结束
        return this.pullUpDirty ? moreTxt: noMoreTxt
      }
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
          pullUpLoad: this.pullUpLoad,
        })
        if (this.listenScroll) {
          let me = this
          this.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos)
          })
        }
        if (this.pullup) {
          this.scroll.on('scrollEnd', () => {
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
              console.log(this.scroll.y)
              this.$emit('scrollToEnd')
            }
          })
        }
        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
        // 初始化上拉加载
        if (this.pullUpLoad) {
          this._initPullUpLoad()
        }
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      },
      // 在上拉加载之后，结束加载过程，重新渲染scroll
      forceUpdate(dirty) {
        if (this.pullUpLoad && this.isPullUpLoad) {
          this.isPullUpLoad = false
          this.scroll.finishPullUp()
          this.pullUpDirty = dirty
          this.refresh()
        }
        else {
          this.refresh()
        }
      },
      _initPullUpLoad() {
        // 当拉到最底时，触发pullingUp
        this.scroll.on('pullingUp', () => {
          this.isPullUpLoad = true
          this.$emit('pullingUp')
        })
      },
      _emitCurrentY() {
        this.$emit('getCurrentY', this.scroll.y)
      }
    },
    mounted() {
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    watch: {
      data() {
        // 当外部触发 data 变化时，才触发pullUpLoad
        setTimeout(() => {
          this.forceUpdate(true)
        }, this.refreshDelay)
      },
      isEndScroll(val, oldVal) {
        if (val) {
          this.disable()
        }
        else {
          this.enable()
        }
      }
    },
    components: {
      InfCircleLoader
    }
  }
</script>

<style scoped>
  .pullup-wrapper {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
