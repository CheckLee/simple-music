<template>
  <div class="tweets">
    <img-viewer :show="show" :img-src="imgSrc" @clickit="view"></img-viewer>
    <float-button></float-button>
    <div class="img-wrapper">
      <img :src="imgSrc" @click="clickImg">
    </div>
  </div>
</template>

<script>
    import FloatButton from "../base/Button/FloatButton";
    import ImgViewer from "../base/Viewer/ImgViewer";

    export default {
      components: {
        ImgViewer,
        FloatButton},
      name: "tweets",
      data() {
        return {
          show: false,
          imgSrc: require("../../assets/img/default_unloadimg.png")
        }
      },
      methods: {
        clickImg() {
          this.show = true
        },
        view() {
          this.show = false
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
  }
  .img-wrapper img {
    width: inherit;
    object-fit: fill;
  }
</style>
