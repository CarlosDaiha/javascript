// BUCLE WHILE
var x = 0;
while (x < 10) { // "x < 10" es la condición del bucle
   // hacer cosas
   x++;
}

// BUCLE FOR DENTRO DE UNA FUNCIÓN
function walkTree(node) {
  if (node == null) //
    return;
  // hacer algo con el nodo
  for (var i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}