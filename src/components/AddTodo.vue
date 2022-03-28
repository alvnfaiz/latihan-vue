<template>
  <div class="flex justify-between">
    <input type="text" class="w-10/12 p-2 border border-blue-900" v-model="newTask" @keyup.enter="addTask">
    <button class="w-1/12 text-white bg-blue-500" @click="addTask">Add</button>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      newTask: '',
    };
  },
  methods: {
    addTask() {
      if(this.newTask) {
        this.$emit('add', this.newTask);
        this.newTask = '';
      }
    },
  },
};
</script>