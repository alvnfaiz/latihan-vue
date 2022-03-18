<template>
  <ol>
    <li v-for="(todo, index) in todoList" :key="index">
      {{ todo }}
    </li>
  </ol>
</template>
<script>
export default {
    props: ['todoList'],
}
</script>