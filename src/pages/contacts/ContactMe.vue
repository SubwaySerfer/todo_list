<template>
  <div class="container">
    <h1 class="">CONTACT ME</h1>
    <p class="">
      I am available for hire and open to any ideas of cooperation.
    </p>
    <ul>
      <li class="">
        <label for="" class="">E-mail:</label>
        <a href="mailto:subwayserfer.job@gmail.com" class=""
          >Subwayserfer.job@gmail.com
        </a>
      </li>
      <li class="">
        <label for="" class="">LinkedIn:</label>
        <a href="https://www.linkedin.com/in/subway" target="_blank" class=""
          >Subway</a
        >
      </li>
      <li class="">
        <label for="" class="">GitHub:</label>
        <a href="https://github.com/SubwaySerfer" target="_blank" class=""
          >SubwaySerfer</a
        >
      </li>
      <li class="">
        <label for="" class="">Twitter:</label>
        <a href="https://twitter.com/Subway_Serfer" target="_blank" class=""
          >@Subway_Serfer</a
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  // created() {
  //   this.$store.commit('todo/getLocalStorage');
  // },
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 2rem auto;
  font-size: 1.6rem;
}
ul {
  list-style: none;
  padding-left: 0;
}
li {
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
label {
  width: 8rem;
}
a {
  color: #f391e3;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
}
a:hover {
  transform: scale(1.1);
}
</style>
