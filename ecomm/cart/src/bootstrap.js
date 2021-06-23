import faker from 'faker';

const mount = (el) => {
  const cartText = `<div>Tu tienes ${faker.random.number()} artículos en tu carrito</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#cart-dev');

  if (el) {
    mount(el);
  }
}

export { mount };
