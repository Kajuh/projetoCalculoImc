var pacientes = document.querySelectorAll(".paciente")

for(var i = 0; i < pacientes.length ; i++) {
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso")
    var tdAltura = paciente.querySelector(".info-altura")
    
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    
    
    var imcFinal = peso/(altura*altura)
    
    
    var alturaValida = true;
    var pesoValido = true;
    
    if (peso < 0 || peso > 1000) {
        
        pesoValido = false;
    }
    
    if (altura < 0 || altura > 3.00) {
        
        alturaValida = false;
    }
    
    var tdImc = paciente.querySelector(".info-imc");
    var imc = tdImc.textContent;
    
    if (alturaValida && pesoValido) {
    
        tdImc.textContent = imcFinal.toFixed(2);
    }
    else {
      tdImc.textContent = "Verifique os dados"
    }

    function calcImc(peso, altura) {
        var imc = 0
        imc = peso/(altura*altura);
    }
}



