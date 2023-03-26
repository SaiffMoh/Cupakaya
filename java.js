
/*menu*/
const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')


menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')
})


/*FAQ*/

var acc = document.getElementsByClassName ("accordion");
var i;
for (i=0; i < acc.length ; i++){

    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");
        var pannel = this.nextElementSibling;

        if(pannel.style.display === "block"){
            pannel.style.display = "none";
        } else{
            pannel.style.display = "block";
        }
    });
}

