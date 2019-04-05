<template>
    <tr>
        <th scope="row">
            <input type="checkbox" name="coplete-field" class="check-completed" @click="$emit('completed', task.id)">
        </th>
        <th scope="row" class="col-9" v-if="!edit">
            <router-link to="/:groupName/:taskName/edit">{{ title }}</router-link>
        </th>
        <th scope="row" class="col-9" v-else>
            <input type="text" v-model="title">
        </th>
        <th scope="row" class="col-2">
            <button class="btn btn-warning" @click="editTitle">EDIT</button>
        </th>
        <th scope="row" class="col-2">
            <button class="btn btn-danger" @click="$emit('remove', task.id)">X</button>
        </th>
    </tr>
</template>

<script>
export default {
  data() {
    return {
      edit: false,
      title: this.task.title
    };
  },
  methods: {
    editTitle() {
      if (this.edit) {
        this.saveTitle();
      }
      this.edit = !this.edit;
    },
    saveTitle() {
      this.$store.commit("editTodo", { id: this.task.id, title: this.title });
    },
    getTodoTask() {
        this.$store.commit('GetTodoTask', {id: this.task.id})
    }
  },
  props: {
    task: {
      type: Object,
      required: true
    }
  }
};
</script>