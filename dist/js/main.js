$(document).ready(function() {
  $('#fullpage').fullpage({
      scrollingSpeed: 300,
      touchSensitivity: 15,
      normalScrollElementTouchThreshold: 5,
      anchors: ['sectionone', 'sectiontwo', 'sectionthree', 'sectionfour', 'sectionfive'],
      slidesNavigation: true,
      slidesNavPosition: 'bottom'
  });
});
