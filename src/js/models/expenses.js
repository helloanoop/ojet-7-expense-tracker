define(['./expense', 'ojs/ojmodel'], function(Expense){
  var Expenses = oj.Collection.extend({
    url: 'http://localhost:5000/api/expense',
    model: Expense,
    customURL: function(operation, collection, options) {
      if(!isNaN(options.fetchSize) && !isNaN(options.startIndex)) {
        return `http://localhost:5000/api/expense?$limit=${options.fetchSize}&$skip=${options.startIndex}`;
      }

      return 'http://localhost:5000/api/expense';
    },
    paginatedRequestUrl: function(options) {
      return `${this.url}?$limit=${options.fetchSize}&$skip=${options.startIndex}`;
    },
    customPagingOptions: function(response) {
      if(!response || !response.data) {
        return response;
      }

      return {
        totalResults: response.total,
        limit: response.limit,
        count: response.data.length,
        offset: response.skip,
        hasMore: (response.skip + response.data.length) < response.total
      };
    }
  });

  return Expenses;
});