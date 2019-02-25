<template lang="html">
    <transition name="modal">
        <div class="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                  <div class="modal-container">
                      <slot name="header"></slot>
                      <slot name="body"></slot>
                      <button @click="closeModal()">OK</button>
                  </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'modal',
        methods: {
            closeModal() {
                this.$emit('update:close', false)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition: opacity .3s ease;

        .modal-mask {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .5);
            display: table;

            .modal-wrapper {
                display: table-cell;
                vertical-align: middle;

                .modal-container {
                    width: 300px;
                    background-color: white;
                    border-radius: 8px;
                    padding: 36px 24px;
                    margin: 0 auto;
                    transition: all .3s ease;

                    h3 {
                        color: rgba(55, 173, 112, 1);
                    }

                    button {
                        width: 50%;
                        height: 35px;
                        color: white;
                        background-color: rgba(55, 173, 112, 1);
                        border-radius: 4px;
                        outline: none;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .modal-enter, .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container, .modal-leave-active .modal-container {
      transform: scale(1.1);
    }
</style>
