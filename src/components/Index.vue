<template lang="html">
  <div class="index">
    <Navigator />
    <router-view />
    <img
      class="logo"
      src="@/assets/logo.png"
      alt="Vue logo"
    >
  </div>
</template>

<script>
import Navigator from '@/components/Navigator';

export default {
  name: 'Index',
  components: {
    Navigator
  }
};
</script>

<style lang="scss" scoped>
    .index{
        position: relative;

        .logo {
            position: fixed;
            width: 50px;
            height: 50px;
            left: 0;
            right: 0;
            bottom: 24px;
            margin: 0 auto;
        }
    }
</style>
