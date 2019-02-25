<template lang="html">
    <div class="grid">
        <h2>Grid</h2>

        <input
            type="text"
            name="search"
            value=""
            maxlength="10"
            placeholder="Please enter keywords"
            v-model="searchKey" />

        <table>
            <thead>
                <tr class="thead-tr">
                    <th v-for="key in gridColumns" :class="{'active': sortKey === key}">
                        {{key}}
                        <span
                            class="arrow"
                            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"
                            @click="sortBy(key)"></span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in filterData">
                    <th v-for="key in gridColumns" :class="{'active': sortKey === key}">{{item[key]}}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Grid',
        data() {
            return {
                sortKey: '',
                searchKey: '',
                sortOrders: {},
                gridColumns: ['name', 'age', 'weight'],
                gridData: [{
                    name: 'Jack', age: 20, weight: 70
                }, {
                    name: 'Lee', age: 30, weight: 88
                }, {
                    name: 'Chuck', age: 17, weight: 75
                }, {
                    name: 'Ralph', age: 41, weight: 69
                }, {
                    name: 'Mark', age: 25, weight: 80
                }]
            }
        },
        computed: {
            filterData() {
                let data = this.gridData
                let sortKey = this.sortKey
                let searchKey = this.searchKey
                let order = this.sortOrders[sortKey] || 1

                if (searchKey) {
                    data = data.filter((row) => {
                        return Object.keys(row).some((key) => {
                           return String(row[key]).toLowerCase().indexOf(searchKey) > -1
                        })
                    })
                }
                if (sortKey) {
                    data = data.sort((a, b) => {
                        a = a[sortKey]
                        b = b[sortKey]
                        return (a === b ? 0 : a > b ? 1 : -1) * order
                    })
                }

                return data
            }
        },
        mounted() {
            let sortOrders = {}
            this.gridColumns.forEach((key) => {
                sortOrders[key] = 1
            })
            this.sortOrders = sortOrders
        },
        methods: {
            sortBy(key) {
                this.sortKey = key
                this.sortOrders[key] = this.sortOrders[key] * -1
            }
        }
    }
</script>

<style lang="scss" scoped>
    .grid{
        position: relative;
        width: 100%;
        height: 100%;
        color: rgba(41, 56, 75, 1);
        text-align: center;
        padding: 0 24px;
        box-sizing: border-box;

        input[type=text] {
            float: left;
            width: 200px;
            height: 24px;
            outline: none;
            margin: 12px 0;
            padding-left: 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            color: white;

            .thead-tr {
              background-color: rgba(41, 56, 75, 1);
            }

            tr {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              background-color: rgba(55, 173, 112, 1);

                th {
                  border: 1px solid white;
                  padding: 10px;
                  opacity: .7;

                  .arrow {
                      display: inline-block;
                      vertical-align: middle;
                      width: 0;
                      height: 0;
                      margin-left: 5px;
                      cursor: pointer;
                  }

                  .asc {
                      border-left: 4px solid transparent;
                      border-right: 4px solid transparent;
                      border-bottom: 4px solid white;
                  }

                  .dsc {
                      border-left: 4px solid transparent;
                      border-right: 4px solid transparent;
                      border-top: 4px solid #fff;
                    }
                }

                .active{
                    opacity: 1;
                }
            }
        }
    }
</style>
