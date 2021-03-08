
$(".scrollbar").mCustomScrollbar({
  theme: "minimal-dark"
});



function scrollNav () {
  var top = $('#top');
  var mini = $(".top-head");
  var mid = $(".top-middle");
  var bottom = $(".top-bottom");
  var topH = top.height();
  var miniH = mini.height();
  var midH = mid.height();
  var bottomH = bottom.height();

  var plus = midH + bottomH;
  $(window).on('scroll', function () {

    if ($(this).scrollTop() > topH) {
      top.addClass("fixed-top");
      top.addClass("animated fadeInDown");
      // top.css("margin-top",-miniH+"px");
      $('#wrapper').css("padding-top",topH+"px")    ;
      $(".buy-btn-section").addClass("open animated fadeInUp");
      
    } else {
      top.removeClass("fixed-top");
      top.removeClass("animated fadeInDown");      
      top.css("margin-top", 0)      
      $('#wrapper').css("padding-top", 0)
      $(".buy-btn-section").removeClass("open animated fadeInUp");      
    }

  });
}
// function isScrolledIntoView(elem) {
//   var docViewTop = $(window).scrollTop();
//   var docViewBottom = docViewTop + $(window).height();
//   var elemTop = $(elem).offset().top;
//   var elemBottom = elemTop + $(elem).height();
//   return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }

// $(window).scroll(function () {
//   if (isScrolledIntoView($('.product-group'))) {
//     alert('visible');
//   }
// });
function sweetImage (src,title) {
  swal({
    showConfirmButton: false,
    showCloseButton: false,
    showCancelButton: false,
    text: title,
    imageUrl: src
    
  })
}

function modalLogin (that){
  swal({    
    html: '',
    showConfirmButton: false,
    showCloseButton: false,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down',
  })
}

$("#ex2").slider();
$("#ex2").on("slide", function (slideEvt) {
  var valslide = slideEvt.value;
  
  $("#val1").val(valslide[0]);
  $("#val2").val(valslide[1]);
});

$('.rupiah').inputmask("numeric", {
  radixPoint: ".",
  groupSeparator: ",",
  digits: 2,
  autoGroup: true,
  prefix: 'Rp ', //Space after $, this will not truncate the first character.
  rightAlign: false,
  oncleared: function () { self.Value(''); }
});
$(function () {
  // init bootstrap collapse for elements with panel-collapse class
  $('.panel-collapse').collapse({ toggle: false });

  // accordian collapse logic
  $('[data-toggle=collapse-next]').on('click', function (e) {
    // Try to close all of the collapse areas first
    var that = $(this);

    // ...then open just the one we want
    var $target = $(this).next('ul.panel-collapse');
    $target.collapse('toggle');
    
    // $target.toggleClass("open");
    var attr = $(this).attr('data-parent');
    if (typeof attr !== typeof undefined && attr !== false) {
      var parent = that.data("parent");
      $(parent).find("[data-toggle=collapse-next]").not(this).next("ul.panel-collapse").collapse("hide");
    } else {
      
    }
  });

  $('ul.panel-collapse').on('show.bs.collapse',function(){
    $(this).prev().find('i.minus').addClass("on");
    $(this).prev().find('i.plus').removeClass("on");
  });
  $('ul.panel-collapse').on('hide.bs.collapse',function(){
    
    $(this).prev().find('i.plus').addClass("on");
    $(this).prev().find('i.minus').removeClass("on");
  });
});
$(".touchspin").TouchSpin({
  buttondown_class: "btn btn-light rounded-0",
  buttonup_class: "btn btn-light rounded-0"
});
jQuery('img.svg').each(function () {
  var $img = jQuery(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');

  jQuery.get(imgURL, function (data) {
    // Get the SVG tag, ignore the rest
    var $svg = jQuery(data).find('svg');

    // Add replaced image's ID to the new SVG
    if (typeof imgID !== 'undefined') {
      $svg = $svg.attr('id', imgID);
    }
    // Add replaced image's classes to the new SVG
    if (typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass + ' replaced-svg');
    }

    // Remove any invalid XML tags as per http://validator.w3.org
    $svg = $svg.removeAttr('xmlns:a');

    // Replace image with new SVG
    $img.replaceWith($svg);

  }, 'xml');

});
$(document).ready(function () {
  // $(".modal").on("shown.bs.modal",function(){
  //   if ($("body").hasClass("modal-open")) {
  //     $("html").css("overflow", "hidden");
  //   } else {
  //     $("html").css("overflow", "auto");

  //   }
  // });
  
  // $(".modal").on("hidden.bs.modal",function(){
  //   if ($("body").hasClass("modal-open")) {
  //     $("html").css("overflow", "hidden");
  //   } else {
  //     $("html").css("overflow", "auto");

  //   }
  // });

  $("#dropship").change(function () {
    if ($(this).is(":checked")) {
      $("#dropship-form").collapse("show");
    } else {
      $("#dropship-form").collapse("hide");

    }
  });
 
});
$(document).ready(function () {
  
  // scrollNav();
  var Table = $(".datatable").DataTable({
    "columnDefs": [
      { "orderable": false, "targets": 0 }

    ],
    "bFilter": true,
    "bLengthChange": false,
    "pagingType": "input"
  });
  var pgn_btn = $(".paginate_button");
  $("#product-table_filter,.dataTables_filter").hide();
  $(".paginate_input").css("width", "50px");
  $(".paginate_input").addClass("form-control");
  $(".paginate_input").addClass("d-inline-block");
  $(".paginate_page").addClass("ml-2");
  pgn_btn.addClass('btn');
  if (pgn_btn.hasClass("first") || pgn_btn.hasClass('last')) {
    pgn_btn.addClass('btn-secondary').addClass('btn-sm').addClass('fprime ');
    pgn_btn.addClass('ml-2');
  } else {
    pgn_btn.addClass('btn-primary');
  }
});
$(document).ready(function() {
  $("#nav-btn").on("click",function(){
    $("#wrapper").toggleClass('slide');
    if($("#wrapper").hasClass("slide")) {
      $("body").css("overflow-y","hidden");
    } else {
      $("body").css("overflow-y","auto");
    }
  });
  
  $(".owl-prev").on("click",function(){
    var target = $(this).parent().data("target"),
        owl = $(target).find(".owl-carousel");
    $(owl).trigger("prev.owl.carousel");    
  });
  
  $(".owl-next").on("click",function(){
    var target = $(this).parent().data("target"),
        owl = $(target).find(".owl-carousel");
    $(owl).trigger("next.owl.carousel");
  });
});
$(window).resize(function(){
  $('*[following]').ready(function(){
    var thisH = $(this).height();
    var target = $(this).attr('following');
    var targetH = $(target).height();
  
    $(this).css("height", targetH + "px");
  });


  var width = $(window).width();
  if (width < 768) {
    $("ul.panel-collapse").collapse("hide");
    $("ul.panel-collapse").prev().find('i.plus').addClass("on");
    $("ul.panel-collapse").prev().find('i.minus').removeClass("on");

    $('.simple-select2').on('select2:open', function (e) {
      $("#wrapper").css("opacity","0.5");
    }).on('select2:close', function(e){
      $("#wrapper").css("opacity", "1");
    });
  }

});
$("#collapse-nav").on("show.bs.collapse", function () {
  var h = $(this).height();
  $("#search-panel").css("padding-top", + h + "px");
}).on("hide.bs.collapse", function () {
  var h = $("#top").height();
  $("#search-panel").css("padding-top", "0px");
});


$(document).ready(function () {

  
    $('.datepick').each(function () {
      var dates = $(this).datepicker({ uiLibrary: 'bootstrap4', format: "dd-mm-yyyy" });
      $(this).click(function(){
        dates.open();
      });
    });
    $('.timepick').each(function () {
      $(this).timepicker({

      });
    });


  $(window).trigger('resize');
  $('.simple-select2').select2({
    theme: 'bootstrap4',    
    width: 'resolve',
    allowClear: false
  });
  $('.normal-select').select2({
    theme: 'bootstrap4',    
    width: 'resolve',
    allowClear: false,
    minimumResultsForSearch: -1
  }).on('select2:open', function (e) {    
      $('.select2-container--bootstrap4').addClass('normal')    
  });
  if (!$('.select2-container--bootstrap4').hasClass('normal')){
    $('.select2-container--bootstrap4').addClass('normal')
  }
  
  $('.simple-select2-sm').select2({
    theme: 'bootstrap4',
    width: '100%',
    containerCssClass: ':all:',    
    
  });
  

  $("input[name='loginmode']").change(function(){
    var val = $(this).val();

    if(val == "on") {
      $(".btn-menu").addClass("d-none");
      $(".account").removeClass("d-none");
    } else {
      $(".btn-menu").removeClass("d-none");
      $(".account").addClass("d-none");
    }
  });
});
$(".comment-focus").focus(function () {
  if($(this).is(":focus")) {
    $(this).parents(".comment-section").find(".btn-col").collapse("hide");
    $(this).parents("form").find(".btn-col").collapse("show");
  }
}).focusout(function(){
  $(this).parents(".comment-section").find(".btn-col").collapse("show");
  $(this).parents("form").find(".btn-col").collapse("hide");
});
