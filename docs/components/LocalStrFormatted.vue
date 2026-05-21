<template>
  <div class="flex flex-wrap gap-3 items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
      <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/>
    </svg>
    <span class="text-gray-400 m-0 p-0">&nbsp;Eu vi esse filme no <a :href="movieTheater[1]"><b>{{ movieTheater[0] }}</b></a></span>
  </div>
</template>

<script>
export default {
  props: {
    movieTheaterId: Number,
  },
  computed: {
    movieTheater() {
      const movieTheaterList = [
        [1, "Una Belas Artes", "./movie-theaters-list#una-belas-artes-cinema-de-rua"],
        [2, "Cineart - Shopping Boulevard", "./movie-theaters-list#cineart-shopping-boulevard"],
        [3, "Cineart - Ponteio", "./movie-theaters-list#cineart-ponteio"],
        [4, "Cinemark - Patio Savassi", "./movie-theaters-list#cinemark-patio-savassi"],
        [5, "Cineart - Minas Shopping", "./movie-theaters-list#cineart-minas-shopping"],
        [6, "Cinema Minas Tenis Club", "./movie-theaters-list#cinema-minas-tenis-club-cinema-de-rua"],
        [7, "Cinemark - BH Shopping", "./movie-theaters-list#cinemark-xd-bh-shopping"],
        [8, "Cineart - Shopping Del Rey", "./movie-theaters-list#cineart-del-rey"],
        [9, "Cineart - Shopping Cidade", "./movie-theaters-list#cineart-shopping-cidade"]
      ];

      const match = movieTheaterList.find(i => i[0].toString() === this.movieTheaterId.toString());
      if (match) return [match[1], match[2]];
      return ["", ""];
    }
  }
}
</script>