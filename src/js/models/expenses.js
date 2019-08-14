define(['./expense', 'ojs/ojmodel'], function(Expense){
  var Expenses = oj.Collection.extend({
    url: 'http://localhost:5000/api/expense',
    model: Expense
  });

  return Expenses;
});