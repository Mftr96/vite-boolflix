<!-- qui javascript -->
<script>
import axios from 'axios';
import iMieiDati from './data/store.js';
export default{
    data (){
       return{
        iMieiDati,
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
       }
        
    },
    methods:{

    },
    mounted(){
        console.log("app montata")
        //chiamata di prova axios
        axios.get('https://api.themoviedb.org/3/search/tv?api_key=263e3087040f61e4c1ad703d0c32c0b5&language=it_IT&query=scrubs')
        .then((response)=>{
            console.log(response.data)
        })

     
    }

}

</script>
<template>
  
</template>
<!-- qui CSS -->
<style scoped>

</style>
