<template>
  <div id="ITEM" class="collect-item">
    <p class="collect-item-header"><i class="material-icons md-48">email</i></p>
    <div class="collect-item-body"></div>
    <p class="collect-item-tail"><i class="material-icons md-48">keyboard_arrow_right</i></p>
  </div>
</template>

<script>
    export default {
        name: "Account"
    }
</script>

<style scoped>
  .collect-item {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
  }
  .collect-item > * {
    /*border: 1px solid red;*/
  }
  .collect-item-header, .collect-item-tail {
    text-align: left;
  }
  .collect-item-header {
    flex-grow: 0.5;
    /*text-indent: 30px;*/
  }
  .collect-item-tail {
    flex-grow: 0.5;
  }
  .collect-item-body {
    flex-grow: 8;
  }
</style>
