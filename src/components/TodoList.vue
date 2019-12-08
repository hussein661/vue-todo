<template>
  <div class="todo-list">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :title="todo.title"
      :description="todo['description']"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  components: {
    TodoItem
  },
  props:["todos"],
  data() {
      return {

      };
  }
};
</script>

<style lang="scss" scoped>
    .todo-list {
        flex: 1;
    }
</style>
