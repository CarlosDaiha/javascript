function square(number) {
  return number * number;
}

function operaciones(number1, number2) {
  console.log(number1-number2);
  console.log(number1+number2);
  console.log(number1*number2);
  console.log(number1/number2);
  return;
}

function areaTriangulo(base, altura) {
  return base*altura/2;
}

function perimetroRectangulo(longitud, ancho) {
  return (2*longitud)+(2*ancho);
}

let empleados = [{"Nombre": "Pepito", "Sueldo": 1666},
{"Nombre": "Fulanito", "Sueldo": 1500},
{"Nombre": "Menganito", "Sueldo": 1800},
{"Nombre": "Cristiano", "Sueldo": 5000},
{"Nombre": "Messi", "Sueldo": 6776}];
function calcularSueldo(array) {
  let empleado, sueldo = 0;
  for (let i = 0; i < array.length; i++) {
    sueldo = Math.max(sueldo, array[i].Sueldo);
  }
  array.forEach(element => {
    if (sueldo === element.Sueldo) empleado = element;
  });
  return empleado;
}

function repartirHospital(presupuesto) {
  let pediatria, urgencia, traumatologia;
  pediatria = presupuesto*0.37;
  urgencia = presupuesto*0.42;
  traumatologia = presupuesto*0.21;
  return ["Pediatría: "+pediatria, "Urgencia: "+urgencia,"Traumatología: "+traumatologia];
}