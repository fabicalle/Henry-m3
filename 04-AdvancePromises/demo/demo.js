const fullfill1 = new Promise((resolve, reject) => {
    resolve("resuleto 1");
});

const fullfill2 = new Promise((resolve, reject) => {
    resolve("resuleto 2");
});
const reject1 = new Promise((resolve, reject) => {
    reject("rechazado 1");
});
//const reject2 = new Promise((resolve, reject) => {
 //   reject("rechazado 2");
//});

//Caso 1

fullfill1.then(
    (value)=>{console.log(value);},
    (reason)=>{console.log(reason);}
);

//Caso 2

reject1.then(
    (value)=>{console.log(value);},
    (reason)=>{console.log(reason);}
);

//Caso 3 => La promesa se resuelve y no tengo successHandler

fullfill1 // promesa => Resuelve a "Resuelto 1"
.then()  // promesa => Resuelve a valor de promesa anterior automaticamente
.then((value)=>console.log(value));

//Caso 4 => La promesa se rechaza y no tengo errorHandler

reject1 // promesa => Rechaza a "Rechazado 1"
.then((value)=>console.log(value)) //lo pasa al sgte al no tener erroHandler
.then((value)=>console.log(value))   //lo pasa al sgte al no tener erroHandler
.catch((reason)=>console.log(reason)); //Resuelve a rechazo de la primer promesa

//Caso 5 => la promesa se resuelve y tengo Handlers

fullfill1
.then((value)=>{return "te paso este value"},
(err)=> console.log(err)
)
.then((value)=>console.log(value)); //es como el fetch

//Caso 6 //rechazo

reject1
.then(
    (value)=>{return "otro value"},
    (err)=>{throw err}
)
.then(
    value=>console.log("successHandler",value),//al retornar el error es tomado por el .then...el return SIEMPRE van a ir al success de la sgte promesa
    err=>console.log("errorHandler",err) //para que la reciba el errorHandler de la sgte promesa se debe hacer con THROW y no con RETURN 
    );
    
//Caso 7

fullfill1
.then(
    (value)=>{return fullfill2},//retorno una promesa
    (err)=>{throw err}
)
.then(
    value=>console.log("successHandler",value),//va a ser el valor de resolucion de la promesa
    err=>console.log("errorHandler",err) 
    );