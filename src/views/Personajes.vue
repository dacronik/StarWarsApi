<template>
    <div class="background">
        <div class="title">
            <h1> Personajes</h1>
        </div>
        <div class="aumentador">
            <button @click="incrementarContador()">Buscar mas personajes</button>
        </div>
        <div class="loader">
            <div v-if="isLoading" class="lds-hourglass">
                
            </div>
            <div class="personajes-grid" v-else>
                <div class="personajes" v-for="(item) in personajes" :key="item.name">
                    <h3 class="nombres" @click="redirectTo(item.url)">{{item.name}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'Personajes-name',
    // props: {},
    data: function(){
        return {
            personajes:[],
            contador: 1,
            isLoading: true,
        }
    },
    // computed: {},
    methods: {
        async peticion(){
            try{
                this.isLoading = true
                let response = await axios.get(`https://swapi.dev/api/people?page=${this.contador}`);
                let nombres = response.data.results.map(nombre =>{
                    return {name: nombre.name, url: nombre.url}
                })
                this.personajes.push(...nombres);

            }
            catch(error){
                console.log(error)
            } 
            finally{
                this.isLoading = false;
            }
        },
        
        incrementarContador() {
            this.contador++;
            this.peticion();
            
        },
        redirectTo(url){
            //
            //const url = 'https://swapi.dev/api/people/2/';
            const regex = /\/(\d+)\/$/; 
            const match = url.match(regex);

            if (match) {
            const numero = match[1]; 
            this.$router.push(`/personajes/${numero}`)
            console.log(numero); 
            
            } else {
            console.log('No se encontró ningún número en la URL.');
            }
        }
        
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        return this.peticion();
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .background{
        background: black;
        height: 92vh;
    }
    .title{
        padding-top: 20px;
        width: 100%;
        text-align: center;
    }
    h1{
        color: yellow;
    }
    h3{
        color: aliceblue;
    }
    .aumentador{
        display: flex;
        justify-content: center;
    }
    .aumentador button{
        width: 10rem;
        padding: 20px 0;
        margin: 20px 0;
    }
    .personajes-grid{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        width: 80%;
        grid-gap: 8px;
        margin: 0 auto;
    }
    .personajes{
        border: 1px solid #ccc;
        text-align: center;
    }
    .nombres{
        color: yellow;
        cursor: pointer;
    }
    .loader{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .lds-hourglass {
        display: inline-block;
        position: relative;
        width: 180px;
        height: 180px;
        text-align: center;
        }
    .lds-hourglass:after {
        content: " ";
        display: block;
        border-radius: 50%;
        width: 0;
        height: 0;
        margin: 8px;
        box-sizing: border-box;
        border: 32px solid yellow;
        border-color: yellow transparent yellow transparent;
        animation: lds-hourglass 1.2s infinite;
        }
    @keyframes lds-hourglass {
    0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
        transform: rotate(1800deg);
    }
}
</style>