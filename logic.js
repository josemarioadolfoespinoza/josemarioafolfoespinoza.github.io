let valorLibros = 31838.41;
let valorAvaluo = 97478.55;
let tasaLP = 0.0343490;
let tasaRecuperacion = 1.3082;
let plazoVenta = 3.56712328767123;
let gastoVenta = 7000;


let valorRecuperable = valorAvaluo * tasaRecuperacion;
let valorRecuperable1 = parseFloat(valorRecuperable);
let vpPaso1 = 1 + tasaLP
let exponenciarVR = Math.pow(vpPaso1, plazoVenta);
let vpRecuperable = valorRecuperable / exponenciarVR;

let vpGastos = gastoVenta / exponenciarVR;
let vpNeto = (vpRecuperable - vpGastos).toFixed(2);
let importeRecuperale = valorAvaluo - gastoVenta;

function Calculodet1() {
  if (vpNeto > importeRecuperale) {
    var valorComparable = vpNeto;
  } else {
    let valorComparable= importeRecuperale
  }
}



// la opcion 1


let valorLibros = null;
let valorAvaluo = null;
let tasaLP = null;
let tasaRecuperacion = null;
let plazoVenta = null;
let gastoVenta = null;

var vpGastos = null;
var vpNeto = null;
var importeRecuperale = null;
//submit

function submit() {
  var valorLibros = document.getElementById('valorLibros').value;
  var valorAvaluo = document.getElementById('valorAvaluo').value;
  var tasaLP = document.getElementById('tasaLP').value;
  var tasaRecuperacion = document.getElementById('tasaRecuperacion').value;
  var plazoVenta = document.getElementById('plazoVenta').value;
  var gastoVenta = document.getElementById('gastoVenta').value;

  var valorRecuperable = valorAvaluo * tasaRecuperacion;
  var valorRecuperable1 = parseFloat(valorRecuperable);
  var vpPaso1 = 1 + tasaLP
  var exponenciarVR = Math.pow(vpPaso1, plazoVenta);
  var vpRecuperable = valorRecuperable / exponenciarVR;

  var vpGastos = gastoVenta / exponenciarVR;
  var vpNeto = (vpRecuperable - vpGastos).toFixed(2);
  var importeRecuperale = valorAvaluo - gastoVenta;

  alert(importeRecuperale+ ", " + vpGastos + ", " + vpNeto);
};
