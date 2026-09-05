# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
## selectdate
const selectedDate = ref(new Date().toISOString().split('T')[0]) 

//toISOtring koncerterar datum till sträng i formatet "YYYY-MM-DDTHH:mm:ss.sssZ"

// "date" innehåller datum och tid, så split T gör så att tiden separeras. och [0] gör att datumet är array0 och tid array1