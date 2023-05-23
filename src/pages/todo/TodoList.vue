<template>
  <section class="wrapper">
    <header><h2>Create Task</h2></header>
    <form @submit.prevent="">
      <div class="priority-container">
        <h3>Priority</h3>
        <div class="priority-container__checkboxes">
          <div class="priority-container__checkboxes_item">
            <input
              class="radio"
              type="radio"
              id="hight"
              value="hight"
              v-model="priority"
            />
            <label for="hight">Hight</label>
          </div>
          <div class="priority-container__checkboxes_item">
            <input
              class="radio"
              type="radio"
              id="medium"
              value="medium"
              v-model="priority"
            />
            <label for="medium">Medium</label>
          </div>
          <div class="priority-container__checkboxes_item">
            <input
              class="radio"
              type="radio"
              id="light"
              value="light"
              v-model="priority"
            />
            <label for="light">Light</label>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      priority: null,
    };
  },
};
</script>

<style scoped>
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
</style>
