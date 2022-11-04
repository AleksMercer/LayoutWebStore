//——Catalog—————————————————————————————————————————————————————————————————————

const openCloseBtn = document.querySelectorAll('.open-close-btn');

openCloseBtn.forEach(openClose => {

   openClose.addEventListener('click', e => {

    let arrowUp = e.currentTarget.children[0];
    let arrowDown = e.currentTarget.children[1];
    let catalogList = e.currentTarget.nextElementSibling;

    if (arrowUp.hidden == true) {
      arrowUp.hidden = false;
      arrowDown.hidden = true;
      catalogList.hidden = false;
    } else if (arrowUp.hidden == false) {
      arrowUp.hidden = true;
      arrowDown.hidden = false;
      catalogList.hidden = true;
    }
  })
})

//——————————————————————————————————————————————————————————————————————————————

//———Search—————————————————————————————————————————————————————————————————————

const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', () => {
  document.getElementById('search-input').classList.toggle('active');
})

//——————————————————————————————————————————————————————————————————————————————

//———Header-menu————————————————————————————————————————————————————————————————



//——————————————————————————————————————————————————————————————————————————————

//———Promotion-gallery——————————————————————————————————————————————————————————



//——————————————————————————————————————————————————————————————————————————————

