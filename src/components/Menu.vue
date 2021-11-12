<template lang="pug">
.menu
  span.menu_text
    | Menu
  a.menu_home(href='#') Home
  a.menu_my_tasks(href='#') My Tasks
  .menu_notification
    a.menu_notification_text(href='#') Notifications
    #menu_notification_badge.menu_notification_badge
      | {{ notification }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Menu',
  data() {
    return {
      notification: 3,
    };
  },
});
</script>

<style scoped lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  margin-top: 31px;
  align-items: flex-start;

  &_text {
    font-family: Helvetica, sans-serif;
    font-size: 12px;
    color: #878787;
    line-height: 18px;
    margin-left: 30px;
  }

  &_home {
    font-family: Helvetica, sans-serif;
    font-size: 14px;
    color: #ffffff;
    line-height: 22px;
    cursor: pointer;
    text-decoration: none;
    margin-left: 30px;
    margin-top: 18px;
  }

  &_my_tasks {
    font-family: Helvetica, sans-serif;
    font-size: 14px;
    color: #ffffff;
    line-height: 22px;
    cursor: pointer;
    text-decoration: none;
    margin-left: 30px;
    margin-top: 16px;
  }

  &_notification {
    display: flex;
    justify-content: left;

    &_text {
      font-family: Helvetica, sans-serif;
      font-size: 14px;
      color: #ffffff;
      line-height: 22px;
      cursor: pointer;
      text-decoration: none;
      margin-left: 30px;
      margin-top: 16px;
    }

    &_badge {
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background: #ffc200;
      font: 13px Helvetica, sans-serif;
      margin-left: 10px;
      margin-top: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

</style>
