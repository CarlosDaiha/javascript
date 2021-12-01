const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); // registra ['HTML','CSS','JAVASCRIPT'];

let coffees = ['French Roast', 'Colombian', 'Kona'];

//Recorre todos los elementos del array y los imprime por consola
coffees.forEach(element => {
    console.log(element);
});

coffees.unshift('Capuccino'); //Inserta al principio
coffees.push('Mocaccino'); //Inserta al final
console.log(coffees);

let moca;
moca = coffees.pop(); /* Quita el último elemento del array y, 
opcionalmente, te lo guarda en la variable especificada */
console.log(coffees);
console.log(moca);

coffees.splice(1,2); //Borra elementos específicos del array
console.log(coffees);