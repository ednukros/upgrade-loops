// Iteración 6: mixed for e includes


const toys = [{
        id: 5,
        name: 'Buzz MyYear'
    },
    {
        id: 11,
        name: 'Action Woman'
    },
    {
        id: 23,
        name: 'Barbie Man'
    },
    {
        id: 40,
        name: 'El gato con Guantes'
    },
    {
        id: 40,
        name: 'El gato felix'
    }
]



for (let i = 0; i < toys.length; i++) {

   
    if (toys[i].name.includes('gato')) {
     
        console.log("Estoy en el if");
        toys.splice(i,i);
    }
     
 }
 console.log(toys);