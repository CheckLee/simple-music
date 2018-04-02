<template>
  <!-- 过渡动画 -->
  <!--<transition name="fade">-->
    <div v-show="show" class="img-viewer" @click="hide">
      <!-- 遮罩层 -->
      <!--<div class="img-layer"></div>-->
      <transition name="fade">
        <div v-show="show" class="img">
          <img :src="imgSrc">
        </div>
      </transition>
    </div>
  <!--</transition>-->
</template>
<script>
  export default {
    name: 'img-viewer',
    props: ['imgSrc','show'],
    methods: {
      hide() {
        // 发送事件
        this.$emit('clickit')
      }
    }
  }
</script>
<style scoped>
  /*动画*/
  .fade-enter-active,
  .fade-leave-active {
    transition: all 5s ease-out;
  }

  .fade-enter {
    transform: scale(0);
  }
  .fade-leave-active {
    transform: scale(0);
  }


  /* bigimg */

  .img-viewer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  /*遮罩层样式*/
  .img-viewer .img-layer {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 1);
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  /*不限制图片大小，实现居中*/
  .img-viewer .img img {
    width: 100%;
    object-fit: fill;
    position: absolute;
    top: 200px;
  }
</style>
