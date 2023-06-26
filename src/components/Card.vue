<template>
    <div class="container">
        <div class="card text-center">
            <div class="card-body">
                <h4 class="card-title">Nombre</h4>
                <p class="card-text">{{nombre}}</p>
                <h4 class="card-title">Genero</h4>
                <p class="card-text">{{genero}}</p>
                <h4 class="card-title">Altura</h4>
                <p class="card-text">{{altura}}</p>
                <h4 class="card-title">Numero de peliculas</h4>
                <p class="card-text">{{numPeliculas}}</p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Card-component',
    props: {
        id:{
            type: String,
            required: true,
        },
        nombre:{
            type: String,
            required: true,
        },
        genero:{
            type: String,
            required: true,
        },
        altura:{
            type: String,
            required: true,
        },
        numPeliculas:{
            type: Number,
            required: true,
        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container{
        height: 100vh;
        background: black;
    }
    .card{
        border: 1px solid;
        width: 100%;
        background: black;
    }
    .card-body{
        width: 40%;
        margin: 100px auto;
        border: 2px solid #ccc;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #747474;
        padding: 10px;
    }
    .card-body h4{
        background: #747474;
        color: yellow;
        text-align: center;
        padding: 20px 0 20px;
    }
    .card-body p{
        
        color: #fff;
        background: black;
        text-align: center;
        padding: 20px 0 20px;
    }
</style>