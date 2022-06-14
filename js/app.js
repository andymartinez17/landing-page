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
document.getElementById("navbar__list").innerHTML = ` <li><a class="menu__link active" id="1" href="#section1" ">Section1</a></li>
<li><a class="menu__link" href="#section2" id="2">Section2</a></li>
<li><a class="menu__link" href="#section3" id="3">Section3</a></li>
<li><a class="menu__link" href="#section4" id="4">Section4</a></li>
`

let buttons = document.querySelectorAll('a');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');        
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





// const nav=document.getElementById("menu")
//     ,menu=document.getElementById("nav__list")
//     ,sections=document.querySelectorAll("section");
// //==========================Append Li To Menu Dynamic && smooth Scroll=======================
// //Performance
// const startingTime = performance.now();
// //DocumentFragment!
// const fragment = document.createDocumentFragment();                                                                         
// (function buildMenu(parent , items){
//     items.forEach(function(item) {
//         //create li 
//         const li=document.createElement("li");
//         //create a
//         const a=document.createElement("a");
//         //add data Attribute to a
//         a.setAttribute("data-scroll",`#${item.getAttribute('id')}`);
//         // Add Text to A
//         a.innerHTML=`${item.getAttribute("id")}`;
//         //Append a to li
//         li.appendChild(a);
//         //click on a in li 
//         a.addEventListener("click",function(){
//             // Add Class Active  to section And Remove From Siblings 
//             items.forEach(function(item) {
//                 item.classList.remove('active');
//                 item.getBoundingClientRect().y;
//             });
//             document.querySelector(this.getAttribute('data-scroll')).classList.add("active");
//             //Scroll To Section
//             // document.querySelector(a.getAttribute('data-scroll')).scrollIntoView({ block: 'center',  behavior: 'smooth' });
//             window.scroll({
//                 top:document.querySelector(a.getAttribute('data-scroll')).offsetTop+1,
//                 behavior: 'smooth'
//             });
//             //Add Class Active to li  And Remove From Siblings
//             const Menu=this.parentElement.parentElement;
//             for(let i=0; i<Menu.childElementCount; i++){
//                 Menu.children[i].children[0].classList.remove('active');
//             }
//             this.classList.add('active');
//         })
//         //Append li to Fragment
//         fragment.appendChild(li)
//     });
//     //append Fragment To Menu
//     parent.appendChild(fragment);
//     //Invoke Function
// })(menu,sections);
// const endingTime = performance.now();
// console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
// //========================================================================================
// //=============fixed nav ..scroll down=>hide , scroll up=>show with js====================
// const media = window.matchMedia("(max-width: 900px)")
// //media query
// let prevScrollPos = window.pageYOffset;
// window.onscroll = function() {
//     //fixed nav
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollPos > currentScrollPos) {
//         //if you scrolling top show nav which contain menu
//         nav.style.top = "0";
//         //if it is in this media query hide menu also
//         if(media){
//             setTimeout(() => {
//                 menu.style.visibility="visible";
//             }, 100);
//         }
//     // } else {
//     //     //if you scrolling down hide nav which contain menu
//     //     nav.style.top = "-80px";
//     //     //if it is in this media query hide menu also
//     //     if(media){
//     //         setTimeout(() => {
//     //             menu.style.visibility="hidden";
//     //         }, 100);
//     //     }else{ //if it is Not in this media query show menu 
//     //         menu.style.visibility="visible";
//     //     }
//      }
//     prevScrollPos = currentScrollPos;

// //==========================================================================================
// //==========================Active Section==================================================

// (function(items){
//     items.forEach((item)=>{
//         // document.body.scrollTop >item.getBoundingClientRect().y?item.classList.add('active'):item.classList.remove('active');
//         //item id
//         let Id=item.getAttribute("id");
//         //check if body scroll top is greater than section y offset  && less than section height plus section y offset
//         if(document.body.scrollTop >item.getBoundingClientRect().y 
//         && document.body.scrollTop<item.getBoundingClientRect().y+item.getBoundingClientRect().height ){
//             //add active to item
//             item.classList.add('active');
//             //remove active from li
//             document.querySelectorAll(" #menu li a").forEach(function(el){
//                 el.classList.remove("active");
//             })
//             //add active to li
//             document.querySelector(' #menu li a[data-scroll ="#'+Id+'"]').classList.add('active');
//         }else{
//             //remove active from item
//             item.classList.remove('active');
//         }

//     })
// })(sections)
// //==========================================================================================
// //===============================scroll to top Btn==========================================
//  //   showBtn();
// }

// //let btn = document.getElementById("scrollToTop");

// // function showBtn() {
// //     if (document.body.scrollTop >=60 || document.documentElement.scrollTop >=60) {
// //         //show btn
// //         btn.style.display = "block";
// //     } else {
// //         //hide btn
// //         btn.style.display = "none";
// //     }
// // }
// // btn.addEventListener("click",scrollBtn);
// // function scrollBtn() {
// //     //scroll to top smoothly
// //     window.scrollTo({top: 0, behavior: 'smooth'});
// // }
// //=======================================Out of Task========================================
// //====================================testim || spinner=====================================
// 'use strict'
// let	testim = document.getElementById("Testimonial"),
// 	testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
//     testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
//     testimLeftArrow = document.getElementById("left-arrow"),
//     testimRightArrow = document.getElementById("right-arrow"),
//     testimSpeed = 4500,
//     currentSlide = 0,
//     currentActive = 0,
//     testimTimer,
//     touchStartPos,
//     touchEndPos,
//     touchPosDiff,
//     ignoreTouch = 30;
// ;

// window.addEventListener('DOMContentLoaded', (event) => {
//     //=======hide spinner============
//     setTimeout(() => {
//         document.querySelector('.spinner').style.display="none";
//     }, 2000);
    
//     //=========== Testim Script===================
//     function playSlide(slide) {
//         for (let k = 0; k < testimDots.length; k++) {
//             testimContent[k].classList.remove("active");
//             testimContent[k].classList.remove("inactive");
//             testimDots[k].classList.remove("active");
//         }

//         if (slide < 0) {
//             slide = currentSlide = testimContent.length-1;
//         }

//         if (slide > testimContent.length - 1) {
//             slide = currentSlide = 0;
//         }

//         if (currentActive != currentSlide) {
//             testimContent[currentActive].classList.add("inactive");            
//         }
//         testimContent[slide].classList.add("active");
//         testimDots[slide].classList.add("active");

//         currentActive = currentSlide;
    
//         clearTimeout(testimTimer);
//         testimTimer = setTimeout(function() {
//             playSlide(currentSlide += 1);
//         }, testimSpeed)
//     }

//     testimLeftArrow.addEventListener("click", function() {
//         playSlide(currentSlide -= 1);
//     })

//     testimRightArrow.addEventListener("click", function() {
//         playSlide(currentSlide += 1);
//     })    

//     for (let l = 0; l < testimDots.length; l++) {
//         testimDots[l].addEventListener("click", function() {
//             playSlide(currentSlide = testimDots.indexOf(this));
//         })
//     }

//     playSlide(currentSlide);

//     // keyboard shortcuts
//     document.addEventListener("keyup", function(e) {
//         switch (e.keyCode) {
//             case 37:
//                 testimLeftArrow.click();
//                 break;
                
//             case 39:
//                 testimRightArrow.click();
//                 break;
            
//             default:
//                 break;
//         }
//     })
		
// 		testim.addEventListener("touchstart", function(e) {
// 				touchStartPos = e.changedTouches[0].clientX;
// 		})
	
// 		testim.addEventListener("touchend", function(e) {
// 				touchEndPos = e.changedTouches[0].clientX;
// 				touchPosDiff = touchStartPos - touchEndPos;
// 				if (touchPosDiff > 0 + ignoreTouch) {
// 						testimLeftArrow.click();
// 				} else if (touchPosDiff < 0 - ignoreTouch) {
// 						testimRightArrow.click();
// 				} else {
// 					return;
// 				}
			
// 		})
// })







