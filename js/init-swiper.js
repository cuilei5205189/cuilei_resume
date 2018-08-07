! function () {
    var view = View('.mySlides')
    // view.style = 'border: 1px solid red'
    var controller = {
        view: null,
        swiper: null,
        swiperOptions: {
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            }
        },
        init: function (view) {
            this.view = view
            this.initSwiper()
        },
        initSwiper: function () {
            this.swiper = new Swiper(view.querySelector('.swiper-container'), this.swiperOptions)
        }
    }
    controller.init(view)

}()