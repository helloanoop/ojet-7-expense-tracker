define(['helpers/user', 'ojs/ojmodel'], function(UserHelper){
  var Expense = oj.Model.extend({
  	initialize: function() {
      this.oauth = new oj.OAuth('Authorization');

      let token = UserHelper.getAccessToken();
      this.oauth.setAccessTokenResponse(token);
    },
    urlRoot: 'http://localhost:5000/api/expense',
  });

  return Expense;
});