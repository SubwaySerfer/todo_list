<template>
  <div class="wrapper">
    <todo-side></todo-side>
    <todo-items></todo-items>
  </div>
</template>

<script>
import TodoSide from '@/components/todos/TodoSide.vue';
import TodoItems from '@/components/todos/TodoItems.vue';

export default {
  components: {
    TodoSide,
    TodoItems,
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  gap: 3%;
}
</style>
