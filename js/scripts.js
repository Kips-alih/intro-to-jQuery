  jQuery(document).ready(function() {
    jQuery('.clickable').click(function() {
      $("#initially-showing").toggle();
      $("#initially-hidden").toggle();
    });
  });
  