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
    height: 80px;
    display: flex;
    flex-wrap: nowrap;
  }
  .collect-item > * {
    border: 1px solid red;
  }
  .collect-item-header, .collect-item-tail {
    text-align: left;
    width: 78px;
  }
</style>
