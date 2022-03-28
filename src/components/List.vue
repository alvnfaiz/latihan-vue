<template>
  <div class="w-full">
    <ol class="my-2 list-decimal">
      <task v-for="(task, id) in tasks" :task="task" :id="id" :key="id" :tasks="tasks" @editTask="editTask"></task>
    </ol>
  </div>
</template>

<script>
import Task from './Task.vue'

export default {
  components: {
    Task,
  },
  name: 'List',
  props: {
    tasks: Array,
  },
  data() {
    return {
      edit: false,
      editteks: '',
      tempTasks: [],
    };
  },
  methods: {
    editTask(task, id) {
      this.tasks.map(t => {
        if(t.id === id) {
          t.task = task;
        }
      });
    },
    deleteTask(task) {
      this.$emit('delete', task);
    },
  },
};
</script>