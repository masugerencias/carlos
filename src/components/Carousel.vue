<template>
    <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet 
            :color="colors[i]" 
            height="100%">
                <v-row class="fill-height" align="center" justify="center">
                    <div class="text-h2">
                        {{ slide }} Slide
                        {{pokemon}}
                        
                    </div>
                </v-row>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>
<script>
import apiFilms from '@/services/apiFilms';
export default {
    name: 'Carousel',
    data() {
        return {
            slides: apiFilms.getLastestFilms(),
            colors: apiFilms.getColors(),
            pokemon: null,
        }
    },
    mounted() {
        this.pokemon = apiFilms.getPokemon(25)

    }

    //esto al ser una promesa es asi.
    //rueba add

}
</script>