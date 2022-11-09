const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controlls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
  //ButtonClick active class
  for(let i =0; i < secBtn.length; i++){
      secBtn[i].addEventListener('click', function(){
          let currentBtn = document.querySelectorAll('.activebtn');

          currentBtn[0].classList.remove('activebtn');
          this.classList.add('activebtn');
      });
  }
    

  // Sections active class
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from the other buttons 
      secBtns.forEach(function (btn) {
        btn.classList.remove('active');
      })
      e.target.classList.add('active')

      //hide other sections
      sections.forEach((sections) => {
        sections.classList.remove('active')
      })

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  })
}

PageTransitions();
/* Skill counter */
const circleblock = document.querySelectorAll('.circleblock');
window.addEventListener('load', function(){
    circleblock.forEach(item => {
    let numElement = item.querySelector('.num');
    let num = parseInt(numElement.innerText);
    let count = 0;
    let time = 2000 / num;
    let circle = item.querySelector('.circle');
    setInterval(() => {
      if(count == num){
        clearInterval();
      } else {
        count += 1;
        numElement.innerText = count;
      }
    }, time)
    circle.style.strokeDashoffset 
      = 503 - ( 503 * ( num / 100 ));
    let dots = item.querySelector('.dots');
    dots.style.transform = 
      `rotate(${360 * (num / 100)}deg)`;
    if(num == 100){
      dots.style.opacity = 0;
    }
  })
});
//Toogle theme
const themebtn = document.querySelector('.theme-btn');
themebtn.addEventListener('click', () =>{
  let element = document.body;
  element.classList.toggle('light-mode')
})
PageTransitions();