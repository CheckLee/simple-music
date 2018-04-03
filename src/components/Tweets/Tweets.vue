<template>
  <div class="tweets">
    <!--<img-viewer v-show="show" :img-src="imgSrc" @clickit="view"></img-viewer>-->
    <!--<circle-loader width="50px" height="50px" class="circle-loader"></circle-loader>-->
    <img-viewer2 :show="show" :img-arr="imageList" @clickit="view"></img-viewer2>
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
    import ImgViewer2 from "../base/Viewer/ImgViewer2";
    import InfCircleLoader from "../base/Loader/InfCircleLoader";
    import CircleLoader from "../base/Loader/CircleLoader";

    export default {
      components: {
        CircleLoader,
        InfCircleLoader,
        ImgViewer2,
        ImgViewer,
        FloatButton},
      name: "tweets",
      data() {
        return {
          show: false,
          imageList: [
            { width: 750, height: 675, alt:'slide1', url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_unloadimg.png' },
            { width: 750, height: 675, alt:'slide2', url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_avatar.png' },
            { width: 750, height: 675, alt:'slide3', url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_unloadimg.png' }
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
    position: absolute;
    top: 50%;
    left: 0;
    /*transform: translateY(-50%);*/
  }
  .circle-loader {
    position: absolute;
    left: 200px;
  }

  .inf-circle-loader {
    position: absolute;
    top: 400px;
  }
</style>
