<template>
    <div class="contacto">
        <div class="contacto-title">
            <h1>Contacto</h1>
            <p>Para contactarnos puede escribirnos</p>
        </div>
        <div class="form">
            <div>
                <label for="" class="form-label">Nombre Completo</label>
                <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
            </div>
            <div>
                <label for="" class="form-label">Correo Electronico</label>
                <input type="email" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
            </div>
            <div>
                <label for="" class="form-label">Mensaje</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button type="submit">Enviar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact-component',
    // props: {},
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
    .contacto{
        text-align: center;
        height: 98vh;
        width: 100%;
        color: #fff;
        background: black;
    }
    .contacto-title{
        padding: 20px 0 20px;
    }
    .form{
        width: 50%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }
    .form label{
        display: flex;
    }
    .form input{
        padding: 8px;
    }
    .form button{
        width: 200px;
        padding: 15px;
        background: #29B129;
        color: #fff;
        font-weight: 700;
    }
</style>