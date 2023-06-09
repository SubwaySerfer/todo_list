<template>
  <header>
    <nav>
      <h1><router-link to="/">Todo List</router-link></h1>

      <h2>
        <router-link to="/todo">Tasks: {{ taskCounter }}</router-link>
      </h2>
      <ul>
        <li><router-link to="/contacts">Contact Me</router-link></li>
        <li>
          <router-link to="">Requests</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    taskCounter() {
      if (this.$store.getters['todo/tasks'] == null) {
        return 0;
      }
      return this.$store.getters['todo/tasks'].length;
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 6rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 1rem 1.7rem;
  border: 1px solid transparent;
  font-size: 1.6rem;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.7rem;
}
</style>
