<template>
  <div class="home">
    <list-berita></list-berita>
  </div>
</template>

<script>
// @ is an alias to /src
import ListBerita from '@/components/ListBerita.vue'

export default {
  name: 'ListBerita',
  components: {
    ListBerita
  }
}
</script>
