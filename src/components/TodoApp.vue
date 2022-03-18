<template>
  <div class="container" style="max-width: 600px">
    <!-- Heading -->
    <h2 class="text-center mt-5">My Vue Todo App</h2>

    <!-- Input -->
    <div class="d-flex mt-5">
      <input
        type="text"
        v-model="task"
        placeholder="Enter task"
        class="w-100 form-control"
      />
      <button class="btn btn-warning rounded-0" @click="submitTask">
        SUBMIT
      </button>
    </div>
          <h1>Todo</h1>
      <list :todo-list="tasks"></list>
      <hebat :task="tasks.length>=4"></hebat>
  </div>
</template>

<script>
import List from './List.vue'
import Hebat from './Hebat.vue'



export default {
  data() {
    return {
      task: "",
      tasks: [],
    };
  },
  components: {
    Hebat,
    List
  },
  methods: {
    submitTask() {
      if (this.task.length === 0) return;
      this.tasks.push(this.task,);
      this.task = "";
    },
  },
};
</script>
