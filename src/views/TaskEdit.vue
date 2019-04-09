<template>
  <div class="task-edit container">
    <section class="header">
      <h1></h1>
    </section>
    <section class="content">
      <table class="table table-striped table-light">
        <thead>
          <tr>
            <th colspan="1">{{ $route.params.taskName }}</th>
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
  computed: {
    task() {
      console.log(this.$route.params.groupName, this.$route.params.taskName)

      return this.$store.getters.GetTodosCurrentTask(this.$route.params.groupName, this.$route.params.taskName)
    }
  } 
};
</script>

