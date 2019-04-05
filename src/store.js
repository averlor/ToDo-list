import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nextTodoText: "",
    todos: [
      {
        id: Date.now(),
        title: "First",
        completed: false,
        tasks: [
          {
            id: Date.now(),
            titleTask: "First sub",
            completedTask: false
          }
        ]
      },
      {
        id: Date.now() + 15,
        title: "Second",
        completed: false,
        tasks: [
          {
            id: Date.now(),
            titleTask: "Second sub",
            completedTask: false
          }
        ]
      }
    ]
  },
  computed: {
    capitalizeText() {
      return (
        this.$store.state.nextTodoText.charAt().toUpperCase() +
        this.$store.state.nextTodoText.slice(1)
      );
    },
    getTasks() {
      return this.$store.state.todos.map(todo => todo.tasks);
    }
  },
  getters: {
    GetTodoText: state => {
      return state.nextTodoText;
    },
    GetTodos: state => {
      return state.todos;
    },
    GetTodosCount: state => {
      return state.todos.filter(todo => todo.id).length;
    },
    // ??
    GetTodoTask: (state, payload) => {
      return state.todos.map(todo => {
        if (todo.id === payload.id) {
          return todo.tasks;
        }
      });
    },
    // ??
    CompletedTask: state => {
      return state.todos[0]["tasks"].filter(task => task.completedTask == true);
    },
    // ??
    PedingTask: state => {
      return state.todos[0]["tasks"].filter(
        task => task.completedTask == false
      );
    }
  },
  mutations: {
    updateMessage(state, value) {
      state.nextTodoText = value;
    },
    addTodo(state, payload) {
      if (payload.title) {
        state.todos.push({
          id: Date.now(),
          title: payload.title,
          completed: false,
          tasks: []
        });
      }
    },
    removeTodo(state, todo) {
      return state.todos.splice(state.todos.indexOf(todo), 1);
    },
    editTodo(state, payload) {
      return state.todos.map(todo => {
        if (todo.id === payload.id) {
          todo.title = payload.title;
        }
        return todo;
      });
    },
    removeAllTodo(state) {
      return (state.todos = []);
    },
    // ?
    addTask(state) {
      if (this.capitalizeText) {
        state.todos
          .map(todo => todo.tasks)
          .push({
            id: Date.now(),
            titleTask: this.capitalizeText,
            completedTask: false
          });
        state.nextTodoText = "";
      }
    },
    editTask(state, payload) {
      // ?
      return state.todos.map(todo => {
        if (todo.id === payload.id) {
          todo.title = payload.title;
        }
        return todo;
      });
    },
    completedTask(state, payload) {
      return state.todos.map(todo => {
        if (todo.id === payload.id) {
          todo.completed = !todo.completed
        }
        return todo;
      });
    },
    removeAllTask() {
      return (this.getTasks = []);
    }
  },
  actions: {}
});
