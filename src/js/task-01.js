
const numbersOfCategoriesEl = document.querySelectorAll(".item").length;
console.log(`В списке ${numbersOfCategoriesEl} категории.`);


const categoriesEl = document.querySelectorAll(".item");


categoriesEl.forEach((element) => { 

    const titleCategoriesEl = element.querySelector("h2");
    console.log(`Категория: ${titleCategoriesEl.textContent}`);
    
    const subcategoriesEl = element.querySelectorAll(".item li");
    console.log(`Количество элементов: ${subcategoriesEl.length}`);

  }) ;



