<template>
  <div id="ACCOUNT" class="account">
    <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-class="text"></collect-item>
  </div>
</template>

<script>
    import CollectItem from "./base/CollectItem/CollectItem";

    export default {
      components: {CollectItem},
      name: "Account"
    }
</script>

<style scoped>

</style>
