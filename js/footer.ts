class MiFooter extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `<footer>
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
                        <div class="contact-item">
                            <span>📞 WhatsApp: +58 (414) 123-4567</span>
                        </div>
                        <div class="contact-item">
                            <span>✉️ Correo: consulta@teresitamujica.com</span>
                        </div>
                        <div class="contact-item">
                            <span>📍 Consulta Presencial, Online & Delivery</span>
                        </div>
                    </div>
                </div>

                <div class="footer-col">
                    <h3>Comunidad</h3>
                    <p style="margin-bottom: 15px;">Sígueme para recibir sugerencias de alimentación consciente:</p>
                    <div class="social-links">
                        <a href="https://www.instagram.com/nutriteresita?utm_source=qr&stkn=MWs5Z2owd2E5ZHVo" class="social-btn">
                            <i class="fa-brands fa-instagram">  </i>  Instagram
                        </a>
                        <a href="http://tiktok.com/@teresitamujica3" class="social-btn">
                            <i class="fa-brands fa-tiktok">  </i> TikTok
                        </a>
                        <a href="https://wa.link/mg5tw3" class="social-btn">
                            <i class="fa-brands fa-whatsapp"> </i>  WhatsApp
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </footer>`;
        }
        }

