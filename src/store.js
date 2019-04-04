import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nextTodoText: '',
    todos: [
      {
        id: Date.now(),
        title: 'First',
        completed: false,
        tasks: [
          {
            id: Date.now(),
            titleTask: 'First sub',
            completedTask: false
          }
        ]
      }
    ]
  },
  computed:{
    capitalizeText() {
      return this.$store.state.nextTodoText.charAt().toUpperCase() + this.$store.state.nextTodoText.slice(1)
    }
  },
  getters:{
    GetTodoText: state => {
      return state.nextTodoText
    },
    GetTodos: state => {
      return state.todos
    },
    CompletedTodo: state => {
      return state.todos.filter(todo => todo.completed == true).length
    },
    PendingTodo: state => {
      return state.todos.filter(todo => todo.completed == false).length
    }
  },
  mutations: {
    addTodo(state) {
      if (this.capitalizeText) {
        state.todos.push({
          id: Date.now(),
          title: this.capitalizeText,
          completed: false,
          tasks: []  
        });
        state.nextTodoText = ''
      }
    },
    removeTodo(state, todo) {
      return state.todos.splice(state.todos.indexOf(todo), 1)
    },
    editTode(state, todo) {
      return state.todos[state.todos.indexOf(todo)].title = prompt('Input new value')
    },
    completedTodo(state, todo) {
      return state.todos[state.todos.indexOf(todo)].completed = !state.todos[state.todos.indexOf(todo)].completed
    },
    removeAll(state) {
      return state.todos = []
    }
  },
  actions: {

  }
})
