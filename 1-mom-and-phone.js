var isMomHappy = true;

// promise 1
var willIGetNewPhone = new Promise(function(resolve, reject){
  if (isMomHappy) {
    var phone = {
      brand: 'iPhone X',
      color: 'Black'
    };
    console.log("resolving willIGetNewPhone promise");
    resolve(phone); // fullfilled
  } else {
    var reason = new Error('Mom is not happy');
    console.log("rejecting willIGetNewPhone promise")
    reject(reason);
  }
});

// promise 2
var showOff = function(phone) {
  return new Promise(function(resolve, reject) {
    var message = 'Hey, I have a new ' + phone.color + ' ' + phone.brand + ' phone.';
    resolve(message);
  });
};

var askMom = function(){
  willIGetNewPhone
    .then(showOff)
    .then(function(fullfilled){
      console.log("success", fullfilled);
    })
    .catch(function(error){
      console.log("error", error.message);
    });
};

askMom();
