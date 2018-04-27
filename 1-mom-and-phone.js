const isMomHappy = true;

// promise 1
const willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: 'iPhone X',
      color: 'Black'
    };
    console.log("resolving willIGetNewPhone promise");
    resolve(phone); // fullfilled
  } else {
    const reason = new Error('Mom is not happy');
    console.log("rejecting willIGetNewPhone promise")
    reject(reason);
  }
});

// promise 2
const showOff = function(phone) {
  return new Promise(function(resolve, reject) {
    const message = 'Hey, I have a new ' + phone.color + ' ' + phone.brand + ' phone.';
    resolve(message);
  });
};

// ES6 way
/*
const askMom = function(){
  console.log("before asking mom");
  willIGetNewPhone
    .then(showOff)
    .then((fullfilled) => {
      console.log("success", fullfilled);
    })
    .catch((error) => {
      console.log("error", error.message);
    });
  console.log("after asking mom");
};

askMom();
*/

// ES7 way
async function askMom() {
  try {
    console.log('[ES7] before asking mom');
    let phone   = await willIGetNewPhone;
    let message = await showOff(phone);
    console.log(message);
    console.log('[ES7] after asking mom');
  } catch(error) {
    console.log(error.message);
  }
}

(async () => {
  await askMom();
})();
