<template>
  <div id="app" class="container mx-auto">
    <h1 class="mb-8 text-3xl text-blue-600 text-bold">Todo App</h1>
    <list :tasks="tasks"></list>
    <add-todo :tasks="tasks"></add-todo>
    <hebat></hebat>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import Hebat from './components/Hebat.vue'
import List from './components/List.vue'

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
      task: "",
    };
  },
}
</script>