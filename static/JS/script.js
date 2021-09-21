//Carousel jquery
$('.owl-carousel').owlCarousel({
    loop:true,
    stagePadding: 50,
    nav:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }
})

//abrir modal
$("#product-cards .container-cards").click(function(){
    console.log("chegou aqui")
    $(".modal").modal('show');
})