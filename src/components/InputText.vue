<template>
    <div>
        <form @submit.prevent="addTodo" class="form">
            <div class="input-group mb3">
                <input type="text" id="new-todo" v-model.trim="todoText" placeholder="Added new todo...">
            </div>
            <div class="input-group-append">
                <button class="btn btn-secondary">ADD</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'InputText',
    computed: {
        todoText() {
            return this.$store.state.nextTodoText
        }
    }
}
</script>

