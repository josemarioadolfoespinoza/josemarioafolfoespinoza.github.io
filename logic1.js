document.querySelector("#calcular").addEventListener('click', savebrp);
drawbrpTable();


function savebrp(){
  var sfechaCalculo = document.querySelector("#fechaCalculo").value,
      snombreBrp= document.querySelector('#nombreBrp').value,
      svalorLibros = document.querySelector('#valorLibros').value,
      svalorAvaluo = document.querySelector('#valorAvaluo').value,
      stasaLP = document.querySelector('#tasaLP').value,
      stasaRecuperacion = document.querySelector('#tasaRecuperacion').value,
      splazoVenta = document.querySelector('#plazoVenta').value,
      sgastoVenta = document.querySelector('#gastoVenta').value,
      valorRecuperable = svalorAvaluo * stasaRecuperacion,
      valorRecuperable1 = parseFloat(valorRecuperable),
      vpPaso1 = 1.00 + stasaLP,
      exponenciarVR = Math.pow(vpPaso1, splazoVenta),
      vpRecuperable = valorRecuperable / exponenciarVR,
      vpGastos = sgastoVenta / exponenciarVR,
      vpNeto = (vpRecuperable - vpGastos).toFixed(2),
      importeRecuperable = svalorAvaluo - sgastoVenta;


addbrpToSystem(sfechaCalculo, snombreBrp, svalorLibros, svalorAvaluo, stasaLP, stasaRecuperacion, splazoVenta, sgastoVenta, valorRecuperable, valorRecuperable1, vpPaso1, exponenciarVR, vpRecuperable, vpGastos, vpNeto, importeRecuperable);
drawbrpTable();

}

function drawbrpTable(){
  var list = getbrpList(),
      tbody = document.querySelector("#brpTable tbody");

  tbody.innerHTML = "";

  for (var i = 0; i < list.length; i++){
    var row = tbody.insertRow(i),
        fechaCalculoCell = row.insertCell(0),
        nombreBrpCell = row.insertCell(1),
        valorLibrosCell = row.insertCell(2),
        valorAvaluoCell = row.insertCell(3),
        tasaLPCell = row.insertCell(4),
        tasaRecuperacionCell = row.insertCell(5),
        plazoVentaCell = row.insertCell(6),
        gastoVentaCell = row.insertCell(7),
        selectCell = row.insertCell(8),
        valorRecuperableCell = row.insertCell(9),
        valorRecuperable1Cell = row.insertCell(10),
        vpPaso1Cell = row.insertCell(11),
        exponenciarVRCell = row.insertCell(12),
        vpRecuperableCell = row.insertCell(13),
        vpGastosCell = row.insertCell(14),
        vpNetoCell = row.insertCell(15);


    fechaCalculoCell.innerHTML = list[i].fechaCalculo;
    nombreBrpCell.innerHTML = list[i].nombreBrp;
    valorLibrosCell.innerHTML = list[i].valorLibros;
    valorAvaluoCell.innerHTML = list[i].valorAvaluo;
    tasaLPCell.innerHTML = list[i].tasaLP;
    tasaRecuperacionCell.innerHTML = list[i].tasaRecuperacion;
    plazoVentaCell.innerHTML = list[i].plazoVenta;
    gastoVentaCell.innerHTML = list[i].gastoVenta;

    valorRecuperableCell.innerHTML = list[i].valorRecuperable;
    valorRecuperable1Cell.innerHTML = list[i].valorRecuperable1;
    vpPaso1Cell.innerHTML = list[i].vpPaso1;
    exponenciarVRCell.innerHTML = list[i].exponenciarVR;
    vpRecuperableCell.innerHTML = list[i].vpRecuperable;
    vpGastosCell.innerHTML = list[i].vpGastos;
    vpNetoCell.innerHTML = list[i].vpNeto;



    var inputSelect = document.createElement("input");
    inputSelect.type = "checkbox";
    inputSelect.value = list[i].id;
    selectCell.appendChild(inputSelect);

    tbody.appendChild(row);
  }
}
