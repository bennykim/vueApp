<template>
  <div id="app">
      <Colors />
  </div>
</template>

<script>
import Colors from './components/Colors.vue'

export default {
  name: 'app',
  components: {
    Colors
  }
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
