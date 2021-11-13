const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const list = document.querySelector('#ingredients');

let fragment = new DocumentFragment();

for (const ingredient of ingredients) {
  const li = document.createElement('li');
  li.textContent = ingredient;

  fragment.append(li);
}

list.append(fragment);