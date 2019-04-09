<template>
    <tr>
        <th scope="row" class="col-9">
            <input type="text" v-model="title">
        </th>
        <th scope="row" class="col-2">
            <button class="btn btn-warning" @click="saveTitle">EDIT</button>
        </th>
    </tr>
</template>

<script>
export default {
  data() {
    return {
      title: this.task.titleTask
    };
  },
  methods: {
    saveTitle() {
      this.$store.commit("editTask", {
        titleGroup: this.$route.params.groupName,
        titleTask: this.$route.params.taskName,
        title: this.title
      });
      // this.$router.go(-1)
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