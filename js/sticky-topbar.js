! function () {
    var view = View('#topNavBarWrapper')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            var view = this.view
            window.addEventListener('scroll', (e) => {
                //this默认等于用户点击的元素
                //箭头函数没有this，等于外部this
                if (window.scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
        },
        active: function () {
            this.view.classList.add('sticky')
            this.view.querySelector('#topNavBar').classList.add("sticky");
        },
        deactive: function () {
            this.view.classList.remove("sticky");
            this.view.querySelector('#topNavBar').classList.remove("sticky")
        }
    }
    controller.init(view)
}()