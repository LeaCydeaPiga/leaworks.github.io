
/*WOWJs*/
	  $(function() {
      new WOW().init();
 });
	

/*preloader*/

 $(window).on('load',function(){
 		$(".loader").fadeOut(1000);
 		$(".content").fadeIn(1000);
 })




/*typedJs*/

var typed = new Typed('.typed1',{
	strings:[
	'Lea Cydea Piga.',
	'A University Student.',
	
	],
	typeSpeed:100,
	backSpeed:100,
	loop:true
});

/*toTop*/

 const toTop = document.querySelector(".to-top");
  window.addEventListener("scroll",() => {

    if (window.pageYOffset > 100) {      
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
     }
    });

/*sweetalertJs*/

		function myFunction() {			
		swal("", "Your Email has been sent!", "success");
			}

/*AOS*/

	    /*AOS.init({	    	
	    	duration:1500,
	    	delay:250,
	    	offset:100	    	  		    	
	    });*/

/*checking email is null or not*/

		$('#submit').click(function(){
			var email = $('#email').val();
			var subject = $('#subject').val();
			if (email == '' || subject == '') {
				swal("", "Please enter missing fields!", "error");

			}
			else{
				swal("","Your email has been sent!","success");
			}
		});
    
/*changing main colors*/

		$("#change-1").on('click', function() {  
	  		$("body").css("--custom-text", "#9457eb");
	  		$("body").css("--custom-bg","#9457eb");
	  		swal("", "Successfully changed to PURPLE!", "success");
		});
		$("#change-2").on('click', function() {  
	  		$("body").css("--custom-text", "#48C9B0");
	  		$("body").css("--custom-bg","#48C9B0");
	  		swal("", "Successfully changed to GREEN!", "success");
		});
		$("#change-3").on('click', function() {  
	  		$("body").css("--custom-text", "#ffd859");
	  		$("body").css("--custom-bg","#ffd859");
	  		swal("", "Successfully changed to YELLOW!", "success");
		});
		$("#change-4").on('click', function() {  
	  		$("body").css("--custom-text", "#f3a6c0");
	  		$("body").css("--custom-bg","#f3a6c0");
	  		swal("", "Successfully changed to PINK!", "success");
		});

