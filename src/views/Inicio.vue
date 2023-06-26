<template>
    <div class="hero">
        <div class="imagen">
            <img src="@/assets/img/logo-starWars.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'component-name',
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
    .hero{
        background-image: url("@/assets/img/stars.jpg");
        background-size: cover;
        background-position: center;
        height: 92vh;
    }
    .imagen{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .imagen img{
        width: 40%;
    }
</style>