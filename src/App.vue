<template>
  <div id="app" class="container mx-auto">
    <h1 class="mb-8 text-3xl text-blue-600 text-bold">Todo App</h1>
    <list :tasks="tasks"></list>
    <add-todo :todo="tasks" @add="addTask"></add-todo>
    <hebat v-if="tasks.length >= 4"></hebat>
  </div>
</template>

<script>
import List from './components/List.vue'
import AddTodo from './components/AddTodo.vue'
import Hebat from './components/Hebat.vue'

export default {
  name: 'App',
  components: {
    AddTodo,
    Hebat,
    List
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
    },
  },
}
</script>