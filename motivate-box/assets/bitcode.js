var AT_Main={pagePreLoading:function(){var enable_preLoading=$("body").data('preloading');if(enable_preLoading){$('body').jpreLoader({loaderVPos:"50%",autoClose:!0},function(){$('body .boxes-wrapper').css('visibility','visible')})}},getWidthBrowser:function(){var myWidth;if(typeof(window.innerWidth)=='number'){myWidth=window.innerWidth}
else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){myWidth=document.documentElement.clientWidth}
else if(document.body&&(document.body.clientWidth||document.body.clientHeight)){myWidth=document.body.clientWidth}
return myWidth},checkLayout:function(){if($("#checkLayout .visible-xs-block").css("display")=="block")
return 1;else if($("#checkLayout .visible-sm-block").css("display")=="block")
return 2;else if($("#checkLayout .visible-md-block").css("display")=="block")
return 3;else if($("#checkLayout .visible-lg-block").css("display")=="block")
return 4},homeSlideshow:function(){if($('.home-slideshow-wrapper').length){$('.home-slideshow-wrapper').each(function(index,value){$('.flexslider').flexslider({directionNav:$(value).data('nav'),slideshow:$(value).data('auto'),controlNav:$(value).data('paging'),keyboardNav:!0,slideshowSpeed:5000,animation:$(value).data('animation'),prevText:"",nextText:"",start:function(){if($('.flex-active-slide').hasClass('dark'))
{$('.header-bottom').addClass('light')}
else{$('.header-bottom').addClass('dark')}},after:function(){if($('.flex-active-slide').hasClass('dark'))
{$('.header-bottom').removeClass('dark');$('.header-bottom').addClass('light')}
else{$('.header-bottom').removeClass('light');$('.header-bottom').addClass('dark')}}})})}},stickMenu:function(){var enable_stick=$("header").data('stick');if(enable_stick){var lastScroll=0;var header=$("header");var headerfixed=$("#header-main-fixed");var body_content=$("#body-content");var distance_top=$("header").data('distance-top');$(window).scroll(function(){var st=$(this).scrollTop();if(st>lastScroll){if(st>distance_top){header.addClass("header-fixed animated fadeInDown");body_content.addClass("has-header-fixed")}}
else{if(st<distance_top){header.removeClass("header-fixed animated fadeInDown");body_content.removeClass("has-header-fixed")}}
lastScroll=st})}},toTopButton:function(){var to_top_btn=$("#scroll-to-top");if(1>to_top_btn.length){return}
$(window).on('scroll',function(){var b=jQuery(this).scrollTop();var c=jQuery(this).height();if(b>10){var d=b+c/2}
else{var d=1}
if(d<1000&&d<c){jQuery("#scroll-to-top").removeClass('on off').addClass('off')}else{jQuery("#scroll-to-top").removeClass('on off').addClass('on')}});to_top_btn.on('click',function(e){e.preventDefault();jQuery('body,html').animate({scrollTop:0},800,'swing')})},mailchipPopup:function(){var expire=$("#mailchimp-popup").data('expires');if($.cookie('mycookie')){}
else{$.fancybox($('#mailchimp-popup'),{'autoDimensions':!1,'width':775,'height':370,'autoSize':!1,'transitionIn':'none','transitionOut':'none'})}
$.cookie('mycookie','true',{expires:expire})},handleQuickShop:function(){$('#quick-shop-popup').on('shown.bs.modal',function(e){$('#quick-shop-popup',function(){var zoomImage=$('.zoom-qs .zoom-image');zoomImage.elevateZoom({gallery:'gallery-qs-image',galleryActiveClass:'active',zoomType:'inner',cursor:'pointer',zoomLens:!1,easing:!0});$("#gallery-qs-image").owlCarousel({navigation:!0,pagination:!1,items:4,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,3],itemsMobile:[479,2],scrollPerPage:!0,navigationText:['<i class="fa fa-angle-left" title="Previous"></i>','<i class="fa fa-angle-right" title="Next"></i>']})})});$('#quick-shop-popup').on('hide.bs.modal',function(){$(".zoomContainer").remove()});$('#quick-shop-popup').on('hidden.bs.modal',function(){AT_Main.fixReturnScroll()})},effectNavigation:function(){$(".navigation .navbar-collapse .main-nav>li").each(function(e){$(this).find('>.dropdown-menu, >.dropdown-menu li >.dropdown-menu').addClass("fadeInUp animated")})},owlSlider:function(){$(".hbs-product").length&&$(".hbs-product").owlCarousel({navigation:!0,pagination:!1,mouseDrag:!1,items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,2],itemsTablet:[768,2],itemsTabletSmall:[540,2],itemsMobile:[360,1],navigationText:['<span class="icon owl-prev" title="Previous"></span>','<span class="icon owl-next" title="Next"></span>']});$(".block-parallax-inner").length&&$(".block-parallax-inner").owlCarousel({autoPlay:!0,navigation:!1,pagination:!0,mouseDrag:!1,items:1,itemsDesktop:[1199,1],itemsDesktopSmall:[979,1],itemsTablet:[768,1],itemsTabletSmall:[540,1],itemsMobile:[360,1]});$("#gallery-image").length&&$("#gallery-image").owlCarousel({navigation:!0,pagination:!1,mouseDrag:!1,items:4,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,3],itemsMobile:[360,3],navigationText:['<span class="icon owl-prev" title="Previous"></span>','<span class="icon owl-next" title="Next"></span>']});$(".cart-related-product").length&&$(".cart-related-product").owlCarousel({navigation:!0,pagination:!1,mouseDrag:!1,items:6,itemsDesktop:[1199,5],itemsDesktopSmall:[979,4],itemsTablet:[768,3],itemsMobile:[568,2],navigationText:['<span class="icon owl-prev" title="Previous"></span>','<span class="icon owl-next" title="Next"></span>']});$(".lookbook-item").length&&$(".lookbook-item").owlCarousel({autoPlay:!0,mouseDrag:!1,items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsMobile:[360,1]});$(".our-blog").length&&$(".our-blog").owlCarousel({navigation:!0,pagination:!1,mouseDrag:!1,items:2,itemsDesktop:[1199,2],itemsDesktopSmall:[979,2],itemsTablet:[768,1],itemsMobile:[360,1],navigationText:['<span class="icon owl-prev" title="Previous"></span>','<span class="icon owl-next" title="Next"></span>']});$(".brands-item").length&&$(".brands-item").owlCarousel({autoPlay:!0,pagination:!1,mouseDrag:!1,items:6,itemsDesktop:[1199,6],itemsDesktopSmall:[1024,4],itemsTablet:[768,3],itemsMobile:[479,2],scrollPerPage:!1})},fixNoScroll:function(){var windowW=$(window).width();$('#page-body, .header-content, #page-body .mobile-version').css("width",windowW+'px')},fixReturnScroll:function(){$('#page-body, .header-content,#page-body .mobile-version').attr('style','')},menuOnMobile:function(){$(document).on('click','#page-body',function(e){$(".menu-mobile").removeClass("opened");$("html,body").removeClass("menu-opened");AT_Main.fixReturnScroll()});$(document).on('click','[data-toggle=offcanvas]',function(e){e.stopPropagation();AT_Main.fixNoScroll();$(".menu-mobile").toggleClass("opened");$("html,body").toggleClass("menu-opened")});$(".navbar .main-nav li > .dropdown-link").hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")});$(document).on('click','.mobile-version .navbar .main-nav li > .dropdown-link > span',function(){var e=$(this).parent();window.location=e.attr("href")});$(document).on("click",".navbar .main-nav li > .hover > span",function(){var e=$(this).parent();window.location=e.attr("href")});$(document).on('click','.mobile-version .menu-mobile .main-nav .fa-angle-down',function(){var e=$(this).parents(".dropdown").first();e.toggleClass("menu-mobile-open")})
$(document).on('click','.mobile-version .menu-mobile .main-nav .fa-angle-up',function(){var e=$(this).parents(".dropdown").first();e.toggleClass("menu-mobile-open")})},handleMenuMultiLine:function(){var outItem="";var down=!1;var top=0;$(".navbar-collapse .main-nav > li").on("mousemove",function(e){var target=$(e.currentTarget);if(down&&outItem!=""){outItem.addClass("hold");setTimeout(function(){if(outItem!="")
outItem.removeClass("hold");down=!1;outItem=""},500);if((outItem[0]==target[0])||(outItem.offset().top==target.offset().top))
{outItem.removeClass("hold");down=!1;outItem=""}}
else{outItem=""}});$(".navbar-collapse .main-nav >li").on("mouseout",function(e){var target=$(e.currentTarget);if(e.pageY>=target.offset().top+50){down=!0}
if(target.hasClass("dropdown")){if(outItem=="")
outItem=target}})},toggleSearchSidebar:function(){$(document).on('click','.search-toggle',function(e){e.stopPropagation();AT_Main.fixNoScroll();$('.search-sb').toggleClass('opened');$('html,body').toggleClass('search-opened')});$(document).on('click','#page-body',function(){$('.search-sb').removeClass('opened');$('html,body').removeClass('search-opened');AT_Main.fixReturnScroll()})},toggleCartSidebar:function(){$('.cart-toggle').on('click',function(e){e.stopPropagation();AT_Main.fixNoScroll();$('.cart-sb').toggleClass('opened');$('body').toggleClass('cart-opened')});$('#page-body').on('click',function(){$('.cart-sb').removeClass('opened');$('html,body').removeClass('cart-opened');AT_Main.fixReturnScroll()})},toggleFilterSidebar:function(){$(document).on('click','.filter-toggle',function(e){e.stopPropagation();AT_Main.fixNoScroll();$('.sbw-filter').toggleClass('opened');$('html,body').toggleClass('filter-opened')});$(document).on('click','#page-body',function(e){$('.sbw-filter').removeClass('opened');$('html,body').removeClass('filter-opened')})},parallaxIt:function(){if($(".templateIndex").length==0)
return;$.fn.parallaxScroll=function(xpos,speedFactor,outerHeight){var elem=$(this);var getHeight;var firstTop;var paddingTop=0;$(this).each(function(){firstTop=$(this).offset().top});getHeight=function(jqo){return jqo.outerHeight(!0)};var j$element,top,height,pos;function update(){pos=$(window).scrollTop();firstTop=elem.offset().top;height=getHeight(elem);if(pos+$(window).height()<firstTop||pos>firstTop+height){return}
if(AT_Main.checkLayout()!=1)
elem.css('backgroundPosition',xpos+" "+Math.round((firstTop-pos)*speedFactor)+"px",0);else elem.css('backgroundPosition',xpos+" "+ -Math.round((firstTop-pos)*speedFactor)+"px",0)}
window.addEventListener('scroll',function(){update()},!1)
update()};$(".block-parallax").parallaxScroll("50%",0.2)},instagram_listener:function(){if($('#instagram_list').length>0){if('undefined'===typeof Instafeed){console.log(" Instafeed has not defined yet! ");return}
var instar_feed;$('#instagram_list').each(function(index,value){instar_feed=new Instafeed({get:"user",target:"instagram_list",accessToken:$(value).data('token-key'),userId:$(value).data('uid'),limit:$(value).data('limit'),resolution:'low_resolution',after:function(){jQuery("#instagram_list").owlCarousel({navigation:!0,pagination:!1,mouseDrag:!1,items:6,itemsDesktop:[1199,6],itemsDesktopSmall:[1024,5],itemsTablet:[768,3],itemsMobile:[479,2],scrollPerPage:!1,navigationText:['<span class="icon owl-prev" title="Previous"></span>','<span class="icon owl-next" title="Next"></span>']})}});instar_feed.run()})}},notifyWishlistProduct:function($w){$('.loading').hide();$('.button.add-to-wishlist.wl-add').removeClass('disabled');$.jGrowl($w,{life:3000})},wishlistProduct:function(){$(document).on('click','#product-info button.add-to-wishlist.wl-add',function(e){$('.loading').show();var $this=$(this);$this.addClass('disabled');e.preventDefault();var form=$(this).parent('form');var i=form.parents(".page-product");$.ajax({type:"POST",url:"/contact",data:form.serialize(),beforeSend:function(){},success:function(n){var img=i.find("#product-featured-image").attr("src");var title=i.find("#product-info h4.title").text();form.html('<a class="add-to-wishlist" href="/pages/wish-list" title="Go to wishlist"><i class="fa fa-heart"></i>Browse Wishlist</a>');var $w='<div class="effect-item row"><div class="col-sm-3 col-xs-3"><img src="'+img+'" alt="" /></div><div class="col-sm-9 col-xs-9"><p class="effect-item-info">'+title+' is added to your wish list.</p></div></div>';AT_Main.notifyWishlistProduct($w)},error:function(){}})})},wishlistProductItem:function(){$(document).on('click','.product-button button.add-to-wishlist.wl-add',function(e){$('.loading').show();var $this=$(this);$this.addClass('disabled');e.preventDefault();var form=$(this).parent('form');var i=form.parents(".product-wrapper");$.ajax({type:"POST",url:"/contact",data:form.serialize(),beforeSend:function(){},success:function(n){var img=i.find(".featured-image").attr("src");var title=i.find(".product-title a").text();form.html('<a class="add-to-wishlist" href="/pages/wish-list" title="Browse Wishlist"><span class="icon icon-wl"></span></a>');var $w='<div class="effect-item row"><div class="col-sm-3 col-xs-3"><img src="'+img+'" alt="" /></div><div class="col-sm-9 col-xs-9"><p class="effect-item-info">'+title+' is added to your wish list.</p></div></div>';AT_Main.notifyWishlistProduct($w)},error:function(){}})})},handleMap:function(){if(jQuery().gMap){if($('#page-contact-map').length){$('#page-contact-map').gMap({zoom:17,scrollwheel:!0,maptype:'ROADMAP',markers:[{address:'18A Maharshi Devendra Road Pasari Bhavan. Kolkata -7000',html:'_address'}]})}}},dropdownFilter:function(){$(document).on('click','.sb-filter .ftitle>span',function(e){e.stopPropagation();$(this).toggleClass('none-active');$(this).closest('.sb-filter').find('.advanced-filters').toggleClass('hide')})},fixTitle:function(){$(".rt a").attr("data-title",function(){return $(this).attr("title")});$(".rt a").removeAttr("title")},fixDropdown:function(){if(AT_Main.checkLayout()==1){$('.widget-footer .list-unstyled').addClass('dropdown-menu');$('.ftitle').addClass('none-active');$('.sb-filter').find('.advanced-filters').addClass('hide')}},filterCatalogReplace:function(){var value=collectionUrl.substring(collectionUrl.lastIndexOf('/')+1);var val=value.substring(value.lastIndexOf('?'));collectionUrl=collectionUrl.replace(value,'');value=value.replace(val,'');value=value.replace('#','');var value_arr=value.split('+');var current_arr=[];$('#'+filter_id+' li.active-filter').each(function(){current_arr.push($(this).attr('data-handle'))});$('#'+filter_id+' li.active-filter').find('a').attr('title','');$('#'+filter_id+' li').removeClass('active-filter');for($i=0;$i<current_arr.length;$i++){value_arr=$.grep(value_arr,function(n,i){return(n!==current_arr[$i])})}
var new_data=value_arr.join('+')
var new_url=collectionUrl+new_data+val;window.location=new_url},filterCatalog:function(){var currentTags='',filters=$('.advanced-filter');filters.each(function(){var el=$(this),group=el.data('group');if(el.hasClass('active-filter')){el.parents('.sb-filter').find('a.clear-filter').removeClass('hidden')}});filters.on('click',function(){var el=$(this),group=el.data('group'),url=el.find('a').attr('href');if(el.hasClass('active-filter')){return}});$('.sb-filter').on('click','.clear-filter',function(n){var filter_id=$(this).attr('id');filter_id=filter_id.replace('clear-','');var collectionUrl=window.location.href;if(collectionUrl.match(/\?/)){var string=collectionUrl.substring(collectionUrl.lastIndexOf('?')-1);if(string.match(/\//)){var str_replace=string.replace(/\//,'');collectionUrl=collectionUrl.replace(string,'');collectionUrl=collectionUrl+str_replace;AT_Main.filterCatalogReplace()}
else{AT_Main.filterCatalogReplace()}}
else{var value=collectionUrl.substring(collectionUrl.lastIndexOf('/')+1);collectionUrl=collectionUrl.replace(value,'');value=value.replace('#','');var value_arr=value.split('+');var current_arr=[];$('#'+filter_id+' li.active-filter').each(function(){current_arr.push($(this).attr('data-handle'))});$('#'+filter_id+' li.active-filter').find('a').attr('title','');$('#'+filter_id+' li').removeClass('active-filter');for($i=0;$i<current_arr.length;$i++){value_arr=$.grep(value_arr,function(n,i){return(n!==current_arr[$i])})}
var new_data=value_arr.join('+')
var new_url=collectionUrl+new_data;window.location=new_url}})},swatch:function(){jQuery('.swatch :radio').change(function(){var optionIndex=jQuery(this).closest('.swatch').attr('data-option-index');var optionValue=jQuery(this).val();jQuery(this).closest('form').find('.single-option-selector').eq(optionIndex).val(optionValue).trigger('change')})},refreshImage:function(){if($('#gallery-image').length){$('#product-image').on('click','.thumb-img',function(){var $this=$(this);if(!$this.hasClass('active')){var parent=$this.parents('.product-image-inner');var src_original=$this.attr('data-zoom-image');var src_display=$this.attr('data-image');parent.find('.thumb-img').removeClass('active');$this.addClass('active');parent.find('.featured-image').find('img').attr('data-zoom-image',src_original);parent.find('.featured-image').find('img').attr('src',src_display).load(function(){})}
return!1})}},refreshZoom:function(){if($('.elevatezoom').length){var zoomImage=$('.elevatezoom .zoom-image');zoomImage.elevateZoom({gallery:'gallery-image',galleryActiveClass:'active',zoomType:'window',cursor:'pointer',zoomWindowFadeIn:300,zoomWindowFadeOut:300,scrollZoom:!1,easing:!0});$(".elevatezoom .zoom-image").bind("click",function(e){var ez=$('.elevatezoom .zoom-image').data('elevateZoom');$.fancybox(ez.getGalleryList(),{closeBtn:!1,helpers:{buttons:{}}});return!1})}},mobileDetect:function(){var md=new MobileDetect(window.navigator.userAgent);var enable_parallax=$('.block-parallax').data('parallax');if(enable_parallax){if(md.mobile()==null){AT_Main.parallaxIt();new WOW().init()}
if(md.mobile()!=null){$(".block-parallax").addClass("mobile");AT_Main.parallaxIt()}}},cartJS_handle:function(){rivets.bind($('.templateCart #cartform, .cart-right, .page-cart .cart-empty-wrapper, #cart-content'),{cart:CartJS.cart});setTimeout(function(){Currency.convertAll('INR',Currency.currentCurrency)},50)
$(document).on('cart.requestComplete',function(event,cart){Shopify.onCartUpdate(CartJS.cart);Currency.convertAll('INR',Currency.currentCurrency)})},init:function(){this.pagePreLoading();this.homeSlideshow();this.stickMenu();this.toTopButton();this.mailchipPopup();this.handleQuickShop();this.effectNavigation();this.owlSlider();this.menuOnMobile();this.handleMenuMultiLine();this.toggleSearchSidebar();this.toggleCartSidebar();this.toggleFilterSidebar();this.instagram_listener();this.wishlistProduct();this.wishlistProductItem();this.handleMap();this.dropdownFilter();this.fixTitle();this.fixDropdown();this.filterCatalog();this.swatch();this.refreshImage();this.refreshZoom();this.mobileDetect();this.cartJS_handle()}}
$(window).resize(function(){if(AT_Main.getWidthBrowser()<1024){if($('#top').hasClass('on')){$('#top').prev().remove();$('#top').removeClass('on').removeClass('animated')}}
if(AT_Main.checkLayout()==1){if(!$('.widget-footer .list-unstyled').hasClass('dropdown-menu')){$('.widget-footer .list-unstyled').addClass('dropdown-menu')}}
else{$('.widget-footer .list-unstyled').removeClass('dropdown-menu')}
AT_Main.fixReturnScroll();if(AT_Main.checkLayout()!=1&&jQuery('.menu-mobile').hasClass('opened'))
jQuery("#page-body").trigger('click')});$(window).load(function(){$("#site-loader").delay(1000).fadeOut("slow")});jQuery(document).ready(function($){AT_Main.init()})