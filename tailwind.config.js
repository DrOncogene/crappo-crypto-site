module.exports = {
  mode: 'jit',
  plugins: [
  ],
  content: [
    "./src/**/*.{svelte,js}",
    "./public/index.html",
  ],
  theme: {
    colors: {
      pri: 'rgba(13, 13, 43, 1)',
      sec: '#3671E9',
      darkpurple: '#2B076E',
      dark: '#252540',
      white: '#fff',
      blueDark: '#485563',
    },
    backgroundImage: {
      "hero-right": "/img/hero-right.svg",
      "newsletter": "url('/img/newsletter-box.png')"
    },
    screens: {
      'md': '960px',
      'lg': '1024px'
    }
  }
};