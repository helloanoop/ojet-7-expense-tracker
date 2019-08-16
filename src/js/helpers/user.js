define(['ojs/ojcore', './cache'], function(oj, Cache){
  function UserHelper() {
    let self = this;

    this.getAccessToken = () => Cache.get('user-access-token');
    this.setAccessToken = (token) => Cache.set('user-access-token', token);

    this.isLoggedIn = (options = {}) => {
      let token = self.getAccessToken();
      if(options && options.deferred) {
        return new Promise(function(resolve, reject){
          if(token && token.access_token) {
            resolve();
          } else {
            reject();
          }
        });
      }

      return token && token.access_token ? true : false;
    }
  }

  return new UserHelper();
});