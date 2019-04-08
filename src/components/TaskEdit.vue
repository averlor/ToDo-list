<template>
    <tr>
        <th scope="row" class="col-9" v-if="!edit">
           {{ title }}
        </th>
        <th scope="row" class="col-9" v-else>
            <input type="text" v-model="title">
        </th>
        <th scope="row" class="col-2">
            <button class="btn btn-warning" @click="handleEdit">EDIT</button>
        </th>
    </tr>
</template>

<script>
export default {
  data() {
    return {
      edit: false,
      title: this.task.titleTask
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
      this.$store.commit("editTask", { titleGroup: this.$route.param.taskName, title: this.title });
    },
    handleEdit() {
      return this.$store.commit("editTask", {
        titleGroup: this.$route.params.groupName,
        title: this.task.titleTask
    });
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