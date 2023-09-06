function func1() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 200, 'first one')
    })
}
function func2() {
    return Promise.resolve('last one')
}


const arrayOfFunctions = [func1, func2];

function chainPromises(arrayOfFunctions) {
    let chain = Promise.resolve();

    for (const f of arrayOfFunctions) {
        chain = chain.then(f);
    }
    return chain;
}

chainPromises(arrayOfFunctions)
    .then(result => {
        console.log("Chained promise result:", result);
    })
    .catch(error => {
        console.error("Chained promise error:", error);
    })