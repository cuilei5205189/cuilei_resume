// navbar

portfolio1.onclick = function () {
    state.className = "innerBar state-1";
};
portfolio2.onclick = function () {
    state.className = "innerBar state-2";
};
portfolio3.onclick = function () {
    state.className = "innerBar state-3";
};

//loading
setTimeout(() => {
    once()
}, 3500)


setTimeout(function () {
    loadingPage.classList.remove("active");
}, 2000);


let specialTags = document.querySelectorAll('[data-x]')
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}

window.onscroll = function (e) {
    if (window.scrollY > 0) {
        topNavBarWrapper.classList.add("sticky");
        topNavBar.classList.add("sticky");
    } else {
        topNavBarWrapper.classList.remove("sticky");
        topNavBar.classList.remove("sticky");
    }
    findClosest()
}

function findClosest() {
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

let liTags = document.querySelectorAll("nav.menu>ul>li");
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (e) {
        e.currentTarget.classList.add('active')
        // let li = e.currentTarget;
        // let brother = li.getElementsByTagName('ul')[0]
        // brother.classList.add('active')
    }
    liTags[i].onmouseleave = function (e) {
        e.currentTarget.classList.remove('active')
    }
}


// Setup the animation loop.
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

let aTags = document.querySelectorAll('nav.menu>ul>li>a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (e) {
        e.preventDefault()
        let a = e.currentTarget
        // a.href
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
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
            .start();
    }
}