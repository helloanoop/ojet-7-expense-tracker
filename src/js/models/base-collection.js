define(['helpers/user', 'ojs/ojmodel',
'ojs/ojcore'], function(UserHelper){
  var BaseCollection = oj.Collection.extend({
    initialize: function() {
      this.oauth = new oj.OAuth('Authorization');

      let token = UserHelper.getAccessToken();
      this.oauth.setAccessTokenResponse(token);
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

  return BaseCollection;
});