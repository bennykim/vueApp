<template lang="html">
    <div class="navigator">
        <ul>
            <li v-for="item in list">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Navigator',
        computed: {
            list() {
                const routes = this.$router.options.routes[0].children
                return routes.map((route) => {
                    let path = route.path
                    let name = route.name
                    return {
                        path: `/${path}`,
                        name: name.charAt(0).toUpperCase() + name.slice(1)
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navigator{
        position: relative;
        border-bottom: 1px solid rgba(55, 173, 112, 1);

        ul{
            list-style: none;
            text-align: left;
            padding-left: 24px;

            li {
                display: inline;
                padding: 0;
                margin-right: 40px;

                a{
                    font-size: 18px;
                    font-weight: bold;
                    color: black;
                    text-decoration: none;
                    transition: color .5s ease;

                    &:hover{
                        color: rgba(55, 173, 112, 1);
                    }
                }
            }
        }
    }
</style>
