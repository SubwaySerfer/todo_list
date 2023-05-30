<template>
  <li>
    <span class="li-item">{{ title }}</span>
    <span class="li-item">{{ priority }}</span>
    <span class="li-item">None</span>
    <span class="li-item">{{ days }}</span>
    <button @click="delTask(title)">delete</button>
  </li>
</template>

<script>
export default {
  props: ['title', 'priority', 'days'],
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
  justify-content: start;
  width: 100%;
  gap: 0.5rem;
}
.li-item {
  width: 20%;
  height: auto;
  display: block;
  align-self: center;
  text-align: center;
  text-transform: uppercase;
}
</style>

<!-- TODO: Разбить сетку задач по гридам в дальнейшем. -->
