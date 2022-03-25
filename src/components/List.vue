<template>
  <ol>
    <task-item v-for="task in tasks" :key="task.id" :task="task" :tasks="tasks"></task-item>
  </ol>
</template>

<script>
import TaskItem from './Task.vue'

export default {
  components: {
    TaskItem
  },
  props: ['tasks'],
  data() {
    return {
      task: "",
    };
  },
  methods: {
    removeTask(value) {
      return this.tasks.filter(task => task !== value); 
    },

    editTask(task) {

    },
  },
};
</script>