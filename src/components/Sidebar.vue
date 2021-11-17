<template lang="pug">
#sidebar.sidebar(ref='sidebar')
  .header
    .header_logo
      span.header_text
        | PROJECTUS
    button.header_search
  Profile(:profileName='profileName' :profilePosition='profilePosition')
  .tasks
    #tasks_completed.tasks_completed(@click='showModal = true')
      span#tasks_completed_number.tasks_completed_number
        | {{ completedTasks }}
      span.tasks_completed_name
        | Completed Tasks
    router-link(:to='{path: "tasks"}' :class="{disabled: openTasks === 0}").tasks_open
      span#tasks_open_number.tasks_open_number
        | {{ openTasks }}
      span.tasks_open_name
        | Open Tasks
  Modal(v-if='showModal' @close='showModal = false' @count-tasks='countTasks')
  Menu
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Modal from '@/components/Modal.vue';
import Profile from '@/components/Profile.vue';
import Menu from '@/components/Menu.vue';

export default defineComponent({
  name: 'Sidebar',
  components: {
    Modal,
    Profile,
    Menu,
  },
  data() {
    return {
      openTasks: 11,
      completedTasks: 372,
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
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
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

.tasks {
  margin-top: 20px;
  display: flex;
  padding-left: 30px;

  &_completed,
  &_open {
    display: flex;
    flex-direction: column;
    text-decoration: none;
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

</style>
