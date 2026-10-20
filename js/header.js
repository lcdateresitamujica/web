class MiHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
          <div class="container nav-container">
          <img src="images/logocolorteresita.png" alt="Teresita Mujica Logo" class="header-logo">
              <a href="index.html" class="logo">
                  <span class="logo-title">Teresita Mujica</span>
                  <span class="logo-subtitle">Nutricionista & Dietista</span>
              </a>
              <button class="menu-toggle" id="menu-toggle" aria-label="Abrir Menú">&#9776;</button>
              <nav>
                  <ul class="nav-menu" id="nav-menu">
                      <li><a href="index.html">Inicio</a></li>
                      <li><a href="sobre-mi.html">Sobre mí</a></li>
                      <li><a href="consultaonline.html">Consulta Online</a></li>
                      <li><a href="recetas.html">Recetas</a></li>
                      <li><a href="pedidos.html">Pedidos</a></li>
                      <li><a href="testobesidad.html">Test Obesidad</a></li>
                      <li><a href="preguntas.html">Preguntas Frecuentes</a></li>
                  </ul>
              </nav>
          </div>
      </header>
    `;

    // Buscar elementos dentro del propio componente
    const menuToggle = this.querySelector('#menu-toggle');
    const navMenu = this.querySelector('#nav-menu');

    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }
  }
}

customElements.define('mi-header', MiHeader);