/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
document.getElementById("navbar__list").innerHTML = ` <li><a class="menu__link active" id="a1" href="#section1" ">Section1</a></li>
<li><a class="menu__link" href="#section2" id="a2">Section2</a></li>
<li><a class="menu__link" href="#section3" id="a3">Section3</a></li>
<li><a class="menu__link" href="#section4" id="a4">Section4</a></li>
`



window.addEventListener(scroll, function() {
    let Navbar = document.getElementById('navbar');
    Navbar.classList.add('navbar-scroll');
});

let buttons = document.querySelectorAll('a');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        var selectedId = this.id;
        var selectedId = "section" + this.id ;
        var Sections = document.querySelectorAll("section");
        for(i=0;i<4;i++){
            Sections[i].classList.remove('active');
        }
        document.getElementById(selectedId).classList.add("active");
       //scrll Sections.classList.add('active');
        
       // Sections.remove('active');
       //document.getElementById(selectedId).classList.add("active");
        
                
    });
});

// window.addEventListener("scroll", function(){
//     let Navbar = document.getElementById('navbar');
//     if(window.pageYOffset == 0){
//         Navbar.classList.add("navbar-scroll");
//     }else{
//         Navbar.classList.remove("navbar-scroll");
//     }
// });


var scrollTimer = -1;

    function bodyScroll() {
      document.getElementById('')

      if (scrollTimer != -1)
        clearTimeout(scrollTimer);

      scrollTimer = window.setTimeout("scrollFinished()", 500);
    }

    function scrollFinished() {
      document.body.style.backgroundColor = "red";
    }

    let btn = document.getElementById("scrollToTop");

function showBtn() {
    if (document.body.scrollTop >=60 || document.documentElement.scrollTop >=60) {
        //show btn
        btn.style.display = "block";
    } else {
        //hide btn
        btn.style.display = "none";
    }
}
btn.addEventListener("click",scrollBtn);
function scrollBtn() {
    //scroll to top smoothly
    window.scrollTo({top: 0, behavior: 'smooth'});
}

var timer = null;

window.onscroll = function () {
   // console.log("---d")
    let scrollHeight  = window.scrollY + window.screen.height;


    // let section1 = document.querySelector("#section1");
    // let section2 = document.querySelector("#section2");
    // let section3 = document.querySelector("#section3");
    // let section4 = document.querySelector("#section4");
    
    let section1Top = document.querySelector("#section1").offsetTop // section 1 top
    let section2Top = document.querySelector("#section2").offsetTop // section 2 top
    let section3Top = document.querySelector("#section3").offsetTop // section 3 top
    let section4Top = document.querySelector("#section4").offsetTop // section 4 top
    let navbtn1 = document.querySelector("#a1");
    let navbtn2 = document.querySelector("#a2");
    let navbtn3 = document.querySelector("#a3");
    let navbtn4 = document.querySelector("#a4");
    let navbtn = document.querySelectorAll('a');
    let navbar = document.querySelector("#navbar");
    navbtn.forEach(btn => btn.classList.remove('active'));
    navbar.classList.remove('navbar-scroll');

    // console.log(scrollHeight, "---", section2Top)
    if (scrollHeight < section2Top) {
        navbtn1.classList.add("active");
    } else if(scrollHeight >= section2Top && scrollHeight < section3Top) {
        navbtn2.classList.add("active");
    } else if (scrollHeight >= section3Top && scrollHeight < section4Top) {
        navbtn3.classList.add("active");
    } else {
        navbtn4.classList.add("active");
    }

    if (timer !== null) {
        clearTimeout(timer);
    }
     timer = setTimeout(() => {
       navbar.classList.add('navbar-scroll');
    }, [3000])
    
}




// let prevScrollPos = window.pageYOffset;
// let Navbar = document.getElementById('navbar');
//     setTimeout(() => {
//         let currentScrollPos = window.pageYOffset;
//         if(currentScrollPos == prevScrollPos) {
//             console.log('hidden');
//             Navbar.classList.add('navbar-scroll');
//         } else {
//             console.log('hidden');
//             Navbar.classList.remove('navbar-scroll');
//         }
//     }, 200);
    //fixed nav
    
    

// $(window).on('scroll',function(){
//     var WindowTop = $(window).scrollTop();
//     $('section').each(function(i){
//         if(WindowTop > $(this).offset().top - 50 && 
//            WindowTop < $(this).offset().top + $(this).outerHeight(true)
//           ){
//             $('ul > li > a').removeClass('active');
//  $('ul  li').eq(i).find('a').addClass('active');
//         }
//     });
// });
    //   $('a[href*=#]:not([href=#])').click(function() {
    //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //       if (target.length) {
    //         $('html,body').animate({
    //           scrollTop: target.offset().top
    //         }, 1000);
    //         return false;
    //       }
    //     }
    //   });
    

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
// $(window).scroll(function(){
//     if ($(this).scrollTop() > 50) {
//        $('#1').addClass('active');
//     } else if ($(this).scrollTop() > 100    )
// })

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active













