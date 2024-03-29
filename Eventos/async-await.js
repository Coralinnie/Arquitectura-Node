const promiseFunction = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve('hello word');
        } else {
            reject(new Error('hello error'));
        }
    }, 500);
});

async function asyncAwait() {
    try {
        const msg = await promiseFunction();
        console.log('message', msg);
    } catch (err) {
        console.log('error', err);
    }
}

//SE LLAMA LA FUNCIÓN 

asyncAwait(); 