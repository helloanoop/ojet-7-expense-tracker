define(['ojs/ojcore', 'jquery'], function(oj, $) {

  function Authentication() {
    this.login = function(username, password) {
      return new Promise(function(resolve, reject){
        let params = {
          username: username,
          password: password,
          grant_type: 'password',
          client_id: 'random',
          client_secret: 'random'
        };

        const searchParams = Object.keys(params).map((key) => {
          return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');

        $.ajax({
          type: "POST",
          url: "http://localhost:9000/login",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: searchParams,
          success: function(res) {
            // Signals.user.loggedIn.dispatch();
            resolve(res);
          },
          error: function(err) {
            reject(err);
          }
        });
      });
    }
  }

  return new Authentication();
});
