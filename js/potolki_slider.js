
var p_last='st';  // который был до клика
var p_id='mat';// на который кликаем
var slider_timer=5000;  //5 сек

var intervalID = setInterval(function(){c_slider();}, slider_timer);

function c_slider(){

			if (p_id==='zn')
			{
				$(".p_slider .menu_item#mat").click();
			}
			else
			{
				$(".p_slider .menu_item.active_block").next().click();
			}
		
		}		


// Навели курсор 
$(document).on('mouseenter', '.p_slider', function(){ clearInterval(intervalID); })
//Убрали курсор 
$(document).on('mouseleave', '.p_slider', function(){intervalID = setInterval(function(){c_slider();}, slider_timer);})
		
		
$(document).on('click', ".p_slider .menu_item",function(){ 
	if ($(this).attr("id")!=p_id)
	{
		p_last=$(".p_slider .menu_item.active_block").attr("id");
		p_id=$(this).attr("id");
		slider_change(p_last,p_id);
	}
});

function slider_change(p_last,p_id)
{

	$(".p_slider #"+p_last).removeClass('active_block');
	$(".p_slider #"+p_id).addClass('active_block');

	$(".p_slider-items ."+p_id).animate({opacity: "show"}, 1000);
	$(".p_slider-items ."+p_last).animate({opacity: "hide"}, 1000);
}

/************ p_banner ****************/

var b_last='vannaja';  // который был до клика
var b_id='prih';// на который кликаем

$(document).on('click', ".p_banner .menu_item",function(){ 
	if ($(this).attr("id")!=b_id)
	{
		b_last=$(".p_banner .menu_item.active_block").attr("id");
		b_id=$(this).attr("id");
		banner_change(b_last,b_id);
	}
	
});

function banner_change(b_last,b_id)
{

	$(".p_banner #"+b_last).removeClass('active_block');
	$(".p_banner #"+b_id).addClass('active_block');

	$(".p_banner-items ."+b_id).animate({opacity: "show"}, 1000);
	$(".p_banner-items ."+b_last).animate({opacity: "hide"}, 1000);
}



