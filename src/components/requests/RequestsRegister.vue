<template>
  <section class="container">
    <form @submit.prevent="createRequest">
      <h3>Create Request</h3>
      <div class="input-box">
        <label for="name">Your Name: </label
        ><input type="text" v-model.trim="request.name" />
      </div>
      <div class="input-box">
        <label for="url">Your GitHub URL: </label
        ><input type="url" v-model.trim="request.url" />
      </div>
      <div class="input-box">
        <label for="">Your message: </label>
        <textarea
          name="text"
          id="text"
          cols="25"
          rows="5"
          v-model.trim="request.message"
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
      request: { name: '', url: '', message: '' },
    };
  },
  methods: {
    createRequest() {
      this.$store.dispatch('requests/commitRequests', this.request);
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
.input-box {
  display: flex;
  flex-direction: column;
}
h3 {
  margin: 0;
  padding-bottom: 1rem;
}
</style>
