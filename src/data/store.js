//riga importazione reactive

import {reactive}from 'vue'
//oggettone con i miei dati che verrano poi resi reactive 
const storeData={
    query:"",
    urlFlag:[
      "../src/assets/img/Flag_of_France.png",
      "../src/assets/img/Flag_of_Italy.png",
      "../src/assets/img/Flag_of_Japan.png",
      "../src/assets/img/Flag_of_the_United_Kingdom.svg",
      "../src/assets/img/Flag_of_the_United_States.png"

    ]
    
};
//trasformazione oggetto Storedata in reactive
const iMieiDati= reactive(storeData);

export default iMieiDati;