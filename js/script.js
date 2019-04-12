// $(document).ready(function() {
//         $(".menu-icon").on("click", function() {
//             $("nav ul").toggleClass("showing");
//         });
//     });

//     // Scrolling Effect

//     $(window).on("scroll", function() {
//         if($(window).scrollTop()) {
//             $('nav').addClass('grey');
//         }

//         else {
//             $('nav').removeClass('black');
//         }
//     })





// function toggle_visibility(id) {
//     var e = document.getElementById(id);
//     if(e.style.display == 'block')
//        e.style.display = 'none';
//     else
//        e.style.display = 'block';
//  }

function toggle_visibility(id) {
    var e = document.getElementById(id);
    e.style.display = ((e.style.display!='none') ? 'none' : 'block');
    }