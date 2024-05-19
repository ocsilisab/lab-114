const calculatePriceButton = document.getElementsByClassName('btn-success');
let priceProduct = null;
let index = 3;
let inputs = 0;

calculatePriceButton[0].addEventListener('click', updatePriceByProduct);
calculatePriceButton[0].addEventListener('click', getTotalPrice);

const buttonDelete = document.getElementsByClassName('btn-delete');
const container = document.getElementById('container');

for (let i = 0; i < buttonDelete.length; i++) {
  buttonDelete[i].addEventListener('click', deleteItem);
}

const divCreate = document.createElement('div');
divCreate.setAttribute('class', 'create');

const labelCreateThing = document.createElement('label');
labelCreateThing.setAttribute('class', 'create');
labelCreateThing.innerText = "Product Name";
const inputCreateThing = document.createElement('input');

const labelCreatePrice = document.createElement('label');
labelCreatePrice.setAttribute('class', 'create');
labelCreatePrice.innerText = "Price";
const inputCreatePrice = document.createElement('input');

const create = document.createElement('button');
create.setAttribute('id', 'create');
create.setAttribute('class', 'create');
create.innerText = 'Create';
create.addEventListener('click', createNewItem);

divCreate.appendChild(labelCreateThing);
divCreate.appendChild(inputCreateThing);
divCreate.appendChild(labelCreatePrice);
divCreate.appendChild(inputCreatePrice);
divCreate.appendChild(create);
container.appendChild(divCreate);

const buttonCreate = document.getElementById('create');
buttonCreate.addEventListener('click', createNewItem);

function deleteItem(e) {
  container.removeChild(e.currentTarget.parentNode.parentNode);
}

function updatePriceByProduct() {
  let aux = 0;
  for (let i = 1; i < document.getElementsByTagName('span').length; i += 5) {
    priceProduct = document.getElementsByTagName('span')[i].innerText;
    priceProduct *= document.getElementsByClassName('numberOfUnitis2')[aux].value;
    let price = document.getElementsByTagName('span')[index];
    price.innerText = priceProduct + '€';
    index += 5;
    inputs++;
    aux++;
  }
  index = 3;
  inputs = 0;
}

function getTotalPrice() {
  const pricesTotal = document.getElementsByTagName('span');
  const total = document.getElementById('total');
  inputs = 0;
  for (let i = 3; i < pricesTotal.length; i += 5) {
    inputs += parseInt(pricesTotal[i].innerText.slice(0, -1));
  }
  total.innerText = inputs;
}

function createNewItemRow(itemName, itemUnitPrice) {
  const newLine = document.createElement('div');

  newLine.innerHTML = `
    <span>${itemName}</span> 
    <span>${itemUnitPrice}</span>
    <span>
      <label>QTY</label> 
      <input class="numberOfUnitis2" type="number"> 
    </span>
    <span>0€</span> 
    <span>
      <button class="btn-delete">Delete</button>
    </span>
  `;

  const lastChild = document.getElementById('create');
  container.insertBefore(newLine, lastChild.parentNode);

  const newButton = document.getElementsByClassName('btn-delete');
  for (let i = newButton.length - 1; i === newButton.length - 1; i++) {
    newButton[i].addEventListener('click', deleteItem);
  }
}

function createNewItem() {
  const name = inputCreateThing.value;
  const price = inputCreatePrice.value;
  createNewItemRow(name, price);
}

console.log(calculatePriceButton);
console.log(buttonDelete);
console.log(container);
console.log(divCreate);
console.log(labelCreateThing);
console.log(inputCreateThing);
console.log(labelCreatePrice);
console.log(inputCreatePrice);
console.log(create);
console.log(buttonCreate);
console.log(getPriceByProduct);
console.log(updatePriceByProduct);
console.log(getTotalPrice);
console.log(createNewItemRow);
console.log(createNewItem);

