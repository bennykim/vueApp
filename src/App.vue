<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>
    export default {
      name: 'app'
    }
</script>

<style lang="scss">
    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;

        #app{
            position: relative;
            width: 100%;
            height: 100%;
            min-width: 500px;
            min-height: 500px;
            overflow: auto;
        }
    }
</style>
