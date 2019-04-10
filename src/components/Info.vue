<template>
    <div class="form-inline">
        <div class="block form-group col-10">
            <p class="block__info">Count of groups: {{ all }}</p>
        </div>
        <div class="col-2">
            <button class="btn btn-danger" @click="$emit('removeAll')">remove all</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Info',
    computed: {
        all() {
            return this.$store.getters.GET_TODOS_COUNT
        }
    }
}
</script>