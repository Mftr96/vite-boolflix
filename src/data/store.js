//riga importazione reactive

import {reactive}from 'vue'
//oggettone con i miei dati che verrano poi resi reactive 
const storeData={
    query:"",
    
};
//trasformazione oggetto Storedata in reactive
const iMieiDati= reactive(storeData);

export default iMieiDati;