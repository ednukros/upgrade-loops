// Iteración #2: Condicionales avanzados SI
const alumns = [{
        name: 'Pepe Viruela',
        T1: false,
        T2: false,
        T3: true
    },
    {
        name: 'Lucia Aranda',
        T1: true,
        T2: false,
        T3: true
    },
    {
        name: 'Juan Miranda',
        T1: false,
        T2: true,
        T3: true
    },
    {
        name: 'Alfredo Blanco',
        T1: false,
        T2: false,
        T3: false
    },
    {
        name: 'Raquel Benito',
        T1: true,
        T2: true,
        T3: true
    }
]



for (const alumn of alumns) {

    


    if(alumn.T1===false && alumn.T2 ===false || alumn.T1===false && alumn.T3===false || alumn.T2===false && alumn.T3 === false){

        
        alumn.isApproved=false;
        
        
    }else{
       
      
       alumn.isApproved=true;
    }
   
}

console.log(alumns);




  
   




