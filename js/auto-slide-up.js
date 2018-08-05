! function () {
    let specialTags = document.querySelectorAll('[data-x]')
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }

    setTimeout(() => {
        findClosestAndRemove()
    }, 3000)


    window.addEventListener('scroll', function (e) {
        findClosestAndRemove()
    })

    function findClosestAndRemove() {
        let specialTags = document.querySelectorAll('[data-x]')

        let minIndex = 0
        for (let i = 0; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = i
            }
        }
        specialTags[minIndex].classList.remove('offset')
        specialTags[minIndex].classList.add('active')
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let broAndme = li.parentNode.children
        for (let i = 0; i < broAndme.length; i++) {
            broAndme[i].classList.remove('highLight')
        }
        li.classList.add('highLight')
    }
}()