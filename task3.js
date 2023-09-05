function func1() {
    return Promise.resolve(1)
}
function func2() {
    return Promise.resolve(2)
}
function func3() {
    return Promise.resolve(3)
}

const arrayOfFunctions = [func1, func2, func3];

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