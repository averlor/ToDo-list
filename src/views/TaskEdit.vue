<template>
  <div class="task-edit container">
    <section class="header">
      <h1></h1>
    </section>
    <section class="content">
      <table class="table table-striped table-light">
        <thead>
          <tr>
            <th colspan="1">{{ title }}</th>
          </tr>
        </thead>
        <tbody>
          <TaskEdit :task="task"/>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import TaskEdit from "@/components/TaskEdit.vue";

export default {
  name: "task-edit",
  components: {
    TaskEdit
  },
  data() {
    return {
      title: this.$route.params.taskName
    }
  },
  computed: {
    task() {
      return this.$store.getters.GET_TODOS_CURRENT_TASK(this.$route.params.groupName, this.title)
    }
  } 
};
</script>

