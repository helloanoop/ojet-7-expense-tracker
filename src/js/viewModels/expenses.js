define(['ojs/ojmodel'], function(){
  console.log(oj.Model);

  var Expense = oj.Model.extend({
    urlRoot: 'http://localhost:5000/api/expense',
  });

  var ex = new Expense({
    id: '6313a073d5018e96'
  });

  ex
    .fetch()
    .then(function(response) {
      console.log(response);
    })
    .catch(function(err) {
      console.log(err);
    })

  return {};
});