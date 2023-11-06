document.getElementById('tipoSeguro').addEventListener('change', function() {
    const selectedValue = this.value;
   const displayValue = document.getElementById('valorSeguro');

    if (selectedValue === '500') {
        displayValue.textContent = 'Valor: $500';
    } else if (selectedValue === '1000') {
        displayValue.textContent = 'Valor: $1000';
    } else if (selectedValue === '1500') {
        displayValue.textContent = 'Valor: $1500';
    } else {
        displayValue.textContent = 'Seleccione un tipo de seguro válido';
    }
});