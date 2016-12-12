angular.module('caseStudyApp', []).run(function($rootScope) {
  $rootScope.accordionData = {
    MENU1: ['MENU1.1', 'MENU1.2'],
    MENU2: ['MENU2.1'],
    MENU3: ['MENU3.1', 'MENU3.2', 'MENU3.3'],
    MENU4: ['MENU4.1', 'MENU4.2'],
    MENU5: [],
    MENU6: ['MENU6.1', 'MENU6.2', 'MENU6.3', 'MENU6.4']
  };

  $(function() {
    $('#accordion .panel-heading a').click(function() {
      var heading = $(this).parent().parent();
      if (!heading.hasClass('active')) {
        // the element clicked was not active, but now is -
        $('.panel-heading').removeClass('active');
        heading.addClass('active');
      } else {
        $('.panel-heading').removeClass('active');
      }
    });
  });
});
