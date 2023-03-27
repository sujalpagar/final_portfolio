// ==================== Menu Button as Toggle ================================================//
let mbtn = document.getElementById("menu-icon");
mbtn.addEventListener("click",function(){
        document.getElementsByClassName("navbar")[0].classList.toggle('active');
})


//====================== Scroll Section Active Link ========================================//

    // Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

    // Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
    // Get current scroll position
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}


// ============================ Sticky Navbar ============================================//
window.onscroll = () => {
    let header = document.querySelector("header");
    header.classList.toggle('sticky',window.scrollY > 100);


    // ======================== Remove Toggle icon =======================================//
    document.getElementsByClassName("navbar")[0].classList.remove('active');
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementsByClassName("navbar")[0].classList.remove('active');
  }
}

