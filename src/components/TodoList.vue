<template>
  <div class="todo-list">
    <div v-if="todos && todos.length > 0">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :id="todo.id"
        :title="todo.title"
        :description="todo['description']"
      />
    </div>
    <div v-else class="no-todos">
      No todos :( let's create one!
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  components: {
    TodoItem
  },
  props: ["todos"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.todo-list {
  flex: 1;
}
.no-todos {
  text-align: center;
  font-size: 23px;
  margin-top: 15px;
}
</style>
