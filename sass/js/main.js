$(document).ready(function() {
  $('.site_main_banner .owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      items: 1,

  });
  $('.owl-stage-outer .owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      items: 5,

  });

  // $('.site_main_blog_content .owl-carousel').owlCarousel({
  //     loop: true,
  //     margin: 10,
  //     nav: false,
  //     dots: false,
  //     responsiveClass:true,
  //     items:1
  //     // responsive:{
  //     //   0:{
  //     //       items:1,
  //     //       nav:true
  //     //   },
  //     //   600:{
  //     //       items:3,
  //     //       nav:false
  //     //   },
  //     //   1000:{
  //     //       items:5,
  //     //       nav:true,
  //     //       loop:false
  //     //   }
  //     // }


  // });

  $('.show-popup' ).on('click', function(event) {
    event.preventDefault();
    console.log($('.popup-site'));
    $('.popup-site').fadeIn(400);
  });
  $('.popup-close').on('click', function(event) {
    event.preventDefault();
    $('.popup-site').fadeOut(400);
  });
  $(".show-account").click(function(event) {
      $('.box-form-account').toggle();
  });
  $(".link_cart").click(function(event) {
      $('.box-form-cart').toggle();
  });
  $('.popup-close' ).on('click', function(event) {
    event.preventDefault();
    $( this ).parents('.login').fadeOut(400);
 });

//category 
  $('.title-filter').on('click', function(event) {
    event.preventDefault();
    $('.wrap-filter').fadeIn(100);
  });
  $('.filterTagFullwidthButton-mobile').on('click', function(event) {
    event.preventDefault();
    $('.wrap-filter').fadeIn(100);
  });
  $('.popup-close').on('click', function(event) {
      event.preventDefault();
      // console.log(1);
      $( this ).parents('.wrap-filter').fadeOut(100);
  });
  
  $(".title-filter").click(function () {
    $(this).next("div.layered-content").slideToggle("fast");
     $(this).find(".icon-dec i").toggleClass('fa fa-minus');
      $(this).find(".icon-dec i").toggleClass('fa fa-plus');
    
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical:true,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    verticalSwiping:true,
    display:true
  });
  

  $('.mail' ).on('click', function(event) {
    event.preventDefault();
    console.log($('.modal-addThis'));
    $('.modal-addThis').fadeIn(400);
  });
   $('.close').on('click', function(event) {
      event.preventDefault();
      // console.log(1);
      $( this ).parents('.moda').fadeOut(100);
  });


  //  end slide slick
  //accordion
  /* Accordion demo */
  // $(".accordion > a.icon").on("click", function() {
  //   if ($(this).hasClass("active")) {
  //     $(this).removeClass("active");
  //     $(this)
  //       .siblings(".submenu-links")
  //       .slideUp(200);
  //     $(".accordion .icon ")
  //       .removeClass("fa-minus")
  //       .addClass("fa-plus");
  //   } else {
  //     $(".accordion > a.icon")
  //       .removeClass("fa-minus")
  //       .addClass("fa-plus");
  //     $(this)
  //       .find("i")
  //       .removeClass("fa-plus")
  //       .addClass("fa-minus");
  //     $(".accordion > a.icon").removeClass("active");
  //     $(this).addClass("active");
  //     $(".submenu-links").slideUp(200);
  //     $(this)
  //       .siblings(".submenu-links")
  //       .slideDown(200);
  //   }
  // });
  $('accordion > .icon' ).on('click', function(event) {
    event.preventDefault();
     $(this).toggleClass('active');
    $('.submenu-links').toggle('active');
  });
  //end accordion
  //tab
  $('.clickme a').click(function(){
    $('.clickme a').removeClass('activelink');
    $(this).addClass('activelink');
    var tagid = $(this).data('tag');
    console.log(tagid);
    $('.list').removeClass('active').addClass('hide');
    $('#'+tagid).addClass('active').removeClass('hide');
  });
  ///end
  //menu mobi//

 

  $('.hamburger-menu' ).on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('.menu-mobi').toggleClass('active');
  });

  $('a .parent' ).on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('a href="javascript:;"').toggle('active');
  });
  //footer-menu

  $('.btn-footer' ).on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('.main-footer').toggle('active');
  });
  $(".footer-col").click(function(event) {
    $('.footer-content').toggle();
  });
 

  $(".ddd").on("click", function () {

    var $button = $(this);
    var oldValue = $button.closest('.sp-quantity').find("input.quntity-input").val();

    if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below zero
        if (oldValue > 1) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }

    $button.closest('.sp-quantity').find("input.quntity-input").val(newVal);

  });

  //reponsive

  $(".title-page").click(function () {
    $( ".menu-page" ).toggle('active');
  });  
  $(".mp-parent i").click(function () {
      var id =$(this).closest('.mp-parent').data('id');
      var parents =  $(this).closest('.mb-menu');
      console.log('.list-child #'+id+'');
      parents.find('.mm-panel').addClass('mm-subopened');
      parents.find('#'+id+'').addClass('mm-opened');
  });  
  $(".list-child  i").click(function () {
      $(this).closest('.mb-menu').find('.mm-panel').removeClass('mm-subopened');
      $(this).closest('.mb-menu').find('.list-child').removeClass('mm-opened');
  });  

});
