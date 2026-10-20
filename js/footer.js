class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            mi-footer footer {
                background-color: #2E4A1E;
                color: #ecf0f1;
                padding: 50px 0 30px 0;
                font-family: 'Plus Jakarta Sans', sans-serif;
            }

            mi-footer .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
                box-sizing: border-box;
            }

            /* Disposición en escritorio (3 columnas) */
            mi-footer .footer-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 40px;
                align-items: start;
            }

            mi-footer .footer-col {
                display: flex;
                flex-direction: column;
            }

            mi-footer .logo-title {
                font-size: 1.5rem;
                font-weight: 700;
                color: #ffffff;
                margin-bottom: 4px;
            }

            mi-footer .logo-subtitle {
                font-size: 0.9rem;
                color: #4CAF50;
                font-weight: 600;
                margin-bottom: 12px;
            }

            mi-footer h3 {
                font-size: 1.15rem;
                color: #ffffff;
                margin-top: 0;
                margin-bottom: 18px;
                position: relative;
            }

            mi-footer p {
                color: #bdc3c7;
                font-size: 0.95rem;
                line-height: 1.6;
                margin: 0;
            }

            /* Información de contacto */
            mi-footer .contact-info {
                display: flex;
                flex-direction: column;
                gap: 12px;
            }

            mi-footer .contact-item {
                display: flex;
                align-items: center;
                gap: 10px;
                color: #bdc3c7;
                font-size: 0.95rem;
                word-break: break-word;
            }

            /* Botones de redes sociales */
            mi-footer .social-links {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            mi-footer .social-btn {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                background-color: rgba(255, 255, 255, 0.08);
                color: #ffffff;
                padding: 10px 16px;
                border-radius: 8px;
                text-decoration: none;
                font-size: 0.9rem;
                font-weight: 500;
                transition: all 0.3s ease;
                width: fit-content;
            }

            mi-footer .social-btn:hover {
                background-color: #4CAF50;
                color: #ffffff;
                transform: translateX(5px);
            }

            /* ADAPTACIÓN RESPONSIVE (Tablets) */
            @media (max-width: 900px) {
                mi-footer .footer-grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 30px;
                }
            }

            /* ADAPTACIÓN RESPONSIVE (Teléfonos móviles) */
            @media (max-width: 600px) {
                mi-footer footer {
                    padding: 35px 0 25px 0;
                }

                mi-footer .footer-grid {
                    grid-template-columns: 1fr; /* Una sola columna en móvil */
                    gap: 35px;
                    text-align: center;
                }

                mi-footer .footer-col {
                    align-items: center;
                }

                mi-footer .contact-item {
                    justify-content: center;
                }

                mi-footer .social-links {
                    width: 100%;
                    align-items: center;
                }

                mi-footer .social-btn {
                    width: 100%;
                    max-width: 280px;
                    justify-content: center;
                }

                mi-footer .social-btn:hover {
                    transform: translateY(-2px); /* Cambio sutil en móvil */
                }
            }
        </style>

        <footer>
            <div class="container">
                <div class="footer-grid">
                    
                    <div class="footer-col">
                        <div class="logo-title">Teresita Mujica</div>
                        <div class="logo-subtitle">Nutrición & Productos Saludables</div>
                        <p>Asesoría nutricional especializada y selección de alimentos naturales enfocados en prevenir patologías y potenciar la vitalidad.</p>
                    </div>

                    <div class="footer-col">
                        <h3>Contacto directo</h3>
                        <div class="contact-info">
                            <div class="contact-item">
                                <span>📞 WhatsApp: +58 0424 614-0443</span>
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
                            <a href="https://www.instagram.com/nutriteresita?utm_source=qr&stkn=MWs5Z2owd2E5ZHVo" target="_blank" rel="noopener" class="social-btn">
                                <i class="fa-brands fa-instagram"></i> Instagram
                            </a>
                            <a href="http://tiktok.com/@teresitamujica3" target="_blank" rel="noopener" class="social-btn">
                                <i class="fa-brands fa-tiktok"></i> TikTok
                            </a>
                            <a href="https://wa.link/mg5tw3" target="_blank" rel="noopener" class="social-btn">
                                <i class="fa-brands fa-whatsapp"></i> WhatsApp
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>`;
    }
}

customElements.define('mi-footer', MiFooter);