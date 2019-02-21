<template>
    <div class="todo">
        <h2>Todo</h2>

        <ul v-if="!isEmpty" class="todo-list">
            <li class="todo-txt" v-for="(todo, idx) in todoList">
                {{todo}}
                <button type="button" name="button" @click="deleteTodo(idx)">-</button>
            </li>
        </ul>

        <div v-if="!isMax" class="add-todo">
            <input
                ref="input"
                type="text"
                name="inputColor"
                maxlength="15"
                placeholder="What needs to be done?"
                v-model="todo"
                @keyup.enter="addTodo()" />
            <button type="button" name="button" @click="addTodo()">+</button>
        </div>
        <p v-else class="msg">The list is full.</p>
    </div>
</template>

<script>
    export default {
        name: 'Todo',
        data() {
            return {
                todo: '',
                todoList: []
            }
        },
        computed: {
            isEmpty() {
                return this.todoList.length === 0
            },
            isMax() {
                return this.todoList.length > 4
            }
        },
        methods: {
            addTodo() {
                if (this.todo === '') return
                this.todoList = this.todoList.concat(this.todo)
                this.todo = ''
            },
            deleteTodo(idx) {
                this.todoList = this.todoList.filter((item, i) => i !== idx)
            }
        },
        mounted() {
            this.$refs.input.focus()
        }
    }
</script>

<style lang="scss" scoped>
    .todo {
        position: relative;
        width: 100%;
        height: 100%;
        color: rgba(41, 56, 75, 1);
        text-align: center;
        box-sizing: border-box;

        .todo-list {
            text-align: left;
            margin: 24px;
            border: 1px solid rgba(55, 173, 112, 1);
            border-radius: 5px;

            .todo-txt {
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

        .add-todo {
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
