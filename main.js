document.addEventListener('DOMContentLoaded', function () {
    const tecla = document.querySelectorAll('#tecla');
    const input = document.querySelector('#display');

    tecla.forEach(tecla=> {
        tecla.addEventListener('click', function () {
            const valorTecla = this.textContent;
            input.textContent += valorTecla;
        });
    });
});