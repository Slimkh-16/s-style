// PRELOADER

(function() {
  var support = { animations : Modernizr.cssanimations },
    container = document.getElementById( 'body' ),
    header = document.getElementById( 'preloader' ),
    loader = new PathLoader( document.getElementById( 'preloader-circle' ) ),
    animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
    animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
  function init() {
    var onEndInitialAnimation = function() {
      if( support.animations ) {
        this.removeEventListener( animEndEventName, onEndInitialAnimation );
      }
      startLoading();
    };
    window.addEventListener( 'scroll', noscroll );
    classie.add( container, 'loading' );
    if( support.animations ) {
      container.addEventListener( animEndEventName, onEndInitialAnimation );
    }
    else {
      onEndInitialAnimation();
    }
  }

  function startLoading() {
    var simulationFn = function(instance) {
      var progress = 0,
        interval = setInterval( function() {
          progress = Math.min( progress + Math.random() * 0.1, 1 );
          instance.setProgress( progress );
          if( progress === 1 ) {
            classie.remove( container, 'loading' );
            classie.add( container, 'loaded' );
            clearInterval( interval );
            var onEndHeaderAnimation = function(ev) {
              if( support.animations ) {
                if( ev.target !== header ) return;
                this.removeEventListener( animEndEventName, onEndHeaderAnimation );
              }
              classie.add( document.body, 'layout-switch' );
              window.removeEventListener( 'scroll', noscroll );
            };
            if( support.animations ) {
              header.addEventListener( animEndEventName, onEndHeaderAnimation );
            }
            else {
              onEndHeaderAnimation();
            }
          }
        }, 80 );
    };

    loader.setProgressFn( simulationFn );
  }
  function noscroll() {
    window.scrollTo( 0, 0 );
  }
  init();
})();
// PRELOADER
window.onload = function() {
  if(window.innerWidth > 767 && document.querySelector('.slider-top') != undefined)
    slider_gen()
  slider_tren()
  if(window.innerWidth > 1023)
    news_boxHeight()
  testi()
  if(document.querySelector('.schedule-box') != undefined)
    table()
}
window.onresize = function() {
  if(window.innerWidth > 767 && document.querySelector('.slider-top') != undefined)
    slider_gen()
  slider_tren()
  if(window.innerWidth > 1023)
    news_boxHeight()
  testi()
  if(document.querySelector('.schedule-box') != undefined)
    table()
}
window.onscroll = function() {
  var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
  if(scrollTop > 10)
    document.querySelector('.header').classList.add('fix')
    else
      document.querySelector('.header').classList.remove('fix')
  if(document.querySelector('.schedule-box') != undefined){
    var headTable = document.querySelector('.schedule-box').offsetTop;
    if (scrollTop > headTable && window.innerWidth > 767) {
      document.querySelector('.schedule-table-top').classList.add('fix-table')
    }else {
      document.querySelector('.schedule-table-top').classList.remove('fix-table')
    }
  }
}
// testimonials
function testi() {
  var tesI =  document.querySelectorAll('.testimonials__info');
  var tesH = 0;
  var butt_tst = 0;
    for (var i = 0; i < tesI.length; ++i) {
      tesH = tesI[i].clientHeight;
      if (tesH > 160){
        tesI[i].parentNode.lastElementChild.style.display = "block";
      } else {
        tesI[i].classList.add('no-vv')
      }
    }
}
// testimonials
// height general slider
function slider_tren() {
  var trenI = document.getElementsByClassName('tren-info');
  var trenImg = document.getElementsByClassName('tren-img');
  var maxHT = 0;
  for (var i = 0; i < trenI.length; ++i) {
    trenI[i].style.height = "";
    trenImg[i].style.height = "";
    if (maxHT < trenI[i].clientHeight) {
      maxHT = trenI[i].clientHeight; 
    }
  }
  for (var i = 0; i < trenI.length; ++i) {
    trenI[i].style.height = maxHT + "px";
    trenImg[i].style.height = maxHT + "px";
  }
}
function slider_gen() {
  var vinH = window.innerHeight;
  var sliderGen = document.querySelector('.slider-top')
  sliderGen.style.height = vinH + 'px';
}
// height general slider
function news_boxHeight() {
  var news_box = document.getElementsByClassName('height__');
  var news_boxH = 0;
  for (var i = 0; i < news_box.length; ++i) {
    news_box[i].style.height = "";
    if (news_boxH < news_box[i].clientHeight) {
      news_boxH = news_box[i].clientHeight; 
    }
  }
  for (var i = 0; i < news_box.length; ++i) {
    news_box[i].style.height = news_boxH + "px";
  }
}
// swiper slider
var swiper1 = new Swiper('.js_slider-gen', {
    pagination: '.swiper-pagination-1',
    paginationClickable: true,
    parallax: true,
    speed: 1500,
    loop:true,
    autoplay:5000
});
var swiper2 = new Swiper('.slider-tren', {
    pagination: '.swiper-pagination-2',
    paginationClickable: true,
    parallax: true,
    speed: 1500,
    loop:true,
    autoplay:3500
});
var swiper3 = new Swiper('.treners-slider', {
    loop:false,
    nextButton: '.swiper-button-next-treners',
    prevButton: '.swiper-button-prev-treners',
    autoplay:3500,
    speed:800
});
var swiper4 = new Swiper('.news-slider', {
    loop:true,
    nextButton: '.swiper-button-next-news',
    prevButton: '.swiper-button-prev-news',
    autoplay:4300,
    speed:800
});
var swiper5 = new Swiper('.result-slider', {
    loop:true,
    nextButton: '.swiper-button-next-result',
    prevButton: '.swiper-button-prev-result',
    autoplay:4800,
    speed:800
});
// swiper slider
// input animation
(function() {
  if (!String.prototype.trim) {
    (function() {
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
        return this.replace(rtrim, '');
      };
    })();
  }

  [].slice.call( document.querySelectorAll( '.input-anim' ) ).forEach( function( inputEl ) {
    if( inputEl.value.trim() !== '' ) {
      classie.add( inputEl.parentNode, 'input--filled' );
    }

    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  } );

  function onInputFocus( ev ) {
    classie.add( ev.target.parentNode, 'input--filled' );
  }
  function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' ) {
      classie.remove( ev.target.parentNode, 'input--filled' );
    }
  }
})();
// input animation
// table
function table() {
  var widthCell = document.querySelectorAll('.schedule-table-body table tr td')[1].clientWidth / 3;
  var cellItem = document.querySelectorAll('.schedule-item');
  for(var i = 0; i < cellItem.length; i++) {
    var data_day = cellItem[i].getAttribute('data-day'),
        data_area = cellItem[i].getAttribute('data-area'),
        b_time = cellItem[i].getAttribute('data-b-time'),
        time_ = cellItem[i].getAttribute('data-time'),
        posTop = document.querySelector('.schedule-table-body table td[data-time-cell="' + b_time +'"]').offsetTop + 55,
        posLeft = document.querySelector('.schedule-table-top table td[data-day="'+ data_day +'"]').offsetLeft + 1, 
        heightCell = time_/15 * 55 + 55;
    cellItem[i].style.width = widthCell + 'px';
    cellItem[i].style.height = heightCell + 'px';
    cellItem[i].style.lineHeight = heightCell + 'px';
    cellItem[i].style.top = posTop + 'px';
    if(data_area == 1) {
      cellItem[i].style.left = posLeft + 'px';
    }
    if(data_area == 2) {
      cellItem[i].style.left = posLeft + widthCell + 'px';
    }
    if(data_area == 3) {
      cellItem[i].style.left = posLeft + widthCell*2 + 'px';
    }
  }
}
// table
$(window).load(function(){
  $('.nav-top').mmenu({
    "extensions": [
       "effect-menu-zoom"
    ],
    "offCanvas": {
       "position": "right"
    },
    "iconPanels": true,
    navbar : {
            'add'     : false
      },
  });
  var api = $(".nav-top").data( "mmenu" );
  api.bind('opening', function () {
      var bodyTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);;
      $('.header').css('top',bodyTop);
  });
  api.bind('closed', function () {
      $('.header').css('top',"0");
  });
});
$(document).ready(function() {
  // table
  $(document).on('click','.js_open_table',function(){
    var posTopBox = $(this).parents('.schedule-item').position().top;
    var posLeftBox = $(this).parents('.schedule-item').position().left;
    var offTop = $(this).parents('.schedule-item').height()*0.3;
    var offLeft = $(this).parents('.schedule-item').width();
    var winW = $(window).width();
    $(this).parents('.schedule-item').addClass('active');
    $('.overlay-table').addClass('visible');
    if (offLeft + posLeftBox < winW){
      $(this).parents('.schedule-item').addClass('active-right');
      $('.schedule-item-info').addClass('visible').css({
        'top':posTopBox + offTop,
        'right':'auto',
        'left':posLeftBox + offLeft
      });
    }
    if (offLeft + posLeftBox + 300 > winW){
      $(this).parents('.schedule-item').removeClass('active-right').addClass('active-left');
      $('.schedule-item-info').addClass('visible').css({
        'top':posTopBox + offTop,
        'left':'auto',
        'right':winW - posLeftBox
      });
    }
  });
  $(document).on('click','.overlay-table',function(){
    $(this).removeClass('visible');
    $('.schedule-item').removeClass('active active-left active-right');
    $('.schedule-item-info').removeClass('visible');
  });
  document.onkeydown = function(evt) {
    if (evt.keyCode == 27) {
      $('.schedule-item').removeClass('active active-left active-right');
      $('.overlay-table').removeClass('visible');
      $('.schedule-item-info').removeClass('visible');
    }
  }
  // table
  // hoverbox
  $(function() {
    $(' #box_an > .section-nav-item ').each( function() { $(this).hoverdir(); } );
  });
  // hoverbox
  // testi
  $('.js_more').on('click',function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).text('показать отзыв')
      $(this).parents('.testimonials-item').find('.testimonials__info').removeClass('full-tst');
    
    }else {
      $(this).addClass('active');
      $(this).text('скрыть отзыв')
      $(this).parents('.testimonials-item').find('.testimonials__info').addClass('full-tst');
      
    }
  })
  // mask
  $('input[data-validate="phone"]').mask("+3(999)999 99 99");   
  // mask
  // validate form
  $('.js_validate button[type="submit"]').on("click", function(){
    return validate($(this).parent(".js_validate"));
  }); 
  if($('#map').length)
    initialize()
  // validate form
  function initialize() {
    var myLatlng = new google.maps.LatLng(50,36);
    var mapOptions = {
      zoom: 6,
      center: myLatlng,
      scrollwheel: false,
      disableDefaultUI: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: 'images/marker.png'
    });
  };
  // map google
  $('input, textarea').placeholder();
  // modal
  $(".modal").on("show.bs.modal", function(){
        var $bodyWidth = $("body").width();
    $("body").css({'overflow-y': "hidden"});//.css({'padding-right': ($("body").width()-$bodyWidth)});
  });
  $(".modal").on("hidden.bs.modal", function(){
    $("body").css({'padding-right': "0",'overflow-y': "auto"});
  });
  // modal
});
// validate form
function validate(form){
    var error_class = "error";
    var norma_class = "pass";
    var item        = form.find("[required]");
    var e           = 0;
    var reg         = undefined;
    var pass        = form.find('.password').val();
    var pass_1      = form.find('.password_1').val();
    var email       = false;
    var password    = false;
    var phone       = false;
    function mark (object, expression) {
        if (expression) {
            object.parent('div').addClass(error_class).removeClass(norma_class).find('.error_text').show();
            e++;
        } else
            object.parent('div').addClass(norma_class).removeClass(error_class).find('.error_text').hide();
    }
    form.find("[required]").each(function(){
        switch($(this).attr("data-validate")) {
            case undefined:
                mark ($(this), $.trim($(this).val()).length === 0);
            break;
            case "email":
                email = true;
                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                email = false;
            break;
            case "phone":
                phone = true;
                reg = /[0-9 -()+]{10}$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                phone = false;
            break;
            case "pass":
                password = true;
                reg = /^[a-zA-Z0-9_-]{6,}$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                password = false;
            break;
            case "pass1":
                mark ($(this), (pass_1 !== pass || $.trim($(this).val()).length === 0));
            break;
            default:
                reg = new RegExp($(this).attr("data-validate"), "g");
                mark ($(this), !reg.test($.trim($(this).val())));
            break
        }
    })
    $('.js_valid_radio').each(function(){
        var inp = $(this).find('input.required');
        var rezalt = 0;
        for (var i = 0; i < inp.length; i++) {
            if ($(inp[i]).is(':checked') === true) {
                rezalt = 1;
                break;
            } else {
                rezalt = 0;
            }
        }
        if (rezalt === 0) {
           $(this).addClass(error_class).removeClass(norma_class);
            e=1;
        } else {
            $(this).addClass(norma_class).removeClass(error_class);
        }
    })
    if (e == 0) {
     return true;
    }
    else {
        form.find("."+error_class+" input:first").focus();
        return false;
    }
}
// validate form 
/*! http://mths.be/placeholder v2.0.7 by @mathias */
$(function(window, document, $) {

 // Opera Mini v7 doesn t support placeholder although its DOM seems to indicate so
 var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
 var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
 var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
 var prototype = $.fn;
 var valHooks = $.valHooks;
 var propHooks = $.propHooks;
 var hooks;
 var placeholder;

 if (isInputSupported && isTextareaSupported) {

  placeholder = prototype.placeholder = function() {
   return this;
  };

  placeholder.input = placeholder.textarea = true;

 } else {

  placeholder = prototype.placeholder = function() {
   var $this = this;
   $this
    .filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
    .not('.placeholder')
    .bind({
     'focus.placeholder': clearPlaceholder,
     'blur.placeholder': setPlaceholder
    })
    .data('placeholder-enabled', true)
    .trigger('blur.placeholder');
   return $this;
  };

  placeholder.input = isInputSupported;
  placeholder.textarea = isTextareaSupported;

  hooks = {
   'get': function(element) {
    var $element = $(element);

    var $passwordInput = $element.data('placeholder-password');
    if ($passwordInput) {
     return $passwordInput[0].value;
    }

    return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
   },
   'set': function(element, value) {
    var $element = $(element);

    var $passwordInput = $element.data('placeholder-password');
    if ($passwordInput) {
     return $passwordInput[0].value = value;
    }

    if (!$element.data('placeholder-enabled')) {
     return element.value = value;
    }
    if (value == '') {
     element.value = value;
     // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
     if (element != safeActiveElement()) {
      // We can't use `triggerHandler` here because of dummy text/password inputs :(
      setPlaceholder.call(element);
     }
    } else if ($element.hasClass('placeholder')) {
     clearPlaceholder.call(element, true, value) || (element.value = value);
    } else {
     element.value = value;
    }
    // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
    return $element;
   }
  };

  if (!isInputSupported) {
   valHooks.input = hooks;
   propHooks.value = hooks;
  }
  if (!isTextareaSupported) {
   valHooks.textarea = hooks;
   propHooks.value = hooks;
  }

  $(function() {
   // Look for forms
   $(document).delegate('form', 'submit.placeholder', function() {
    // Clear the placeholder values so they don't get submitted
    var $inputs = $('.placeholder', this).each(clearPlaceholder);
    setTimeout(function() {
     $inputs.each(setPlaceholder);
    }, 10);
   });
  });

  // Clear placeholder values upon page reload
  $(window).bind('beforeunload.placeholder', function() {
   $('.placeholder').each(function() {
    this.value = '';
   });
  });

 }

 function args(elem) {
  // Return an object of element attributes
  var newAttrs = {};
  var rinlinejQuery = /^jQuery\d+$/;
  $.each(elem.attributes, function(i, attr) {
   if (attr.specified && !rinlinejQuery.test(attr.name)) {
    newAttrs[attr.name] = attr.value;
   }
  });
  return newAttrs;
 }

 function clearPlaceholder(event, value) {
  var input = this;
  var $input = $(input);
  if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
   if ($input.data('placeholder-password')) {
    $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
    // If `clearPlaceholder` was called from `$.valHooks.input.set`
    if (event === true) {
     return $input[0].value = value;
    }
    $input.focus();
   } else {
    input.value = '';
    $input.removeClass('placeholder');
    input == safeActiveElement() && input.select();
   }
  }
 }

 function setPlaceholder() {
  var $replacement;
  var input = this;
  var $input = $(input);
  var id = this.id;
  if (input.value == '') {
   if (input.type == 'password') {
    if (!$input.data('placeholder-textinput')) {
     try {
      $replacement = $input.clone().attr({ 'type': 'text' });
     } catch(e) {
      $replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
     }
     $replacement
      .removeAttr('name')
      .data({
       'placeholder-password': $input,
       'placeholder-id': id
      })
      .bind('focus.placeholder', clearPlaceholder);
     $input
      .data({
       'placeholder-textinput': $replacement,
       'placeholder-id': id
      })
      .before($replacement);
    }
    $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
    // Note: `$input[0] != input` now!
   }
   $input.addClass('placeholder');
   $input[0].value = $input.attr('placeholder');
  } else {
   $input.removeClass('placeholder');
  }
 }

 function safeActiveElement() {
  // Avoid IE9 `document.activeElement` of death
  // https://github.com/mathiasbynens/jquery-placeholder/pull/99
  try {
   return document.activeElement;
  } catch (err) {}
 }
 

}(this, document, jQuery));


