var factores = document.getElementsByClassName("factor");

// Loop through each element with class "factor" and add an event listener to it
for (var i = 0; i < factores.length; i++) {
    console.log(factores[i]);
  factores[i].addEventListener("change", function(event) {
    calcular();
  });
}

function calcular() {
  console.log(factores);
  for (var i = 0; i < factores.length; i++) {
    var factor = factores[i];
    console.log(factor);
  }
}
