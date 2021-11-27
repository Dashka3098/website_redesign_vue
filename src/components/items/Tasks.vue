<template lang="pug">
.tasks
  form#taskList(@submit="checkForm")
    #myDIV.header
      h2 My To Do List
      .tasksForm
        .tasksFormName
          label.label-name Tasks' name
          input#myInput(type='text' placeholder='Title...' v-model='taskName' required)
        .tasksFormDescription
          label.label-description Description
          input#myInput(type='text' placeholder='Title...' v-model='taskDescription' required)
      button.addBtn(@click='newTask()' :class="{disabled: taskName.length && taskDescription.length === 0}") Add
    ul#myUL
      task(v-for='(task, index) in tasks' :key='task.id' :task='task' @remove="tasks.splice(index, 1)")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Task from '@/components/items/Task.vue';

export default defineComponent({
  name: 'Tasks',
  components: { Task },
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: 'task1',
          description: 'task1',
          date: '2021-11-11',
        },
        {
          id: 2,
          name: 'task2',
          description: 'task2',
          date: '2021-11-11',
        },
      ],
      taskName: '',
      deleteTask: '',
      taskDescription: '',
    };
  },
  methods: {
    newTask() {
      const id = this.tasks.length + 1;
      this.tasks.push({
        id,
        name: this.taskName,
        description: this.taskDescription,
        date: '2021-11-11',
      });
      this.taskName = '';
      this.taskDescription = '';
    },
  },
});
</script>

<style scoped lang="scss">
.tasks {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

ul {
  margin: 0;
  padding: 0;
}

ul ol {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

    &:nth-child(odd) {
    background: #f9f9f9;
  }
  &:hover {
    background: #ddd;
  }

    &checked {
    background: #888;
    color: #fff;
    text-decoration: line-through;

      &::before {
      content: '';
      position: absolute;
      border-color: #fff;
      border-style: solid;
      border-width: 0 2px 2px 0;
      top: 10px;
      left: 16px;
      transform: rotate(45deg);
      height: 15px;
      width: 7px;
    }
  }
}

.tasksForm {
  display:flex;
  flex-direction: column;
  width: 100%;
}

.tasksFormName{
  display:flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.tasksFormDescription {
  display:flex;
  justify-content: space-between;
}

.label-name,
.label-description {
  text-align: center;
  margin-left: 10px;
  margin-top: 5px;
  }

.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;

  &:hover {
    background-color: #f44336;
    color: white;
  }
}

.header {
  background-color: black;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

input {
  margin-left: auto;
  margin-right: auto;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

.addBtn {
  padding: 10px;
  width: 25%;
  background: #ffc200;
  color: black;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 30px;

  &:hover {
    background-color: #bbb;
  }
}

.disabled {
  pointer-events: none;
  background: #ffc200;
  color: black;
}
</style>
