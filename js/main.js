(function($, window){

	window.App = {};
	window.App.init = function(){
		
			/* Bind social-share */
            $(".social-share a").on("click", function () {
                var $this = $(this);

                $(".social-likes").find(".social-likes__widget_" + $this.data("social")).click();
                return false;
            });

            /* Hide social-share vertical on scroll to footer */
            var doc_h = $(document).height(),
            	window_h = $(window).height(),
            	box_h = $(".js-hide-social-share").height();

            if($(document).scrollTop() < doc_h - (window_h + box_h)) {
            	$(".social-share_pos_vertical").show();
            }

            $(document).scroll(function(){
            	if($(document).scrollTop() > doc_h - (window_h + box_h)) {
            		$(".social-share_pos_vertical").fadeOut();
            	} else {
            		$(".social-share_pos_vertical").fadeIn();
            	}
            });      

	};

	window.App.init();

}(jQuery, this));