<template>
  <modal>
    <form class="app-form">
      <div class="form-control">
        <label class="label">Title</label>
        <input class="form-input" v-model="form.title" type="text" />
      </div>
      <div class="form-control">
        <label class="label">Description</label>
        <input class="form-input" v-model="form.description" type="text" />
      </div>
      <button @click="createTodo" class="app-button is-primary">
        Confirm
      </button>
    </form>
  </modal>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  components: {
    Modal
  },
  data() {
    return {
      form: {
        title: "",
        description: ""
      },
      forceClose: false
    };
  },
  computed: {
    isFormValid() {
      return this.form.title && this.form.description ? true : false;
    }
  },
  methods: {
    createTodo(e) {
      e.preventDefault();
      if (this.isFormValid) {
        this.$emit("createTodo", this.form);
        this.form = {
          title: "",
          description: ""
        };
      }
    }
  }
};
</script>
