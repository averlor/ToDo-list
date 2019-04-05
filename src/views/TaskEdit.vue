<template>
    <div class="task-edit">
        <section class="header">
            <h1></h1>
        </section>
        <section class="content">
             <table class="table table-striped table-light" v-if="todosTask.length">
                <thead>
                <tr>
                    <th colspan="2">Task:</th>
                </tr>
                </thead>
                <tbody>
                <TaskEdit
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
    </div>
</template>

<script>

import TaskEdit from '@/components/TaskEdit.vue'

export default {

    name: 'task-edit',
    components: {
        TaskEdit
    }
    
}
</script>

