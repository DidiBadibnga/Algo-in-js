var enter=prompt('Entrer la valeur');
var unite=prompt('Entrer l unit');
var choix=prompt('Entrer le choix');
function Convert(value,UnitToConvert,UnitOfConvertion) {
  // body...
  
  if ((UnitToConvert=='meter') || (UnitToConvert=='m')) {
    if(UnitOfConvertion=='km') {
      var ConvertmToKm=value*0.001;
      console.log('En km','C est ',ConvertmToKm,'Km')
      
    }
      else if(UnitOfConvertion=='dm'){
        var ConvertmTodm=value*10;
        console.log('En dm c est',ConvertmTodm,'dm');
      }
      else if(UnitOfConvertion=='cm') {
        var ConvertmTocm=value*100;
        console.log('En cm c est',ConvertmTocm,'cm');
      }
      else if(UnitOfConvertion=='mm') {
        var ConvertmTomm=value*1000;
        console.log('En mm c est',ConvertmTomm,'mm');
      }
      
    }
  
}
Convert(enter,unite,choix)