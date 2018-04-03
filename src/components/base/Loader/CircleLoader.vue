<template>
  <div id="CIRCLE-PROGRESS" class="progresscirlce-wrapper" :style="circleStyle">
    <div class="progresss-layer">
      <div class="progress-clipper left">
        <div class="num"></div>
      </div>
      <div class="progress-clipper right">
        <div class="num"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "circle-loader",
    props: {
      width: String,
      height: String
    },
    computed: {
      circleStyle() {
        return 'width: ' + this.width + '; ' + 'height: ' + this.height;
      }
    }
  }
</script>

<style scoped>
  .progresscirlce-wrapper {
    display: inline-block;
    position: relative;
  }
  .progresss-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 1;
    border-color: #26a69a;
  }
  .progress-clipper {
    display: inline-block;
    position: relative;
    width: 50%;
    height: 100%;
    overflow: hidden;
    border-color: inherit;
  }
  .num {
    width: 200%;
    height: 100%;
    border-width: 5px;
    /* STROKEWIDTH */
    border-style: solid;
    border-color: inherit;
    border-bottom-color: transparent !important;
    border-radius: 50%;
    -webkit-animation: none;
    animation: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .progress-clipper.left .num {
    left: 0;
    border-right-color: transparent !important;
    transform: rotateZ(-225deg);
  }
  .progress-clipper.right .num {
    right: 0;
    border-left-color: transparent !important;
    transform: rotateZ(315deg);
  }
</style>
