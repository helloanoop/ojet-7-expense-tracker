define(['ojs/ojmodel'], function(){
  var Expense = oj.Model.extend({
    urlRoot: 'http://localhost:5000/api/expense',
  });

  return Expense;
});