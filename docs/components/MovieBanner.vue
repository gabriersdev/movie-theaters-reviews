<template>
  <figure>
    <img :src="src" :alt="getAltText" loading="lazy" class="max-h-[50vh] sm:max-h-[75vh] md:max-h-[60vh]">
    <figcaption class="mb-6 mt-2 text-gray-400 text-[13px]">{{getAltText}}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: String,
    movieName: String
  },
  computed: {
    getAltText() {
      return `Capa do filme "${this.movieName}". Letterboxd - Reprodução.`
    }
  }
}
</script>