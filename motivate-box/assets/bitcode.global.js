function notifyAddCart($i){
  $('.loading').hide();
  
  AT_Main.fixNoScroll();
  $('.cart-sb').toggleClass('opened');
  $('html,body').toggleClass('cart-opened');
  
}

function notifyAddCartFail($i){
  $('.loading').hide();
  $.jGrowl($i,{
    life: 3000
  });	
}

/* Ajax Add To Cart */

function addToCart(e){
  if (typeof e !== 'undefined') e.preventDefault();

  /* Show loading */
  $('.loading').show();

  var $this = $(this);

  $this.addClass('disabled');

  var form = $this.parents('form');

  // Hide Modal
  $('.modal').modal('hide');

  $.ajax({
    type: 'POST',
    url: '/cart/add.js',
    async: true,
    data: form.serialize(),
    dataType: 'json',
    error: addToCartFail,
    success: addToCartSuccess,
    cache: false
  });

}

function addToCartSuccess (jqXHR, textStatus, errorThrown){
  $('.add-to-cart').removeClass('disabled');

  $.ajax({
    type: 'GET',
    url: '/cart.js',
    async: false,
    cache: false,
    dataType: 'json',
    success: updateCartDesc
  });

  var $i = '<div class="effect-item row"><div class="col-sm-3 col-xs-3"><a href="'+ jqXHR['url'] +'" class="effect-item-image"><img src="'+ Shopify.resizeImage(jqXHR['image'], 'small') +'" alt="'+ jqXHR['title'] +'"/></a></div><div class="col-sm-9 col-xs-9"><div class="effect-item-info"><a class="effect-item-title" href="'+ jqXHR['url'] +'">'+ jqXHR['title'] +'</a> is added to your shoping cart</div></div></div>';
  notifyAddCart($i);

  // Get the cart show in the cart box.	
  Shopify.getCart(function(cart) {
    Shopify.updateCartInfo(cart, '#cart-info #cart-content');		
  });
}

function addToCartFail(jqXHR, textStatus, errorThrown){
  var response = $.parseJSON(jqXHR.responseText);

  var $i = '<div class="error">'+ response.description +'</div>';
  notifyAddCartFail($i);
}

(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

var g = {

      common : {
        init: function(){
          $("body").on( 'click','.add-to-cart', addToCart );
        }
      }
  
      ,templateIndex : {
        init: function(){}
      }

      ,templateProduct : {
        init: function(){}
      }

      ,templateCart : {
        init: function(){}
      }
	}  
    ,u = {
        fire: function(t, a, o) {
            var e = g;
            a = void 0 === a ? "init" : a, "" !== t && e[t] && "function" == typeof e[t][a] && e[t][a](o)
        }
        ,loadEvents: function() {
            var t = document.body.id;
            u.fire("common"), $.each(document.body.className.split(/\s+/), function(a, o) {
                u.fire(o), u.fire(o, t)
            })
        }
    };

$(document).ready(u.loadEvents);