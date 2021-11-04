<template lang="pug">
#sidebar.sidebar(ref='sidebar')
  .header
    .header_logo
      span.header_text
        | PROJECTUS
    button.header_search
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
  .tasks
    #tasks_completed.tasks_completed(@click='showModal = true')
      span#tasks_completed_number.tasks_completed_number
        | {{ completedTasks }}
      span.tasks_completed_name
        | Completed Tasks
    .tasks_open
      span#tasks_open_number.tasks_open_number
        | {{ openTasks }}
      span.tasks_open_name
        | Open Tasks
  modal(v-if='showModal' @close='showModal = false' @count-tasks='countTasks')
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
import Modal from '@/components/Modal.vue';

export default defineComponent({
  name: 'Sidebar',
  components: {
    Modal,
  },
  data() {
    return {
      openTasks: 11,
      completedTasks: 372,
      notification: 3,
      showModal: false,
      profileName: 'Jean Gonzales',
      profilePosition: 'Product Owner',
    };
  },
  methods: {
    countTasks() {
      if (this.openTasks !== 0) {
        this.openTasks -= 1;
        this.completedTasks += 1;
      }
      this.showModal = false;
    },
  },
});
</script>

<style scoped lang="scss">
.sidebar {
  position: absolute;
  background-color: #000000;
  width: 270px;
  height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  &_text {
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    color: #ffffff;
    margin-left: 30px;
    display: flex;
    align-items: center;

    &::before {
      content: url("~@/assets/Logo@3x.svg");
      padding-right: 13px;
    }
  }

  &_search {
    border: none;
    cursor: pointer;
    width: 16px;
    height: 16px;
    background: #000000;
    border-radius: 3px;
    margin-right: 20px;
  }

  &_search::after {
    content: url("~@/assets/Search@3x.svg");
  }

}

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

.tasks {
  margin-top: 20px;
  display: flex;
  padding-left: 30px;

  &_completed,
  &_open {
    display: flex;
    flex-direction: column;
  }

  &_completed {
    cursor: pointer;
  }

  &_open {
    margin-left: 19px;
  }

  &_completed_number,
  &_open_number {
    font-family: Helvetica, sans-serif;
    font-size: 20px;
    color: #ffffff;
  }

  &_completed_name,
  &_open_name {
    opacity: 0.5;
    font-family: Helvetica, sans-serif;
    font-size: 12px;
    color: #ffffff;
  }

}

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
