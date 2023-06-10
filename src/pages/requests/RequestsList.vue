<template>
  <div class="wrapper">
    <RequestsItems></RequestsItems>
    <RequestsRegister></RequestsRegister>
  </div>
</template>

<script>
import RequestsItems from '@/components/requests/RequestsItems.vue';
import RequestsRegister from '@/components/requests/RequestsRegister.vue';

export default {
  components: { RequestsItems, RequestsRegister },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  gap: 3vw;
}
</style>
