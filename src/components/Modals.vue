<template lang="html">
    <div class="modals">
        <h2>Modals</h2>

        <button class="button-show-modal" @click="isModal=true">Show Modal</button>

        <Modal v-if="isModal" :close.sync="isModal">
            <h3 slot="header">Modal Header</h3>
            <p slot="body">Modal Body</p>
        </Modal>
    </div>
</template>

<script>
    import Modal from './Modal'

    export default {
        name: 'Modals',
        data() {
            return {
                isModal: false
            }
        },
        components: {
            Modal
        }
    }
</script>

<style lang="scss" scoped>
    .modals {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;

        .button-show-modal {
            width: 200px;
            height: 50px;
            color: white;
            font-size: 18px;
            border-radius: 8px;
            background-color: rgba(55, 173, 112, 1);
            margin: 50px 0;
            outline: none;
        }
    }
</style>
