<template>
    <div class="group-list">
        <section class="header">
            <InputText @addTodo="addTodo"/>
        </section>
        <section class="content">
            <table class="table table-striped table-light" v-if="todos.length">
                <thead>
                    <tr>
                        <th scope="col">
                            Group of Tasks
                        </th>
                    </tr>       
                </thead>
                <tbody>
                    <TodoItem />
                </tbody>
            </table>
            <p v-else class="content__hello-message">
                Nothing left in the list. Add a new todo in the input above.
            </p>
        </section>
        <section class="footer">
            <FooterInfo @removeAll="removeAll"/>
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
        todos() {
            return this.$store.getters.GetTodos
        }
    },
    methods: {
        addTodo() {
            this.$store.commit('addTodo')
        },
        remove(todo) {
            this.$store.commit('removeTodo')
        },
        removeAll() {
            this.$store.commit('removeAll')
        }

    }
}
</script>

<style>
.content .content__hello-message{

}
</style>


