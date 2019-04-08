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
    },
    CompletedTask() {
      return this.$store.getters.GetTodoTask.filter(
        task => task.completedTask == true
      ).length;
    },
    PedingTask() {
      return this.$store.getters.PedingTask.filter(
        task => task.completedTask == false
      ).length;
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
      return state.todos.filter(todo => todo.completed == false).length;
    },
    // Передать title
    GetTodoTask: state => title => {
      return state.todos.find(todo => todo.title === title)["tasks"];
    },
    CompletedTask: (state, title) => {
      return this.$getters
        .GetTodoTask(title)
        .filter(task => task.completedTask === true).length;
    },
    PendingTask: (state, getters) => {
      return getters.GetTodoTask.filter(task => task.completedTask == false)
        .length;
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
    addTask(state, payload) {
      console.log(payload);
      if (payload.title) {
        return state.todos.map(todo => {
          if (todo.title === payload.title) {
            todo.tasks.push({
              id: Date.now(),
              titleTask: payload.title,
              completedTask: false
            });
          }
          return todo;
        });
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
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    removeTask() {},
    // ?
    removeAllTask() {
      return (this.GetTodoTask = []);
    }
  },
  actions: {}
});
