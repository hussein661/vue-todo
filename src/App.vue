<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <TodoList :todos="todos" />
        <div class="todo-create-btn-container">
          <TodoCreate @createTodo="createTodo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import store from "@/store";
export default {
  name: "app",
  components: {
    TodoList,
    TodoCreate
  },
  data() {
    return {
      todos: store.state.todos
    };
  },
  methods: {
    createTodo(form) {
      store.dispatch("createTodo", form);
    }
  },
  created() {
    this.todos = store.dispatch("initStore");
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
}

.app-button {
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #795899;
  color: white;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
}

.is-primary {
  background-color: green;
}

.control-button {
  font-size: 14px;
  margin-top: 4px;
  margin-right: 4px;
  color: white;
  display: inline-block;
  padding: 4px 8px;
  border: none;
  border-radius: 1px;
  cursor: pointer;
}
.is-warning {
  background-color: orange;
}

.is-danger {
  background-color: red;
}
.app-form {
  .label {
    display: block;
    font-size: 18px;
    font-weight: bold;
  }
  .form-input {
    padding: 10px;
    font-size: 17px;
    padding: 10px;
  }
  .form-control {
    margin-bottom: 10px;
    text-align: left;
  }
}

.todo {
  &-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  &-create-btn-container {
    margin: 10px;
  }
  &-container {
    display: flex;
    flex-direction: column;
    width: 50%;
    background-color: rgb(37, 36, 36);
    min-height: 200px;
    border-radius: 5px;
    color: white;
  }
}
</style>
