<template lang="pug">
.task-field
  ol  {{ task.name }}
  ol {{ task.description }}
  button.btn-remove(@click="$emit('remove')") Remove
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TaskInterface } from '@/types/task.interface';

export default defineComponent({
  name: 'Task',
  props: {
    task: { type: Object as () => TaskInterface },
  },
});
</script>

<style scoped lang="scss">
.task-field {
  display:flex;
  justify-content: space-between;
  background: #f9f9f9;
}
.tasks {
  display: flex;
  flex-direction: column;
  height: 100%;
}

ul {
  margin: 0;
  padding: 0;

  ol {
    cursor: pointer;
    position: relative;
    padding: 12px 8px 12px 40px;
    background: #eee;
    font-size: 18px;
    transition: 0.2s;
    text-align: start;

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

  &:hover {
    background-color: #bbb;
  }
}

.btn-remove {
    border: 1px solid #2a2f36;
    font-size: 12px;
    border: 2px solid #2a2f36;
    background-color: #333333;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    outline: none;
    transition: 0.2s;
    cursor: pointer;
    margin: 5px 10px 5px 5px;
}
</style>
