//Haz tú validación en javascript acá
 const inputs = document.querySelectorAll("input, textarea");

inputs.forEach( input => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
    }
    
    if (input.validity.valid){        
        input.classList.remove('formcontato__input--invalid');
        input.parentElement.querySelector('.formcontato__messaje--error').innerHTML = "";
    } else {
        input.classList.add('formcontato__input--invalid');
        input.parentElement.querySelector('.formcontato__messaje--error').innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }    
}