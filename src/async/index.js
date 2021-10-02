const doSomethingAsync = () =>{
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve("Do something Async"),3000)
            : reject(new Error("test Error"))
    });
}

const doSomething = async() => {
    const something = await doSomethingAsync();
    console.log(something);
}

// Esta es la manera correcta para ejecutar la funcion con async y await
// Cacheando errores
const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch(error){
        console.log(error)
    }
}
console.log("before");
anotherFunction();
console.log("after");