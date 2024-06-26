//riga importazione reactive

import {reactive}from 'vue'
//oggettone con i miei dati che verrano poi resi reactive 
const storeData={
    query:"",
    //percorsi foto bandiere
    urlFlag:[
      "../public/img/Flag_of_the_United_Kingdom.svg",
      "../public/img/Flag_of_Italy.svg",
      "../public/img/Flag_of_France.svg",
      "../public/img/Flag_of_Japan.svg",
      "../public/img/Flag_of_the_United_States.svg"
    ]
    
};
//trasformazione oggetto Storedata in reactive
const iMieiDati= reactive(storeData);

export default iMieiDati;