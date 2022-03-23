<template>
  <div id="app" class="container mx-auto">
    <h1 class="text-bold text-3xl text-blue-600 mb-8">Todo App</h1>
    <list :tasks="tasks"></list>
    <add-todo></add-todo>
    <hebat v-if="tasks >= 4"></hebat>
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
    List,
    Hebat
  },
  data() {
    return {
      task : '',
      tasks: [],
    };
  },
}
</script>