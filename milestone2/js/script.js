const imagesArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg']
const slider = document.querySelector('.items-wrapper');
let imagesTag = '';

//aggiungo le immagini dinamicamente
for(let i = 0; i<imagesArray.length; i++){
  imagesTag += `<img class="item" src="img/${imagesArray[i]}" alt="${imagesArray[i]}">`
}

slider.innerHTML = imagesTag;
console.log(imagesTag);

// aggiungo classe active perchè di default sono display-none
const items = document.getElementsByClassName('item')
items[0].classList.add('active')