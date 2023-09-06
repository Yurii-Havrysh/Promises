function promiseAllSettled(promises) {
    return new Promise((resolve) => {
        const results = [];
        let donePromises = 0;

        for(let i = 0; i < promises.length; i++) {
            promises[i]
                .then((value) => {
                results[i] = { status: 'fulfilled', value: value };
                })
                .catch((reason) => {
                results[i] = { status: 'rejected', reason: reason };
                })
                .finally(() => {
                donePromises++;
      
                if (donePromises === promises.length) {
                  resolve(results);
                }
            })
        }
    })  
}

const promise1 = Promise.resolve(1);
const promise2 = Promise.reject('Error occurred');
const promise3 = Promise.resolve(3);

promiseAllSettled([promise1, promise2, promise3])
    .then((results) => {
        console.log("All promises settled:", results);
    })
