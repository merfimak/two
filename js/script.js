new WOW().init();


$(document).ready(function(){



	$('.burger').click(function(event){
		$('.burger,.menu__nav,.menu__overlay').toggleClass('active');
	});
	$('.menu__overlay').click(function(event){
		$('.burger,.menu__nav,.menu__overlay').toggleClass('active');
	});


	$('.video').parent().on('click', function(){
		if($('.video')[0].paused){
		 $('.video')[0].play();
		 	$('.play').css('display','none');
		}else{
			$('.video')[0].pause();
			$('.play').css('display','block');
		}
  	});


	$( ".spoiler_body__title" ).click(function(event) {
		if($('.block_4__spoilers').hasClass("one")){
			$('.spoiler_body__title').not($(this)).removeClass('active');
			$('.spoiler_body__title').not($(this)).next().removeClass('active');
			$('.spoiler_body__title').not($(this)).parent().removeClass('active');
		}
		$(this).next().toggleClass("active");
		$(this).parent().toggleClass("active");
		$(this).toggleClass("active");
	});


 $('.block_5__slider').slick({
 		vertical: true,
 		slidesToShow:2,
 		waitForAnimate: false,
  });

$( ".block_6__person" ).click(function(event) {
		var person = $(this).attr('data-person');
		
		if($('.block_6__team_info').not('.'+person)){
			$('.block_6__team_info').removeClass("active");
		}
		$('.'+person).toggleClass("active");

		$('.block_6__person').not($(this)).removeClass('active');
		$(this).toggleClass("active");
	});


$('.flowing_scroll').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
            scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 500 // скорость прокрутки// offset() - возвращает координаты
        );
    }
    return false;
});




  $('.block_7__form_body').submit(function(e) {
    e.preventDefault();
   var first_name = $('.first_name').val();
    var last_name = $('.last_name').val();
    var email = $('.email').val();
    var phone = $('.phone').val();
    var text = $('.text').val();
 
 
    $(".error").remove();
 
    if (first_name.length < 1) {
    	$('.block_7_container1').after('<div class="error">First Name is required</div>');
    }
   if (last_name.length < 1) {
      $('.block_7_container1').after('<div class="error">Last Name is required</div>');
    }
    if (email.length < 1) {
      $('.block_7_container1').after('<div class="error">Email is required</div>');
    } 
    if (phone.length < 1) {
      $('.block_7_container1').after('<div class="error">Phone is required</div>');
    }
     if (text.length < 1) {
      $('.block_7_container1').after('<div class="error">Text is required</div>');
    }

  });













});





