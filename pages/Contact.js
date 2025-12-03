// Contact Page

export function ContactPage() {
    const page = document.createElement('div');
    page.className = 'contact-page';

    page.innerHTML = `
    <style>
      .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-8);
        margin-top: var(--space-8);
      }
      
      .contact-form-section {
        background: var(--color-white);
        padding: var(--space-8);
        border-radius: var(--radius-xl);
        box-shadow: var(--shadow-lg);
      }
      
      .contact-info-section {
        display: flex;
        flex-direction: column;
        gap: var(--space-6);
      }
      
      .contact-card {
        background: var(--color-white);
        padding: var(--space-6);
        border-radius: var(--radius-xl);
        box-shadow: var(--shadow-md);
        display: flex;
        align-items: flex-start;
        gap: var(--space-4);
      }
      
      .contact-icon {
        width: 60px;
        height: 60px;
        background: var(--gradient-gold);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--text-2xl);
        flex-shrink: 0;
      }
      
      .contact-card h4 {
        margin-bottom: var(--space-2);
        color: var(--color-primary);
      }
      
      .contact-card p {
        margin: 0;
        color: #6B7280;
      }
      
      .contact-card a {
        color: var(--color-accent-cyan);
        font-weight: 600;
      }
      
      .social-links {
        display: flex;
        gap: var(--space-3);
        margin-top: var(--space-4);
      }
      
      .social-link {
        width: 50px;
        height: 50px;
        background: var(--color-primary);
        color: var(--color-white);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        font-size: var(--text-xl);
        transition: all var(--transition-fast);
      }
      
      .social-link:hover {
        background: var(--color-accent-gold);
        color: var(--color-primary);
        transform: translateY(-3px);
      }
      
      .map-container {
        background: #F9FAFB;
        border-radius: var(--radius-xl);
        padding: var(--space-8);
        margin-top: var(--space-8);
        text-align: center;
      }
      
      .map-placeholder {
        background: var(--color-white);
        border-radius: var(--radius-lg);
        padding: var(--space-10);
        border: 2px dashed #E5E7EB;
      }
      
      @media (max-width: 768px) {
        .contact-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>
    
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>Contact & Support</h1>
        <p>Nous sommes là pour répondre à toutes vos questions</p>
      </div>
    </section>
    
    <!-- Contact Section -->
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-section">
            <h3 style="margin-bottom: var(--space-6);">Envoyez-nous un message</h3>
            
            <form id="contactForm">
              <div class="form-group">
                <label class="form-label">Nom complet</label>
                <input type="text" class="form-input" id="name" required>
              </div>
              
              <div class="form-group">
                <label class="form-label">Email</label>
                <input type="email" class="form-input" id="email" required>
              </div>
              
              <div class="form-group">
                <label class="form-label">Sujet</label>
                <select class="form-select" id="subject" required>
                  <option value="">Sélectionner...</option>
                  <option value="eligibilite">Question sur l'éligibilité</option>
                  <option value="candidature">Aide avec ma candidature</option>
                  <option value="concours">Information sur le concours</option>
                  <option value="bourse">Question sur la bourse</option>
                  <option value="technique">Problème technique</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              
              <div class="form-group">
                <label class="form-label">Message</label>
                <textarea class="form-textarea" id="message" rows="6" required></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                Envoyer le message
              </button>
            </form>
            
            <div id="formResult" style="margin-top: var(--space-4); display: none;"></div>
          </div>
          
          <!-- Contact Info -->
          <div class="contact-info-section">
            <div class="contact-card">
              <div class="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>Pour toute question générale</p>
                <a href="mailto:contact@excellentia-rdc.cd">contact@excellentia-rdc.cd</a>
              </div>
            </div>
            
            <div class="contact-card">
              <div class="contact-icon">📱</div>
              <div>
                <h4>Téléphone / WhatsApp</h4>
                <p>Assistance téléphonique</p>
                <a href="tel:+243123456789">+243 123 456 789</a>
              </div>
            </div>
            
            <div class="contact-card">
              <div class="contact-icon">📍</div>
              <div>
                <h4>Adresse</h4>
                <p>Bureau du Programme Excellentia-RDC<br>
                Kinshasa, République Démocratique du Congo</p>
              </div>
            </div>
            
            <div class="contact-card">
              <div class="contact-icon">🕐</div>
              <div>
                <h4>Horaires</h4>
                <p>Lundi - Vendredi: 8h00 - 17h00<br>
                Samedi: 9h00 - 13h00<br>
                Dimanche: Fermé</p>
              </div>
            </div>
            
            <!-- Social Media -->
            <div class="contact-card">
              <div class="contact-icon">🌐</div>
              <div style="flex: 1;">
                <h4>Réseaux sociaux</h4>
                <p style="margin-bottom: var(--space-3);">Suivez-nous pour les dernières actualités</p>
                <div class="social-links">
                  <a href="#" class="social-link" title="Facebook">f</a>
                  <a href="#" class="social-link" title="Twitter">𝕏</a>
                  <a href="#" class="social-link" title="LinkedIn">in</a>
                  <a href="#" class="social-link" title="Instagram">📷</a>
                  <a href="#" class="social-link" title="YouTube">▶</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Map -->
        <div class="map-container">
          <h3 style="margin-bottom: var(--space-6); color: var(--color-primary);">Notre localisation</h3>
          <div class="map-placeholder">
            <p style="font-size: var(--text-lg); color: #6B7280;">
              🗺️ Carte interactive à venir<br>
              <span style="font-size: var(--text-sm);">La carte Google Maps sera intégrée ici</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  `;

    // Add form handler
    setTimeout(() => {
        const form = page.querySelector('#contactForm');
        const result = page.querySelector('#formResult');

        if (form && result) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                // Simulate form submission
                result.style.display = 'block';
                result.innerHTML = `
          <div class="alert alert-success">
            <h4 style="margin-bottom: var(--space-2);">✅ Message envoyé avec succès !</h4>
            <p style="margin: 0;">Nous avons bien reçu votre message. Notre équipe vous répondra dans les plus brefs délais.</p>
          </div>
        `;

                // Reset form
                form.reset();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    result.style.display = 'none';
                }, 5000);
            });
        }
    }, 0);

    return page;
}
