const boxes = document.querySelectorAll('.box');
const heading = document.querySelector(".heading span");
const btn = document.querySelector(".btn");
const btnText  = document.querySelector(".btn span");
const colors = ["#efd81d","#61dbfb","#41b883","#b52e31","#43853d","#cf649a","#e04e39"]
const techs = ["JS","React","Vue","Angular","Node","Sass","Ember"]
let current = 1;
const textStyle = () => {
  heading.style.color = colors[current -1];
  heading.textContent = techs[current -1]; 
  btn.style.backgroundColor = colors[current -1];
  btnText.textContent = techs[current -1];
}
let inerval = setInterval(() => {
  boxes.forEach((box) => {
    if(current > boxes.length){
      current = 1;
    }
    if(box.classList[1].split("-")[1] * 1 === current){
      box.classList.add("active")
    }else{
      box.classList.remove('active')
    }
  })
  textStyle();
  current++;
},5000)

boxes.forEach((item) => {
  item.addEventListener('click', () => {
    boxes.forEach((box) => {
      box.classList.remove('active')
    })
    item.classList.add('active')
    current = item.classList[1].split("-")[1] * 1;
    textStyle();
    clearInterval(inerval)
  })
})