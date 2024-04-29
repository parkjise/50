const container = document.querySelector('.container');
const color1 = document.querySelector('.color-1');
const color2 = document.querySelector('.color-2');

color2.addEventListener('click' ,() => {
  container.classList.add('change')
})
color1.addEventListener('click' ,() => {
  container.classList.remove('change')
})

// const container = document.querySelector('.container');
// const colors = document.querySelectorAll('.colors > div');

// colors.forEach((item) =>{
//   item.addEventListener('click', () => {
//     container.classList.add('change');
//   });
//   container.classList.remove('change');
// })
