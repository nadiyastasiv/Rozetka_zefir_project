var favouriteProducts = [];

//Отримуємо раніше збережені в браузері обрані продукти
if(window.localStorage.getItem('product')){
	favouriteProducts = window.localStorage.getItem('product');
	favouriteProducts = favouriteProducts.split(',');
}
updateFavouritesCounter();


//запускаємо функцію для кожної кнопки при завантаження сторінки
$("button.add-to-favourites").each(function() {
var product_id = $(this).attr('data-id');

//Перевіряємо чи айді товару є у списку обраних
if(favouriteProducts.includes(product_id) == true) {
$(this).addClass('in-favourites');
}
});

$(document).on('click', 'button.add-to-favourites', function(){
	//Отримуємо ID продукту. який додаємо до вибраних
	var product_id = $(this).attr('data-id');

	//Отримуєм поточну к-сть обраних
	//var currentCount = Number($('#favourites span').html());

	
		//Прибираємо зі списку обраних
		// визначаємо позицію елементу в масиві
		var index = favouriteProducts.indexOf(product_id);

		//Приховуємо залите серце
		$(this).removeClass('in-favourites');

		//видаляємо айді продукту з масиву за індексом
		favouriteProducts.splice(index, 1);
		//Віднмаємо одиницю від лічильника обраних
		//currentCount--;

	} else {
		// Додаємо айді товару в масив (список) обраних
		favouriteProducts.push(product_id);

		//Показуємо залите серце
		
		//додаємо одиницю товару  до лічильника обраних
		//currentCount = currentCount +1;
		//currentCount++;
	}	

		//Зберігаємо список обраних в браузеоі
		window.localStorage.setItem('product', favouriteProducts);



	//Pure JS
	// document.getElementById('favourites')/innerHTML = '<span>'+currentCount+"</span>";
	if (favouriteProducts.length == 0) {
		//Сховати лічильник
		$('#favourites span').addClass('empty');
	} else {
			//Показати лічильник
			$('#favourites span').removeClass('empty');
		}


	//alert(currentCount); спливаюче вікно
	console.log(favouriteProducts);
});

function updateFavouritesCounter() {
//Оновиити дані в HTML лічильника
	//Query
	//$('#favourites span').html(currentCount);
	$('#favourites span').html(favouriteProducts.length);
}

//Home banner slider
$(document).ready(function(){
	var sliderOptions = {

		prevArrow: '<div class="prev-button"> <svg> <use href="#shevron-right"> </use> </svg></div>',
		nextArrow: '<div class="next-button"> <svg> <use href="#shevron-right"> </use> </svg> </div>'
	};
	$('.home__content-slider').slick(sliderOptions)
});


//$(document).on('ready', function(){
	//alert('jQuery is ok');
//});

//$('.header__search form button').on('click', function(){
	//var searchTerm = $('.header__search form input').val();
	//alert(searchTerm);
//});

$(document).on('click', '.header__search form button', function(){
	var searchTerm = $('.header__search form input').val();
	alert(searchTerm);
});

$(document).on('click', '.header__menu-toggle', function(){
// 	//$this == $('.header__menu-toggle')
// 	if($(this).hasClass('opened')){
// 		$(this).removeClass('opened');
// 	} else { 
// 	 $(this).addClass('opened');
// 	}

$(this).toggleClass('opened');

//Змінюєм клас для меню
$('.slide-menu').toggleClass('opened');
})



//var firstName = 'Надя';
//var lastName = 'Стасів';
//var fullName = firstName+' '+lastName;

var myData = {
	firstName:'Надя',
	lastName:'Стасів',
	age: 31
}

// function fullNamefunction(first, last){
// var fullName = first+' '+last;
// return fullName;
// }

// var myFullName = fullNameFunction(myData.firstName, myData.lastName);
// //alert(myFullName)

function getProducts(){
	fetch('http://fakestoreapi.com/products')
	.then((response)=>{
		return response.json();
	})
	.then((products)=>{
		console.log(products);
	})
	.catch((error)=>({
		console.log(error);
	})

}

getProducts();
//http://fakestoreapi.com/products товари зразок для роботи