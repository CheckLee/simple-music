<template>
  <div class="toast">
    <p class="toast-content"></p>
  </div>
</template>

<script>
    export default {
      name: "toast",
      props: {
        content: {
          type: String,
          required: true
        }
      }
    }
</script>

<style scoped>

</style>
