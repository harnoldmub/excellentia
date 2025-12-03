// Footer Component

export function Footer() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <style>
      .footer {
        background: var(--gradient-primary);
        color: var(--color-white);
        padding: var(--space-10) 0 var(--space-6);
        margin-top: var(--space-16);
      }
      
      .footer-container {
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 var(--space-4);
      }
      
      .footer-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-8);
        margin-bottom: var(--space-8);
      }
      
      .footer-section h4 {
        color: var(--color-accent-gold);
        margin-bottom: var(--space-4);
        font-size: var(--text-lg);
      }
      
      .footer-links {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .footer-links li {
        margin-bottom: var(--space-2);
      }
      
      .footer-links a {
        color: var(--color-white);
        text-decoration: none;
        transition: color var(--transition-fast);
        cursor: pointer;
      }
      
      .footer-links a:hover {
        color: var(--color-accent-gold);
      }
      
      .footer-contact p {
        margin-bottom: var(--space-3);
        display: flex;
        align-items: center;
        gap: var(--space-2);
      }
      
      .footer-social {
        display: flex;
        gap: var(--space-3);
        margin-top: var(--space-4);
      }
      
      .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        color: var(--color-white);
        text-decoration: none;
        transition: all var(--transition-fast);
      }
      
      .social-link:hover {
        background: var(--color-accent-gold);
        color: var(--color-primary);
        transform: translateY(-3px);
      }
      
      .footer-bottom {
        padding-top: var(--space-6);
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        text-align: center;
      }
      
      .footer-bottom p {
        margin: 0;
        font-size: var(--text-sm);
        opacity: 0.8;
      }
      
      .footer-logo {
        margin-bottom: var(--space-4);
      }
      
      .footer-logo img {
        height: 60px;
        width: auto;
      }
      
      @media (max-width: 1024px) {
        .footer-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      
      @media (max-width: 768px) {
        .footer-grid {
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }
      }
    </style>
    
   
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-section">
          <div class="footer-logo">
            <img src="/logo-footer.png" alt="Excellentia-RDC" style="height: 60px; width: auto;">
          </div>
          <p>Programme National de Bourses d'Excellence - L'excellence congolaise au service du développement national.</p>
        </div>
        
        <div class="footer-section">
          <h4>Navigation</h4>
          <ul class="footer-links">
            <li><a data-link="/">Accueil</a></li>
            <li><a data-link="/programme">Programme</a></li>
            <li><a data-link="/eligibilite">Éligibilité & Processus</a></li>
            <li><a data-link="/avantages">Avantages</a></li>
            <li><a data-link="/candidater">Candidater</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Ressources</h4>
          <ul class="footer-links">
            <li><a data-link="/boursiers">Boursiers & Alumni</a></li>
            <li><a data-link="/faq">FAQ</a></li>
            <li><a data-link="/contact">Contact & Support</a></li>
            <li><a href="#" onclick="alert('Document à venir')">Télécharger le décret</a></li>
            <li><a href="#" onclick="alert('Document à venir')">Guide du candidat</a></li>
          </ul>
        </div>
        
        <div class="footer-section footer-contact">
          <h4>Contact</h4>
          <p>📧 contact@excellentia-rdc.cd</p>
          <p>📱 +243 123 456 789</p>
          <p>📍 Kinshasa, RDC</p>
          
          <div class="footer-social">
            <a href="#" class="social-link" title="Facebook">f</a>
            <a href="#" class="social-link" title="Twitter">𝕏</a>
            <a href="#" class="social-link" title="LinkedIn">in</a>
            <a href="#" class="social-link" title="Instagram">📷</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Programme Excellentia-RDC. Tous droits réservés. | Une initiative portée par le Gouvernement de la RDC</p>
      </div>
    </div>
  `;

  // Add event listeners for navigation
  setTimeout(() => {
    const links = footer.querySelectorAll('[data-link]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const path = link.getAttribute('data-link');
        window.location.hash = path;
      });
    });
  }, 0);

  return footer;
}
