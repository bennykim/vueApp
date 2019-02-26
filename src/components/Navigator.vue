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
        data() {
            return {
                list: [{
                    path: '/todo',
                    name: 'Todo'
                }, {
                    path: '/grid',
                    name: 'Grid'
                }, {
                    path: '/modals',
                    name: 'Modals'
                }, {
                    path: '/counter',
                    name: 'Counter'
                }]
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
