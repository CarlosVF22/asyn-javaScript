let XHMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Funcion para hacer llamadas
function fetchData(url_api, callback){
    let xhttp = new XHMLHttpRequest();
    xhttp.open("GET", url_api, true); //Hacer llamado a la api, parametro1=metodo, parametro2=ulr,
    // parametro3=verificacion de asincronismo, por defecto es true

    //escuchar la conexion
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            if(xhttp.status ===200){
                callback(null,JSON.parse(xhttp.responseText));
            } else{
                const error = new Error("Error" + url_api);
                return callback(error,null);
            }
        }
    }
    xhttp.send();
}