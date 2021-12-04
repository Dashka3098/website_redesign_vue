<template lang="pug">
.container
  .text
    span C
    span o
    span o
    span m
    span i
    span g
    span
    span S
    span o
    span o
    span n
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComingSoon',
});
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #ffffff;
}

.text {
  position: relative;
  text-transform: uppercase;
  color: #000000;
  font-size: 60px;
  font-family: Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    text-align: center;
    background-color: #ffc200;
    width: 60px;
    margin-right: 2px;
  }
}

.text:hover span:nth-child(odd) {
  transform: skewY(10deg);
}

.text:hover span:nth-child(even) {
  transform: skewY(-10deg);
}
</style>
