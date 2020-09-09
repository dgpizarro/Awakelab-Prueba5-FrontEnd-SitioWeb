
$().ready(function () {
    

    $("#pestañas").tabs();
    $("#recompensas").tabs();
    $("#cactus").tabs();
    $("#tickets").tabs();
    $("#accesorios").tabs();
    $("#pestañasIndex").tabs();

    

});

$.extend($.validator.messages, {
    required: "Este campo es obligatorio.",
    email: "Por favor, escribe una dirección de correo válida."
});


function vermas(id){
    if(id=="mas"){
    document.getElementById("desplegar").style.display="block";   
    document.getElementById("mas").style.display="none"; 
    }
    else{
    document.getElementById("desplegar").style.display="none";
    document.getElementById("mas").style.display="inline";
    }
}
    
function vermas2(id){
    if(id=="mas2"){
    document.getElementById("desplegar2").style.display="block";   
    document.getElementById("mas2").style.display="none"; 
    }
    else{
    document.getElementById("desplegar2").style.display="none";
    document.getElementById("mas2").style.display="inline";
    }
}
    
function vermas3(id){
    if(id=="mas3"){
    document.getElementById("desplegar3").style.display="block";   
    document.getElementById("mas3").style.display="none"; 
    }
    else{
    document.getElementById("desplegar3").style.display="none";
    document.getElementById("mas3").style.display="inline";
    }
}

function validarPicker() {
    var ok = true;
    var codigo = document.getElementById("codigo").value; 
    if (codigo === "0987654321"){
      document.formularioPikcer.action = "datosPicker.html";
      document.formularioPikcer.submit();
    }
    else {         
      ok = false;
    }
}

function validaHora() {
    var dia = document.getElementById("dia").value
    var hora = document.getElementById("hora").value
    alert("Gracias, ya has agendado tu hora para el "+dia+" a las "+hora+" horas.");
}

function sumar(){
    var p1 = document.getElementById("var1").textContent;
    var p2 = document.getElementById("var2").textContent;
    var p3 = document.getElementById("var3").textContent;
    var p4 = document.getElementById("var4").textContent;
    var p5 = document.getElementById("var5").textContent;
    var p6 = document.getElementById("var6").textContent;
    var p7 = document.getElementById("var7").textContent;
    var p8 = document.getElementById("var8").textContent;

    var suma = parseInt(p1) + parseInt(p2) + parseInt(p3) + 
    parseInt(p4) + parseInt(p5) + parseInt(p6) + parseInt(p7) + parseInt(p8);

    document.getElementById("cajaPuntos").value = "Su puntaje es: " + suma;
}