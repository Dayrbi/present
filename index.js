const but = document.querySelector('.btn');
const div_container = document.querySelector('.div-container');
const container = document.querySelector('.second');
const mainContainer = document.querySelector('.main');
const input = document.querySelector('.form-control');
const form = document.querySelector('.needs-validation');

but.addEventListener('click', handleClick);

function handleClick (event) {
    event.preventDefault();
    if(input.value === "080924") {
        mainContainer.classList.add('disabled');
        container.classList.remove('disabled');
        container.classList.add('active');
        div_container.classList.add('active-background');
    }
    else {
        form.classList.add('was-validated');
    }
}