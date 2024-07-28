---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Reviews dos Cinemas de Belo Horizonte"
  text: ""
  tagline: Avaliação de cinemas usando o SSG VitePress com Markdown
  image:
    src: /movie-theater.jpg
    alt: Cinemas
  actions:
    - theme: brand
      text: Reviews
      link: /reviews
    - theme: alt
      text: Cinemas avaliados
      link: /movie-theaters-list

features:
  # - link: /reviews
  #   title: Reviews
  #   details: Veja todos os cinemas de Belo Horizonte avaliados por mim até agora
  # - link: /movie-theaters-list
  #   title: Lista de Cinemas
  #   details: Uma classificação de todos os cinemas de Belo Horizonte que já avaliei
  - title: ⭐ Avaliação dos cinemas
    details: Avaliando todos os cinemas da cidade de Belo Horizonte...
  - link: /
    title: 🎖️ Ranking
    details: Ranking atualizado dos melhores cinemas da cidade avaliados até agora
---

<!-- <script setup> 
  let ok = false;
  const interval = setInterval(() => {
    try {
      if (document.querySelector('.tagline') && document.querySelector('.VPImage.image-src')) {
        document.querySelector('.tagline').style.fontSize = "1.75rem";
        document.querySelector('.VPImage.image-src').style.borderRadius = "15px";
        ok = true;
        clearInterval(interval);
      }
    } catch (e) {
      '#'
    }
  }, 1);
</script> -->
