<template>
    <nav>
        <div class="menu-items"><a href="/">HOME</a></div>
        <div class="menu-items"><a href="/Slider">PROJECTS</a></div>
        <div class="menu-items"><a href="#">FAQ</a></div>
        </nav> 
</template>

<!--Les services correspondent aux élément du dropdown (liste déroulante)-->
<!--On a fait l'élément dropdown et on l'a importé comme un composant-->


<style >
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