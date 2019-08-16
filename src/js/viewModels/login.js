define(['ojs/ojcore', 'knockout', 'jquery', 'models/authentication',
  'helpers/user', 'helpers/signals',
  'ojs/ojlabel', 'ojs/ojinputtext',
  'ojs/ojbutton'], function(oj, ko, $, Authentication, UserHelper, Signals){
  
  function ViewModel() {
    var self = this;

    self.error = ko.observable(false);
    self.username = ko.observable('');
    self.password = ko.observable('');

    self.login = function() {
      Authentication
          .login(self.username(), self.password())
          .then(function(token) {
            UserHelper.setAccessToken(token);
            Signals.user.loggedIn.dispatch();
          })
          .catch(function(){
            self.error(true);
          });
    };
  }

  return ViewModel;
});