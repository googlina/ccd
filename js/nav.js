jQuery(document).ready(function(i){if(i(window).width()>1170){var s=i(".cd-header").height();i(window).on("scroll",{previousTop:0},function(){var e=i(window).scrollTop();e<this.previousTop?e>0&&i(".cd-header").hasClass("is-fixed")?i(".cd-header").addClass("is-visible"):i(".cd-header").removeClass("is-visible is-fixed"):(i(".cd-header").removeClass("is-visible"),e>s&&!i(".cd-header").hasClass("is-fixed")&&i(".cd-header").addClass("is-fixed")),this.previousTop=e})}i(".cd-primary-nav-trigger").on("click",function(){i(".cd-menu-icon").toggleClass("is-clicked"),i(".cd-header").toggleClass("menu-is-open"),i(".cd-primary-nav").hasClass("is-visible")?i(".cd-primary-nav").removeClass("is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){i("body").removeClass("overflow-hidden")}):i(".cd-primary-nav").addClass("is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){i("body").addClass("overflow-hidden")})})});