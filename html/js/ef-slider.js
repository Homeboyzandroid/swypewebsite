"use strict";$(document).ready(function(){var j=$(".slider"),g=$(".slide__bg"),m=0,o=0,l=$(".slide").length-1,p=false,i=500,n,k=6000,h=$(".slider-pagi");
function a(){for(var q=0;q<l+1;q++){var r=$("<li class='slider-pagi__elem'></li>");r.addClass("slider-pagi__elem-"+q).data("page",q);if(!q){r.addClass("active");
}h.append(r);}}a();function c(){$(".slider-control").removeClass("inactive");if(!o){$(".slider-control.left").addClass("inactive");}if(o===l){$(".slider-control.right").addClass("inactive");
}}function b(){n=setTimeout(function(){o++;if(o>l){o=0;}d();},k);}b();function d(q){if(!q){p=true;c();j.addClass("animating");j.css("top");$(".slide").removeClass("active");
$(".slide-"+o).addClass("active");setTimeout(function(){j.removeClass("animating");p=false;},i);}window.clearTimeout(n);$(".slider-pagi__elem").removeClass("active");
$(".slider-pagi__elem-"+o).addClass("active");j.css("transform","translate3d("+-o*100+"%,0,0)");g.css("transform","translate3d("+o*50+"%,0,0)");m=0;b();
}function f(){if(p){return;}if(o>0){o--;}d();}function e(){if(p){return;}if(o<l){o++;}d();}$(document).on("mousedown touchstart",".slider",function(s){if(p){return;
}window.clearTimeout(n);var q=s.pageX||s.originalEvent.touches[0].pageX,r=$(window).width();m=0;$(document).on("mousemove touchmove",function(u){var t=u.pageX||u.originalEvent.touches[0].pageX;
m=(q-t)/r*70;if((!o&&m<0)||(o===l&&m>0)){m/=2;}j.css("transform","translate3d("+(-o*100-m)+"%,0,0)");g.css("transform","translate3d("+(o*50+m/2)+"%,0,0)");
});});$(document).on("mouseup touchend",function(q){$(document).off("mousemove touchmove");if(p){return;}if(!m){d(true);return;}if(m>-8&&m<8){d();return;
}if(m<=-8){f();}if(m>=8){e();}});$(document).on("click",".slider-control",function(){if($(this).hasClass("left")){f();}else{e();}});$(document).on("click",".slider-pagi__elem",function(){o=$(this).data("page");
d();});});