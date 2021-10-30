
//loader
const about = document.querySelector(".second1");
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("root").style.display = "block";
        document.querySelector(".loader").remove();
    }, 2000);
})

//scroll animation
window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        if(!about.classList.contains("reveal-content")){
            about.classList.add("reveal-content");
        }
    }
});















