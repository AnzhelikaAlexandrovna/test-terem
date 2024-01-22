const title = document.querySelector('.title');
const btn_warning = document.querySelector('.btn-warning');
 
const btn_success = document.querySelector('.btn-success');

const btn_outline_dark = document.querySelector('.btn-outline-dark');
const modal = document.querySelector('.modal');

// Tasks 2.1

btn_warning.addEventListener('click', function () {
    title.classList.toggle('popup');
});

// Task 2.3

btn_outline_dark.addEventListener('click', function() {
    modal.classList.add('popup');
})

// Task 2.2

// btn_success.addEventListener('click', function() {
//     const box_1 = document.querySelector('.box-1');
//     const box_2 = document.querySelector('.box-2');

//     const temp_1 = box_1.outerHTML;
//     box_1.outerHTML = box_2.outerHTML;
//     box_2.outerHTML = temp_1;

// });

