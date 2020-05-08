<template>
  <div id="app">
    <header>
       <nav>
        <div class="menu-items"><router-link to="/"> HOME </router-link></div>
        <div class="menu-items"> <router-link to="/Slider">PROJECTS</router-link></div>
        <div class="menu-items"><a href="#">FAQ</a></div>
        </nav>
   
    </header>
    <router-view><Home/></router-view>
    <Slider/> 
  </div>
 
</template>

<script>



import Home from './components/Home';

export default {
  name: 'App',
  components: {
    Home,Slider
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  
}
header{
  width: auto;
  background-color: black;
  padding: 20px;
}
body{
  background-color:#FF9900;
}
nav{
    display: flex;
    align-items: center;
    justify-content: center;
}
nav .menu-items{
    color:#FFF;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
}
nav .menu-items.active,
nav .menu-items:hover{
    background-color: #444 ;
    border-bottom-color: #FF5858;
}
nav .menu-items a{
    color:inherit;
    text-decoration: none;
}
</style>
