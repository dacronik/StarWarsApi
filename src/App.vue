<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/">Inicio</router-link> |
        </li>
        <li>
          <router-link to="/personajes">Personajes</router-link> |
        </li>
        <li>
          <router-link to="/contacto">Contacto</router-link>
        </li>
        
      </ul>
    </nav>
    <transition mode="out-in" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
      <router-view/>
    </transition>
    
  </div>
</template>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
*{
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


nav {
  padding: 30px;
  background-color: #FFFE0C;
  display: flex;
  flex-direction: row;
}
ul{
  list-style: none;
  display: flex;
  width: 100%;
}
li{
  width: 10%;
  font-size: 1.25rem;
};

nav a {
  font-weight: bold;
  color: #4F1F50;
}

nav a.router-link-exact-active {
  color: red;
}
</style>
