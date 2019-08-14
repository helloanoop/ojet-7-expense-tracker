define(['models/expense', 'models/expenses', 'knockout', 'ojs/ojinputtext',
  'ojs/ojformlayout', 'ojs/ojlabel',
  'ojs/ojbutton', 'ojs/ojcollectiondataprovider',
  'ojs/ojtable'], function(Expense, Expenses, ko){
  
  function ViewModel() {
    var self = this;

    this.columnOptions = [
      {"headerText": "Description", "field": "description"},
      {"headerText": "Date", "field": "date"}];

    this.expenses = new Expenses();
    this.expenses.fetch()
    .then(function() {
      console.log(self.expenses.toJSON());
    });

    this.dataprovider = new oj.CollectionDataProvider(this.expenses);

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