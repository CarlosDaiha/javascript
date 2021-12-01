function square(number) {
  return number * number;
}

function operaciones(number1, number2) {
  const sub = number1-number2;
  const sum = number1+number2;
  const mul = number1*number2;
  const div = number1/number2;
  return ["Resta: "+sub, "Suma: "+sum, "Multiplicación: "+mul, "División: "+div];
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
{"Nombre": "Messi", "Sueldo": 6776},
{"Nombre": "Cristiano", "Sueldo": 5000}];
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

function getExtra(dineroPorHora, horasTrabajadas) {
  if (40 < horasTrabajadas) {
    let horasExtra = horasTrabajadas - 40;
    if (horasExtra <= 8) return horasExtra*dineroPorHora*2;
    else return (dineroPorHora*(horasExtra - 8)*3+(dineroPorHora*16));
  } else return 0;
}

function esNavidad() {
  var input = prompt("Introduce una fecha con formato aaaa-mm-dd");
  let date = new Date(input).toString();
  let array = date.split(' ');
  if (array[1] == "Dec" && array[2] == 25) return "¡Es Navidad!";
  else return "No es navidad aún...";
}

let personas = [{"Nombre": "Pepito", "Sexo": "M"},
{"Nombre": "Fulanito", "Sexo": "M"},
{"Nombre": "Menganito", "Sexo": "M"},
{"Nombre": "Cristina", "Sexo": "F"},
{"Nombre": "Marta", "Sexo": "F"},
{"Nombre": "Sara", "Sexo": "F"},
{"Nombre": "Soraya", "Sexo": "F"},
{"Nombre": "Carlos", "Sexo": "M"},
{"Nombre": "Almudena", "Sexo": "F"}];
function porcentajes(alumnos) {
  let hombres = 0, mujeres = 0;
  alumnos.forEach(alumno => {
    if (alumno.Sexo === "M") hombres++;
    else mujeres++;
  });
  return [{"Hombres":(hombres/alumnos.length*100).toFixed(2)+"%", 
  "Mujeres":(mujeres/alumnos.length*100).toFixed(2)+"%"}];
}