<template>
  <div v-if="!editMode" class="todo-item">
    <div class="todo-item-content">
      <div class="todo-item-content-title">
        {{ title }}
      </div>
      <div class="todo-item-content-description">
        {{ description }}
      </div>
    </div>
    <button @click="editMode = true" class="control-button is-warning">
      Edit
    </button>
    <div @click="deleteTodo" class="control-button is-danger">
      Delete
    </div>
  </div>
  <div v-else class="todo-item">
    <form class="app-form">
      <div class="form-control">
        <label class="label">Title</label>
        <input class="form-input" v-model="todo.title" type="text" />
      </div>
      <div class="form-control">
        <label class="label">Description</label>
        <input class="form-input" v-model="todo.description" type="text" />
      </div>
      <button type="button" @click="editTodo" class="control-button is-warning">
        save
      </button>
      <button
        @click.prevent="editMode = false"
        class="control-button is-warning"
      >
        cancel
      </button>
    </form>
  </div>
</template>

<script>
import store from "@/store";
export default {
  props: ["id", "title", "description"],
  methods: {
    editTodo() {
      store.dispatch("updateTodo", { ...this.todo });
      this.editMode = false;
    },
    deleteTodo() {
      store.dispatch("deleteTodo", this.todo.id);
    }
  },
  data() {
    return {
      editMode: false,
      todo: {
        id: this.id,
        title: this.title,
        description: this.description
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.todo {
  &-item {
    background-color: gray;
    min-height: 70px;
    margin: 10px;
    padding: 10px;
    color: white;
    border-radius: 5px;
    font-size: 23px;
    &-content {
      &-title {
        font-weight: bold;
      }
      &-description {
        font-size: 19px;
      }
    }
  }
}
</style>
