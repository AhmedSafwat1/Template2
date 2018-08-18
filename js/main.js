/*global $, alert, console*/
$(function () {
	"use strict";
	/*make header height*/
	$(".myheader").height($(window).height())
	$('html').niceScroll({
		cursorcolor:'#f7600e',
		cursorwidth:'10px'
	});
	$('.myheader .arrow i').click(function () {
		$("body,html").animate({
			scrollTop : $(".features").offset().top
		},1000)
	})
	/*hover in project*/
	$(".ourwork .item-project .p1").hover(function () {
		$(this).find(".over").show(800);
	},function () {
		$(this).find(".over").hide();
	})
	$(".show-m").click(function () {
		$(this).addClass("disabled");
		$(".item-project .hidden").fadeIn(2000)
	})
	/*check testmonail*/
	function checkClient() {
		
		if ($(".client:first").hasClass("myactiv")) {
			$(".testmonail .left").fadeOut(100);
		}
		else if ($(".client:last").hasClass("myactiv")) {
			$(".testmonail .right").fadeOut(100);
		} else {
			 $(".testmonail .left").fadeIn()
			 $(".testmonail .right").fadeIn()
			 
		}
		
	};
	checkClient();
	$(".testmonail .left").click(function () {
			$(".myactiv").removeClass("myactiv").hide(1000).prev(".client").show(1000).addClass("myactiv");
    		 checkClient();
		});
		$(".testmonail .right").click(function () {
		   	$(".myactiv").removeClass("myactiv").hide(1000).next(".client").show(1000).addClass("myactiv");
			 checkClient();
			
		});
});
