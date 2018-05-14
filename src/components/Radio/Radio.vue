<template>
  <div class="radio" ref="radio">
    <scroll class="radio-content">
      <div>
        <div class="swiper-container">
          <swiper></swiper>
        </div>
        <section class="panel">
          <div class="panel-item classify">
            <i class="material-icons">dashboard</i>
            <span class="text">电台分类</span>
          </div>
          <div class="panel-item rank">
            <i class="material-icons">storage</i>
            <span class="text">电台排行</span>
          </div>
        </section>
        <section class="content">
          <pay></pay>
          <personal></personal>
          <radio-frame v-for="frame in frames" :key="frame.order" :frame="frame"></radio-frame>
        </section>
        <section class="class">
          <column-frame class="class-item hot-class"
                        :clickable="hotClass.clickable"
                        :title="hotClass.title"
                        :path="hotClass.path">
            <div class="column">
              <div class="item classify">
                <i class="material-icons">book</i>
                <span class="text">有声书</span>
              </div>
              <div class="item rank">
                <i class="material-icons">lightbulb_outline</i>
                <span class="text">知识技能</span>
              </div>
            </div>
            <div class="column">
              <div class="item classify">
                <i class="material-icons">trending_up</i>
                <span class="text">商业财经</span>
              </div>
              <div class="item rank">
                <i class="material-icons">filter_b_and_w</i>
                <span class="text">人文历史</span>
              </div>
            </div>
            <div class="column">
              <div class="item classify">
                <i class="material-icons">language</i>
                <span class="text">外语世界</span>
              </div>
              <div class="item rank">
                <i class="material-icons">child_care</i>
                <span class="text">亲子宝贝</span>
              </div>
            </div>
          </column-frame>
          <column-frame class="class-item more-class"
                        :clickable="moreClass.clickable"
                        :title="moreClass.title"
                        :path="moreClass.path">
            <div class="column">
              <div class="item classify">
                <i class="material-icons">mic_none</i>
                <span class="text">创作|翻唱</span>
              </div>
              <div class="item rank">
                <i class="material-icons">music_note</i>
                <span class="text">音乐故事</span>
              </div>
            </div>
            <div class="column">
              <div class="item classify">
                <i class="material-icons">headset</i>
                <span class="text">3D|电子</span>
              </div>
              <div class="item rank">
                <i class="material-icons">business</i>
                <span class="text">相声曲艺</span>
              </div>
            </div>
          </column-frame>
        </section>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'base/Scroll/Scroll'
  import Swiper from 'base/Swiper/Swiper'
  import ColumnFrame from 'base/ColumnFrame/ColumnFrame'
  import Pay from './Pay/Pay'
  import Personal from './Personal/Personal'
  import RadioFrame from './RadioFrame/RadioFrame'
  
  export default {
    name: "radio",
    components: {
      Scroll, Swiper, ColumnFrame, Pay, Personal, RadioFrame
    },
    data() {
      return {
        frames: [
          {
            order: 0,
            title: '有声书',
            clickable: true,
            path: 'audiobook',
            items: [
              {
                pay: true,
                desc: '恶魔总裁的小妻子',
                text: '萝莉X大叔 放在手心娇宠的小妻子'
              },{
                pay: true,
                desc: '恶魔总裁的小妻子',
                text: '萝莉X大叔 放在手心娇宠的小妻子'
              },{
                pay: true,
                desc: '恶魔总裁的小妻子',
                text: '萝莉X大叔 放在手心娇宠的小妻子'
              }
            ]
          },{
            order: 1,
            title: '知识技能',
            clickable: true,
            path: 'knowledge',
            items: [
              {
                pay: false,
                desc: '食色性 - 两性清流',
                text: '一本正经说两性'
              },{
                pay: false,
                desc: '食色性 - 两性清流',
                text: '一本正经说两性'
              },{
                pay: false,
                desc: '食色性 - 两性清流',
                text: '一本正经说两性'
              }
            ]
          },{
            order: 2,
            title: '商业财经',
            clickable: true,
            path: 'commerce',
            items: [
              {
                pay: true,
                desc: '卫哲·商业实战课',
                text: '向商业大佬学习商业分析能力'
              },{
                pay: false,
                desc: '卫哲·商业实战课',
                text: '向商业大佬学习商业分析能力'
              },{
                pay: false,
                desc: '卫哲·商业实战课',
                text: '向商业大佬学习商业分析能力'
              }
            ]
          },{
            order: 3,
            title: '人文历史',
            clickable: true,
            path: 'history',
            items: [
              {
                pay: false,
                desc: '故事FM',
                text: '为你讲述最真实的故事'
              },{
                pay: false,
                desc: '故事FM',
                text: '为你讲述最真实的故事'
              },{
                pay: false,
                desc: '故事FM',
                text: '为你讲述最真实的故事'
              }
            ]
          },{
            order: 4,
            title: '外语世界',
            clickable: true,
            path: 'language',
            items: [
              {
                pay: false,
                desc: '趣学韩语发音',
                text: '开开心心学韩语'
              },{
                pay: false,
                desc: '趣学韩语发音',
                text: '开开心心学韩语'
              },{
                pay: false,
                desc: '趣学韩语发音',
                text: '开开心心学韩语'
              }
            ]
          },{
            order: 5,
            title: '亲子宝贝',
            clickable: true,
            path: 'baby',
            items: [
              {
                pay: false,
                desc: '婷婷唱古文',
                text: '把古诗唱成歌，江湖人称“背诗神器”'
              },{
                pay: false,
                desc: '婷婷唱古文',
                text: '把古诗唱成歌，江湖人称“背诗神器”'
              },{
                pay: false,
                desc: '婷婷唱古文',
                text: '把古诗唱成歌，江湖人称“背诗神器”'
              }
            ]
          }
        ],
        hotClass: {
          clickable: false,
          title: '热门分类',
          path: 'hot-class'
        },
        moreClass: {
          clickable: false,
          title: '更多分类',
          path: 'more-class'
        },
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "Radio.styl"
</style>
