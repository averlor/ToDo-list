import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nextTodoText: "",
    todos: [
      {
        id: 1,
        title: "First",
        completed: false,
        tasks: [
          {
            id: 2,
            titleTask: "First sub",
            completedTask: false
          },
          {
            id: 105,
            titleTask: 'Second sub',
            completedTask: false
          }
        ]
      },
      {
        id: 3,
        title: "Second",
        completed: false,
        tasks: [
          {
            id: 4,
            titleTask: "Second sub",
            completedTask: false
          }
        ]
      }
    ]
  },
  getters: {
    GET_TODOS: state => {
      return state.todos;
    },
    GET_TODOS_COUNT: state => {
      return state.todos.filter(todo => todo.completed == false).length;
    },
    GET_TODO_TASK: state => title => {
      return state.todos.find(todo => todo.title === title)["tasks"];
    },
    GET_TODOS_CURRENT_TASK: state => (title, titleTask) =>  {
      return state.todos.find(todo => todo.title === title)['tasks'].filter(task => task.titleTask === titleTask)[0]
    }
  },
  mutations: {
    UPDATE_MESSAGE(state, value) {
      state.nextTodoText = value;
    },
    ADD_TODO(state, payload) {
      if (payload.title) {
        state.todos.push({
          id: Date.now(),
          title: payload.title,
          completed: false,
          tasks: []
        });
      }
    },
    REMOVE_TODO(state, todo) {
      return state.todos.splice(state.todos.indexOf(todo), 1);
    },
    EDIT_TODO(state, payload) {
      return state.todos.map(todo => {
        if (todo.id === payload.id) {
          todo.title = payload.title;
        }
        return todo;
      });
    },
    REMOVE_ALL_TODO(state) {
      return (state.todos = []);
    },
    ADD_TASK(state, payload) {
      if (payload.title) {
        return state.todos.map(todo => {
          if (todo.title === payload.titleGroup) {
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
    EDIT_TASK(state, payload) {
      return state.todos.map(todo => {
        if (todo.title === payload.titleGroup) {
          todo.tasks.map(task => {
            if (task.titleTask === payload.titleTask) {
              task.titleTask = payload.title
            }
          });
        }
        return todo;
      });
    },
    COMPLETED_TASK(state, payload) {
      return state.todos.map(todo => {
        if (todo.title === payload.titleGroup) {
          todo.tasks.map(task => {
            if (task.titleTask === payload.title) {
              task.completedTask = !task.completedTask;
            }
          });
        }
        return todo;
      });
    },
    REMOVE_TASK(state, payload) {
      return state.todos.map(todo => {
        if (todo.title === payload.titleGroup) {
          todo.tasks.map(task => {
            if (task.titleTask === payload.title) {
              todo.tasks.splice(todo.tasks.indexOf(task), 1)
            }
          })
        }
        return todo;
      })
    },
    REMOVE_ALL_TASK(state, payload) {
      return state.todos.map(todo => {
        if (todo.title === payload.titleGroup) {
          todo.tasks = [];
        }
        return todo;
      });
    }
  },
  actions: {}
});
