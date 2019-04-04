<template>
    <tr>
        <th scope="row">
            <input type="checkbox" name="coplete-field" class="check-completed" @click="$emit('completed', todo.id)">
        </th>
        <th scope="row" class="col-9">
            <router-link to="/:groupName">{{ todo.title }}</router-link>
        </th>
        <th scope="row" class="col-2">
            <button class="btn btn-danger" @click="$emit('remove', todo.id)">X</button>
        </th>
    </tr>
</template>

<script>
export default {
    
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>

