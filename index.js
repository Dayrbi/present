const but = document.querySelector('.btn');
const div_container = document.querySelector('.div-container');
const container = document.querySelector('.second');
const mainContainer = document.querySelector('.main');
const input = document.querySelector('.form-control');
const form = document.querySelector('.needs-validation');
const link = document.querySelector('.present-link');
const throwContainer = document.querySelector('.throw');

but.addEventListener('click', handleClick);
link.addEventListener('click', handleClickLink);

function handleClick (event) {
    event.preventDefault();
    if(input.value === "1609") {
        mainContainer.classList.add('disabled');
        container.classList.remove('disabled');
        container.classList.add('active');
        link.classList.add('active');
        div_container.classList.add('active-background');
    }
    else {
        input.classList.add('is-invalid');
    }
}
function handleClickLink(event) {
    event.preventDefault();
    container.classList.remove('active');
    container.classList.add('disabled');   
    link.classList.remove('active');
    link.classList.add('disabled');
    div_container.classList.remove('active-background');
    throwContainer.classList.toggle('active');
    div_container.style = 'background-color: white;';
}