/*———Search—————————————————————————————————————————————————————————————————————*/

import JSONproducts from './../json/products.json' assert {type: 'json'};

const searchButton = document.querySelector('.search-button');
const searchBlock = document.querySelector('.search-block');

const searchInput = document.querySelector('.search-block__input');

const foundGoods = document.querySelector('.search-block__found-goods');
const productsArray = JSONproducts.products;

/*——Open/close-search————————————————————————————————————————————————————————————*/

searchButton.addEventListener('click', () => searchBlock.classList.toggle('active'))

/*———product-search——————————————————————————————————————————————————————————————*/

searchInput.addEventListener('keyup', () => {

  let card = document.querySelectorAll('.search-card');
  card.forEach(e => e.remove())

  let inputValue = searchInput.value.toLowerCase();

  for(let i = 0; i < productsArray.length; i++) {

    let name = productsArray[i].name;
    let url = productsArray[i].url;
    let price = productsArray[i].price;

    if (productsArray[i].name.toLowerCase().indexOf(inputValue) > -1 && inputValue !== '' && inputValue !== ' ') {

      let newGoodsElement = `
        <a href="${url}" class="search-card">
          <div class="search-card__img">
            <p>Pic</p>
          </div>
          <div class="search-card__name">${name}</div>
          <div class="search-card__price">${price}<span> $</span></div>
        </a>
      `
      foundGoods.insertAdjacentHTML('beforeend', newGoodsElement);
    }
  }
})

/*——————————————————————————————————————————————————————————————————————————————*/