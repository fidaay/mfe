import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
  // ReactDOM.render(<App />, el);
};

// Context/Situation #1
// Estamos trabajando este archivo en desarrollo o aislamiento
// We are using our local index.html
// Which definetly has an element with an id of 'dev-products'
// Queremos renderizar inmediatamente este elemento en la app
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  // Asumiendo que nuestro contenedor no tiene un elemento con el id 'dev-products'
  if (el) {
    // Probablemente estemos corriendo el codigo en aislamiento
    mount(el);
  }
}

// Contexto/Situacion #2
// Queremos hacer funcionar este archivo en produccion o desarrollo en la aplicacion 'Container'
// No hay garantia de que ese elemento div con el id 'dev-products' exista.
// No queremos tratar de renderizar inmediatamente la app
export { mount };
