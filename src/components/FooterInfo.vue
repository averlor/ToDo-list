<template>
    <div class="form-inline">
        <div class="block form-group col-5">
            <p class="block__info">Completed: {{ completed }}</p>
        </div>
        <div class="from-group col-5">
            <p class="block__info">Pending: {{ pending }}</p>
        </div>
        <div class="col-2">
            <button class="btn btn-danger" @click="$emit('removeAll')">remove all</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterInfo',
    computed: {
        completed() {
            return this.$store.getters.CompletedTodo
        },
        pending() {
            return this.$store.getters.PendingTodo
        }
    }
}
</script>