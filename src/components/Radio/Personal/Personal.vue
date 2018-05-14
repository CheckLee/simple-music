<template>
  <div class="personal">
    <column-frame :clickable="clickable" :title="title" :path="path">
      <div class="content">
        <div class="column">
          <div class="item">
            <div class="pic">
              <div class="pay">付费精品</div>
              <div class="desc">阿里铁军内训销售课</div>
            </div>
            <div class="text-wrapper">
              <div class="text">改变你人生的销售思维</div>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <div class="pay">付费精品</div>
              <div class="desc">阿里铁军内训销售课</div>
            </div>
            <div class="text-wrapper">
              <div class="text">改变你人生的销售思维</div>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <div class="pay">付费精品</div>
              <div class="desc">阿里铁军内训销售课</div>
            </div>
            <div class="text-wrapper">
              <div class="text">改变你人生的销售思维</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="item">
            <div class="pic">
              <div class="pay" style="display: none;">付费精品</div>
              <div class="desc">【抖腿俱乐部】</div>
            </div>
            <div class="text-wrapper">
              <div class="text">一周一会，腿震荡时间故事</div>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <div class="pay" style="display: none;">付费精品</div>
              <div class="desc">【抖腿俱乐部】</div>
            </div>
            <div class="text-wrapper">
              <div class="text">一周一会，腿震荡时间故事</div>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <div class="pay" style="display: none;">付费精品</div>
              <div class="desc">【抖腿俱乐部】</div>
            </div>
            <div class="text-wrapper">
              <div class="text">一周一会，腿震荡时间故事</div>
            </div>
          </div>
        </div>
      </div>
    </column-frame>
  </div>
</template>

<script>
  import ColumnFrame from 'base/ColumnFrame/ColumnFrame'
  
  export default {
    name: "",
    data() {
      return {
        clickable: true,
        title: '电台个性推荐',
        path: 'personal'
      }
    },
    components: {
      ColumnFrame
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "Personal.styl"
</style>
