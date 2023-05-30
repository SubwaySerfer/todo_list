<template>
  <div class="container">
    <header>
      <nav>
        <ul>
          <li class="nav-item"><span>Task name</span></li>
          <li class="nav-item"><span>Priority</span></li>
          <li class="nav-item"><span>Status</span></li>
          <li class="nav-item"><span>date</span></li>
        </ul>
      </nav>
    </header>
    <div>
      <ul class="container-tasks">
        <task-item
          v-for="task in filteredTasks"
          :key="task.title"
          :title="task.title"
          :days="task.days"
          :priority="task.priority"
        ></task-item>
      </ul>
    </div>
    <div class="footer">
      <router-link to="/register-task"
        ><button>Create Task</button></router-link
      >
    </div>
  </div>
</template>

<script>
import TaskItem from '@/components/home/TaskItem.vue';

export default {
  components: { TaskItem },
  created() {
    this.$store.dispatch('todo/getTasks');
  },
  computed: {
    filteredTasks() {
      const tasks = this.$store.getters['todo/tasks'];
      return tasks;
    },
  },
};
</script>

<style scoped>
.container {
  width: 50vw;
  height: auto;
  background-color: blueviolet;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.nav-item {
  width: 20%;
  display: flex;
  justify-content: center;
  /* text-align: center; */
  text-transform: uppercase;
}
/* .nav-item span {
  text-align: center;
} */
nav {
  margin-left: 3%;
}

header {
  border: 1px solid black;
  border-radius: 10px 10px 0 0;
  margin-bottom: 1rem;
}

ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
  justify-content: start;
  height: 3rem;
  align-items: center;
  font-weight: 600;
}

.footer {
  align-self: flex-end;
  margin-top: 1rem;
  padding: 0 1rem 1rem 0;
}

.container-tasks {
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 3%;
  gap: 1rem;
}
</style>
