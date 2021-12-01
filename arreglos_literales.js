let personaje = {
    nombre: "Tony Stark",
    nombreClave: "IronMan",
    vivo: false,
    edad: 40,
    coordenadas: {
        lat: 0.3232323,
        lng: -23.939239
    },
    trajes: ['Mark I', 'Mark XXV', 'Hulkbuster'],
    direccion: {
        zip: '102212, 232323',
        ubicacion: 'Malibu, California'
    }
};

console.log(personaje); //Se muestra todo el objeto
console.log(personaje.nombre); //Se muestra el valor de esa clave del objeto