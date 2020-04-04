<template lang="html">
  <div class="counter">
    <h2>Counter (vuex)</h2>
    <button
      class="button-increase"
      @click="increment()"
    >
      +
    </button>
    <span class="count-value">{{ count.value }}</span>
    <button
      class="button-decrease"
      @click="decrement()"
    >
      -
    </button>
    <div class="count-title">
      Count title : <span class="title-txt">{{ count.title || 'waiting..' }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Counter',
  computed: {
    ...mapGetters({
      count: 'getCount'
    })
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    }
  }
};
</script>

<style lang="scss" scoped>
    .counter {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        font-weight: bold;

        .count-title {
            font-size: 16px;
            margin-right: 24px;

            .title-txt {
                font-size: 20px;
                color: rgba(55, 173, 112, 1);
            }
        }

        .count-value {
            display: inline-block;
            width: 100px;
            font-size: 24px;
        }

        button {
            width: 50px;
            height: 50px;
            color: white;
            font-size: 18px;
            border-radius: 8px;
            background-color: rgba(55, 173, 112, 1);
            margin: 50px 12px;
            outline: none;
        }
    }
</style>
