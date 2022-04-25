<template>
  <div class="news">
    <h1>{{berita.title}}</h1>
    <img :src="berita.urlToImage" :alt="berita.title" />
    <div class="flex-between">
      <div><span>{{berita.author}}</span></div>
      <div>
        <span>{{time}}</span>
      </div>
      
    </div>
    <p>{{berita.description}}</p>
    <p>{{ berita.content }}</p>
    <span>Baca Selengkapnya </span><a :href="berita.url" target="_blank">Disini</a>
    <hr/>
    <router-link to="/"><button>Kembali</button></router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: "",
    };
  },
  methods:{
    publishTime(value) {
      let date = new Date(value);
      var hari = date.getDay();
      let bulan = date.getMonth();
      let day = date.getDate();
      let year = date.getFullYear();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      switch (hari) {
        case 0:
          hari = "Minggu";
          break;
        case 1:
          hari = "Senin";
          break;
        case 2:
          hari = "Selasa";
          break;
        case 3:
          hari = "Rabu";
          break;
        case 4:
          hari = "Kamis";
          break;
        case 5:
          hari = "Jum'at";
          break;
        case 6:
          hari = "Sabtu";
          break;
      }
      switch (bulan) {
        case 0:
          bulan = "Januari";
          break;
        case 1:
          bulan = "Februari";
          break;
        case 2:
          bulan = "Maret";
          break;
        case 3:
          bulan = "April";
          break;
        case 4:
          bulan = "Mei";
          break;
        case 5:
          bulan = "Juni";
          break;
        case 6:
          bulan = "Juli";
          break;
        case 7:
          bulan = "Agustus";
          break;
        case 8:
          bulan = "September";
          break;
        case 9:
          bulan = "Oktober";
          break;
        case 10:
          bulan = "November";
          break;
        case 11:
          bulan = "Desember";
          break;
      }

      return `${hari} ${day} ${bulan} ${year} ${hour}:${minute}:${second}`;
    },
  },

  computed: {
    berita() {
      return this.$store.state.berita;
    },
  },
  mounted() {
    this.time = this.publishTime(this.berita.publishedAt);
  },
}
</script>
<style scoped>
.flex-between {
  display: flex;
  justify-content: space-between;
}
</style>