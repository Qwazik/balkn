//menu


var menu = $('.header__top'),
    fixedStart = $('.start').offset().top;
    menuItems = [];
    $(menu).find('a').each(function(){
        var i = $(this).attr('href');
        if (i != '/') {menuItems.push(i)}
    });

checkMenu();

$(window).scroll(function(){
    checkMenu();
    if($(document).outerHeight() - $(window).height() == $(window).scrollTop()){
       
        $(menu).find('a').removeClass('active');
        $('a[href="#kontakti"], a[href="#otzivi"]').addClass('active');
    }else{
    checkSection();
    }
})


function checkMenu(){
        if ($(window).scrollTop() >= fixedStart) {
        $('.menu-fixed').show();
    }else{
        
        $('.menu-fixed').hide();
    }
}

function checkSection(){
    $(''+menuItems+'').each(function(){
        var topEdge = $(this).offset().top - 54,
            bottomEdge = topEdge + $(this).height(),
            wScroll = $(window).scrollTop();
        if (topEdge < wScroll && bottomEdge > wScroll) {
            var currentId = $(this).attr('id');
            $(menu).find('a').removeClass('active');
            $(menu).find('a[href="#'+currentId+'"]').addClass('active');
        }
    })
}

//menu end

// top__header address
$('.phone,.addr').removeClass('active');
$('.contacts__item.bryansk').addClass('active');
$('.city__name').on('click', function() {
    var target = $(this).siblings('ul.city__select');
    $(target).fadeToggle();
});
$('.city__select').on('click', 'li', function() {
    checkActiveAddress();
})

function checkActiveAddress() {
    if ($('.contacts__item.bryansk').hasClass('active')) {
        $('.contacts__item').removeClass('active');
        $('.contacts__item.kaluga').addClass('active');
        $('.city__select li').removeClass('select');
        $('.city__select li.kaluga').addClass('select');
        $('.city__name .name').text('Калуга');
        console.log(1);
    } else {
        $('.contacts__item').removeClass('active');
        $('.contacts__item.bryansk').addClass('active');
        $('.city__select li').removeClass('select');
        $('.city__select li.bryansk').addClass('select');
        $('.city__name .name').text('Брянск');
    }
}
// top__header address end



//gallary

$('#gallary .gallary__nav li').on('click', function() {
    $('#gallary .gallary__nav li').removeClass('active');
    $(this).addClass('active');
    gallaryPhotoSelect($(this));
})

function gallaryPhotoSelect(e) {
    var nav = $('#gallary .gallary__nav');
    var photos = $('#gallary .gallary__photo');
    $(photos).removeClass('active');
    if ($('#gallary .gallary__nav li.cold').hasClass('active')) {
        $('#gallary .gallary__photo.cold').addClass('active');
    } else if ($('#gallary .gallary__nav li.hot').hasClass('active')) {
        $('#gallary .gallary__photo.hot').addClass('active');
    } else {
        $('#gallary .gallary__photo.inner').addClass('active');
    }

}

//reviews

$(function() {
    var left = $('.rNav__left');
    var right = $('.rNav__right');
    var widthItem = 879;

    var colsItem = $('.reviews__item').length;


    $('.reviews').css('width', colsItem * widthItem + 'px');

    $(right).on('click', function() {
        var cur = $('.reviews__list').find('.reviews__item.active');

        var indexCur = $(cur).index();
        if ($(cur).next().length) {
            $('.reviews__list').find('.reviews__item').removeClass('active');
            $(cur).next().addClass('active');
            indexCur++;
            $('.reviews').animate({
                'margin-left': '-' + widthItem * indexCur + 'px'
            })
        }
    })

    $(left).on('click', function() {

        var cur = $('.reviews__list').find('.reviews__item.active');
        var indexCur = $(cur).index();

        if ($(cur).prev().length) {
            $('.reviews__list').find('.reviews__item').removeClass('active');
            $(cur).prev().addClass('active');
            indexCur--;
            $('.reviews').animate({
                'margin-left': '-' + widthItem * indexCur + 'px'
            })
            
        }
    })
})

//map contacts
$('.map__info .nav button').on('click', function(){
	$('.map__info .nav button').removeClass('active');
	$(this).addClass('active');
	if($('.map__info .nav button.br').hasClass('active')){
		$('.map__contacts.br, .map.br').show();
		$('.map__contacts.kl, .map.kl').hide();
	}else{
		$('.map__contacts.kl, .map.kl').show();
		$('.map__contacts.br, .map.br').hide();
	}
})
function toggleAddress(){

}

//плавный переход
jQuery(document).ready(function() {
    jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top - 53;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        return false;
    });
});


// calc
$(function() {
    $(".bl_sw").slider({
        min: 0, //hot
        max: 1, //cold
        animate: "slow",
        change: function(event, ui) {
            //alert ($(this).slider( "option", "value" ));
            if ($(this).slider("option", "value") == '0') {
                $(".features_cold").addClass('hide');
                $(".features_hot").removeClass('hide');
                $(".bl_cold").removeClass('active_');
                $(".bl_cold").addClass('inactive_');
                $(".bl_hot").removeClass('inactive_');
                $(".bl_hot").addClass('active_');
                $(".bal_bg").removeClass('cold_bg');
            } else {
                $(".features_cold").removeClass('hide');
                $(".features_hot").addClass('hide');
                $(".bl_hot").removeClass('active_');
                $(".bl_hot").addClass('inactive_');
                $(".bl_cold").removeClass('inactive_');
                $(".bl_cold").addClass('active_');
                $(".bal_bg").addClass('cold_bg');
            }
        }
    });
    $(".bl_cold").click(function() {
    	$('.bal_right .sw_block .blsw').animate({
    		'background-color':'#0060AB'
    	});
        $(".bl_sw").slider("value", 1);
        coldHotText();
    })
    $(".bl_hot").click(function() {
    	$('.bal_right .sw_block .blsw').animate({
    		'background-color':'#FF6448'
    	});
        $(".bl_sw").slider("value", 0);
        coldHotText();
    })
    function coldHotText(){
    	if ($('.bl_hot').hasClass('active_')) {
    		$('.hot.header, .p_text.hot').show();
    		$('.cold.header, .p_text.cold').hide();
    	}else{
    		$('.hot.header, .p_text.hot').hide();
			$('.cold.header, .p_text.cold').show();
    	}
    }
});
$('.combo .combo_option .select').click(function() {
    $('.combo .combo_option').removeClass('active');
    $(this).parent().addClass('active');
    var id = $(this).attr('id');
    //alert(id);
    var n = 'gofra_';
    if (id == 'select1') {
        n = 'gofra_';
    } else {
        n = 'sid_';
    }
    var e = $('.variants_gal .active').attr('id');
    $('.bal_left .bal_shell').css('background', 'url("assets/templates/site/images/' + n + e + '.png") no-repeat left top');
})
$('.variants_gal div').click(function() {
    $('.variants_gal div').removeClass('active');
    $(this).addClass('active');
    var id = $('.combo .combo_option.active .select').attr('id');
    //`alert (id);
    var n = 'gofra_';
    if (id == 'select1') {
        n = 'gofra_';
    } else {
        n = 'sid_';
    }
    var e = $('.variants_gal .active').attr('id');
    $('.bal_left .bal_shell').css('background', 'url("assets/templates/site/images/' + n + e + '.png") no-repeat left top');
})
$(".hot_").click(function() {
    $(".sw_block .bl_hot").click();
})
$(".cold_").click(function() {
    $(".sw_block .bl_cold").click();
})

/*=================================== Ц Е Н Ы ====================================*/

var roof = 'roof2';
var okno = 'okno2';
var shell = 'shell1';
var struct = 'struct1';
var otdelka = 'otdelka1';
var skaf = 'skaf1';
var floor = 'floor10';

var price = new Object();
//крыша
price['roof1'] = 0;

price['roof2'] = 111;
price['roof3'] = 222;

//остекление 

price['okno1'] = 333;
price['okno2'] = 444;
//обшивка
price['shell1'] = 0;
price['shell2'] = 555;
price['shell3'] = 222;


//кладка
price['struct1'] = 0;
price['struct2'] = 111;
//пвх вагонка

price['otdelka1'] = 234;
price['otdelka2'] = 545;
price['otdelka3'] = 134;
price['otdelka4'] = 342;
price['otdelka5'] = 734;
//пвх вагонка широкая


price['otdelka6'] = 451;
price['otdelka7'] = 231;
price['otdelka8'] = 981;
price['otdelka9'] = 321;
price['otdelka10'] = 121;
// вагонка

price['otdelka11'] = 671;
//Шкаф

price['skaf1'] = 0;
price['skaf2'] = 61;
price['skaf3'] = 761;
price['skaf4'] = 71;
//пол линолеум


price['floor1'] = 981;
price['floor2'] = 761;
price['floor3'] = 341;
price['floor4'] = 651;
price['floor5'] = 441;
//пол ламинат


price['floor6'] = 761;
price['floor7'] = 451;
price['floor8'] = 341;
price['floor9'] = 341;
//пол доска


price['floor10'] = 431;
var k = 3; //коэффициент 	 //коэффициент


function l_calc() {
    var itog = (price[roof] + price[okno] + price[shell] + price[struct] + price[otdelka] + price[skaf] + price[floor]) * k;
    $('.l_price .price').html(itog);
    $('.l_price .rassr span').html(Math.floor(itog / 12));
    console.log(price[roof] , price[okno] , price[shell] , price[struct] , price[otdelka] , price[skaf] , price[floor], itog);
}

l_calc();



$('.l_roof .vars div').click(function() {

    $('.l_roof div').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('id');
    roof = id;
    if (okno == 'okno2') {
        $('.l_center .maket_roof').css('background', 'url("assets/templates/site/images/' + id + '_m.png") no-repeat');
    } else {
        $('.l_center .maket_roof').css('background', 'url("assets/templates/site/images/' + id + '_mh.png") no-repeat');
    }
    l_calc();

})

$('.l_okno .vars div').click(function() {

    $('.l_okno div').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('id');
    okno = id;
    $('.l_center .maket_okno').css('background', 'url("assets/templates/site/images/' + id + '_m.png") no-repeat');
    if (okno == 'okno2') {
        $('.l_center .maket_roof').css('background', 'url("assets/templates/site/images/' + roof + '_m.png") no-repeat');
    } else {
        $('.l_center .maket_roof').css('background', 'url("assets/templates/site/images/' + roof + '_mh.png") no-repeat');
    }
    l_calc();
})

$('.l_shell .vars div').click(function() {

    $('.l_shell div').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('id');
    shell = id;
    $('.l_center .maket_shell').css('background', 'url("assets/templates/site/images/' + id + '_m.png") no-repeat');
    l_calc();
})

$('.l_struct .vars div').click(function() {

    $('.l_struct div').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('id');
    struct = id;
    $('.l_center .maket_struct').css('background', 'url("assets/templates/site/images/' + id + '_m.png") no-repeat');

    l_calc();
})

$('.l_otdelka .swich span').click(function() {

    $('.l_otdelka .swich span').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('id');

    $('.l_otdelka .vars div').removeClass('hide');
    $('.l_otdelka .vars div').addClass('hide');
    $('.l_otdelka .vars div.' + id).removeClass('hide');
    $('.l_otdelka .vars div.' + id + ' div').removeClass('hide');
})

$('.l_otdelka .vars div').click(function() {

    $('.l_otdelka div').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('id');
    otdelka = id;
    $('.l_center .maket_otdelka').css('background', 'url("assets/templates/site/images/' + id + '_m.png") no-repeat');

    l_calc();
})

$('.l_skaf .vars div').click(function() {

    $('.l_skaf div').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('id');
    skaf = id;
    $('.l_center .maket_skaf').css('background', 'url("assets/templates/site/images/' + id + '_m.png") no-repeat');

    l_calc();
})

$('.l_floor .swich span').click(function() {

    $('.l_floor .swich span').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('id');

    $('.l_floor .vars div').removeClass('hide');
    $('.l_floor .vars div').addClass('hide');
    $('.l_floor .vars div.' + id).removeClass('hide');
    $('.l_floor .vars div.' + id + ' div').removeClass('hide');
})

$('.l_floor .vars div').click(function() {

    $('.l_floor div').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('id');
    floor = id;
    $('.l_center .maket_floor').css('background', 'url("assets/templates/site/images/' + id + '_m.png") no-repeat');

    l_calc();
})


  $(".v_tel").inputmask("+7 (999) 999-99-99");
  $(".callback_h_tel").inputmask("+7 (999) 999-99-99");

/*=====================================================
                      отзывы
=====================================================*/
 $(document).ready(function(){
        $('#otz_carousel').boutique({
        container_width:800,  
        front_img_width:164,
        hovergrowth:0,
        autoplay: true,
        autoplay_interval:5000,
        stop_autoplay_on_click: true,
        behind_topmargin:80,
        behind_opacity:1,
        behind_size:0.7,
        back_opacity:1,
        back_size:0.7,
        back_topmargin:120,
        });
      $('#otz_carousel .frame3 img').attr('src','img/otz/'+($('#otz_carousel .frame3 img').attr('id')+'.png'));   
      $('#otz_carousel .frame3 .otz_prof').removeClass('hide'); 
      $('#otz_carousel .frame3 .otz_name').css('color','#000');
      $('.otz .otz1').removeClass('hide');    
      });
function pre_move_callback(anchor, instance, framenumber){
      //  alert('Callback example: Frame '+framenumber+', with the link "'+anchor+'", moved forward (in Boutique with an ID of "'+instance+'").');
        
        var len=$("#otz_carousel > li").length/2;
        
        for  (var i=1; i<=len; i++){
          $('#otz_carousel .frame'+i+' img').attr('src','img/otz/'+($('#otz_carousel .frame'+i+' img').attr('id')+'_b.png'));
          $('#otz_carousel .frame'+i+' .otz_prof').addClass('hide');
          $('#otz_carousel .frame'+i+' .otz_name').css('color','#999');
          $('.otz .otz'+i+'').addClass('hide'); 
        }

      }     
function move_callback(anchor, instance, framenumber){
        $('#otz_carousel .frame3 img').attr('src','img/otz/'+($('#otz_carousel .frame3 img').attr('id')+'.png'));
        $('#otz_carousel .frame3 .otz_prof').removeClass('hide');
        $('.otz .'+$('#otz_carousel .frame3 img').attr('id')+'').removeClass('hide');
        $('#otz_carousel .frame3 .otz_name').css('color','#000');
      }           

/*=====================================================
                      features
=====================================================*/


$('#features li').hover(function(){
    $(this).addClass('hovered');
    $(this).find('.circle').show();
}, function(){
    $(this).removeClass('hovered');
    $(this).find('.circle').hide();
})

$('.city__btn').on('click', function(){
    if ($(this).siblings('.city__list').is(':visible')) {
        $(this).siblings('.city__list').hide();
    }else{
        $(this).siblings('.city__list').show();
    }
});

$('.city__list li').on('click', function(){
    $(this).siblings('li').removeClass('selected');
    $(this).addClass('selected');
    $('.city__list').hide();
    checkCity();
})

function checkCity(){
    if ($('.city__item.br').hasClass('selected')) {
        $('.adr__info').removeClass('selected');
        $('.adr__info.br').addClass('selected');
        $('.city__btn .name').text('Брянск');
    }else{
        $('.adr__info').removeClass('selected');
        $('.adr__info.kl').addClass('selected');
        $('.city__btn .name').text('Калуга');
    }
}