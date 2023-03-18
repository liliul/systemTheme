import { guardarNoLocalStorage } from './localStorage.js';


const selec = document.querySelector('#select')
const body = document.querySelector('body')


if (localStorage.TempThemes != body.className) {
 
 body.classList.add(localStorage.TempThemes)

   
  if (localStorage.TempThemes) {
    let op = document.createElement('option')
    op.setAttribute('selected','')
    op.setAttribute('disabled', '')
    op.textContent = localStorage.TempThemes
    op.style.color = 'green'

    selec.appendChild(op)
  }
}
  

selec.addEventListener('change', selected);

function selected(e) {
// console.log('onchange: ', this.value)
 let isOptionsValue = selec.options[select.selectedIndex];


 let isText =  isOptionsValue.text;
  console.log('isText',isText)

  guardarNoLocalStorage('TempThemes', isText)
  
  console.log('selec', select)
  for (const {text} of selec) {
    console.log('res: ', text)   

    if (isText === text) {
      body.className = ''; 
      body.classList.add(text)     
    } 
  }
}
