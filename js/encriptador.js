
function encriptar (){
    var texto = document.querySelector("#mensaje").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#mensaje-encriptado").value = textoCifrado;
    document.querySelector("#mensaje").value;
    Swal.fire (
        'Encriptado 😎!',
        'Aceptar',
        'success', 
        'iconColor'
      )
}


function desencriptar (){
    var texto = document.querySelector("#mensaje").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector("#mensaje-encriptado").value = textoCifrado;
    document.querySelector("#mensaje").value;
    Swal.fire(
        'Desencriptado 👀😮!',
        'Aceptar',
        'success'
      )
}
function copiar(){
    var texto = document.querySelector("#mensaje-encriptado");
    texto.select();
    document.execCommand('copy');
    var texto = document.querySelector("#mensaje").value="";
    Swal.fire(
        'Copiado!',
        'Aceptar!',
        'success'
      )
}


