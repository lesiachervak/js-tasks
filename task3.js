const other = new Promise((resolve, reject) => {
    reject(Error('Failed'))
  })
  .catch(error => console.log(error))
  .then(error => console.log(error))
