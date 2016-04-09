//menu


var menu = $('#mainMenu'),
    fixedStart = $('.top__right').height();
    menuItems = [];
    $(menu).find('a').each(function(){
        var i = $(this).attr('href');
        if (i != '/') {menuItems.push(i)}
    });

checkMenu();

$(window).scroll(function(){
    checkMenu();
    if($(document).outerHeight() - $(window).height() == $(window).scrollTop()){
        console.log($(document).outerHeight() - $(window).height() == $(window).scrollTop());
        $(menu).find('a').removeClass('active');
        $('a[href="#kontakti"], a[href="#otzivi"]').addClass('active');
    }else{
    checkSection();
    }
})


function checkMenu(){
        if ($(window).scrollTop() >= fixedStart) {
        $(menu).addClass('menu-fixed');
    }else{
        $(menu).removeClass('menu-fixed')
    }
}

function checkSection(){
    $(''+menuItems+'').each(function(){
        var topEdge = $(this).offset().top - 75,
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
        destination = jQuery(elementClick).offset().top - 73;
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

price['roof2'] = 100;
price['roof3'] = 200;

//остекление 

price['okno1'] = 300;
price['okno2'] = 400;
//обшивка
price['shell1'] = 0;
price['shell2'] = 500;
price['shell3'] = 600;


//кладка
price['struct1'] = 0;
price['struct2'] = 700;
//пвх вагонка

price['otdelka1'] = 800;
price['otdelka2'] = 900;
price['otdelka3'] = 1000;
price['otdelka4'] = 1100;
price['otdelka5'] = 1200;
//пвх вагонка широкая


price['otdelka6'] = 1300;
price['otdelka7'] = 1400;
price['otdelka8'] = 1500;
price['otdelka9'] = 1600;
price['otdelka10'] = 1700;
// вагонка

price['otdelka11'] = 1800;
//Шкаф

price['skaf1'] = 1900;
price['skaf2'] = 2000;
price['skaf3'] = 2100;
price['skaf4'] = 22000;
//пол линолеум


price['floor1'] = 2300;
price['floor2'] = 2400;
price['floor3'] = 2500;
price['floor4'] = 2600;
price['floor5'] = 2700;
//пол ламинат


price['floor6'] = 2800;
price['floor7'] = 2900;
price['floor8'] = 3000;
price['floor9'] = 3100;
//пол доска


price['floor10'] = 3200;
var k = 3; //коэффициент 	 //коэффициент


function l_calc() {
    var itog = (price[roof] + price[okno] + price[shell] + price[struct] + price[otdelka] + price[skaf] + price[floor]) * k;
    $('.l_price .price').html(itog);
    $('.l_price .rassr span').html(Math.floor(itog / 12));

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

