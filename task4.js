function job(delay) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Resolved with delay:', delay);
            resolve('done ' + delay);
        }, delay);
    });
}

const promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

promise.then(function(data) {
    console.log('All done');
    data.forEach(function(text) {
        console.log(text);
    });
});
