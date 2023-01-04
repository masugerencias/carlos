<template>
  <v-app>
    <v-main>
      <Carousel></Carousel>
    </v-main>
  </v-app>
</template>

<script>
import Carousel from './components/Carousel.vue';


export default {
    name: "App",
    data: () => ({
      colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
    }),
    components: { 
      Carousel }
};
</script>
