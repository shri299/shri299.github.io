

// scroll reveal

// window.addEventListener('scroll',reveal);

// function reveal(){
//     var reveals = document.querySelectorAll('.reveal');

//     for (let i = 0; i < reveals.length; i++) {
        
//         var windowHeight = window.innerHeight;
//         var revealtop = reveals[i].getBoundingClientRect().top;
//         var revealpoint = 100;
//         if(revealtop<windowHeight-revealpoint)
//         {
//             reveals[i].classList.add('active');
//         }
//         else{
//             reveals[i].classList.remove('active');
//         }
//  }
// }


//loader
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("root").style.display = "block";
        document.querySelector(".loader").remove();
    }, 2000);
})









