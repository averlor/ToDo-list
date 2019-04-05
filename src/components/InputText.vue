<template>
  <div>
    <form class="form" @submit.prevent="handleAdd">
      <div class="input-group mb3">
        <input
          type="text"
          id="new-todo"
          class="form-control"
          v-model="newTitle"
          placeholder="Added new todo..."
        >
        <div class="input-group-append">
          <!-- <button class="btn btn-secondary" @click.prevent="handleAdd" type="submit">ADD</button> -->
          <button class="btn btn-secondary" type="submit">ADD</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "InputText",
  data() {
    return {
      newTitle: ""
    };
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    addTodo: {
      type: Function
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    }
  },
  methods: {
    handleAdd() {
      this.addTodo(this.newTitle);
      this.newTitle = "";
    }
  }
};
</script>

