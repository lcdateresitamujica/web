class MiHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="container nav-container">
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

        // Lógica del menú móvil
        const menuToggle = this.querySelector('#menu-toggle');
        const navMenu = this.querySelector('#nav-menu');
        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
        }

        // Marcar automáticamente la página activa
        const links = this.querySelectorAll('.nav-menu a');
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }
}

class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-col">
                        <div class="logo-title">Teresita Mujica</div>
                        <div class="logo-subtitle" style="margin-bottom: 12px;">Nutrición & Productos Saludables</div>
                        <p>Asesoría nutricional especializada y selección de alimentos naturales enfocados en prevenir patologías y potenciar la vitalidad.</p>
                    </div>

                    <div class="footer-col">
                        <h3>Contacto directo</h3>
                        <div class="contact-info">
                            <div class="contact-item"><span>📞 WhatsApp: +58 (414) 123-4567</span></div>
                            <div class="contact-item"><span>✉️ Correo: consulta@teresitamujica.com</span></div>
                            <div class="contact-item"><span>📍 Consulta Presencial, Online & Delivery</span></div>
                        </div>
                    </div>

                    <div class="footer-col">
                        <h3>Comunidad</h3>
                        <p style="margin-bottom: 15px;">Sígueme para recibir sugerencias de alimentación consciente:</p>
                        <div class="social-links">
                            <a href="#" class="social-btn"><i class="fa-brands fa-instagram"></i> Instagram</a>
                            <a href="#" class="social-btn"><i class="fa-brands fa-facebook-f"></i> Facebook</a>
                            <a href="#" class="social-btn"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('mi-header', MiHeader);
customElements.define('mi-footer', MiFooter);