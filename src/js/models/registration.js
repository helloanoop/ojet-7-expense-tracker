define(['ojs/ojcore', 'jquery'], function(oj, $) {

  function Registration() {
    this.register = function(username, password) {
      return new Promise(function(resolve, reject){
        let params = {
          username: username,
          password: password
        };

        const searchParams = Object.keys(params).map((key) => {
          return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');

        $.ajax({
          type: "POST",
          url: "http://localhost:9000/register",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: searchParams,
          success: function(res) {
            resolve(res);
          },
          error: function(err) {
            reject(err);
          }
        });
      });
    }
  }

  return new Registration();
});
