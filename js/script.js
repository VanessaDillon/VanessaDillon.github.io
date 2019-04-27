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



const portfolio = document.getElementById('portfolio')
portfolio.addEventListener('click', _ => portfolio.classList.toggle('is-active'))

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }

 const about = document.getElementById('about')
about.addEventListener('click', _ => about.classList.toggle('is-active'))

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }

// function toggle_visibility(id) {
//     var e = document.getElementById(id);
//     e.style.display = ((e.style.display !='none') ? 'none' : 'block');
//     };