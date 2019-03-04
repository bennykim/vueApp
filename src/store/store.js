import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: {
            title: '',
            value: 0
        }
    },
    getters: {
        getCount(state) {
            return state.count
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
    actions: {
        async getWeatherData(ctx, payload) {
            const baseURL = 'https://abnormal-weather-api.herokuapp.com'
            try {
                let result = await axios.get(`${baseURL}/cities/search`, {
                    params: {
                        city: payload
                    }
                })
                if (result.status === 200) return result
            } catch (err) {
                console.log(`Error ${err}`)
            }
        }
    }
})

export default store
