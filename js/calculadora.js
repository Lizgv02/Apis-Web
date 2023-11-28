
var numero1=0;
var ultOperador = '';
var ultBoton = '';

function numero(num){
 var pantallaActual = $("#entrada").html();
 if (ultBoton != ''){
   pantallaActual = "0";
  }
 if (pantallaActual == "0" && num != '.'){
    $("#entrada").html(num);
 }else {
    $("#entrada").html(pantallaActual+num);
 }
 ultBoton='';
}

function comando(cmd){
      if (cmd == 'c'){
            ultOperador=ultBoton=op='';
            numero1=0;
            $("#entrada").html('0');
      } else if (cmd == 'mn'){
             n = -parseFloat($("#entrada").html());
             $("#entrada").html(n);
            }
      else if (cmd=='sp')
              $("#entrada").html('0');
}

function operador(op){
if (op != '='){
   numero1= parseFloat($("#entrada").html());
   ultOperador=ultBoton=op;
} else{
  var resultado;
  switch (ultOperador){
      case '+': resultado=numero1+parseFloat($("#entrada").html());
          $("#entrada").html(resultado);
      break;
      case '-': resultado=numero1-parseFloat($("#entrada").html());
          $("#entrada").html(resultado);
      break;
      case '*':resultado=numero1*parseFloat($("#entrada").html());
          $("#entrada").html(resultado);
      break;
      case '/':resultado=numero1/parseFloat($("#entrada").html());
          $("#entrada").html(resultado);
     break;
  }
  }
}
function operador_unario(op){
  var resultado;
  numero1= parseFloat($("#entrada").html());
  switch (op){
      case 'sin(x)': resultado=Math.sin(numero1);
          $("#entrada").html(resultado);
    break;
     case 'cos(x)': resultado=Math.cos(numero1);
          $("#entrada").html(resultado);
    break;
     case 'tan(x)':resultado=Math.tan(numero1);
          $("#entrada").html(resultado);
    break;
     case 'sqrt(x)':resultado=Math.sqrt(numero1);
          $("#entrada").html(resultado);
    break;
  }
}
