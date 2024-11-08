document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces del nav
    const enlaces = document.querySelectorAll('nav a');

    // Agregar un evento de click a cada enlace
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault(); // Evita el comportamiento por defecto del enlace (navegar)
            
            // Obtener la letra seleccionada (por ejemplo, "A", "B", etc.)
            const letraSeleccionada = this.getAttribute('href').substring(1);

            // Obtener todas las cajas
            const cajas = document.querySelectorAll('.caja');

            // Ocultar todas las cajas
            cajas.forEach(caja => {
                caja.style.display = 'none';
            });

            // Mostrar solo la caja correspondiente a la letra seleccionada
            const cajaSeleccionada = document.getElementById(letraSeleccionada);
            if (cajaSeleccionada) {
                cajaSeleccionada.style.display = 'block';
            }
        });
    });
});