const promise1 = Promise.resolve('first one');
const promise2 = 53
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 16)
});

Promise.all([promise1, promise2, promise3])
.then(values => { 
    console.log('All are resolved', values);
})
.catch(error => {
    console.log('At least one promise is rejected', error)
})