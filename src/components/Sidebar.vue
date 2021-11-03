<template>
  <div class="sidebar" id="sidebar" ref="sidebar">
    <div class="header">
      <div class="header_logo">
        <span class="header_text">PROJECTUS</span>
      </div>
      <button class="header_search"></button>
    </div>

    <div class="profile">
      <img src="../assets/photo.jpg" class="profile_image" alt="photo">
      <div class="profile_text">
        <span class="profile_text_name">Jean Gonzales</span>
        <span class="profile_text_position">Product Owner</span>
      </div>
      <div class="meatball">
        <span class="meatball_dot"></span>
        <span class="meatball_dot"></span>
        <span class="meatball_dot"></span>
      </div>
    </div>

    <div class="tasks">
      <div class="tasks_completed" id="tasks_completed" @click="showModal = true">
                <span class="tasks_completed_number" id="tasks_completed_number">
                  {{ completedTasks }}
                  </span>
        <span class="tasks_completed_name">Completed Tasks</span>
      </div>
      <div class="tasks_open">
                <span class="tasks_open_number" id="tasks_open_number">
                  {{ openTasks }}
                </span>
        <span class="tasks_open_name">Open Tasks</span>
      </div>
    </div>

    <Modal v-if="showModal" @close="showModal = false" @count-tasks="countTasks"></Modal>

    <div class="menu">
      <span class="menu_text">Menu</span>
      <a href="#" class="menu_home">Home</a>
      <a href="#" class="menu_my_tasks">My Tasks</a>
      <div class="menu_notification">
        <a href="#" class="menu_notification_text">Notifications</a>
        <div class="menu_notification_badge" id="menu_notification_badge">
          {{ notification }}
        </div>
      </div>
    </div>
  </div>
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
      openTasks: 1,
      completedTasks: 372,
      notification: 3,
      showModal: false,
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
}

.header_text {
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  color: #ffffff;
  margin-left: 30px;
  display: flex;
  align-items: center;
}

.header_text::before {
  content: url("../assets/Logo@3x.svg");
  padding-right: 13px;
}

.header_search {
  border: none;
  cursor: pointer;
  width: 16px;
  height: 16px;
  background: #000000;
  border-radius: 3px;
  margin-right: 20px;
}

.header_search::after {
  content: url("../assets/Search@3x.svg");
}

.profile {
  margin-top: 30px;
  display: flex;
  align-items: center;
  height: 80px;
  background: #202020;
}

.profile_image {
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin-left: 30px;
}

.profile_text {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
}

.profile_text_name {
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  color: #ffffff;
}

.profile_text_position {
  font-family: Helvetica, sans-serif;
  font-size: 12px;
  color: #9b9b9b;
  margin-top: 4px;
}

.meatball {
  margin-left: 50px;
  cursor: pointer;
}

.meatball_dot {
  width: 4px;
  height: 4px;
  background-color: #d8d8d8;
  border-radius: 50%;
  display: inline-block;
}

.tasks {
  margin-top: 20px;
  display: flex;
  padding-left: 30px;
}

.tasks_completed,
.tasks_open {
  display: flex;
  flex-direction: column;
}

.tasks_completed {
  cursor: pointer;
}

.tasks_open {
  margin-left: 19px;
}

.tasks_completed_number,
.tasks_open_number {
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  color: #ffffff;
}

.tasks_completed_name,
.tasks_open_name {
  opacity: 0.5;
  font-family: Helvetica, sans-serif;
  font-size: 12px;
  color: #ffffff;
}

.menu {
  display: flex;
  flex-direction: column;
  margin-top: 31px;
  align-items: flex-start;
}

.menu_text {
  font-family: Helvetica, sans-serif;
  font-size: 12px;
  color: #878787;
  line-height: 18px;
  margin-left: 30px;
}

.menu_home {
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  color: #ffffff;
  line-height: 22px;
  cursor: pointer;
  text-decoration: none;
  margin-left: 30px;
  margin-top: 18px;
}

.menu_my_tasks {
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  color: #ffffff;
  line-height: 22px;
  cursor: pointer;
  text-decoration: none;
  margin-left: 30px;
  margin-top: 16px;
}

.menu_notification {
  display: flex;
  justify-content: left;
}

.menu_notification_text {
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  color: #ffffff;
  line-height: 22px;
  cursor: pointer;
  text-decoration: none;
  margin-left: 30px;
  margin-top: 16px;
}

.menu_notification_badge {
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
</style>
