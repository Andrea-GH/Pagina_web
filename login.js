document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.login-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que se envíe el formulario por defecto

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Aquí puedes agregar la lógica para enviar los datos al servidor o validar
    alert('Inicio de sesión exitoso (simulado)');
  });
});
