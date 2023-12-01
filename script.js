// Tasks 2.1

const box_1 = document.querySelector('.box-1');
const btn_warning = document.querySelector('.btn-warning');

btn_warning.addEventListener('click', function (evt) {
    evt.preventDefault
    box_1.classList.toggle('popup');
});

// Task 2.2

$('.btn-success').on('click', function(){
    $('.box-2').swap('.box-3');
  });

  jQuery.fn.swap = function(b) {
    b = jQuery(b)[0];
    var a = this[0],
        a2 = a.cloneNode(true),
        b2 = b.cloneNode(true),
        stack = this;

    a.parentNode.replaceChild(b2, a);
    b.parentNode.replaceChild(a2, b);

    stack[0] = a2;
    return this.pushStack( stack );
};

// Task 2.3

$( function() {
    $( "#dialog" ).dialog();
  } );

