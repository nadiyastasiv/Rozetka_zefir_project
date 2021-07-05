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