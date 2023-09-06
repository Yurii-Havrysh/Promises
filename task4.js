function callbackFunc(x, y, callback) {
    setTimeout(() => {
      if (x < 0 || y < 0) {
        callback('Must be positive values');
      } else {
        callback(null, x + y);
      }
    }, 1000);
  }

function promisify(f) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            function callback(err, result) {
                if (err) {
                    reject(err);
                  } else {
                    resolve(result);
                  }
            }
            args.push(callback);

            f.call(this, ...args);
        });
    };
}

const promiseFunc = promisify(callbackFunc);
promiseFunc(8, 2)
    .then(result => {
    console.log("result:", result); 
})
    .catch(error => {
    console.error("error:", error);
});