while (true) {
    console.log("Mensaje antes del breakpoint");
    break;

    /* Se añade un breakpoint justo después del primer mensaje
    * De esta manera no se imprime por consola el segundo mensaje
    */
   
    console.log("Mensaje después del breakpoint");
}