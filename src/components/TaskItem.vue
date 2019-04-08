<template>
  <tr>
    <th scope="row">
      <input
        type="checkbox"
        name="coplete-field"
        class="check-completed"
        @click="$emit('completed', task.id)"
      >
    </th>
    <th scope="row" class="col-9" v-if="!edit">
      <router-link :to="{path: link}">{{ title }}</router-link>
    </th>
    <th scope="row" class="col-9" v-else>
      <input type="text" v-model="title">
    </th>
    <th scope="row" class="col-2">
      <button class="btn btn-danger" @click="$emit('remove', task.id)">X</button>
    </th>
  </tr>
</template>

<script>
export default {
  name: "task",
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      edit: false,
      title: this.task.titleTask,
      link: this.$route.params.groupName + '/' + this.title + '/edit'
    };
  },
  methods: {
    getTodoTask() {
      this.$store.commit("GetTodoTask", { id: this.task.id });
    }
  }
};
</script>