define(['knockout', 'ojs/ojcore', 'helpers/signals'], function(ko, oj, Signal){
  function l10nHelper(){
    var self = this;
    this.labels = [];

    Signal.localeChange.add(function(locale) {
      var newLocale = '';
      switch (locale) {
        case 'français':
          newLocale = 'fr-FR';
          break;
        default:
          newLocale = 'en-US';
      }

      oj.Config.setLocale(newLocale, function () {
        $('html').attr('lang', newLocale);

        self.labels.forEach(function(i) {
          i.label(oj.Translations.getTranslatedString(i.key));
        });
      });

      console.log(newLocale);
    });

    this.getLabel = function(key) {
      var label = ko.observable(oj.Translations.getTranslatedString(key));
      self.labels.push({
        key: key,
        label: label
      });

      return label;
    }
  }

  return new l10nHelper();
});