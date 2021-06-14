Promise.resolve(2)
.then(x => x + 1)
.then(x => { throw new Error(2) })
.then(x => x + 1)
.catch(2)
.then(x => x+1)
.catch(x => x +1)

// provide the output
