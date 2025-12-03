// Boursiers Page

import { mockScholars, mockDestinations } from '../utils/mockData.js';

export function BoursiersPage() {
    const page = document.createElement('div');
    page.className = 'boursiers-page';

    page.innerHTML = `
    <style>
      .scholars-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-6);
        margin-top: var(--space-8);
      }
      
      .scholar-card {
        background: var(--color-white);
        border-radius: var(--radius-xl);
        overflow: hidden;
        box-shadow: var(--shadow-md);
        transition: all var(--transition-base);
      }
      
      .scholar-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-xl);
      }
      
      .scholar-photo {
        width: 100%;
        height: 200px;
        background: var(--gradient-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-white);
        font-size: var(--text-5xl);
        font-weight: 700;
      }
      
      .scholar-info {
        padding: var(--space-4);
      }
      
      .scholar-name {
        font-weight: 700;
        color: var(--color-primary);
        margin-bottom: var(--space-2);
      }
      
      .scholar-field {
        font-size: var(--text-sm);
        color: #6B7280;
        margin-bottom: var(--space-1);
      }
      
      .scholar-country {
        font-size: var(--text-sm);
        color: var(--color-accent-cyan);
        font-weight: 600;
      }
      
      .map-section {
        background: #F9FAFB;
        padding: var(--space-10);
        border-radius: var(--radius-xl);
        margin-top: var(--space-10);
      }
      
      .destinations-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-4);
        margin-top: var(--space-6);
      }
      
      .destination-card {
        background: var(--color-white);
        padding: var(--space-4);
        border-radius: var(--radius-lg);
        text-align: center;
        box-shadow: var(--shadow-sm);
      }
      
      .destination-flag {
        font-size: var(--text-3xl);
        margin-bottom: var(--space-2);
      }
      
      .destination-count {
        font-size: var(--text-2xl);
        font-weight: 700;
        color: var(--color-accent-gold);
        margin-bottom: var(--space-1);
      }
      
      .destination-name {
        font-size: var(--text-sm);
        color: var(--color-primary);
        font-weight: 600;
      }
      
      .alumni-section {
        background: var(--gradient-primary);
        color: var(--color-white);
        padding: var(--space-10);
        border-radius: var(--radius-xl);
        margin-top: var(--space-10);
        text-align: center;
      }
      
      .alumni-section h3 {
        color: var(--color-accent-gold);
        margin-bottom: var(--space-4);
      }
      
      @media (max-width: 1024px) {
        .scholars-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        
        .destinations-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      
      @media (max-width: 768px) {
        .scholars-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        
        .destinations-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    </style>
    
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>Boursiers & Alumni</h1>
        <p>Découvrez les talents soutenus par Excellentia-RDC</p>
      </div>
    </section>
    
    <!-- Scholars Gallery -->
    <section class="section">
      <div class="container">
        <h2 class="text-center">Nos Boursiers</h2>
        <div class="scholars-grid" id="scholarsGrid"></div>
      </div>
    </section>
    
    <!-- Destinations Map -->
    <section class="section">
      <div class="container">
        <div class="map-section">
          <h3 class="text-center" style="color: var(--color-primary);">Destinations d'études</h3>
          <p class="text-center" style="margin-bottom: var(--space-6);">
            Nos boursiers étudient dans les meilleures universités du monde
          </p>
          
          <div class="destinations-grid" id="destinationsGrid"></div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Video Section -->
    <section class="section" style="background: #F9FAFB;">
      <div class="container">
        <h2 class="text-center">Témoignages vidéo</h2>
        <p class="text-center" style="margin-bottom: var(--space-8);">
          Écoutez les histoires inspirantes de nos boursiers
        </p>
        
        <div style="max-width: 800px; margin: 0 auto;">
          <div class="alert alert-info">
            <h4 style="margin-bottom: var(--space-3);">🎥 Vidéos à venir</h4>
            <p style="margin: 0;">Les témoignages vidéo de nos boursiers seront bientôt disponibles. Revenez prochainement pour découvrir leurs parcours inspirants.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Alumni Network -->
    <section class="section">
      <div class="container">
        <div class="alumni-section">
          <h3>Réseau Alumni Excellentia</h3>
          <p style="font-size: var(--text-lg); margin-bottom: var(--space-6);">
            Un réseau en construction pour connecter tous les boursiers et créer une communauté d'excellence
          </p>
          
          <div style="background: rgba(255, 255, 255, 0.1); padding: var(--space-6); border-radius: var(--radius-lg); backdrop-filter: blur(10px);">
            <h4 style="color: var(--color-accent-gold); margin-bottom: var(--space-4);">Bientôt disponible</h4>
            <p>Le réseau Alumni Excellentia permettra à tous les anciens boursiers de :</p>
            <ul style="text-align: left; max-width: 600px; margin: var(--space-4) auto 0;">
              <li>Rester connectés entre eux</li>
              <li>Partager leurs expériences et opportunités</li>
              <li>Mentorer les nouveaux boursiers</li>
              <li>Contribuer au développement de la RDC</li>
              <li>Participer à des événements exclusifs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;

    // Populate scholars grid
    setTimeout(() => {
        const scholarsGrid = page.querySelector('#scholarsGrid');
        if (scholarsGrid) {
            scholarsGrid.innerHTML = mockScholars.map(scholar => `
        <div class="scholar-card">
          <div class="scholar-photo">${scholar.nom.charAt(0)}</div>
          <div class="scholar-info">
            <div class="scholar-name">${scholar.nom}</div>
            <div class="scholar-field">${scholar.filiere}</div>
            <div class="scholar-country">📍 ${scholar.pays}</div>
          </div>
        </div>
      `).join('');
        }

        // Populate destinations
        const destinationsGrid = page.querySelector('#destinationsGrid');
        if (destinationsGrid) {
            const flags = {
                'France': '🇫🇷',
                'Canada': '🇨🇦',
                'Belgique': '🇧🇪',
                'RDC': '🇨🇩',
                'Suisse': '🇨🇭',
                'Sénégal': '🇸🇳',
                'Maroc': '🇲🇦',
                'Afrique du Sud': '🇿🇦'
            };

            destinationsGrid.innerHTML = mockDestinations.map(dest => `
        <div class="destination-card">
          <div class="destination-flag">${flags[dest.pays] || '🌍'}</div>
          <div class="destination-count">${dest.count}</div>
          <div class="destination-name">${dest.pays}</div>
        </div>
      `).join('');
        }
    }, 0);

    return page;
}
