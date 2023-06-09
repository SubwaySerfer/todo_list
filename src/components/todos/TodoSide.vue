<template>
  <section class="container">
    <h2>Filters</h2>
    <form action="" @submit.prevent="">
      <h3>Priority:</h3>
      <div class="priority-box">
        <div class="priority-box_item">
          <input type="checkbox" id="light" value="light" v-model="priority" />
          <label for="light">Light</label>
        </div>
        <div class="priority-box_item">
          <input
            type="checkbox"
            id="medium"
            value="medium"
            v-model="priority"
          />
          <label for="medium">Medium</label>
        </div>
        <div class="priority-box_item">
          <input type="checkbox" id="high" value="high" v-model="priority" />
          <label for="high">High</label>
        </div>
      </div>
      <div class="btn-container">
        <button @click="useFilters">Use Filters</button>
        <button @click="resetFilters">Reset</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      priority: [],
    };
  },
  created() {
    this.priority = JSON.parse(localStorage.getItem('filters'));
  },
  methods: {
    useFilters() {
      this.$store.dispatch('todo/getCurrentTasks', this.priority);
    },
    resetFilters() {
      this.priority = [];
      this.useFilters();
    },
  },
  watch: {
    priority() {
      localStorage.setItem('filters', JSON.stringify(this.priority));
    },
  },
};
</script>

<style scoped>
.container {
  background-color: rgb(181, 184, 184);
  width: 20%;
  height: min-content;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  margin-left: 1rem;
}
h3 {
  margin: 0.5rem 0 0.5rem 0.5rem;
}
.priority-box {
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 0.5rem;
}
.priority-box_item {
  display: flex;
  align-items: center;
}
input,
label {
  cursor: pointer;
}
button {
  border-radius: 12px;
  background-color: #f391e3;
  border: 1px solid #f391e3;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  transition: all 0.25s ease-in-out;
}
button:hover {
  transform: scale(1.07);
}
.btn-container {
  display: flex;
  flex-direction: row;
  gap: 5%;
  margin-top: 1rem;
}
</style>
