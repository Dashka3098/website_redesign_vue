<template lang="pug">
div
  .profile
    img.profile_image(src='~@/assets/photo.jpg' alt='photo')
    .profile_text
      span.profile_text_name
        | {{ profileName }}
      span.profile_text_position
        | {{ profilePosition }}
    .meatball
      span.meatball_dot
      span.meatball_dot
      span.meatball_dot
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Profile',
  props: {
    profileName: String,
    profilePosition: String,
  },
  data() {
    return {
    };
  },
});
</script>

<style lang="scss">
.profile {
  margin-top: 30px;
  display: flex;
  align-items: center;
  height: 80px;
  background: #202020;

  &_image {
    border-radius: 50%;
    width: 48px;
    height: 48px;
    margin-left: 30px;
  }

  &_text {
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    &_name {
      font-family: Helvetica, sans-serif;
      font-size: 14px;
      color: #ffffff;
    }

    &_position {
      font-family: Helvetica, sans-serif;
      font-size: 12px;
      color: #9b9b9b;
      margin-top: 4px;
    }
  }

}

.meatball {
  margin-left: 50px;
  cursor: pointer;

  &_dot {
    width: 4px;
    height: 4px;
    background-color: #d8d8d8;
    border-radius: 50%;
    display: inline-block;
  }

}

</style>
