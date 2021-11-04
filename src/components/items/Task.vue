<template lang="pug">
ol  {{ task.name }}
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
}

ul ol:nth-child(odd) {
  background: #f9f9f9;
}

ul ol:hover {
  background: #ddd;
}

ul ol.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}

ul ol.checked::before {
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

.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

.header {
  background-color: black;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.header:after {
  content: "";
  display: table;
  clear: both;
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
}

.addBtn:hover {
  background-color: #bbb;
}
</style>
