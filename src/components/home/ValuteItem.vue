<template>
  <div class="container">
    <img src="@/assets/icons/USD.png" alt="valute icon" />
    <h3>name: {{ name }}</h3>
    <span>value: {{ value }}</span>
    <span>previous value: {{ previousVal }}</span>
    <div class="buttons-container">
      <button @click="$emit('prevVal')">prev</button
      ><button @click="$emit('nextVal')">next</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'value', 'previousVal'],
  emits: ['nextVal', 'prevVal'],
};
//TODO: сделать смену иконок
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 20rem;
  background-color: rgb(181, 184, 184);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 600;
}
.buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
}
button {
  border-radius: 12px;
  border: 1px solid;
  cursor: pointer;
}
img {
  width: 12px;
}
</style>
