<template>
    <div class="group-list container">
        <section class="header">
            <InputText v-model.trim="todoText" :addTodo="addTodo" @keydown.enter.prevent="addTodo"/>
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
                    <TaskItem v-for="todo in todos" :key="todo.id" @remove="remove(todo)"/>
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
import TaskItem from '@/components/TaskItem.vue'
import FooterInfo from '@/components/FooterInfo.vue'

export default {
    
    name: 'task-list',
    components: {
        InputText,
        TaskItem,
        FooterInfo
    }
}
</script>

