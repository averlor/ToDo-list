<template>
    <div>
        <form @submit.prevent="addTodo" class="form">
            <div class="input-group mb3">
                <input type="text" id="new-todo" class="form-control" v-on="listeners" :value="value" placeholder="Added new todo...">
                <div class="input-group-append">
                    <button class="btn btn-secondary" @click.prevent="handleAdd">ADD</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'InputText',
    props: {
        value: {
            type: String,
            default: ''
        },
        addTodo: {
            type: Function
        }
    },
    computed: {
        listeners() {
            return {

            ...this.$listeners,
            input: event => this.$emit('input', event.target.value)
            }
        }
    },
    methods: {
        handleAdd() {
            this.AddTodo(this.value)
        }
    }
}
</script>

