<template>
  <div class="wrapper_home">
    <home-info></home-info>
    <home-todo></home-todo>
    <weather-info></weather-info>
  </div>
</template>

<script>
import WeatherInfo from './WeatherInfo.vue';
import HomeTodo from './HomeTodo.vue';
import HomeInfo from './HomeInfo.vue';

export default {
  components: {
    WeatherInfo,
    HomeTodo,
    HomeInfo,
  },
  created() {
    this.$store.dispatch('home/getWeather');
    this.$store.dispatch('home/getDailyRate');
  },
};
</script>

<style scoped>
.wrapper_home {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 3vw;
}
</style>
