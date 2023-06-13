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
          <h3>{{ request.name }}</h3>
          <a v-if="request.urlGitHub" :href="request.urlGitHub" target="_blank"
            >{{ request.name }} GitHub!</a
          >
          <h5>Text:</h5>
          <p>{{ request.text }}</p>
          <!-- {{ request }} -->
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    requestsList() {
      return this.$store.getters['requests/requestsList'];
    },
  },
};
</script>

<style scoped>
.requests-container {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 70vw;
  margin-left: 1vw;
  padding: 0.5rem;
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
}
ul {
  padding-left: 0;
  list-style: none;
  display: flex;
  gap: 1rem;
  flex-direction: column;
}
.request-card {
  border: 1px solid black;
  border-radius: 12px;
  padding: 0.5rem;
}
a {
  text-decoration: none;
}
</style>
