const imagesArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg']
const slider = document.querySelector('.items-wrapper');
let imagesTag = '';

//aggiungo le immagini dinamicamente
for(let i = 0; i<imagesArray.length; i++){
  imagesTag += `<img class="item" src="img/${imagesArray[i]}" alt="${imagesArray[i]}">`
}

slider.innerHTML = imagesTag;
console.log(imagesTag);

//creo un contatore per le immagini
let counterImages = 0;

// aggiungo classe active perchè di default sono display-none
const items = document.getElementsByClassName('item')
items[counterImages].classList.add('active')

// salvo le chevrons in delle costanti
const prev = document.querySelector('.up');
const next = document.querySelector('.down');
//prev di default è hide
prev.classList.add('hide');

//all'evento click di next e prev cambia l'immagine
next.addEventListener('click', function(){
  items[counterImages].classList.remove('active');
  items[++counterImages].classList.add('active');

  prev.classList.remove('hide')

  if(counterImages === imagesArray.length - 1){
    next.classList.add('hide');
  }

});

prev.addEventListener('click', function(){
  items[counterImages].classList.remove('active');
  items[--counterImages].classList.add('active');
  
  next.classList.remove('hide');
  if(counterImages === 0){
    prev.classList.add('hide')
  }

});



