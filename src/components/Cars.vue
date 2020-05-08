<!--Dans notre exemple la fonction addCar() change les Data du composant (et donc son état ) 
à chaque appel de la fonction via le clic sur le bouton.-->
<template>
    <div>
        <ul v-for='car in cars' :key=car.name>
            <li>{{car.name}}</li>
            <li>{{car.model}}</li>
            <li>{{car.year}}</li>
        </ul>
        <button @click='addCar'>Add Car</button>
        <p> Nombres de voitures:{{counter}}</p>

    </div>
</template>

<script>
export default {
    data(){
        return{
            cars:[]
        }
    },
    props:['name','model','year'],
    methods:{
        addCar(){
            this.cars.push({
                'name':'AMG',
                'model':'Mercedez',
                'year':'2017'
            })
        }
    },
    computed:{
        counter(){
            return this.cars.length
        }
    },
    mounted(){
        this.cars.push({
            'name' : this.name,
            'model' : this.model,
            'year' : this.year
            })
        }   
}
</script>

<style>

</style>
<!--On remarque ici à la 9ème ligne {{ counter }} c’est cette valeur qui va nous permettre d’afficher le résultat de la méthode counter() dans computed.
Les fonctions dans computed sont invoquées automatiquement et sont exécutées uniquement lorsque les données qu’elles manipulent (ici l’objet cars) sont modifiées !
Donc à chaque fois qu’on ajoute une voiture dans notre tableau grâce à addCar() la computed counter() est exécutée.-->