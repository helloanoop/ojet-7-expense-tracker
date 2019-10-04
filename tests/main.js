requirejs.config(
{
  baseUrl: 'web/js',

  // Path mappings for the logical module names
  // Update the main-release-paths.json for release mode when updating the mappings
  paths:
//injector:mainReleasePaths

{
  "knockout":"libs/knockout/knockout-3.5.0.debug",
  "jquery":"libs/jquery/jquery-3.4.1",
  "jqueryui-amd":"libs/jquery/jqueryui-amd-1.12.1",
  "promise":"libs/es6-promise/es6-promise",
  "hammerjs":"libs/hammer/hammer-2.0.8",
  "ojdnd":"libs/dnd-polyfill/dnd-polyfill-1.0.0",
  "ojs":"libs/oj/v7.1.0/debug",
  "ojL10n":"libs/oj/v7.1.0/ojL10n",
  "ojtranslations":"libs/oj/v7.1.0/resources",
  "text":"libs/require/text",
  "signals":"libs/js-signals/signals",
  "touchr":"libs/touchr/touchr",
  "customElements":"libs/webcomponents/custom-elements.min",
  "css":"libs/require-css/css",
  "category-table":"jet-composites/category-table/1.0.0",
  "mockjax": "../../node_modules/jquery-mockjax/dist/jquery.mockjax"
}

//endinjector
  ,config: {
    ojL10n: {
      merge: {
        'ojtranslations/nls/ojtranslations': 'resources/nls/expense'
      }
    }
  }
}
);
