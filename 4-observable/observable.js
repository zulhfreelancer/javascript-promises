let Observable = Rx.Observable;
let resultA, resultB, resultC;

function addAsync(num1, num2) {
  // use ES6 fetch API, which return a promise

  // example of usage cases - calling back-end service
  // const promise = fetch(`http://www.example.com?num1=${num1}&num2=${num2}`).then(x => x.json());

  // for the sake of simplicity, let's not call back-end in this tutorial
	const promise = Promise.resolve(num1 + num2);

  return Observable.fromPromise(promise);
}

/**
* Summary of what we are doing below:
*   - `.do()` is to assign each steps' result
*   - `.flatMap()` is to add each steps' result to the `total`
*
* Reading for `.flatMap()`:
* https://medium.com/@w.dave.w/becoming-more-reactive-with-rxjs-flatmap-and-switchmap-ccd3fb7b67fa
*/
addAsync(1, 2)
  .do(function(total) {            // success, assigning `total` to `resultA`...
    console.log("total.a", total); // 3 --> `total` is result of `addAsync(1, 2)` above
    return resultA = total;        // total: 3, resultA: 3, resultB: undefined, resultC: undefined
  })
  .flatMap(function(total) {
    console.log("total.b", total); // `total` here is still 3
    return addAsync(total, 3);     // total: 6, resultA: 3, resultB: undefined, resultC: undefined
  })
  .do(function(y) {                // success, assigning `y` to `resultB`...
    console.log("y", y);           // 6 --> `y` is result of `addAsync(total, 3)` above
    return resultB = y;            // total: 6, resultA: 3, resultB: 6, resultC: undefined
  })
  .flatMap(function(total) {
    console.log("total.c", total); // `total` here is still 6
    return addAsync(total, 4);     // total: 10, resultA: 3, resultB: 6, resultC: undefined
  })
  .do(function(z) {                // success, assigning `z` to `resultC`...
    console.log("z", z);           // 10 --> `z` is result of `addAsync(total, 4)` above
    return resultC = z;            // total: 10, resultA: 3, resultB: 6, resultC: 10
  })
  .subscribe(function (total) {
    console.log('TOTAL: ' + total);
    console.log(resultA);
    console.log(resultB);
    console.log(resultC);
  });
