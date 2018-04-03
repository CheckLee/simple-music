<template>
  <div class="tweets">
    <!--<img-viewer v-show="show" :img-src="imgSrc" @clickit="view"></img-viewer>-->
    <img-viewer2 :show="show" :img-src="imgSrc" @clickit="view"></img-viewer2>
    <float-button></float-button>
    <div class="img-wrapper">
      <img :src="imgSrc" @click="clickImg">
    </div>
    <!--<div class="list img-wrapper" v-for="(n, index) in imageList" :data-index="index">-->
      <!--<img @click="open($event)" :src="n.url">-->
    <!--</div>-->
  </div>
</template>

<script>
    import FloatButton from "../base/Button/FloatButton";
    import ImgViewer from "../base/Viewer/ImgViewer";
    import fancybox from 'vue-fancybox'
    import ImgViewer2 from "../base/Viewer/ImgViewer2";

    export default {
      components: {
        ImgViewer2,
        ImgViewer,
        FloatButton},
      name: "tweets",
      data() {
        return {
          show: false,
          imageList: [
            { width: 750, height: 675, url: require("../../assets/img/default_unloadimg.png") }
          ],
          imgSrc: require("../../assets/img/default_unloadimg.png")
        }
      },
      methods: {
        clickImg() {
          this.show = true
        },
        view() {
          this.show = false
        },
        open (e) {
          fancybox(e.target, this.imageList);
        }
      }
    }
</script>

<style scoped>
  .tweets {
    width: 100%;
  }
  .img-wrapper {
    width: 375px;
    position: absolute;
    left: 100px;
    top: 200px;
  }
  .img-wrapper img {
    width: inherit;
    object-fit: fill;
  }
</style>
