

// //Toggle setting box
// let gear = document.querySelector(".icon");
// let settingBox = document.querySelector(".setting-box");

// gear.addEventListener('click',() => {
//         settingBox.classList.toggle('visibel');
// });
// ////////////////////////////////////////////////
// //save last web color in local istoreg 
// let mainColor = localStorage.getItem('color_option');
// if(localStorage.getItem('color_option') !== null)
// {
//     document.documentElement.style.setProperty('--main-color' , mainColor );

//     // save active class
//     document.querySelectorAll(".options-box li").forEach(element => {

//             element.classList.remove("active");
            
//             if(element.dataset.color === mainColor )
//             {
//                 element.classList.add('active');
//             }
//         });
// }
// //change web color
// const colors = document.querySelectorAll(".options-box li");
// colors.forEach(li => {
//     li.addEventListener('click', (li) =>
//     {
//         document.documentElement.style.setProperty('--main-color' , li.target.dataset.color );
//         //set color on local storeg
//         localStorage.setItem('color_option',li.target.dataset.color);

//         //add active class
//         handleActive(li);

        
//         // if(li.target.dataset.background == 'no')
//         // {

//         // }
//     });

    
// });

// // change landing backgroundImage
// let backgroundOption;
// let backgroundInterval;


// let localBackOptionType = localStorage.getItem('backgroundOption')

// if(localBackOptionType == 'yes')
// {
//     backgroundOption = true;
//     document.querySelector('.random.yes').classList.add('active');

// }else {
//     backgroundOption = false;
//     document.querySelector('.random.no').classList.add('active');
// }
// ///
// function randomBckRmz() {
//     if(backgroundOption === true)
//     {
//             backgroundInterval = setInterval(() => {
//             let landingPage = document.querySelector(".landing-page");
//             let randomNum = Math.floor(Math.random()*5)+1;
//             landingPage.style.backgroundImage = `url(../images/0${randomNum}.jpg)`
//         },10000);
//     }
    
// }
// // change random backgroundcolor active class and manage background options
// const randomBackElement = document.querySelectorAll(".random-backgrounds span");
// randomBackElement.forEach(span => {
//     span.addEventListener('click', (span) => {
//         handleActive(span);
//         if(span.target.dataset.background == 'yes')
//         {
//             backgroundOption = true;
//             randomBckRmz()
//             localStorage.setItem('backgroundOption', 'yes');
            
//         }else {
//             backgroundOption = false;
//             clearInterval(backgroundInterval);
//             localStorage.setItem('backgroundOption', 'no');
//         }
        
//     })
    
        
    
// });
// randomBckRmz()
// ///////////////////////////////////////////////////////////////

// //data progress
   

// window.onscroll = function() {

//     let section = document.querySelector('.our-skills');
//     let progress = document.querySelectorAll(".prog span");
//     let windowHeight = this.innerHeight;
//     let sectionHeight = section.offsetHeight;
//     let sectoinTop = section.offsetTop; 
//     let windowScrollTop = this.scrollY;
//     let up = document.querySelector('.up');
//     up.onclick = () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//     })
// }
//     if(windowScrollTop >= (sectionHeight + sectoinTop - windowHeight)-400)
//     {
//         progress.forEach((span) => {
//                 span.style.width = span.dataset.width ;
//         });
//     }
//     if(window.scrollY >= this.innerHeight) {
//         up.style.display = 'flex';
//     } else {
//         up.style.display = 'none';
//     }
    
// }

// ///////////////////
// let imgs = document.querySelectorAll('.gallery img');


// imgs.forEach(img => {
//     img.addEventListener('click' , function(e) {
//         //creat overly element
//         let overlay = document.createElement('div');
//         overlay.className = 'popup-overlay';
//         document.body.appendChild(overlay);
//         //creat popup box
//         let popupBox = document.createElement('div');
//         popupBox.className = 'popup-box';
//             if(img.alt !== null) {
//                         let imgHeading =  document.createElement('h3');
//                         let imgText = document.createTextNode(img.alt);
//                         imgHeading.appendChild(imgText);
//                         popupBox.appendChild(imgHeading)
//                     }
//         let imgBox =  document.createElement('img');
//         imgBox.src = img.src; 
        
//         let closeButton = document.createElement('span');
//         closeButton.innerHTML = 'X';
//         closeButton.className = 'close';
//         popupBox.appendChild(imgBox);
//         popupBox.appendChild(closeButton);
//         document.body.appendChild(popupBox);

        
//     });
// });
// // close popup
// document.addEventListener('click', function(e) {
//     if(e.target.className == 'close')
//     {
//         e.target.parentNode.remove();
//         document.querySelector('.popup-overlay').remove();
//     }
// });

// // get current year 

// document.getElementById('year').innerHTML = new Date().getFullYear();


// /// select bullets
// const allBullets =  document.querySelectorAll('.nav-bullets .bullet');
// const allLinks = document.querySelectorAll('.links a');



// function scrollingTo(elements) {
//     elements.forEach(element => {
//     element.addEventListener('click', (e) => {
//         e.preventDefault();
//         console.log(e.target.dataset.section);
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
// }

// scrollingTo(allBullets);
// scrollingTo(allLinks);
// ////////////////////////////////////////////

// let showBullets = document.querySelectorAll('.show-bullet .bullet');
// let bulletContainer = document.querySelector('.nav-bullets');
// let bulletLocalItem = localStorage.getItem('bullets_options');

// if(bulletLocalItem !== null) {
//     showBullets.forEach((bullet) => {
//         bullet.classList.remove('active');
//     });

//     if(bulletLocalItem === 'block')
//     {
//         bulletContainer.style.display = 'block';
//         document.querySelector('.show-bullet .yes').classList.add('active');
//     }else {
//         bulletContainer.style.display = 'none'
//         document.querySelector('.show-bullet .no').classList.add('active');
//     }
// }

// showBullets.forEach(bullet => {
//     bullet.addEventListener('click', (e) => {
//         if(bullet.dataset.display === 'show')
//         {
//             bulletContainer.style.display = 'block';
//             localStorage.setItem('bullets_options', 'block');
//         }else {
//             bulletContainer.style.display = 'none';
//             localStorage.setItem('bullets_options', 'none');
//         }
//         handleActive(e);
//     })
        
// })

// // handle active state
// function handleActive(event) {

//     event.target.parentElement.querySelectorAll('.active').forEach( element => {
//         element.classList.remove('active');
//     });

//     event.target.classList.add('active');
// };

// /// reset 

// document.querySelector('.reset').onclick = (() => {
// // console.log()

//     localStorage.clear();


//     //localStorage.removeItem('bullets_options')
//     //localStorage.removeItem('bullets_options')
//     //localStorage.removeItem('bullets_options')

//     window.location.reload();
// });

// // menu active
// let menuIcone = document.getElementById('icon');
// let tLinks = document.querySelector('.links');

// menuIcone.onclick = () => {
//     menuIcone.classList.toggle("active");
//     tLinks.classList.toggle("open");
// };

//     // Add click event listener to the document
// document.addEventListener('click',  (event) =>  {
//         // Check if the clicked element is outside myDiv
//         if (!menuIcone.contains(event.target) || tLinks.contains(event.target)) {
            
//             menuIcone.classList.remove('active');
//             tLinks.classList.remove('open');
//         }
//     })






