import faker from 'faker';

const cartText = `<div>Tu tienes ${faker.random.number()} artículos en tu carrito</div>`;

document.querySelector('#cart-dev').innerHTML = cartText;
