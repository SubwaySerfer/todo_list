<template>
  <section class="container">
    <form @submit.prevent="submitForm">
      <h3>Create Request</h3>
      <div class="form-control" :class="{ invalid: !request.name.isValid }">
        <label for="name">Your Name: </label
        ><input
          type="text"
          v-model.trim="request.name.val"
          id="name"
          name="name"
          @blur="clearValidity('name')"
        />
      </div>
      <div class="form-control" :class="{ invalid: !request.url.isValid }">
        <label for="url">Your GitHub URL: </label
        ><input
          type="text"
          id="url"
          name="url"
          v-model.trim="request.url.val"
          @blur="clearValidity('url')"
        />
      </div>
      <div class="form-control" :class="{ invalid: !request.message.isValid }">
        <label for="message">Your message: </label>
        <textarea
          id="message"
          cols="25"
          rows="5"
          @blur="clearValidity('message')"
          v-model.trim="request.message.val"
        ></textarea>
      </div>
      <button>Create</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      request: {
        name: {
          val: '',
          isValid: true,
        },
        url: {
          val: '',
          isValid: true,
        },
        message: {
          val: '',
          isValid: true,
        },
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this.request[input].isValid = true;
    },
    submitForm() {
      this.validateRequest();
      if (!this.formIsValid) {
        return;
      }
    },
    validateRequest() {
      this.formIsValid = true;
      if (this.request.name.val.length < 3) {
        this.request.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.request.url.val.length < 6) {
        this.request.url.isValid = false;
        this.formIsValid = false;
      }
      if (this.request.message.val.length < 15) {
        this.request.message.isValid = false;
        this.formIsValid = false;
      }
    },
  },
};

//TODO: сделать vuex request-ы, а затем подключить сервак для них!
</script>

<style scoped>
.container {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 15vw;
  padding: 1rem 0.8rem;
}
.form-control {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
}
h3 {
  margin: 0;
  padding-bottom: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
