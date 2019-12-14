import Vue from "vue";
const INITIAL_DATA = {
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
const store = {
  state: {
    todos: []
  },
  actions: {
    initStore(state) {
      const todos = localStorage.getItem("my_todos");
      if (!todos) {
        Vue.set(state, "todos", INITIAL_DATA.todos);
      } else {
        Vue.set(state, "todos", JSON.parse(todos));
      }
      return state.todos;
    },
    createTodo(state, todo) {
      todo._id = Math.random()
        .toString(36)
        .substr(2, 7);
      state.todos.push(todo);
      return state.todos;
    },
    updateTodo(state, todoToUpdate) {
      const index = state.todos.findIndex(todo => {
        return todo.id === todoToUpdate.id;
      });
      Vue.set(state.todos, index, todoToUpdate);
      return state.todos;
    },
    deleteTodo(state, todoId) {
      const index = state.todos.findIndex(todo => {
        return todo.id === todoId;
      });
      state.todos.splice(index, 1);
      return state.todos;
    }
  }
};

const persistData = data => {
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem("my_todos", stringifiedData);
};

store.dispatch = function(action, payload) {
  if (!this.actions[action])
    throw new Error(`action ${action} is not defined in the store`);
  const result = this.actions[action](this.state, payload);
  if (!result) return;
  persistData(result);
  return result;
};

export default store;
