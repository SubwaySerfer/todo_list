<template>
  <section class="container">
    <ul>
      <base-card v-for="task in tasksArr" :key="task.title" class="card">
        <div class="header-box">
          <div class="title-box">
            <h2>Title:</h2>
            <span class="title">{{ task.title }}</span>
          </div>
          <div class="header-box_info">
            <span class="priority">Priority: {{ task.priority }}</span>
            <span>Deadline: {{ task.days }}</span>
          </div>
        </div>

        <h3>Description:</h3>
        <p>{{ task.description }}</p>
      </base-card>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tasksArr: [],
    };
  },
  created() {
    this.$store.commit('todo/getLocalStorage');
    this.tasksArr = this.tasksData;
  },
  computed: {
    tasksData() {
      return this.$store.getters['todo/tasks'];
    },
    currentTaskList() {
      return this.$store.getters['todo/currentTaskList'];
    },
  },
  watch: {
    currentTaskList(newVal, oldVal) {
      if (newVal != oldVal) {
        this.tasksArr = [];
        for (let key in this.currentTaskList) {
          this.tasksArr.push(this.currentTaskList[key]);
        }
      }
    },
  },
};
</script>
<style scoped>
.container {
  width: 60vw;
  background-color: rgb(181, 184, 184);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
}
h2,
h3 {
  margin: 0;
}
.header-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.title-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.title-box span {
  font-size: 1.5rem;
  font-weight: 600;
}
.priority {
  justify-self: center;
}
.header-box_info {
  display: flex;
  flex-direction: column;
}
</style>
