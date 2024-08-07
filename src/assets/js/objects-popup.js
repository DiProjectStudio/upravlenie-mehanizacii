document.addEventListener('DOMContentLoaded', () => {
    getInfoFromObject();
})

function getInfoFromObject() {
    const buttonElements = document.querySelectorAll('.js-dynamic-info');
    const hiddenInput = document.querySelector('.hidden-input');

    buttonElements.forEach(buttonElement => {
        buttonElement.addEventListener('click', (e) => {
            hiddenInput.value = buttonElement.getAttribute('data-info');
        })
    });
}





