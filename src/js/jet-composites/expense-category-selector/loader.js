/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./expense-category-selector-view.html', './expense-category-selector-viewModel', 'text!./component.json', 'css!./expense-category-selector-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('expense-category-selector', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);