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

setTimeout(function () {
    loadingPage.classList.remove("active");
}, 3000);

window.onscroll = function (e) {
    if (window.scrollY > 0) {
        topNavBarWrapper.classList.add("sticky");
        topNavBar.classList.add("sticky");
    } else {
        topNavBarWrapper.classList.remove("sticky");
        topNavBar.classList.remove("sticky");
    }
};

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