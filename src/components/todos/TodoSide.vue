<template>
  <section class="container">
    <h2>Filters</h2>
    <form action="">
      <h3>Priority:</h3>
      <div class="priority-box">
        <div class="priority-box_item">
          <input type="checkbox" id="Light" name="Light" />
          <label for="Light">Light</label>
        </div>
        <div class="priority-box_item">
          <input type="checkbox" id="Medium" name="Medium" />
          <label for="Medium">Medium</label>
        </div>
        <div class="priority-box_item">
          <input type="checkbox" id="Hard" name="Hard" />
          <label for="Hard">Hard</label>
        </div>
      </div>
    </form>
  </section>
</template>

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
</style>
