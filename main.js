$(document).ready(function (){
    $('.menu-toggler').on('click', function (){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');

    });


    $('.top-nav .nav-link').on('click', function (){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');




    });

});

// $('.nav-list').on('click', function(){
//     $(this).toggleClass('open');
//     $('.top-nav').toggleClass('open');
//     $('.open').collapse('hide');
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.materialboxed');
//     var instances = M.Materialbox.init(elems, options);
//   });