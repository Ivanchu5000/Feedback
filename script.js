const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let checkedCheckboxes = [];
const formulario = document.getElementById('formulario');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const btn = document.getElementById('btnSubmit');
        if(checkedCheckboxes.length < 4){
            btn.style.backgroundColor = '#d3d3d3';
            btn.disabled = true;
        }
        if(checkedCheckboxes.length === 4){
            btn.style.backgroundColor = '#1aacbc';
            btn.disabled = false;
        }
        if(checkedCheckboxes.length > 4){
            checkbox.checked = false;
        }
    });
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    const opcionesCheckHTML = document.querySelectorAll('input[name="opcion"]:checked');
    const seleccionadas = [];

    for (const op of opcionesCheckHTML) {
        seleccionadas.push(op.value);
    }
    
    window.location.href = 'imagenes.html';
});