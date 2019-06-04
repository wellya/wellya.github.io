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

    /* ---- particles.js config ---- */

    particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 1
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


    /* ---- stats.js config ---- */

});

/*VANTA.NET({
	el: "#mainSc",
	color: 0x1a1a68,
	backgroundColor: 0xc0c0c,
	points: 14.00,
	maxDistance: 19.00,
	spacing: 17.00
})
*/
