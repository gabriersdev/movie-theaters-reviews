<template>
  <div class="flex flex-wrap gap-3 items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-day" viewBox="0 0 16 16">
      <path d="M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a2 2 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43m.094 5.093h.672V7.418h-.672z"/>
      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
    </svg>
    <span class="text-gray-400 m-0 p-0">Assistido em <b>{{formatDate}}</b></span>
  </div>
</template>

<script>
export default {
  props: {
    date: String,
  },
  computed: {
    formatDate() {
      const dt = this.date.split('-').reverse();
      const date = new Date(`${dt[0]}-${dt[1]}-${dt[2]}T00:00:00-03:00`);

      const months = [
        [0, "Janeiro"],
        [1, "Fevereiro"],
        [2, "Março"],
        [3, "Abril"],
        [4, "Maio"],
        [5, "Junho"],
        [6, "Julho"],
        [7, "Agosto"],
        [8, "Setembro"],
        [9, "Outubro"],
        [10, "Novembro"],
        [11, "Dezembro"]
      ];

      return `${date.getDate()} de ${months.find(m => m[0] === date.getMonth())[1]} de ${date.getFullYear()}`.toLowerCase();
    }
  }
}
</script>