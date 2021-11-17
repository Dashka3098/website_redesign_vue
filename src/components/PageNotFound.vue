<template lang="pug">
#notfound
  .notfound
    .notfound-bg
      div
      div
      div
    h1 OOOPS!
    h2 Error 404 : Page Not Found
    router-link(to='/tasks') GO TO HOMEPAGE
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageNotFound',
});
</script>

<style lang="scss">
#notfound {
    position: relative;
    height: 100vh;
    background-color: #202020;

    .notfound {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
  }
}

.notfound {
  max-width: 520px;
  width: 100%;
  text-align: center;

  .notfound-bg {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
  }

  h1 {
    font-family: 'Quicksand', sans-serif;
    font-size: 86px;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 8px;
    color: #ffffff;
  }
  h2 {
    font-family: 'Quicksand', sans-serif;
    font-size: 26px;
    margin: 0;
    font-weight: 700;
    color: #9b9b9b;
  }
  a {
    font-family: 'Quicksand', sans-serif;
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    background: #ffc200;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 5px;
    color: #131313;
    font-weight: 700;
    margin-top: 20px;
  }
}

</style>
