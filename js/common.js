$(document).ready(function(){

	$(".navBar__menu").on("click", function(){
		if($(this).hasClass("active_nv")){
			$(this).removeClass("active_nv");
			$('.main').removeClass('active');
		}else{
			$(this).addClass("active_nv");
			$('.main').addClass('active');
		}
	});



	// $('.main').on('scroll', function(){
	// 	let sc = $('.onScrollSc'),
	// 		s = $(this).scrollTop() + 100,
	// 		tpS = [];
	
	// 	for(i=0; i < sc.length; i++){
	// 		tpS.push(sc[i].offsetTop);
	// 		if(tpS[i] < s){
	// 			let att = $(sc[i]).attr('id');
	// 			$(".navigation").find(".onScroll").removeClass("active");
	// 			$(`[href = "#${att}"]`).addClass("active");
	// 		}
	// 	}
	// });


	$(".main").mCustomScrollbar({
		theme: 'light-thick',
		scrollInertia: 500,
		mouseWheel:{ scrollAmount: 150 },
		callbacks:{
			whileScrolling:function(){
				let sc = $('.onScrollSc'),
				s = this.mcs.top * -1 + 20,
				tpS = [];

				for(i=0; i < sc.length; i++){
					tpS.push(sc[i].offsetTop);
			
					if(tpS[i] < s){
						let att = $(sc[i]).attr('id');
			
						$(".navigation").find(".onScroll").removeClass("active");
						$(`[href = "#${att}"]`).addClass("active");
					}
				}

			}
		}
	});

	$('a.onScrolling').on('click', function(){

		event.preventDefault();
	
		let at = $(this).attr('href'),
			topS = $(at)[0].offsetTop;
	
		// $('.main').animate({scrollTop: topS}, 400);
		$('.main').mCustomScrollbar('scrollTo', topS, {
			scrollInertia: 1000
		});
	
	});

	$('.navigation a.onScroll').on('click', function(){
		
		event.preventDefault();
	
		let at = $(this).attr('href'),
			topS = $(at)[0].offsetTop;

		$('.main').addClass('activeRevers');


		setTimeout(function(){
			$('.main').mCustomScrollbar('scrollTo', topS, {
				scrollInertia: 0
			});
			$('.main').removeClass('activeRevers active');
			$('.navBar__menu').removeClass('active_nv');
		}, 500);
	});

	$('.typesWeb__tbList li').on('click', function(){
		
		let a = $(this).attr('data-ln');

		$(this).addClass('active').siblings('li').removeClass('active');
		$(this).parents('.typesWeb').find(`.${a}`).addClass('active').siblings('.item').removeClass('active');

	});

	$('.work__slider').slick({
		infinite: true,
		dots: true,
		vertical: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				vertical: false
			  }
			}
		  ]
	  });

	setTimeout(function(){
		$('.preloader').fadeOut(400)
	}, 2000);

	$('.typesWeb__skrll button').on('click', function(){

		let l = $('.typesWeb__sk').scrollLeft();


		if($(this).hasClass('right')){
			l += 60;
		}else{
			l -= 60;
		}

		$('.typesWeb__sk').animate({scrollLeft:  l}, 300);
	});


	// $('.typesWeb__skrll .right').on('click', function(){
	// 	$('.typesWeb__sk').animate({scrollLeft: 30}, 200);
	// });


});

VANTA.NET({
	el: "#mainSc",
	color: 0x1a1a68,
	backgroundColor: 0xc0c0c,
	points: 14.00,
	maxDistance: 19.00,
	spacing: 17.00
})

