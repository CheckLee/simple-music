<template>
  <div class="button">
    <a href="#" class="button medium-primary-button" v-bind:class="{ toggle: isClicked }">{{ buttonName }}</a>
  </div>
</template>

<script>
    export default {
      name: "main-button",
      data() {
        return {
          isClicked: false
        }
      },
      props: {
        toggle: {
          type: Boolean,
          required: true
        },
        buttonNameList: {
          type: Array,
          required: true
        }
      },
      computed: {
        buttonName() {
          return this.isClicked? this.buttonNameList[1]:this.buttonNameList[0]
        }
      }
    }
</script>

<style scoped>
  .button, .medium-primary-button {
    background-color: #dd3f3c;
    color: white;
    font-size: 24px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    display: block;
  }
</style>
