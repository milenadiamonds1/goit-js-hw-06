


const categoryItem = document.querySelectorAll('.item');
console.log('Number of categories:', categoryItem.length);
const ulList = document.querySelectorAll('ul');

categoryItem.forEach(function(categories){
    console.log('Category:', categories.firstElementChild.textContent);
    console.log('Elemenets:', categories.lastElementChild.children.length)
})

