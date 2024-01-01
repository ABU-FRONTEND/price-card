let wrepper = document.querySelector('.wrapper')
let modal = document.querySelector('.thank__modal')
let btn = document.querySelector('.submit')
let ratings = document.querySelectorAll('.ratings')
let submit = document.querySelector('.sel')
console.log(ratings);

function show(index) {
   ratings.forEach((item)=>{
      item.style.backgroundColor = '#262E38'
      item.style.color = '#7C8798'
   })
   for(let i = 0; i <= index; i++){
      ratings[i].style.backgroundColor = 'orange'
      ratings[i].style.color = 'white'
   }
}
let count = 0
ratings.forEach((value, i)=>{
   value.addEventListener('click', ()=>{
      show(i)
      count = 1
      submit.innerHTML = i + 1
   })
})

btn.addEventListener('click', () => {
   if(count === 0){
      btn.innerHTML = 'ERROR'
      setTimeout(() => {
         btn.innerHTML = 'SUBMIT'
      }, 1000);
   }
   else{
      btn.innerHTML = 'SUBMIT'
      btn.nextElementSibling.innerHTML = ''
      wrepper.style.display = 'none'
      modal.style.display = 'flex'
   }
})
