define(['signals'], function(Signal){
  return {
  	localeChange: new Signal(),
  	messages: new Signal(),
    user: {
      loggedIn: new Signal(),
      loggedOut: new Signal()
    }
  };
});