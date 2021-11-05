<template lang="pug">
div
  Sidebar
  #main.main
    Header
    .website_redesign_body
      .events
        router-view
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Sidebar,
    Header,
  },
});
</script>

<style lang="scss">

.main {
  width: 1170px;
  display: flex;
  flex-direction: column;
  margin-left: 270px;
  height: 100%;
}

.website_redesign_body {
  height: 100%;
  width: 100%;
  background-color: #f7f6f3;
  display: flex;
  justify-content: center;
  margin-top: -3px;
}

.events {
  width: 730px;
  height: 591px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
}
</style>
