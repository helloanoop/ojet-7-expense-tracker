describe('Expense', function () {
  it('should successfully fetch the expense by id', function (done) {
    require(['ojs/ojcore', 'knockout', 'jquery', 'models/expense', 'mockjax'], function(oj, ko, $, Expense, mockjax) {
      $.mockjax({
        url: 'http://localhost:5000/api/expense/0726419ecbf4e038',
        type: 'GET',
        responseTime: 0,
        contentType: 'text/json',
        responseText: {
          "id": "0726419ecbf4e038",
          "description": "New Expense",
          "amount": 100,
          "_id": "MKMcqtzuQHoEvOpq"
        }
      });

      var expense = new Expense({
        id: '0726419ecbf4e038'
      });

      expense
        .fetch()
        .then(function(data) {
          expect(data).toEqual({
            "id": "0726419ecbf4e038",
            "description": "New Expense",
            "amount": 100,
            "_id": "MKMcqtzuQHoEvOpq"
          });
          done();
        })
        .catch(function(err) {
          console.log(err);
          done(err);
        });
    });
  });
});