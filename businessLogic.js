var brpList = [];

  function addbrpToSystem(pfechaCalculo, pnombreBrp, pvalorLibros, pvalorAvaluo, ptasaLP, ptasaRecuperacion, pplazoVenta, pgastoVenta, pvalorRecuperable, pvalorRecuperable1, pvpPaso1, pexponenciarVR, pvpRecuperable, pvpGastos, pvpNeto) {

    var newbrp = {
      fechaCalculo : pfechaCalculo,
      nombreBrp : pnombreBrp,
      valorLibros: pvalorLibros,
      valorAvaluo: pvalorAvaluo,
      tasaLP: ptasaLP,
      tasaRecuperacion: ptasaRecuperacion,
      plazoVenta: pplazoVenta,
      gastoVenta: pgastoVenta,

      valorRecuperable: pvalorRecuperable,
      valorRecuperable1: pvalorRecuperable1,
      vpPaso1: pvpPaso1,
      exponenciarVR: pexponenciarVR,
      vpRecuperable: pvpRecuperable,
      vpGastos: pvpGastos,
      vpNeto: pvpNeto,

    };
    console.log(newbrp);
    brpList.push(newbrp);
    localStoragebrpList(brpList);
  };

  function getbrpList(){
    var stroredList = localStorage.getItem("localbrpList");
    if(stroredList == null){
      brpList = [];
      }else{
        brpList = JSON.parse(stroredList);
      }
      return brpList;
    }

  function localStoragebrpList(plist){
    localStorage.setItem("localbrpList", JSON.stringify(plist));
  }
