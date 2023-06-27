<template>
  <section>
    <div class="requests-container">
      <h2>Requests:</h2>
      <ul>
        <li
          v-for="request in requestsList"
          :key="request.name"
          class="request-card"
        >
          <div class="request-card_label">
            <h3>{{ request.name }}</h3>
            <a
              v-if="request.urlGitHub"
              :href="request.urlGitHub"
              target="_blank"
              >{{ request.name }} GitHub here!</a
            >
          </div>
          <div>
            <h5>{{ request.name }} message:</h5>
            <p>{{ request.message }}</p>
          </div>

          <!-- {{ request }} -->
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  created() {
    this.$store.dispatch('requests/getDataRequests');
  },
  computed: {
    requestsList() {
      return this.$store.getters['requests/requestsList'];
    },
  },
};
</script>

<style scoped>
.requests-container {
  /* border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26); */
  width: 70vw;
  margin-left: 2vw;
  padding: 0.5rem;
  padding-bottom: 1rem;
}
h2,
ul,
h3,
h4,
p,
h5 {
  margin: 0;
}
h2 {
  padding: 0.5rem 0 0.5rem 1rem;
  margin-bottom: 1rem;
  font-size: 2rem;
}
h3 {
  font-size: 1.6rem;
}
h5 {
  font-size: 1rem;
  font-weight: 600;
}
ul {
  padding-left: 0;
  list-style: none;
  display: flex;
  gap: 2.2rem;
  flex-direction: column;
}
.request-card {
  /* border: 1px solid black; */
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 3px 8px 2px rgba(0, 0, 0, 0.26);
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
}
.request-card_label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  text-decoration: none;
}
</style>
