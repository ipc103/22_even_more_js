Promise.resolve(42).then((result) => console.log(result))


Promise.resolve(42)
  .then((result) => result * 2)
  .then(result => result / 3)
  .then(result => result ** 3)
  .then(result => console.log(result))
