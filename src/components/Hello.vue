<template>
    <div>
    <h1> {{message}} </h1>
    <h2> {{ person.firstName }} {{person.lastName }} </h2>
    <h3>{{Word}}</h3>
    <label> firstName: <input type="text" v-model="person.firstName"/></label>
    <label>lastName: <input type="text" v-model="person.lastName"/></label>
    <label>Word:<input type="text" v-model="Word"/></label>
    </div>
</template>

<script>
export default {
    data(){
        return{
        person:{ 
        firsName:'',
        lastName:'',
        },
    Word: '',
    message : 'Welcome, New Challenger!'
         }
    }
}

</script>

<style>

</style>