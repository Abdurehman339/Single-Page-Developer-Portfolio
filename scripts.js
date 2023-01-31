var toggle_btn;
var body;
var full_body;
var dark = true;
var html;

function variables(){
    full_body = document.querySelector('.full-body');
    body = document.querySelector('body');
    if(dark==true){
        toggle_btn = document.querySelector('.no-style-list li:nth-last-child(2)');
    }
    else{
        toggle_btn = document.querySelector('.no-style-list li:last-child');
    }
}

variables();

function toggleAnimation(){
    dark = !dark;
    let clone = full_body.cloneNode(true);
        
    if(dark == true){
        body.classList.remove('light');
        body.classList.add('dark');
    }
    else{
        body.classList.remove('dark');
        body.classList.add('light');
    }
    clone.classList.add('copy');
    body.appendChild(clone);
    clone.addEventListener('animationend',() =>{
        full_body.remove();
        clone.classList.remove('copy');
        variables();
    });
}

function events(){
    toggle_btn.addEventListener('click', toggleAnimation());
}