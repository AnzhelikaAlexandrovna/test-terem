const box_1 = document.querySelector('.box-1');
const btn_warning = document.querySelector('.btn-warning');
 
const btn_success = document.querySelector('.btn-success');

const btn_outline_dark = document.querySelector('.btn-outline-dark');
const modal = document.querySelector('.modal');

// Tasks 2.1

btn_warning.addEventListener('click', function () {
    box_1.classList.toggle('popup');
});

// Task 2.3

btn_outline_dark.addEventListener('click', function() {
    modal.style['display'] = 'none';
})

// Task 2.2

btn_success.addEventListener('click', function() {
    const box_2 = document.querySelector('.box-2');
    const box_3 = document.querySelector('.box-3');

    const temp_2 = box_2.outerHTML;
    box_2.outerHTML = box_3.outerHTML;
    box_3.outerHTML = temp_2;

});

