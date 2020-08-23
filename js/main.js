var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close =document.querySelector('#close');

button.addEventListener('click', function(){
    modal.classList.add('modal-active');
});

close.addEventListener('click', function(){
    modal.classList.remove('modal-active');
});
