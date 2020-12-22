function cancelar(){
    document.getElementById('ingrese-nombres').value = "";
    document.getElementById('ingrese-apellidos').value = "";
    document.getElementById('ingrese-dni').value = "";
    document.getElementById('ingrese-jefe').value = "";
    document.getElementById('ingrese-destino').value = "";
    document.getElementById('ingrese-fundamento').value = "";
}

function valida(f) {
    var ok = true;
    var msg = ""; 
    var dni = document.getElementById("ingrese-dni").value;
    var digitos = dni.length;
    if (digitos == 8){
        if(!/^([0-9])*$/.test(f.elements["ingrese-dni"].value))
        {
            msg="El DNI no son Números, Ingrese numeros Correctos";
            alertify.error(msg);
            f.elements["ingrese-dni"].value='';
            ok = false;
        }
        if(ok == false)      
        return ok;
    }else{
        msg="La cantidad de digitos de DNI, No son Correctos";
        alertify.error(msg);
        if(!/^([0-9])*$/.test(f.elements["ingrese-dni"].value))
        {
            msg="El DNI no son Números, Ingrese numeros Correctos";
            alertify.error(msg);
            f.elements["ingrese-dni"].value='';
            ok = false;
        }
        if(ok == false)      
        return ok;
    }
}

(function(){
    'use strict';
    window.addEventListener('load', function(){
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form){
            form.addEventListener('submit', function(event){
                if(form.checkValidity() === false){
                    event.preventDefault();
                    event.stopPropagation();
                }else{
                    document.getElementById('mensaje').innerText = "Se logro grabar con exito";
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})()

document.getElementById('cancelar').addEventListener('click', cancelar)
