define(['ojs/ojcore', 'knockout', 'jquery', 'models/authentication',
  'helpers/user', 'helpers/signals',
  'ojs/ojlabel', 'ojs/ojinputtext',
  'ojs/ojbutton'], function(oj, ko, $, Authentication, UserHelper, Signals){
  
  function ViewModel() {
    var self = this;

    this.router = oj.Router.rootInstance;
    this.error = ko.observable(false);
    this.username = ko.observable('');
    this.password = ko.observable('');

    this.login = function() {
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

    this.goToRegisterPage = function() {
      self.router.stateId('register');
    }
  }

  return ViewModel;
});