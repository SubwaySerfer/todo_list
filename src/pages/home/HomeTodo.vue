<template>
  <div class="container">
    <header>
      <nav>
        <ul>
          <li><span>Task name</span></li>
          <li><span>Priority</span></li>
          <li><span>Status</span></li>
        </ul>
      </nav>
    </header>
    <div>Todo preview</div>
    <div class="footer">
      <router-link to="/todo"><button>Create Task</button></router-link>
    </div>
  </div>
</template>

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

header {
  border: 1px solid black;
  border-radius: 10px 10px 0 0;
}

ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
  justify-content: space-around;
  height: 3rem;
  align-items: center;
  font-weight: 600;
}

.footer {
  align-self: flex-end;
}
</style>
