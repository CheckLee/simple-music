<template>
  <div id="ITEM" class="collect-item">
    <p class="collect-item-header"><i class="material-icons md-48">email</i></p>
    <p class="collect-item-body">邮件</p>
    <p class="collect-item-tail"><i class="material-icons md-48">keyboard_arrow_right</i></p>
  </div>
</template>

<script>
    export default {
      name: "Account",
      props: ['headerIconType', 'itemName', 'tailIconType']
    }
</script>

<style scoped>
  .collect-item {
    width: 100%;
    height: 80px;
    line-height: 80px;
    font-size: 28px;
    border-bottom: 1px solid #d8d8d8;
    margin-left: 30px;
    display: flex;
    flex-wrap: nowrap;
  }
  .material-icons {
    height: inherit;
    line-height: inherit;

  }
  .collect-item-header, .collect-item-tail {
    text-align: left;
  }
  .collect-item-header {
    width: 48px;
  }
  .collect-item-tail {
    width: 78px;
  }
  .collect-item-body {
    width: calc(100% - 156px);
    text-indent: 5px;
  }
</style>
