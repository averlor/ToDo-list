<template>
  <div class="group-list container">
    <section class="header">
      <h1>Todo</h1>
      <InputText v-model.trim="message" :addTodo="addTodo" @keydown.enter.prevent="addTodo"/>
    </section>
    <section class="content">
      <table class="table table-striped table-light" v-if="todos.length">
        <thead>
          <tr>
            <th colspan="1">Groups</th>
          </tr>
        </thead>
        <tbody>
          <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @remove="remove(todo)"
          />
        </tbody>
      </table>
      <p
        v-else
        class="content__hello-message"
      >Nothing left in the list. Add a new todo in the input above.</p>
    </section>
    <section class="footer" v-if="todos.length">
      <FooterInfo @removeAll="removeAll"/>
    </section>
  </div>
</template>

<script>
import InputText from "@/components/InputText.vue";
import TodoItem from "@/components/TodoItem.vue";
import FooterInfo from "@/components/FooterInfo.vue";

export default {
  name: "group-list",
  components: {
    InputText,
    TodoItem,
    FooterInfo
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
    todos() {
      return this.$store.getters.GET_TODOS;
    }
  },
  methods: {
    addTodo(title) {
      this.$store.commit("ADD_TODO", { title: title });
    },
    remove() {
      this.$store.commit("REMOVE_TODO");
    },
    removeAll() {
      this.$store.commit("REMOVE_ALL_TODO");
    }
  }
};
</script>

<style>
.content {
  margin-top: 5px;
}
.content__hello-message {
  font: bold italic 1.25em "Times New Roman";
  color: gray;
  margin: 20px;
}
.table__completed {
  color: lightgray;
  font-size: 0.95em;
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


