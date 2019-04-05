<template>
  <tr>
    <th scope="row" class="col-9" v-if="!edit">
      <router-link :to="{path: title}">{{ title }}</router-link>
    </th>
    <th scope="row" class="block col-9" v-else>
  
    <input type="text" v-model="title" autofocus class="block__input-edit">    </th>
    <th scope="row" class="col-2">
      <button class="btn btn-warning" @click="editTitle">EDIT</button>
    </th>
    <th scope="row" class="col-2">
      <button class="btn btn-danger" @click="$emit('remove', todo.id)">X</button>
    </th>
  </tr>
</template>

<script>
export default {
  data() {
    return {
      edit: false,
      title: this.todo.title
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
      this.$store.commit("editTodo", { id: this.todo.id, title: this.title });
    }
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
  .block .block__input-edit{
    border-radius: 3px;
  }
  /* .page-enter-active, .page-leave-active{
    transition: opacity 0.1s;
  }
  .page-enter, .page-leave-to{
    opacity: 0;
  } */
</style>


