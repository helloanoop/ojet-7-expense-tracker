define(['models/expense', 'models/expenses', 'knockout', 'ojs/ojinputtext',
  'ojs/ojformlayout', 'ojs/ojlabel',
  'ojs/ojbutton', 'ojs/ojcollectiondataprovider',
  'ojs/ojpagingdataproviderview', 'ojs/ojpagingcontrol',
  'ojs/ojtable', 'ojs/ojinputnumber'], function(Expense, Expenses, ko){
  
  function ViewModel() {
    var self = this;

    this.columnOptions = [
      {"headerText": "Description", "field": "description"},
      {"headerText": "Amount", "field": "amount"}];

    this.expenses = new Expenses();
    this.expenses
      .fetch({
        startIndex: 0,
        fetchSize: 5
      })
      .then(function() {
        console.log(self.expenses.toJSON());
      });

    this.dataProvider = new oj.CollectionDataProvider(this.expenses);
    this.pagingDataProvider = ko.observable();
    this.pagingDataProvider(new oj.PagingDataProviderView(this.dataProvider));

    this.form = {
      description: ko.observable(),
      amount: ko.observable()
    };

    this.onCreate = function() {
      var ex = new Expense();

      ex.set('description', self.form.description());
      ex.set('amount', self.form.amount());
      ex
        .save()
        .then(function() {
          self.expenses.add(ex);
          self.resetForm();
        });
    };

    this.resetForm = function() {
      self.form.description('');
      self.form.amount(null);
    }
  }

  return ViewModel;
});