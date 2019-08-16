define(['knockout', 'ojs/ojcomposite', 'ojs/ojknockout',
  'jet-composites/category-table/loader'], function(ko){
  function ViewModel() {
    this.categories = ko.observable([
      'Food',
      'Utilities',
      'Entertainment',
      'Education'
    ]);

    setTimeout(function() {
      document.getElementById("my-cat-table").changeBackground('blue');
    }, 1000);
  }

  return ViewModel;
});
