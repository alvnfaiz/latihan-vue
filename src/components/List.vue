<template>
  <ol>
    <li v-for="(todo, index) in tasks" :key="index">
      {{ todo }}
    </li>
  </ol>
</template>
<script>
export default {
    props: ['tasks'],
}
</script>