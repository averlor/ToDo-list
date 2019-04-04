<template>
    <div class="group-list container">
        <section class="header">
            <InputText v-model.trim="todoText" :addTodo="addTodo" @keydown.enter.prevent="addTodo"/>
        </section>
        <section class="content">
            <table class="table table-striped table-light" v-if="todos.length">
                <thead>
                    <tr>
                        <th>Group of Tasks</th>
                    </tr>       
                </thead>
                <tbody>
                    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @remove="remove(todo)"/>
                </tbody>
            </table>
            <p v-else class="content__hello-message">
                Nothing left in the list. Add a new todo in the input above.
            </p>
        </section>
        <section class="footer">
            <FooterInfo @removeAll="removeAll" v-if='todos.length'/>
        </section>
    </div>
</template>

<script>

import InputText from '@/components/InputText.vue'
import TodoItem from '@/components/TodoItem.vue'
import FooterInfo from '@/components/FooterInfo.vue'

export default {
    
    name: 'group-list',
    components: {
        InputText,
        TodoItem,
        FooterInfo
    },
    computed:{
        todoText() {
            return this.$store.state.nextTodoText
        },
        todos() {
            return this.$store.getters.GetTodos
        }
    },
    methods: {
        addTodo() {
            this.$store.commit('addTodo')
        },
        remove() {
            this.$store.commit('removeTodo')
        },
        removeAll() {
            this.$store.commit('removeAll')
        }

    }
}
</script>

<style>
.content{
    margin-top: 5px;
}
.content .content__hello-message{
    font: bold italic 1.25em "Times New Roman";
    color: gray;
    margin: 20px;
}
.footer{
    background-color: white;
    border: 1px solid gray;
    border-radius: 10px;
    margin-top: 15px;
}
.footer .block__info{
        color: lightgray;
        font: bold italic 1.25em "Times New Roman";
        padding-top: 10px;
    }
</style>


