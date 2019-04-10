<template>
  <div class="task-list container">
    <section class="header">
      <InputText v-model.trim="message" :addTodo="addTask" @keydown.enter.prevent="addTodo"/>
    </section>
    <section class="content">
      <table class="table table-striped table-light" v-if="todosTask.length">
        <thead>
          <tr>
            <th colspan="2">{{ title }}</th>
          </tr>
        </thead>
        <tbody>
          <TaskItem
            v-for="task in todosTask"
            :key="task.id"
            :task="task"
            :class="{table__completed: task.completedTask}"
          />
        </tbody>
      </table>
      <p
        v-else
        class="content__hello-message"
      >Nothing left in the list. Add a new todo in the input above.</p>
    </section>
    <section class="footer" v-if="todosTask.length">
      <FooterTask @removeAllTask="removeAllTask"/>
    </section>
  </div>
</template>

<script>
import InputText from "@/components/InputText.vue";
import TaskItem from "@/components/TaskItem.vue";
import FooterTask from "@/components/FooterTask.vue";

export default {
  name: "task-list",
  components: {
    InputText,
    TaskItem,
    FooterTask
  },
  data() {
    return {
      title: this.$route.params.groupName
    }
  },
  computed: {
    message: {
      get() {
        return this.$store.state.nextTodoText;
      },
      set(value) {
        this.$store.commit("UPDATE_MESSAGE", value);
      }
    },
    todosTask() {
      return this.$store.getters.GET_TODO_TASK(this.$route.params.groupName);
    },
    group() {
      return this.$route.params.groupName;
    }
  },
  methods: {
    addTask(titleTask) {
      this.$store.commit("ADD_TASK", {
        titleGroup: this.$route.params.groupName,
        title: titleTask
      });
    },
    removeAllTask() {
      this.$store.commit("REMOVE_ALL_TASK", {
        titleGroup: this.$route.params.groupName
      });
    }
  }
};
</script>

<style>

.header{
  margin-top: 20px;
}
.content {
  margin-top: 10px;
}
.content__hello-message {
  font: bold italic 1.25em "Times New Roman";
  color: gray;
  margin: 20px;
}
.table__completed {
  font-size: 0.85em;
  text-decoration: line-through;
}
.footer {
  background-color: white;
  border: 1px solid gray;
  border-radius: 10px;
  margin-top: 15px;
}
.block__info {
  color: lightgray;
  font: bold italic 1.25em "Times New Roman";
  padding-top: 10px;
}
</style>

