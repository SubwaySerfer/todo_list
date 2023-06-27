<template>
  <section class="container">
    <ul>
      <base-card v-for="task in tasksArr" :key="task.title" class="card">
        <div class="header-box">
          <div class="header-box_text">
            <div class="header-box_title">
              <h2>Title:</h2>
              <span class="title">{{ task.title }}</span>
            </div>
            <div class="header-box_text_couple">
              <h3>Description:</h3>
              <p>{{ task.description }}</p>
            </div>
          </div>
          <div class="header-box_info">
            <div class="info_labels">
              <span class="priority">Priority: {{ task.priority }}</span>
              <span>Frequency: {{ task.frequency }}</span>
              <span>Status: {{ task.status }}</span>
            </div>
            <div>
              <button :name="task.id" @click="finishTask">Done</button>
            </div>
          </div>
        </div>
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
    this.tasksArr = this.tasksData;
    let localFilters = JSON.parse(localStorage.getItem('filters'));
    if (localFilters) {
      this.$store.dispatch('todo/getCurrentTasks', localFilters);
    }
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
    currentTaskList() {
      this.tasksArr = [];
      for (let key in this.currentTaskList) {
        this.tasksArr.push(this.currentTaskList[key]);
      }
    },
  },
  methods: {
    finishTask() {
      this.$store.commit('todo/finishedTask', event.target.name);
      this.$store.commit('todo/setLocalStorage');
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
.header-box_text {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  margin-bottom: 1rem;
}
.header-box_text span {
  font-size: 1.5rem;
  font-weight: 600;
}
.header-box_title {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: flex-start;
}

.priority {
  justify-self: center;
}
.header-box_info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 12rem;
}
.info_labels {
  display: flex;
  flex-direction: column;
}
</style>
