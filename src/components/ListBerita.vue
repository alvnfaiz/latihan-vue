<template>
  <div class="berita">
    <div class="image">
      <img :src="berita.urlToImage" :alt="berita.title">
    </div>
    <div class="content">
      <h4>{{berita.author}}</h4>
      <h2>{{berita.title}}</h2>
      <p>{{berita.description}}</p>
      <a :href="berita.url" target="_blank">Read more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListBerita',
  props: ['berita'],

};
</script>
<style scoped>
.berita {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  text-align: left;
}
.berita .image {
  width: 300px;
  height: 200px;
  background-color: #eee;
  margin-right: 20px;
}
.berita .image img{
  width: 300px;
  height: 200px;
}
.berita h4{
  font-size: 14px;
  text-align: left;
  margin-block: 0;
}
</style>