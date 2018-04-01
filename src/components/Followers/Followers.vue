<template>
  <div class="followers">
    <img-collect-item
      img-url="https://raw.githubusercontent.com/CheckLee/simple-music/dev/src/assets/img/default_avatar.png"
      item-name="姜维"
      item-intro="昨天成为你的粉丝"
      item-type="fans">
      <i class="material-icons md-56">{{ tailIconName }}</i>
    </img-collect-item>
  </div>
</template>

<script>
    import ImgCollectItem from "../base/CollectItem/ImgCollectItem";

    export default {
      components: {ImgCollectItem},
      name: "followers",
      data() {
        return {
          tailIconName: 'more_horiz'
        }
      }
    }
</script>

<style scoped>

</style>
