function init() {
    YoutubeBox();

    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();

    $("img.lazyload").lazyload({placeholder:''});
}

function addToCompareList(checkbox){
    var action = (checkbox.checked)?'ADD_TO_COMPARE_LIST':'DELETE_FROM_COMPARE_LIST';
    var id = checkbox.value;

    $.ajax({
	url: '/ajax/compare/index.php',
	data: {id: id, action: action},
	method:'post',
	dataType:'json',
	success: function(msg){
	    var itemsCount = parseInt(msg.cnt);
	    $('span.compareBadge').text(itemsCount);

	    if(action==='ADD_TO_COMPARE_LIST') {
		    $('#compLink'+msg.id).html('<a href="/compare/">Добавлено</a>');
	    } else {
		$('#compLink'+msg.id).text('Добавить к сравнению');
	    }
	}
    });
}


function reloadPage() {
    window.location.reload(true);
}


function fancyImages() {
	$('.fancybox').fancybox({type:'image',nextEffect:'none',openEffect:'none'});
}


function addToBasket(id) {
    $.ajax({
	url: '/ajax/basket/index.php',
	data: {product_id: id, action: 'ADD2BASKET'},
	method:'post',
	dataType:'json',
	success: function(mess){

	    if(mess.status==='done') {
		yaCounter40711014.reachGoal('BASKET');

		$('.basketMenu li.basketLink span.count').html(mess.num_products);

		swal({
		    title: "Товар был добавлен в корзину",
		    text: '',
//		    type: "success",
		    showCancelButton: true,
		    confirmButtonColor: "rgb(34, 147, 44)",
		    confirmButtonText: "Оформить заказ",
		    cancelButtonText: "Продолжить покупки",
		    cancelButtonColor: "#49473E",
		    closeOnConfirm: false,
		    imageUrl: '/bitrix/templates/klamas/img/basket.png'
		},
		function(isConfirmed){
			if(isConfirmed) {
			    window.location.href = '/personal/order/make/';
			}
		});
	    } else {
		swal({
		    title: "Произошла ошибка",
		    text: 'Нельзя добавить этот товар в корзину',
		    type: "error"
		});
	    }
	}
    });
}


function YoutubeBox() {
    $(".yt-video-box").click(function(e) {
	$.fancybox({
		'padding' : 0,
		'type' : 'swf',
		'href' : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
		'swf' : { 'wmode' : 'transparent', 'allowfullscreen' : 'true' }
	    });
	e.preventDefault();
    });
}

function showSocial() {
    	var socCookie = $.cookie('klamas_soc_win');
    	var socCookieClosed = $.cookie('klamas_soc_win_closed');
    	var inCatalog = window.location.href.indexOf('/catalog/catalog-');

    	if(typeof socCookie==='undefined') {
    		$.cookie('klamas_soc_win','1', { path: '/', expires: 5 });
    	} else {
    		var cook = parseInt(socCookie)+1;
    		$.cookie('klamas_soc_win',cook,{ path: '/', expires: 5 });
    	}

    	if(typeof socCookieClosed==='undefined' && parseInt(socCookie)>=4 && inCatalog!=-1) {
    		$.cookie('ax_soc_win','1',{ path: '/', expires: 5 });

    		jQuery.fancybox('<strong>Хотите первым узнавать о скидках???</strong><br/><div id="vk_groups"></div><script type="text/javascript">VK.Widgets.Group("vk_groups", {mode: 0, width: "300", height: "150", color1: "FFFFFF", color2: "2B587A", color3: "19729F"}, 95575098);</script>',{
    			width: '500px', height: '250px',padding: 30, scrolling:'no',
	    		afterClose: function() {
	    			$.cookie('klamas_soc_win_closed','1', { path: '/', expires: 5 });
	    		}
    		});
    	}

    }


    function hideSmartFilter() {
	$('#smartFilter').appear();

	$('#smartFilter').on('disappear',function(event,affected) {
	    $('.catalogSectionProducts').addClass('productsListWide');
	    $('#smartFilter').addClass('smartFilterHide');
	});

	$('#smartFilter').on('appear',function(event,affected) {
	   $('.catalogSectionProducts').removeClass('productsListWide');
	    $('#smartFilter').removeClass('smartFilterHide');
	});
    }


    function warehousesInfo() {
	$('#warehousesInfoModal').modal({});
    }

    function forOrderInfo() {
	$('#availableInfo').modal({});
    }


    function citiesSelectorModal() {
	$('#citiesSelectorModal').modal({});
    }


    function toggleBlock(id) {
	$('#'+id).toggle();
    }

    function setOrderCity(id) {
	$('#orderLocationsList').val(id);
	submitForm();
    }


    function mobileMenu() {
	$('#mobileMenu').toggle();
	$('body').toggleClass('overflowHidden');
	$('li#mobileMenuToggler').toggleClass('menuOpened');
    }


function cityRow(city,cityName) {
    var cityCorrect = $.cookie('klamas_city_correct');
    var cityDetected = $.cookie('klamas_city_detected');

    if(typeof cityCorrect === 'undefined' || cityCorrect!=='1' || typeof cityDetected === 'undefined' || cityDetected!==city) {
	$('#topInfoRow').hide();
	$('#citiesSelectorCol').remove();

	var locationSTR = '';

	if(cityName==='') {
	    locationSTR = '<b>Нам не удалось определить Ваше местоположение</b> '+
		    '<a href="javascript:getAllCities();" class="btn btn-sm btn-default">Выбрать город</a> <a href="javascript:getAllCities();"';

	} else {
	    locationSTR = 'Вы находитесь в  <span class="glyphicon glyphicon-map-marker"> </span> <b>'+cityName+'</b> ? '+
		'<a href="javascript:cityCorrect(\''+city+'\');" class="btn btn-sm btn-default">Да, Верно</a> <a href="javascript:getAllCities();"'+
		'class="btn btn-sm btn-primary">Нет, Выбрать другой город</a>';
	}

	$('#topInfoRow').prepend('<div id="citiesSelectorCol" class="col-md-6 citySel">'+locationSTR+'</div>').fadeIn('fast');
    }

    //citiesJSModal();
}


function cityCorrect(city) {
    $.cookie('klamas_city_correct','1', { path: '/', expires: 30 });
    $.cookie('klamas_city_detected',city, { path: '/', expires: 30 });
    $('.citySel').fadeOut('fast');
}


function cityChange(cityID) {
    $('#citySelector a.map').show();
    $('#citySelector select#citiesSelect').hide();

    $.ajax(
	{
	    url:'/ajax/cities/index.php',
	    method:'post',
	    dataType:'json',
	    data: {cityID:cityID}
	}
    ).
    success(function(mess) {
	$.cookie('klamas_city_detected',mess.city, { path: '/', expires: 30 });
	$.cookie('klamas_city_correct','1', { path: '/', expires: 30 });
	window.location.reload(true);
    });
}

function cityChoose() {
	$('#citySelector a.map').hide();
	$('#citySelector select#citiesSelect').show();
	$('#citiesSelect').chosen();
}


function oneClickModal(id) {

    var modal = ''+
    '<div class="modal" id="oneClickOrderModal" tabindex="-1" role="dialog" aria-labelledby="">'+
	'<div class="modal-dialog modal-lg" role="document"><form id="oneClickOrderForm" onsubmit="event.preventDefault();" method="POST">'+
	  '<div class="modal-content">'+
	    '<div class="modal-header">'+
	      '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
	      '<h4 class="modal-title" id="">Заказ товара в один клик</h4>'+
	    '</div>'+


	    '<div class="modal-body">'+
	    '<h3><span class="prodName">'+
	      ''+
	      '</span></h3>'+
	    '<div class="row">'+
	    '<div class="col-md-6">'+

	    '<div class="form-group">'+
	    '<label class="control-label">Ваше имя</label>'+
	    '<input class="form-control input-lg" type="text" placeholder="" name="OC_NAME" id="oneClickName">'+
	    '</div>'+

	    '<div class="form-group">'+
	    '<label class="control-label">Email</label>'+
	    '<input class="form-control input-lg" type="text" placeholder="" name="OC_EMAIL" id="oneClickEmail">'+
	    '</div>'+

	    '<div class="form-group">'+
	    '<label class="control-label">Телефон</label>'+
	    '<input class="form-control input-lg" type="text" placeholder="" name="OC_PHONE" id="oneClickPhone">'+
	    '</div>'+

	    '<div class="form-group">'+
	    '<div class="checkbox">'+
	    '<label>'+
	    '<input type="checkbox" value="1" name="OC_PERSON" id="oneClickPerson"> <span class="lbl">Я являюсь Юридическим лицом</span>'+
	    '</label>'+
	    '</div>'+
	    '</div>'+

//	    '<div class="form-group g-recaptcha-container">'+
//	    '<h4>Проверка безопасности</h4>'+
//	    '<div class="g-recaptcha" id="captcha" data-size="normal" data-sitekey="6Lfub1QUAAAAABdbqN3IgvNV1c_SRFIUH886DBOA"></div>'+
//	    '</div>'+

	    '</div>'+



	    '<div class="col-md-6" id="oneClickPicture">'+
	    ''+
	    '</div>'+

	    '</div>'+
	    '</div>'+

	    '<div class="modal-footer">'+

	      '<h4>Стоимость: <span class="prodPrice"></span></h4>'+
	      '<input type="hidden" value="'+id+'" name="PRODUCT_ID" id="oneClickProduct" />'+
	      '<a onclick="javascript:$(\'#oneClickOrderForm\').submit();" class="btn btn-lg btn-primary">Заказать</a></form>'+
	    '</div>'+
	  '</div>'+
	'</div>'+
    '</div>';



    $.getScript("/include/klamas/forms/js/jquery.validate.min.js").done(function() {
    	console.log('Loaded validation');

	$.ajax({
	    url: '/ajax/order/product.php',
	    data: {product_id: id},
	    method:'post',
	    dataType:'json',
	    success: function(mess){
		if(typeof $('#oneClickOrderModal') !== 'undefined') {
		    $('#oneClickOrderModal').remove();
		}

		$('body').append(modal);
		$('#oneClickOrderModal').modal({backdrop:'static'});
		$('#oneClickOrderModal span.prodName').text(mess.name);
		$('#oneClickOrderModal span.prodPrice').text(mess.price);
		$('#oneClickPicture').html(mess.picture);
		$('#oneClickName').focus();
//		grecaptcha.render('captcha',{
//		    siteKey: '6Lfub1QUAAAAABdbqN3IgvNV1c_SRFIUH886DBOA'
//		});

		oneClickOrderValidate();
	    }
	});


//	$.getScript("https://www.google.com/recaptcha/api.js?hl=ru").done(function() {
//	    console.log('Loaded recaptcha');
//
//
//	});
    });


}


function oneClickOrderValidate() {
$('#oneClickOrderForm').validate({
	rules: {
	  OC_NAME: {
	    minlength: 3,
	    required: true
	  },
	  OC_EMAIL: {
	    required: true,
	    email: true
	  },
	  OC_PHONE: {
	    minlength: 7,
	    required: true
	  }
	},
	errorClass: 'help-block',
	messages: {
	    OC_NAME: "Укажите Ваше имя",
	    OC_EMAIL: "Укажите адрес электронной почты",
	    OC_PHONE: "Укажите номер для связи"
	},
	highlight: function(element) {
		$(element).closest('.form-group').removeClass('success').addClass('has-error');
	},
	success: function(element) {
		element.closest('.form-group').removeClass('has-error').addClass('has-success');
	},
	submitHandler: function(form) {
	    var data = jQuery("form#oneClickOrderForm").serializeFormJSON();

	    $.ajax({
		url: '/ajax/order/index.php',
		data: data,
		method:'post',
		dataType:'json',
		success: function(mess){
		    $('#oneClickOrderModal').modal('hide');

		    if(typeof mess.error==='undefined' || mess.error==='') {
//			    console.log(mess);

				ga('send','pageview','/one-click');
				yaCounter40711014.reachGoal('ONE_CLICK_ORDER');


				ga('ecommerce:addTransaction', {
				    'id': mess.order_id,
				    'affiliation': 'klamas.ru',
				    'revenue': mess.product_price
				});



				ga('ecommerce:addItem', {
					'id': mess.order_id,
					'name': mess.product_name,
					'sku': mess.xml_id,
					'category': mess.section,
					'price': mess.product_price,
					'quantity': '1'
				});

				ga('ecommerce:send');


				yaProducts = [];

				yaProducts.push({
				    "id": mess.xml_id,
				    "name": mess.product_name,
				    "price": mess.product_price,
				    "category": mess.breadcrumbs,
				    "quantity": '1'
				});

				dataLayer.push({
				    "ecommerce": {
					"purchase": {
					    "actionField": {
						"id" : mess.order_id,
						"goal_id" : "24899954"
					    },
					    "products": yaProducts
					}
				    }
				});


				swal({
				    title: "Заказ №"+mess.order_id+" оформлен",
				    text: 'Большое спасибо за заказ. В ближайшее время вам позвонит менеджер Кламас и уточнит все данные по заказу.',
				    type: "success"
				});


		    } else {
				swal({
				    title: "Произошла ошибка",
				    text: mess.error,
				    type: "error"
				});
		    }
		},
		error: function(error) {
			console.log(error);
		    $('#oneClickOrderModal').modal('hide');

		    swal({
			title: "Произошла ошибка",
			text: 'Уважаемый клиент, мы уже разбираемся в сложившейся ситуации. Попробуйте оформить заказ через несколько минут.',
			type: "error"
		    });
		}
	    });
	}
});
}


function getAllCities() {
    var ls = localStorage.getItem("klamas_cities");
    var newTS = Date.now();
    var oldTS = localStorage.getItem("klamas_cities_ts");

    var toReload = (oldTS!==null && ((newTS-oldTS)/60000)<50)?false:true;
    console.log('cities reload '+toReload+' last load '+((newTS-oldTS)/60000));


    if(ls===null || toReload===true) {
	$.ajax({
	    url: '/ajax/cities/js.php',
	    method:'get',
	    dataType:'json',
	    success: function(mess){
		try {
		    console.log('Trying to load by Ajax request');

		    localStorage.setItem("klamas_cities",JSON.stringify(mess));
		    localStorage.setItem("klamas_cities_ts",newTS);
		    citiesJSModal(mess);

		} catch(err) {
		    console.log('Аn error occured during loading: '+err.message);

		    swal({
			title: "Произошла ошибка",
			text: "Данная ошибка была зарегистрирована. Пожалуйста повторите попытку позже.",
			type: "error"
		    });
		}
	    }
	});

    } else {
	try {
	    var cities = JSON.parse(ls);
	    console.log("Cities loaded from localStorage");
	    console.log(cities);
	    citiesJSModal(cities);

	} catch(err) {
	    console.log('an error occured (localStorage): '+err.message);

	    swal({
		title: "Произошла ошибка",
		text: "Данная ошибка была зарегистрирована. Пожалуйста повторите попытку позже.",
		type: "error"
	    });
	}
    }
}


function citiesJSModal(cities) {
    if(typeof $('#citiesJSModal') !== 'undefined') {
	$('#citiesJSModal').remove();
    }

    if(cities!==null) {
	var citiesSTR = '';

	$.each(cities.REGIONS,function(i,region) {
	    if(region.ID!==undefined) {
		citiesSTR+= '<div class="col-lg-4 col-md-3 citiesGrid">'+
		      '<a class="regionToggle" href="javascript:toggleBlock(\'regionCities'+region.ID+'\');"><b>'+region.REGION_NAME+'</b></a>'+
		      '<ul class="regionCitiesList" id="regionCities'+region.ID+'">';

		$.each(region.CITIES,function(k,city) {
		    citiesSTR+= '<li><a class="cityChooseLink" href="javascript:cityChange('+city.ID+');">'+city.CITY_NAME+'</a></li>';
		});


		citiesSTR+= '</ul></div>';
	    }
	});



	var citiesJSModal = ''+
	    '<div class="modal" id="citiesJSModal" tabindex="-1" role="dialog" aria-labelledby="">'+
		'<div class="modal-dialog modal-lg" role="document">'+
		  '<div class="modal-content">'+
		    '<div class="modal-header">'+
		      '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
		      '<form class="form-inline"><h4>Выберите город</h4> <div class="form-group pull-right"><input class="form-control" id="citySearchInput" placeholder="поиск" type="text" /></div></form>'+
		    '</div>'+

		    '<div class="modal-body">'+
		    '<div id="citiesModalSearch"></div>'+
		    '<div class="row">'+
		    citiesSTR+
		    '</div>'+
		    '</div>'+

		    '<div class="modal-footer">'+
			'<button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>'+
		    '</div>'+
		  '</div>'+
		'</div>'+
	    '</div>';

	$('body').append(citiesJSModal);
	$('#citiesJSModal').modal({backdrop:'static'});

	$('#citySearchInput').on('input',function(ev) {
	    $('#citiesModalSearch').empty();

	    if(ev.target.value.length>=3) {
		$('a.cityChooseLink').each(function(i,el) {
		    var str = el.text.toLowerCase();
		    var res = str.search(ev.target.value.toLowerCase());

		    if(res!==-1) {
			$('#citiesModalSearch').append('<a class="btn btn-sm btn-default" href="'+el.href+'">'+el.text+'</a>');
		    }
		});
	    }
	});
    }
}



(function ($) {
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);