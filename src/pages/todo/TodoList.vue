<template>
  <section class="wrapper">
    <header><h2>Create Task</h2></header>
    <form @submit.prevent="" class="content">
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="title" />
      </div>
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
      <div class="container">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div class="container-days">
        <label for="">The task for how long?</label>
        <select id="days" name="days" v-model="days">
          <option value="today">Today</option>
          <option value="week">Week</option>
        </select>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      priority: null,
      days: 'today',
    };
  },
};
</script>

<style scoped>
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
</style>
