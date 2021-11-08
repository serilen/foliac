;(function(){
	"use strict";

	jQuery(function($) {
		$(".grid").masonry({
			itemSelector:'.grid__item',
			columnWidth: 42,
			//percentPosition: true, //процентный размер
			gutter: 40
		});
	})
//подключение masonry нативным JS
/*let elem = document.querySelector('.grid');
let msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
let msnry = new Masonry( '.grid', {
  // options
});*/


//Подключение Isotope
// Инициализая секции с которой работаем
let grid = new Isotope('.grid', {
	itemSelector: '.grid__item',
	layoutMode: 'fitRows'
});

// Работаем с кнопками фильтров
let filterBtn = document.querySelectorAll('.btn-group .btn');
for (let i = 0; i < filterBtn.length; i++) {
    // Если кликнули по ссылке
    filterBtn[i].onclick = function (click) {
       // Получаем значение дата-атрибута кнопки
       let filterData = event.target.getAttribute('data-filter');
        // Применяем фильтрацию элементов в Isotope
        grid.arrange({
        	filter: filterData
        });
     };
  }

})();

