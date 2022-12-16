// Iteración #1: Usa includes 

// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']


let cami = [];

for (const product of products) {
    
    if(product.includes('Camiseta')){
        cami.push(product);
    }
}

console.log(cami);