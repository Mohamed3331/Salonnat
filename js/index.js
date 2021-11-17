
$(function () {
    $('[lang="ar"]').hide();
    $('#switch-lang, #switch-lang-mobile').click(function () {
        $('[lang="ar"]').toggle();
        $('[lang="en"]').toggle();

        $('html').removeAttr('style')
    });
})

$(function () {
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            items: 1,
            // autoplay: true,
            smartSpeed: 700,
            loop: true,
            autoplayHoverPause: true
        });
    })

})




AOS.init();



const mobilecontainer = document.getElementsByClassName('mobile-container')
const mobileIcon = document.getElementsByClassName('mobile-bars')
const mobileIconClose = document.getElementsByClassName('mobile-close')
const navList = document.getElementsByClassName('mobile-navlist')
const myButton = document.getElementsByClassName('back-to-top')


navList[0].addEventListener('click', () => {
    mobilecontainer[0].style.transform = "translateX(-100%)"
})

mobileIcon[0].addEventListener('click', () => {
    mobilecontainer[0].style.display = 'block'
    mobilecontainer[0].style.transform = "translateX(0%)"
})

mobileIconClose[0].addEventListener('click', () => {
    mobilecontainer[0].style.transform = "translateX(-100%)"
})




window.addEventListener('scroll', () => {
    if (window.window.pageYOffset > 1000) {
        myButton[0].style.display = "block"
    } else {
        myButton[0].style.display = "none"

    }
})

myButton[0].addEventListener('click', function () {
    window.scrollTo(0, 0);
});
