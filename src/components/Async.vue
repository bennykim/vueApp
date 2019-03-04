<template lang="html">
    <div class="async">
        <h2>Async Actions</h2>
        <button
            v-for="item in list"
            :class="{'active': item === isActive}"
            @click="getWeather(item)">{{item}}</button>
        <div v-if="toggle" class="wrapper">
            <p>City: <span>{{weather.city}}</span></p>
            <p>Weather: <span>{{weather.sky}}</span></p>
            <p>Date: <span>{{weather.date}}</span></p>
            <img :src="weather.img" alt="weather_img" />
        </div>
        <p v-else class="loading">Loading...</p>
    </div>
</template>

<script>
    export default {
        name: 'Async',
        data() {
            return {
                isActive: '',
                list: ['Seoul', 'Tokyo', 'Beijing', 'Toronto'],
                toggle: false,
                weather: {}
            }
        },
        beforeMount() {
            this.getWeather('Seoul')
        },
        methods: {
            async getWeather(city) {
                this.toggle = false
                this.isActive = city

                const result = await this.$store.dispatch('getWeatherData', city)

                if (result) {
                    let data = result.data
                    let pattern = /\d{4}-\d{2}-\d{2}/

                    this.weather['city'] = data.city
                    this.weather['img'] = data.image_url
                    this.weather['sky'] = data.current.weather
                    this.weather['date'] = data.current.date.match(pattern)[0]

                    this.toggle = !this.toggle
                } else {
                    alert('Failed to fetch weather data.')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.async {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;

    button {
        width: 150px;
        height: 50px;
        color: white;
        font-size: 18px;
        background-color: rgba(55, 173, 112, 1);
        border-radius: 8px;
        margin: 0 10px;
        outline: none;
    }

    .active {
        background-color: rgba(41, 56, 75, 1);
    }

    .wrapper {
        margin-top: 50px;

        p {
            font-size: 20px;

            span {
                color: rgba(55, 173, 112, 1);
                font-weight: bold;
            }
        }

        img {
            height: 200px;
        }
    }

    .loading{
        font-size: 24px;
        margin: 50px 0;
    }
}
</style>
