<!-- qui javascript -->
<script>
import axios from 'axios';
import { fontAwesome } from 'fontawesome';
import iMieiDati from './data/store.js';
export default{
    data (){
       return{
        //data presi dagli store
        iMieiDati,
        //dati copiati da documentazione
         options: {
            method: 'GET',
            api_key:'263e3087040f61e4c1ad703d0c32c0b5',
             url: 'https://api.themoviedb.org/3/account/21296696/favorite/movies',
             params: {language: 'en-US', page: '1', sort_by: 'created_at.asc'},
             headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjNlMzA4NzA0MGY2MWU0YzFhZDcwM2QwYzMyYzBiNSIsInN1YiI6IjY2NTcyYjQwMjA5OWZjYjkzMWU0ZTY0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hbcpn-O278PuMyDSssCFGr2jdJp6RqOdC_x8VichkE4'
            }
         },
         //dato che contiene chiamata API
         dataSearch:{},
         //dato d'appoggio per il percorso della bandiera
         pathFlag:"",
       }
        
    },
    methods:{
        //funzione nella quale vado a dare il valore a dataSearch
        getRicerca(){
            axios.get('https://api.themoviedb.org/3/search/tv?api_key=263e3087040f61e4c1ad703d0c32c0b5&language=it_IT&query='+iMieiDati.query)
        .then((response)=>{
            this.dataSearch=response.data.results
            console.log(this.dataSearch)
        })
        console.log(this.iMieiDati.query)
        console.log(this.pathFlag)

        }

    },
    //milestone 2:creo funzione che controlla il dato per mettere il percorso della bandiera 
     getFlag(element){
         if(element.original_language=="eng"){
             this.pathFlag=iMieiDati.urlFlag[0]
             console.log(this.pathFlag)
         }
         else if(element.original_language=="it"){
             this.pathFlag=iMieiDati.urlFlag[1]
             console.log(this.pathFlag)
         } 
     },
    mounted(){
        console.log("app montata")
        console.log(this.iMieiDati.query)
   
     
    }

}

</script>
<template>
    <!-- milestone 1:creazione struttura base  -->
    <div>
        <input @keyup.enter="getRicerca()" v-model="iMieiDati.query" type="search" placeholder="Cerca Film">
        <!-- milestone 1: gestico click che richiama la funzione -->
        <button @click="getRicerca()">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>cerca</span>
        </button>
    </div>
    <!-- nel container ci metto i dati relativi alla ricerca effettuata -->
    <div class="container">
        <div class="card" v-for="element in dataSearch" >
            <p>{{ element.original_name }}</p>
            <p>{{ element.name }}</p>
            <p>{{ element.original_language }}</p>
            <p>{{ element.vote_average }}</p>
            <img :src="this.getFlag(element)" alt="">
        </div>
    </div>
  
</template>
<!-- qui CSS -->
<style scoped>
    .container{
        width: 1000px;
        margin: 0 auto;
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .card img{
        width: 50%;
    }
</style>
