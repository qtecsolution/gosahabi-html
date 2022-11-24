
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.backgroundColor= "#ffff";
    document.getElementById("header").style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px"
    document.getElementById("header").style.transition = "all .3s"
} else {
    document.getElementById("header").style.backgroundColor = "transparent";
    document.getElementById("header").style.boxShadow = "none"

}
}
