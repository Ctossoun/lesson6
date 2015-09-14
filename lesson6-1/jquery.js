$(document).ready(function(){

	console.log('Hi I am connected');


		$(".div1").mouseenter(function(){
			alert("How Are You Doing?");
				});

		$(".div2").click(function(){
			$(this).fadeOut("slow");
		});

		$("#button1").click(function(){
			$(".div3").animate({
				'marginLeft' : "+=50px"
			})
		});

		$("#button2").click(function(){
			$(".div4").animate({
				width: "80%",
				height: "500px"
			})
		});

		$("#button3").click(function(){
			$(".div4").animate({
				width: "300px",
				height: "50px"
			})
		});


});