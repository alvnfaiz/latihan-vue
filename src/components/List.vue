<template>
  <ol class="mb-4 list-decimal">
    <task-item v-for="task in tasks" :key="task.id" :task="task" :edit="edit" class="mb-2"></task-item>
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
      edit: false,
    };
  },
  methods: {
    removeTask(index) {
      return this.tasks.filter((task, i) => i !== index);
    },

    editTask(index) {
      return this.tasks.map((task, i) => {
        if (i === index) {
          return {
            ...task,
            edit: true,
          };
        }
        return task;
      });
    },
  },
};
</script>