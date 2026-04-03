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
        // TODO - inserir lista de cinemas de movie-theaters-list.md
        [1, "Name", "link-do-movie-theaters-list#id"]
      ];

      // TODO - retorna nome do cinema de acordo com o id e link
      const match = movieTheaterList.find(i => i[0] === this.movieTheaterId);
      if (match) return [match[1], match[2]];
      return ["", ""];
    }
  }
}
</script>