! function () {
    var view = document.querySelector('nav.menu')
    // view.style = 'border: 1px solid red'
    var controller = {
        view: null,
        aTags: null,
        initAnimation: function () {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement: function (element) {
            let top = element.offsetTop
            let targetTop = top - 80
            let currentTop = window.scrollY
            let s = targetTop - currentTop
            let t = Math.abs((s / 100) * 300)
            if (t > 500) {
                t = 500
            }
            // let n = 100 //一共动多少次
            // let duration = 500 / n //多长时间动一次
            // let distance = (targetTop - currentTop) / n
            // let i = 0
            // let id = setInterval(() => {
            //     if (i === n) {
            //         window.clearInterval(id)
            //     }
            //     i = i + 1
            //     window.scrollTo(0, currentTop + distance * i)
            // }, duration)
            var coords = {
                y: currentTop,
            }
            var tween = new TWEEN.Tween(coords)
                .to({
                    y: targetTop
                }, t)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start()
        },
        bindEvents: function () {
            let aTags = this.aTags
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = (e) => {
                    e.preventDefault()
                    let a = e.currentTarget
                    // a.href
                    let href = a.getAttribute('href')
                    let element = document.querySelector(href)
                    this.scrollToElement(element)
                }
            }
        },
        init: function (view) {
            this.view = view
            this.aTags = view.querySelectorAll('nav.menu>ul>li>a')
            this.initAnimation()
            this.bindEvents()
        }
    }
    controller.init(view)
}()