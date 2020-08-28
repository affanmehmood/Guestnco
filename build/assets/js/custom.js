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