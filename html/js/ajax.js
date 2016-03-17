"use strict";jQuery(window).load(function(b){var a=jQuery("#work-grid");jQuery("#load-more").click(function(){var d=jQuery(this);d.hide();var f="ajax/portfolio-3column.html";
var e=jQuery("a#load-more i");e.addClass("spinef");var c=4;jQuery.ajax({url:f,data:{itemCount:c}}).done(function(g){a.isotope("insert",jQuery(g));a.isotope("insert",jQuery(g.content)).imagesLoaded(function(){a.isotope("layout");
e.removeClass("spinef");likeEf();});d.show();}).fail(function(){d.text("Error while loading!");});});jQuery("#load-more-2col").click(function(){var d=jQuery(this);
d.hide();var f="ajax/portfolio-2column.html";var e=jQuery("a#load-more i");e.addClass("spinef");var c=4;jQuery.ajax({url:f,data:{itemCount:c}}).done(function(g){a.isotope("insert",jQuery(g));
a.isotope("insert",jQuery(g.content)).imagesLoaded(function(){a.isotope("layout");e.removeClass("spinef");likeEf();});d.show();}).fail(function(){d.text("Error while loading!");
});});});