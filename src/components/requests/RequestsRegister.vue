<template>
  <section class="container">
    <form @submit.prevent="submitForm">
      <h3>Create Request</h3>
      <div class="form-control" :class="{ invalid: !name.isValid }">
        <label for="name">Your Name: </label
        ><input
          type="text"
          v-model.trim="name.val"
          id="name"
          name="name"
          @blur="clearValidity('name')"
        />
        <p class="isNotValid" v-if="!name.isValid">Name must not be empty.</p>
      </div>
      <div class="form-control" :class="{ invalid: !url.isValid }">
        <label for="url">Your GitHub URL: </label
        ><input
          type="text"
          id="url"
          name="url"
          v-model.trim="url.val"
          @blur="clearValidity('url')"
        />
        <p class="isNotValid" v-if="!url.isValid">
          URL must include github.com
        </p>
      </div>
      <div class="form-control" :class="{ invalid: !message.isValid }">
        <label for="message">Your message: </label>
        <textarea
          id="message"
          cols="25"
          rows="5"
          @blur="clearValidity('message')"
          v-model.trim="message.val"
        ></textarea>
        <p class="isNotValid" v-if="!message.isValid">
          Must be more than 12 characters.
        </p>
      </div>
      <button>Create</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
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

      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    submitForm() {
      this.validateRequest();
      if (!this.formIsValid) {
        return;
      }
      const request = {
        name: this.name.val,
        urlGitHub: this.url.val,
        message: this.message.val,
      };
      this.$store.commit('requests/createRequest', request);
      this.$store.dispatch('requests/registerRequest', request);
      (this.name.val = ''), (this.url.val = ''), (this.message.val = '');
    },

    validateRequest() {
      this.formIsValid = true;
      if (this.name.val.length < 3) {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (!this.url.val.toLowerCase().includes('github.com')) {
        this.url.isValid = false;
        this.formIsValid = false;
      }
      if (this.message.val.length < 12 || this.message.val.length > 250) {
        this.message.isValid = false;
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
.isNotValid {
  margin-top: 0.3rem;
  margin-bottom: 0;
  color: red;
}
</style>
