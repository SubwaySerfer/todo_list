<template>
  <li>
    <h4>{{ title }}</h4>
    <h5>{{ priority }}</h5>
    <h5>None</h5>
    <h6>{{ days }}</h6>
  </li>
</template>

<script>
export default {
  props: ['title', 'priority', 'days'],
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
