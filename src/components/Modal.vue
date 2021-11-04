<template lang="pug">
transition(name='modal')
  .modal-mask
    .modal-wrapper
      .modal-container
        .modal-body
          p Are you sure you want to change the number of tasks?
        .modal-footer
          button.modal-default-button(@click="$emit('close')")
            | Close
          button.modal-default-button(@click="$emit('countTasks')")
            | OK
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  emits: ['countTasks'],
});
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #000000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1em;
  border-radius: 8px;
  border: 2px solid #ffc200;
  text-align: center;
  overflow-y: hidden;
  color: #fff8dd;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  border-radius: 5px;
  font-family: Helvetica, sans-serif;
  color: #000000;
  background: #ffc200;
  border: none;
  text-decoration: none;
  margin-left: 10px;
  margin-top: 5px;
  cursor: pointer;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
