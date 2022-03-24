<template>
  <ol class="list-decimal ml-4">
    <li v-for="(todo, index) in tasks" :key="index" class="mb-2">
      <task :todo="todo" :index="index" @todoEdit="todo"></task>
    </li>
  </ol>
</template>
<script>
import Task from "./Task.vue";

export default {
  components: {
    Task,
  },
  props: ["tasks"],
  data() {
    return {
      task: "",
      todo : "",
    };
  },
  methods: {
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },

};
</script>