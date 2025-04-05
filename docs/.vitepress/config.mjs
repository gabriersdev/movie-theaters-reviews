import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // https://vitepress.dev/reference/default-theme-config
  lang: 'pt-BR',
  base: "/movie-theaters-reviews/",
  title: "Movie Theaters Reviews",
  description: "The best movie theaters reviews in the world! 🍿🎬",
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    siteTitle: "Movie Theaters Reviews",
    titleTemplate: ":title - Movie Theaters Reviews",

    logo: "favicon.ico",
    outlineTitle: 'Nesta página',

    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Avaliações', link: '/movies' },
      { text: 'Cinemas', link: '/movie-theaters-list' },
      { text: 'Ranking', link: '/ranking' },
    ],

    sidebar: [
      {
        text: 'Navegue',
        items: [
          { text: 'Sobre', link: '/about' },
          { text: 'Metas', link: '/goals' },
          { text: 'Como funciona?', link: '/reviews' },
          { text: 'Cinemas', link: '/movie-theaters-list' },
          { text: 'Filmes', link: '/movies' },
          { text: 'Ranking', link: '/ranking' },
          { text: 'Galeria 🆕', link: '/imgs' },
          { text: 'Roteiro 🆕', link: '/map' },
        ]
      },
      {
        text: 'Desenvolvimento',
        items: [
          { text: 'Dev. no GitHub', link: 'https://github.com/gabriersdev' },
          { text: 'Repositório', link: 'https://github.com/gabriersdev/movie-theaters-reviews' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gabriersdev/movie-theaters-reviews' },
      { icon: 'letterboxd', link: 'https://letterboxd.com/gabriers/' }
    ],

    footer: {
      message: 'Feito com ❤️ usando <a href="https://vitepress.dev" target="_blank" rel="noreferrer noopener">VitePress</a>',
      copyright: 'Copyright &copy; 2024 Gabriel Ribeiro'
    },

    editLink: {
      pattern: 'https://github.com/gabriersdev/movie-theaters-reviews/edit/master/docs/:path'
    },

    lastUpdated: {
      text: 'Modificado em',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
  }
})
