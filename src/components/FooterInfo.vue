<template>
    <div class="block">
        <div class="col-8">
            <p class="block info">Completed Task: {{ completed }}</p>
            <p class="block info">Pending Task: {{ pending }}</p>
        </div>
        <div class="col-3">
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

<style>
    .block{
        background-color: white;
        border: 1px solid gray;
        border-radius: 5px;
    }
    .block .info{
        font: bold italic 1.25em "Times New Roman";
        color: lightgray;
    }
</style>


