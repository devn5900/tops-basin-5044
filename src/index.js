let link = document.querySelectorAll(".mainLink");
link.forEach((el, index) => {
    el.firstElementChild.addEventListener("mouseover", () => {
        el.childNodes[3].style.visibility = "visible";
    })
    el.firstElementChild.addEventListener("mouseout", () => {
        el.childNodes[3].style.visibility = "hidden";
    })
});
