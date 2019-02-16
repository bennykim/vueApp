<template>
<div class="colors">
    <h2>Vue</h2>

    <ul v-if="!isEmpty" class="color-list">
        <li class="color-txt" v-for="(color, idx) in colorList">
            {{color}}
            <button type="button" name="button" @click="deleteColor(idx)">-</button>
        </li>
    </ul>

    <div v-if="!isMax" class="add-color">
        <input
            ref="input"
            type="text"
            name="inputColor"
            maxlength="15"
            placeholder="Please enter a color"
            v-model="color"
            @keyup.enter="addColor()" />
        <button type="button" name="button" @click="addColor()">+</button>
    </div>
    <p v-else class="msg">The list is full.</p>

    <img class="logo" src="@/assets/logo.png" alt="Vue logo" />
</div>
</template>

<script>
export default {
    name: 'Colors',
    data() {
        return {
            color: '',
            colorList: []
        }
    },
    computed: {
        isEmpty() {
            return this.colorList.length === 0
        },
        isMax() {
            return this.colorList.length > 4
        }
    },
    methods: {
        addColor() {
            if (this.color === '') return
            this.colorList = this.colorList.concat(this.color)
            this.color = ''
        },
        deleteColor(idx) {
            this.colorList = this.colorList.filter((color, i) => i !== idx)
        }
    },
    mounted() {
        this.$refs.input.focus()
    }
}
</script>

<style lang="scss" scoped>
.colors {
    position: relative;
    width: 100%;
    height: 100%;
    color: rgba(41, 56, 75, 1);
    text-align: center;
    box-sizing: border-box;

    .logo {
        position: absolute;
        bottom: 24px;
        width: 50px;
        height: 50px;
    }

    .color-list {
        text-align: left;
        margin: 24px;
        border: 1px solid rgba(55, 173, 112, 1);
        border-radius: 5px;

        .color-txt {
            font-size: 16px;
            color: black;
            padding: 12px 0;
        }

        button {
            float: right;
            background: rgba(55, 173, 112, 1);
            border: 0;
            border-radius: 4px;
            margin-right: 24px;
            font-size: 18px;
            line-height: 20px;
            color: white;
        }
    }

    .add-color {
        font-size: 24px;
        display: flex;
        padding: 0 24px;
        margin-bottom: 12px;

        input[type=text] {
            flex: 9;
            width: 300px;
            height: 30px;
            margin-right: 20px;
            padding-left: 12px;
            outline: none;
            font-size: 12px;
        }

        button {
            flex: 1;
            background: rgba(55, 173, 112, 1);
            border: 0;
            border-radius: 4px;
            font-size: 20px;
            line-height: 30px;
            color: white;
        }
    }

    .msg{
        font-size: 20px;
        font-weight: bold;
    }
}
</style>
