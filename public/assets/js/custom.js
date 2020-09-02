$(function() {
    var header = $(".header-nav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            header.addClass("stickyheader");
            $('.listing-nav').addClass('scrolledbody');

            
        } else {
            header.removeClass("stickyheader");
            $('.listing-nav').removeClass('scrolledbody');
        }
    });
});

$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 380) {
            $('body').addClass('detaiedfixsidebar');

            
        } else {
            $('body').removeClass('detaiedfixsidebar');
        }
    });
});


jQuery('.datatable-class').DataTable();
 jQuery('.featured-listing').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    navText: ["next", "previous"],
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

jQuery('.clients-listing').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    navText: ["next", "previous"],
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
jQuery('.testimonials-listing').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    navText: ["next", "previous"],
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})


$( document ).ready(function() {
    $( " li.has-child" ).hover(function() {
        $(this).toggleClass('active')
      });
});

