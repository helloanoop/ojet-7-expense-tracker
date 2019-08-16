define(['./expense', 'helpers/user', './base-collection', 'ojs/ojmodel',
'ojs/ojcore'], function(Expense, UserHelper, BaseCollection){
  window.anoop = BaseCollection;
  var Expenses = BaseCollection.extend({
    initialize: function(params) {
      BaseCollection.prototype.initialize.call(this, params);
    },
    url: 'http://localhost:5000/api/expense',
    model: Expense,
    customURL: function(operation, collection, options) {
      if(!isNaN(options.fetchSize) && !isNaN(options.startIndex)) {
        return `http://localhost:5000/api/expense?$limit=${options.fetchSize}&$skip=${options.startIndex}`;
      }

      return 'http://localhost:5000/api/expense';
    }
  });

  return Expenses;
});