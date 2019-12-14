<template>
  <modal ref="modal">
    <form class="app-form">
      <div class="form-control">
        <label class="label">Title</label>
        <input class="form-input" v-model="form.title" type="text" />
      </div>
      <div class="form-control">
        <label class="label">Description</label>
        <input class="form-input" v-model="form.description" type="text" />
      </div>
      <div class="app-error">
        <div class="form-error">
          {{ formError }}
        </div>
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
      formError: "",
      forceClose: false
    };
  },
  computed: {
    isFormValid() {
      const { title, description } = this.form;
      return title.length > 5 && description.length > 10 ? true : false;
    }
  },
  methods: {
    createTodo(e) {
      e.preventDefault();
      if (this.isFormValid) {
        this.formError = "";
        this.$emit("createTodo", this.form);
        this.$refs.modal.close();
        this.form = {
          title: "",
          description: ""
        };
      } else {
        this.formError = "Form Error! Title and Description should be ...";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form-error {
  padding: 10px 0;
  color: red;
}
</style>
