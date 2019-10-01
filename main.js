$(document).ready(function (){
    $('.menu-toggler').on('click', function (){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');

    });
});

$('.nav-list').on('click', function(){
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
    $('.open').collapse('hide');
});

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.materialboxed');
//     var instances = M.Materialbox.init(elems, options);
//   });