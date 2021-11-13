const liItemAll = document.querySelectorAll('li.item');

console.log(`В списке ${liItemAll.length} категории.`);

for (const liItem of liItemAll) {
    const h2 = liItem.querySelector('h2');
    const name = h2.textContent;

    const ul = liItem.querySelector('ul');
    const count = ul.children.length;

    console.log(`Категория: ${name}`);
    console.log(`Количество элементов: ${count}`);
}