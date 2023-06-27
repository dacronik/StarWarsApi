<template>
    <div>
        <card-personaje :id="id" :nombre="nombre" :genero="genero" :altura="altura" :numPeliculas="numPeliculas"/>
    </div>
</template>

<script>
import axios from "axios";
import Card from '@/components/Card.vue'
export default {
    name: 'personaje-view',
    props: ['id'],
    data: function(){
        return {
            nombre:'',
            genero:'',
            altura:'',
            numPeliculas:0,
            
        }
    },
    computed: {
        // id(){
        //     return this.$route.params.id
        // },
    },
    methods: {
        async perStarWars(){
            let response = await axios.get(`https://swapi.dev/api/people/${this.id}/`)
            this.nombre = response.data.name
            this.genero = response.data.gender
            this.altura = response.data.height
            this.numPeliculas = response.data.films.length
            
            
        },
        
    },
    // watch: {},
    components: {
        'card-personaje': Card
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.perStarWars()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>