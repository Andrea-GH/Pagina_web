document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.registro-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que se envíe el formulario

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!nombre || !email || !password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Aquí puedes hacer validaciones adicionales o enviar los datos al servidor
    alert('Registro exitoso (simulado)');
  });
});
