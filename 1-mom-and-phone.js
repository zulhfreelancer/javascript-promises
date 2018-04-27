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
