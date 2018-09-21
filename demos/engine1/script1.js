function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    var img = $('.image-fluid');
	var modalImg = $("#img01");
	$('.image-fluid').click(function(){
		modal.style.display = "block";
		var newSrc = this.src;
		modalImg.attr('src',newSrc);
	});
	$('#vidBox').VideoPopUp({
		backgroundColor: "#17212a",
    	opener: "video1",
    	maxweight: "340",
    	idvideo: "v1"
   	});
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            },1000);
        }
    });
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                autoplay: true,
                autoplayTimeout: 1000,
                autoplayHoverPause: false
              });
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
              });
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
              });    
});
	// Get the cross tag which closes the Image tag
	var span = document.getElementsByClassName("close")[0];
	var modal = document.getElementById('myModal');
	// Onclick close the modal
	span.onclick = function(){
		modal.style.display = "none";
	}

	//Get the a tag element
// Video modal
// $(function () {
// $('#vidBox').VideoPopUp({
// 		backgroundColor: "#17212a",
//     	opener: "video1",
//     	maxweight: "340",
//     	idvideo: "v1"
//    	});
// });