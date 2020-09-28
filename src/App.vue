<script>
import HomePage from './components/Pages/Home.vue'

export default {
  name: 'App',
  components: {
    HomePage,
  }
}
</script>

<style>
  :root {
    --positionX: 20px;
    --positionXOpposite: -20px;
    --positionY: 20px;
    --positionYOpposite: -20px;
    --angle: 145deg;
    --blur: 60px;
    --textColor: #001f3f;
    --textColorOpposite: #f2f2f2;
    --baseColor: #f2f2f2;
    --darkColor: #cecece;
    --lightColor: #ffffff;
    --firstGradientColor: #ffffff;
    --secondGradientColor: #dadada;
  }

  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 10px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>

<template>
  <home-page />
</template>
