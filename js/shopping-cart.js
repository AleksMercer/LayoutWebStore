/*———Total price Calc———————————————————————————————————————————————————————————*/

const totalCount = document.querySelectorAll('.counter__price > span');
const totalPrice = document.querySelector('.total > p > span');

totalCalc = () => {

  let total = 0;

  for (let i = 0; i < totalCount.length; i++) {
    total = total + Number(totalCount[i].innerHTML);
  }

  return totalPrice.innerHTML = `${total}`;
} 

totalCalc()

/*——————————————————————————————————————————————————————————————————————————————*/



/*———Goods price and quantity calc —————————————————————————————————————————————*/

const orderListElement = document.querySelectorAll('.order-list__element');

orderListElement.forEach(counter => {

  const counterBlock = counter.children[2];
  const price = counterBlock.children[3].firstChild.innerHTML;

  counterBlock.addEventListener('click', e => {

    const input = e.currentTarget.children[1];
    const priceBlock = e.currentTarget.children[3].firstChild;

    if (e.target.matches('.minus')) {
      if (input.value == 1) return; 
      input.value--;
    }

    if (e.target.matches('.plus')) {
      if (input.value == 99) return; 
      input.value++;
    }

    priceBlock.innerHTML = `${String(input.value * price)}`;
    totalCalc();
  })
})

/*——————————————————————————————————————————————————————————————————————————————*/
