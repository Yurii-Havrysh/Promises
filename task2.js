function promiseAllSettled(promises) {
    return Promise.allSettled(promises)
    .then((settlements) => settlements.forEach((settlement) => console.log(settlement.status, settlement)));
}

const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'Error occurred'));
const promises = [promise1, promise2];

promiseAllSettled(promises);
