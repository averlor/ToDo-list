<template>
  <tr>
    <th scope="row">
      <input
        type="checkbox"
        name="coplete-field"
        class="check-completed"
        @click="$emit('completed', todo.id)"
      >
    </th>
    <th scope="row" class="col-9" v-if="!edit">
      <router-link to="/:groupName">{{ title }}</router-link>
    </th>
    <th scope="row" class="col-9" v-else>
      <input type="text" v-model="title">
    </th>
    <!-- <th scope="row" class="col-2">
      <button class="btn btn-warning" @click="$emit('edit', todo.id)">EDIT</button>
    </th>-->
    <th scope="row" class="col-2">
      <button class="btn btn-warning" @click="editTitle">EDIT</button>
    </th>
    <th scope="row" class="col-2">
      <button class="btn btn-danger" @click="$emit('remove', todo.id)">X</button>
    </th>
  </tr>
</template>

<script>
export default {
  data() {
    return {
      edit: false,
      title: this.todo.title
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
      this.$store.commit("editTodo", { id: this.todo.id, title: this.title });
    }
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>

