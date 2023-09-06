function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [(promises.length)];
        let donePromises = 0;

        for (let i = 0; i < promises.length; i++) {
            promises[i]
                .then((value) => {
                    results[i] = value;
                    donePromises++;

                    if (donePromises === promises.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    reject(error);
                })
        }
    })
}

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

promiseAll([promise1, promise2, promise3])
    .then(results => {
        console.log("All promises resolved:", results); 
    })
    .catch(error => {
        console.error("At least one promise rejected:", error);
    });