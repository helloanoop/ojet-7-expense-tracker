define(['signals'], function(Signal){
  return {
    user: {
      loggedIn: new Signal(),
      loggedOut: new Signal()
    }
  };
});