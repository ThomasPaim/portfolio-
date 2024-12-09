

const menu = document.getElementById('menu')
const sidebar = document.querySelector('.sidebar')


menu.addEventListener('click', ()=>{
    sidebar.classList.toggle('mostrar')

})

const time = document.querySelector('#time')

const data = new Date()
let hour = data.getHours()

if(hour >= 0 && hour <= 11){
    time.textContent = 'Bom dia'

 }else if(hour >= 12 && hour <= 17){
     time.textContent = 'Boa tarde'
 }else{
     time.textContent = 'Boa noite'
 }





