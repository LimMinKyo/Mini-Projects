const body = document.querySelector("body");
const bgColor = {
  mobile : 'coral',
  tablet : 'powderblue',
  pc : 'yellowgreen'
};

function colorChange(){
  let windowWidth = window.innerWidth;

  if (windowWidth > 1200) {
    body.setAttribute('class','')
    body.classList.add(bgColor.pc);
  } else if (windowWidth < 600) {
    body.setAttribute('class','');
    body.classList.add(bgColor.mobile);
  } else {
    body.setAttribute('class','');
    body.classList.add(bgColor.tablet);
  }
}

colorChange();

window.addEventListener('resize', colorChange);