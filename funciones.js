function square(number) {
  return number * number;
}

function areaTriangulo() {
  let base = document.getElementById("base").value;
  let altura = document.getElementById("altura").value;
  return document.getElementById("ej2").innerHTML = "El área del triángulo es "+Number(base*altura/2)+".";
}

function perimetroRectangulo() {
  let longitud = document.getElementById("longitud").value;
  let ancho = document.getElementById("ancho").value;
  return document.getElementById("ej3").innerHTML = "El perímetro del rectángulo es "+Number((2*longitud)+(2*ancho))+".";
}

function calcularSueldo() {
  const array = [{"Nombre": document.getElementById("nombre1").value, "Sueldo": document.getElementById("sueldo1").value},
                {"Nombre": document.getElementById("nombre2").value, "Sueldo": document.getElementById("sueldo2").value},
                {"Nombre": document.getElementById("nombre3").value, "Sueldo": document.getElementById("sueldo3").value},
                {"Nombre": document.getElementById("nombre4").value, "Sueldo": document.getElementById("sueldo4").value},
                {"Nombre": document.getElementById("nombre5").value, "Sueldo": document.getElementById("sueldo5").value}];

  let empleado, sueldo = 0;
  for (let i = 0; i < array.length; i++) {
    sueldo = Math.max(sueldo, Number(array[i].Sueldo));
  }
  array.forEach(element => {
    if (sueldo == element.Sueldo) empleado = element;
  });
  return document.getElementById("ej4").innerHTML = "El empleado "+empleado.Nombre+" es el que más gana "+empleado.Sueldo+".";
}

function repartirHospital() {
  let presupuesto = Number(document.getElementById("presupuesto").value);
  let pediatria, urgencia, traumatologia;
  pediatria = presupuesto*0.37;
  urgencia = presupuesto*0.42;
  traumatologia = presupuesto*0.21;
  txt = ["Pediatría: "+pediatria, " Urgencia: "+urgencia," Traumatología: "+traumatologia];
  return document.getElementById("ej5").innerHTML = txt;
}

function getExtra() {
  var resultado;
  let dineroPorHora = document.getElementById("dineroPorHora").value;
  let horasTrabajadas = document.getElementById("horasTrabajadas").value;
  if (40 < horasTrabajadas) {
    let horasExtra = horasTrabajadas - 40;
    if (horasExtra <= 8) resultado = horasExtra*dineroPorHora*2;
    else resultado = (dineroPorHora*(horasExtra - 8)*3+(dineroPorHora*16));
  } else resultado = 0;
  return document.getElementById("horasExtra").innerHTML = "Te corresponde "+resultado+"€";
}

function esNavidad() {
  var input = prompt("Introduce una fecha con formato aaaa-mm-dd");
  let date = new Date(input).toString();
  let array = date.split(' ');
  if (array[1] == "Dec" && array[2] == 25) 
    return document.getElementById("navidad").innerHTML = "¡Es Navidad!";
  else return document.getElementById("navidad").innerHTML = "No es navidad aún...";
}

function isXmas() {
  const date = document.getElementById("fecha").value.toString();
  let array = date.split("-");
  if (array[1] == 12 && array[2] == 25) {
    return document.getElementById("ej7").innerHTML = "¡Es Navidad!";
  }
  else return document.getElementById("ej7").innerHTML = "No es navidad aún...";
}

function porcentajes() {
  let hombres = 0, mujeres = 0;
  const json = document.getElementById("dataset").value;
  let alumnos = JSON.parse(json);
  alumnos.forEach(alumno => {
    if (alumno.Sexo === "M") hombres++;
    else mujeres++;
  });
  txt = "Hombres: "+(hombres/alumnos.length*100).toFixed(2)+"%, Mujeres: "+(mujeres/alumnos.length*100).toFixed(2)+"%";
  return document.getElementById("ej8").innerHTML = txt;
}

function getList() {
  dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  for (let i = 0; i < dias.length; i++) {
    document.getElementById("list").innerHTML += "<li>"+dias[i]+"</li>";
  }
}

document.getElementById("btnDias").addEventListener("click", getList);