const myPromise = new Promise((resolve, reject) =>
  setTimeout(() => {
    reject("did not work");
  }, 10000)
);
myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

  
let myNewName;
setTimeout(() => myNewName.th , 100);
console.log(`My new is ${myNewName}`);


