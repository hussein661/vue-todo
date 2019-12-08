<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <TodoList :todos="todos" />
        <div class="todo-create-btn-container">
          <div @click="openModal" class="app-button">
            Create
          </div>
        </div>
      </div>
    </div>
    <Modal :isActive="isActive" />
  </div>
</template>

<script>
import playground from "./playground";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";
export default {
  name: "app",
  components: {
    TodoList,
    Modal
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
      ],
      isActive: false
    };
  },
  methods: {
    openModal() {
      this.isActive = !this.isActive;
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
  text-align: center;
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
