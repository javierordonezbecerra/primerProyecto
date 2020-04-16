/*
function validar(){
    var snombre=Document.getElementById("nombre").value;
    var sclave=Document.getElementById("clave").value;
    alert("Prueba");

    try{
        if (snombre.length<6) throw "el nombre debe tener al menos seis caracteres";


    }
    catch (err){
        alert(err);

    }
    finally{
        alert("prueba, la funcion validar se ejecuta");
    }
}
*/

"use strict";

function numeroPuntos(cadena){
    var resultado=0;
    for (var i=0;i<cadena.length;i++){
        if (cadena[i]=="."){
            resultado++;
        }
    }
    return resultado;
}


function validar(){

    var snombre=document.getElementById("nombre").value;
    var sclave=document.getElementById("clave").value;
    var smail=document.getElementById("mail").value;
    //la siguiente frase será machacada en caso de error.
    document.getElementById("parrafoError").innerHTML="Todo ha ido correctamente.";

    //search devuelve la posición donde se encuentra un determinado caracter o string, -1 en caso de no encontrarlo.
    try{     


        //comprobamos las condiciones del ejercicio1, nombre de usuario.
        if (snombre.length<6 || snombre.length>10) throw "el nombre debe tener una longitud entre 6 y 10 caracteres";
        if (snombre.length>10) throw "el nombre debe tener menos de 10 caracteres";
        if (snombre.search('ñ')!=-1) throw "el nombre de usuario no puede contener 'ñ'"
        if (snombre.search(/[áéíóúÁÉÍÓÚ]/)!=-1) throw "el nombre de usuario no puede contener tildes"
        

        //comprobamos condiciones el ejercicio2. contraseña.
        if (sclave.length<6) throw "la clave debe contener al menos seis caracteres";
        if (sclave.search(/[0-9]/)==-1) throw "la clave debe contener al menos un número.";
        if (sclave.search(/[A-Z]/)==-1) throw "la clave debe contener al menos una mayúscula";
       

        //comprobamos el campo mail
        if (smail.search('@')==-1) throw "el mail debe contener el símbolo '@'"
        //la w es dígito o letra. las llaves indica el número de veces que se puede repetir lo que hay delante. si solo tiene un dígito
        //es desde esa longitud hasta infinito.

        //comprobar que solo haya un punto en todo el mail.
        var puntos=numeroPuntos(smail);
        if (puntos!=1) throw "el mail debe contener un sólo punto.";

        //comprobamos que el patron del mail sea el correcto
        if (smail.search(/\w{2}@\w{2}.\w{2,4}/)==-1) throw "el patron del mail no es correcto";

        //debe haber un solo punto y el patron debe ser el correcto, así que ya solo queda contar la posicion del punto y la longitud total
        //y la diferencia debe estar entre 2 y 4
        var posicionPunto=smail.indexOf(".");
        var longitud=smail.length-posicionPunto-1;
        if (longitud<2||longitud>4) throw "el dominio del mail debe tener una longitud comprendida entre 2 y 4";


    }
    catch (err){
        document.getElementById("parrafoError").innerHTML=err;

    }
    finally{
        document.getElementById("parrafoFinally").innerHTML="esto se va a ejecutar siempre";
    }
}