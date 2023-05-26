<template>
  <section class="wrapper">
    <base-card>
      <h2>Create Task</h2>
      <todo-form @save-data="saveData"></todo-form>
    </base-card>
  </section>
</template>

<script>
import TodoForm from '@/components/todos/TodoForm';

export default {
  components: {
    TodoForm,
  },
  computed: {
    tasks() {
      return console.log(this.$store.getters['todo/tasks']);
    },
  },
  methods: {
    saveData(data) {
      this.$store.commit('todo/registerTask', data);
      this.$store.commit('todo/setLocalStorage');
      this.$router.replace('/todo');
    },
  },
};
</script>
<!-- <style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: column;
}
.container label {
  font-weight: 600;
  font-size: 1.5rem;
}
.wrapper {
  width: 50vw;
  height: auto;
  background-color: #c2c2c2;
}
header {
  text-align: center;
  height: auto;
  font-size: 1.4rem;
}
h2 {
  margin: 0;
  padding: 0.5rem;
}
.priority-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20%;
}
.priority-container__checkboxes {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 1.5rem;
}
.priority-container__checkboxes_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
  gap: 3px;
}
.radio {
  margin: 0;
}
.container-days {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
}
</style> -->
