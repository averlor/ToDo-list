<template>
    <div class="group-list container">
        <section class="header">
            <InputText v-model.trim="message" :addTodo="addTask" @keydown.enter.prevent="addTodo"/>
        </section>
        <section class="content">
            <table class="table table-striped table-light" v-if="todosTask.length">
                <thead>
                <tr>
                    <th colspan="1">Task:</th>
                </tr>
                </thead>
                <tbody>
                <TaskItem
                    v-for="task in todosTask"
                    :key="task.id"
                    :todo="task"
                    @remove="remove(task)"
                    @completed="completed(task)"
                    :class="{table__completed: task.completed}"
                />
                </tbody>
            </table>
            <p
                v-else
                class="content__hello-message"
            >Nothing left in the list. Add a new todo in the input above.</p>
        </section>
        <section class="footer">
            <FooterTask @removeAllTask="removeAllTask" v-if='todosTask.length'/>
        </section>
    </div>
</template>

<script>

import InputText from '@/components/InputText.vue'
import TaskItem from '@/components/TaskItem.vue'
import FooterTask from '@/components/FooterTask.vue'

export default {
    
    name: 'task-list',
    components: {
        InputText,
        TaskItem,
        FooterTask
    },
    computed: {
    message: {
      get() {
        return this.$store.state.nextTodoText;
      },
      set(value) {
        this.$store.commit("updateMessage", value);
      }
    },
      todosTask() {
        return this.$store.getters.GetTodoTask
      }
    },
    methods: {
        addTask() {
            // my code
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

