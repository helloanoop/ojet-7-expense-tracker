/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./category-table-view.html', './category-table-viewModel', 'text!./component.json', 'css!./category-table-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('category-table', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);