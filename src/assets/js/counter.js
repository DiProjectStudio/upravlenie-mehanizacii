function counterActions() {
    const checkboxesWithCount = document.querySelectorAll('.form-checkbox.with-count .count input');
    checkboxesWithCount.forEach(checkbox => {
        let stringValue = checkbox.value;
        let value = parseInt(stringValue);
        checkbox.previousElementSibling.addEventListener('click', (e) => {
            if (value > 0) {
                value -= 1;
                checkbox.value = value;
            }
        })

        checkbox.nextElementSibling.addEventListener('click', (e) => {
            value += 1;
            checkbox.value = value;
        })
    })
}

document.addEventListener('DOMContentLoaded', function () {
    counterActions();
})