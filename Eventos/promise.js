
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve('hello word');
        } else {
            reject(new Error('hello error'));
        }
    }, 2000);
});
// PARA ENCADENAR LAS PROMESAS
promise
    .then(msg => msg.toUpperCase())//RETORNA EN MAYUSCULAS 
    .then(msg => console.log('message', msg))
    .catch(err => console.log('error', err)); //CATCH PARA ERROR 