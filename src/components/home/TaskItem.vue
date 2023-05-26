<template>
  <li>
    <h4>{{ title }}</h4>
    <h5>{{ priority }}</h5>
    <h5>None</h5>
    <h6>{{ days }}</h6>
    <button @click="delTask(title)">delete</button>
  </li>
</template>

<script>
export default {
  props: ['title', 'priority', 'days'],
  computed: {
    // tasks() {
    //   return console.log(this.$store.getters['todo/tasks']);
    // },
  },
  methods: {
    delTask(title) {
      const itemIdx = this.$store.getters['todo/tasks'].findIndex(
        (el) => el.title === title
      );
      this.$store.commit('todo/deleteTask', itemIdx);
      this.$store.commit('todo/setLocalStorage');
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}
</style>

<!-- TODO: Разбить сетку задач по гридам в дальнейшем. -->
