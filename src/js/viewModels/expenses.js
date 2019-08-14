define(['models/expense', 'knockout', 'ojs/ojinputtext',
  'ojs/ojformlayout', 'ojs/ojlabel',
  'ojs/ojbutton'], function(Expense, ko){
  
  function ViewModel() {
    var self = this;

    this.form = {
      description: ko.observable()
    };
    this.onCreate = function() {
      var ex = new Expense();

      ex.set('description', self.form.description());
      ex.save();
    };
  }

  return ViewModel;
});