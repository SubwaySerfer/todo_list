<template>
  <base-spinner v-if="isLoading"></base-spinner>
  <div class="container" v-else>
    <div class="valute-item">
      <img
        :src="require(`@/assets/icons/${this.nameIcon}.png`)"
        alt="valute icon"
      />
      <h3>{{ name }}</h3>
    </div>

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
  data() {
    return {
      nameIcon: 'USD',
      isLoading: false,
    };
  },
  created() {
    if (this.name == undefined) {
      this.isLoading = true;
    }
  },
  watch: {
    name() {
      if (this.name != undefined) {
        this.isLoading = false;
      }
    },
  },
  beforeUpdate() {
    if (this.nameIcon != this.name) {
      this.nameIcon = this.name;
    }
  },
};
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
  height: min-content;
  gap: 1.2rem;
}

.buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
}
.valute-item {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
}
h3 {
  margin: 0;
}
button {
  border-radius: 12px;
  border: 1px solid;
  cursor: pointer;
}
img {
  width: 15px;
  height: 15px;
}
</style>
