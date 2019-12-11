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
import playground from "./playground";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
export default {
  name: "app",
  components: {
    TodoList,
    TodoCreate
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "walk a dog",
          description: "walk a dog throub a zoo"
        },
        {
          id: 2,
          title: "vuy a bfraddd",
          description: "walk a dog throub a zoo"
        },
        {
          id: 3,
          title: "learn proframmin",
          description: "walk a dog throub a zssda asd asd aoo"
        }
      ]
    };
  },
  methods: {
    createTodo(form) {
      this.todos.push({
        id: this.todos.length + 1,
        title: form.title,
        description: form.description
      });
    }
  },
  created() {
    playground();
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

// .block-display {
//   display: block
// }

// .none-display {
//   display: none;

// }

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
    /* margin:0 auto; */
    background-color: orangered;
    min-height: 400px;
    border-radius: 5px;
  }
}
</style>
