<template>
  <tr>
    <th scope="row">
      <input type="checkbox" name="coplete-field" class="check-completed" @click="handleComplete">
    </th>
    <th scope="row" class="col-9" v-if="!edit">
      <router-link :to="{path: link}">{{ title }}</router-link>
    </th>
    <th scope="row" class="col-9" v-else>
      <input type="text" v-model="title">
    </th>
    <th scope="row" class="col-2">
      <button class="btn btn-danger" @click="handleRemove">X</button>
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
      link: this.$route.params.groupName + "/" + this.task.titleTask + "/edit"
    };
  },
  methods: {
    getTodoTask() {
      this.$store.commit("GET_TODO_TASK", { id: this.task.id });
    },
    handleComplete() {
      return this.$store.commit("COMPLETED_TASK", {
        titleGroup: this.$route.params.groupName,
        title: this.task.titleTask
      });
    },
    handleRemove() {
      return this.$store.commit('REMOVE_TASK', {
        titleGroup: this.$route.params.groupName,
        title: this.task.titleTask
        })
    }
  }
};
</script>