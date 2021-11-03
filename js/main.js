;(function(){
	"use strict";

	jQuery(function($) {
		$(".grid").masonry({
			itemSelector:'.grid__item',
			columnWidth: 42,
			//percentPosition: true, //процентный размер
			gutter: 40
		});
		
		$('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});
	})

//подключение нативным JS
/*var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
});*/

})();

