define(['models/expense'], function(Expense){
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