import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: {
            title: '',
            value: 0
        }
    },
    mutations: {
        increment(state) {
            state.count.title = 'increment'
            state.count.value += 1
        },
        decrement(state) {
            state.count.title = 'decrement'
            state.count.value -= 1
        }
    },
    getters: {
        getCount(state) {
            return state.count
        }
    }
})

export default store
