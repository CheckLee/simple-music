<template>
  <div class="hello">
    <div class="test"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .test {
    width: 100px;
    height: 100px;
    border: 1px solid #cccccc;
    color: gold;
  }
</style>
