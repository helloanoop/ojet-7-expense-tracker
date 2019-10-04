/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojresponsiveutils', 'ojs/ojresponsiveknockoututils', 'knockout',
  'helpers/signals', 'helpers/user', 'ojs/ojknockout',
  'ojs/ojcore', 'ojs/ojtoolbar', 'ojs/ojbutton', 'ojs/ojrouter',
  'ojs/ojmodule', 'text', 'ojs/ojmessages',
  'ojs/ojarraydataprovider', ],
  function(ResponsiveUtils, ResponsiveKnockoutUtils, ko, Signals, UserHelper) {
    function ControllerViewModel() {
      var self = this;

      this.messages = ko.observableArray([]);
      this.messagesDataprovider = new oj.ArrayDataProvider(this.messages);
      Signals.messages.add(function(message) {
        self.messages.push(message);
      });

      this.userLoggedIn = ko.observable(false);

      this.toolbarButtons = [
        {"label": "english"},
        {"label": "français"},
      ];

      this.setLang = function (evt) {
        var newLang = '';
        var lang = evt.currentTarget.innerHTML;
        switch (lang) {
          case 'français':
            newLang = 'fr-FR';
            break;
          default:
            newLang = 'en-US';
        }
        console.log(newLang);
        oj.Config.setLocale(newLang, function () {
          console.log(oj.Translations.getTranslatedString('oj-message.fatal'));
          console.log(oj.Translations.getTranslatedString('app.name'));
          self.appName(oj.Translations.getTranslatedString('app.name'));
          $('html').attr('lang', newLang);
          // in this callback function we can update whatever is needed with the new locale. 
          // In this example, we reload the menu items
          // self.helloworld(oj.Translations.getTranslatedString('helloworld'));
        });
      };

      // Media queries for repsonsive layouts
      var smQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

      // Header
      // Application Name used in Branding Area
      self.appName = ko.observable("Expense tracker");
      // User Info used in Global Navigation area
      self.userLogin = ko.observable("john.hancock@oracle.com");

      // Router
      oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

      self.router = oj.Router.rootInstance;
      self.router.configure({
        'expense':  { label: 'Expenses',   value: 'expenses', isDefault: true},
        'categories': { label: 'Categories', value: 'categories'},
        'reports': { label: 'Reports', value: 'reports' },
        'login': { label: 'Login', value: 'login' },
        'register': { label: 'Register', value: 'register' }
      });

      let token = UserHelper.getAccessToken();
      if(token) {
        self.userLoggedIn(true);
        oj.Router.rootInstance.go('expense');
      } else {
        self.router.stateId('login');
      }

      this.navStates = ko.observableArray([]);
      this.router.states.forEach(function(state) {
        if(state.value !== 'login') {
          self.navStates.push(state);
        }
      });

      // Footer
      function footerLink(name, id, linkTarget) {
        this.name = name;
        this.linkId = id;
        this.linkTarget = linkTarget;
      }
      self.footerLinks = ko.observableArray([
        new footerLink('About Oracle', 'aboutOracle', 'http://www.oracle.com/us/corporate/index.html#menu-about'),
        new footerLink('Contact Us', 'contactUs', 'http://www.oracle.com/us/corporate/contact/index.html'),
        new footerLink('Legal Notices', 'legalNotices', 'http://www.oracle.com/us/legal/index.html'),
        new footerLink('Terms Of Use', 'termsOfUse', 'http://www.oracle.com/us/legal/terms/index.html'),
        new footerLink('Your Privacy Rights', 'yourPrivacyRights', 'http://www.oracle.com/us/legal/privacy/index.html')
      ]);

      Signals.user.loggedIn.add(function() {
        self.userLoggedIn(true);
        oj.Router.rootInstance.go('expense');
      });

      this.logOut = function() {
        self.userLoggedIn(false);
        UserHelper.setAccessToken(null);
        oj.Router.rootInstance.go('login');
      };
     }

     return new ControllerViewModel();
  }
);
