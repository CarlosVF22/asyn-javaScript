// Ejecutar la promesa cuando se llama a la funcion
const somethingWillHappen = () =>{
    return new Promise((resolve,reject) =>{
        if(true){
            resolve('esta bien');
        } else{
            reject('Esta mal');
        }
    });
};

somethingWillHappen()
    .then(response =>console.log(response))
    .catch(error => console.error(error));

// Segundo ejemplo
// Esta es la mejor manera de realizarlo

const somethingWillHappen2 = () =>{
    return new Promise((resolve,reject) =>{
        if(true){
            setTimeout(() =>{
                resolve("True");
            },2000)
        }else{
            const error = new Error("Esta mal");
            reject(error);
        }
    });
};

somethingWillHappen2()
    .then(response =>console.log(response))
    .then(() => console.log("Hola"))
    .catch(error => console.log(error));

// Encadenar promesas
Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response => {
        console.log("array of results", response);
    })
    .catch(error => {
        console.error(error);
    })