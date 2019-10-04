define(['ojs/ojcore', 'knockout', 'jquery', 'models/registration',
  'helpers/user', 'helpers/signals',
  'ojs/ojlabel', 'ojs/ojinputtext',
  'ojs/ojbutton'], function(oj, ko, $, Registration, UserHelper, Signals){
  
  function ViewModel() {
    var self = this;

    this.router = oj.Router.rootInstance;
    this.error = ko.observable(false);
    this.username = ko.observable('');
    this.password = ko.observable('');

    this.register = function() {
      Registration
          .register(self.username(), self.password())
          .then(function(response) {
            Signals.messages.dispatch({
              severity: 'confirmation',
              summary: 'Successful',
              detail: "User registered successfully"
            });
            self.router.stateId('login');
          })
          .catch(function(){
            Signals.messages.dispatch({
              severity: 'error',
              summary: 'Error',
              detail: "Sorry! Registration failed."
            });
            self.error(true);
          });
    };
  }

  return ViewModel;
});