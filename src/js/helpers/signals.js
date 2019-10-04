define(['signals'], function(Signal){
  return {
  	messages: new Signal(),
    user: {
      loggedIn: new Signal(),
      loggedOut: new Signal()
    }
  };
});