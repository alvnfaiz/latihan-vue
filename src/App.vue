<template>
  <div id="app" class="container mx-auto">
    <h1 class="text-bold text-3xl text-blue-600 mb-8">Todo App</h1>
    <add-todo :tasks="tasks"></add-todo>
    <hebat v-if="tasks.length >= 4"></hebat>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import Hebat from './components/Hebat.vue'

export default {
  name: 'App',
  components: {
    AddTodo,
    Hebat
  },
  data() {
    return {
      tasks: [],
    };
  },
}
</script>