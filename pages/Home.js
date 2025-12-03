// Home Page

import { mockStatistics, mockTestimonials } from '../utils/mockData.js';

export function HomePage() {
    const page = document.createElement('div');
    page.className = 'home-page';

    page.innerHTML = `
    <style>
      /* Hero Section */
      .hero {
        position: relative;
        min-height: 600px;
        display: flex;
        align-items: center;
        background: var(--gradient-hero);
        overflow: hidden;
      }
      
      .hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%23003A70" width="1200" height="600"/><path fill="%23FCD116" opacity="0.1" d="M0 300 Q300 200 600 300 T1200 300 V600 H0 Z"/></svg>');
        background-size: cover;
        background-position: center;
        opacity: 0.3;
      }
      
      .hero-container {
        position: relative;
        z-index: 1;
        color: var(--color-white);
        text-align: center;
        padding: var(--space-12) var(--space-4);
      }
      
      .hero h1 {
        color: var(--color-white);
        font-size: var(--text-6xl);
        margin-bottom: var(--space-4);
        animation: fadeIn 0.8s ease-out;
      }
      
      .hero-subtitle {
        font-size: var(--text-2xl);
        color: var(--color-accent-gold);
        margin-bottom: var(--space-8);
        font-weight: 600;
        animation: fadeIn 1s ease-out 0.2s backwards;
      }
      
      .hero-cta {
        display: flex;
        gap: var(--space-4);
        justify-content: center;
        flex-wrap: wrap;
        animation: fadeIn 1.2s ease-out 0.4s backwards;
      }
      
      /* Why Excellentia Section */
      .why-section {
        padding: var(--space-12) 0;
        background: var(--color-white);
      }
      
      .why-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-6);
        margin-top: var(--space-8);
      }
      
      .why-card {
        text-align: center;
        padding: var(--space-8);
        background: linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%);
        border-radius: var(--radius-xl);
        border: 2px solid transparent;
        transition: all var(--transition-base);
      }
      
      .why-card:hover {
        border-color: var(--color-accent-gold);
        transform: translateY(-8px);
        box-shadow: var(--shadow-xl);
      }
      
      .why-icon {
        width: 80px;
        height: 80px;
        margin: 0 auto var(--space-4);
        background: var(--gradient-gold);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--text-4xl);
      }
      
      .why-card h3 {
        color: var(--color-primary);
        margin-bottom: var(--space-3);
      }
      
      /* Stats Section */
      .stats-section {
        padding: var(--space-12) 0;
        background: var(--gradient-primary);
        color: var(--color-white);
      }
      
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-6);
        margin-top: var(--space-8);
      }
      
      .stat-card {
        text-align: center;
        padding: var(--space-6);
      }
      
      .stat-number {
        font-size: var(--text-5xl);
        font-weight: 800;
        color: var(--color-accent-gold);
        margin-bottom: var(--space-2);
        font-family: var(--font-heading);
      }
      
      .stat-label {
        font-size: var(--text-base);
        opacity: 0.9;
      }
      
      /* Process Section */
      .process-section {
        padding: var(--space-12) 0;
        background: #F9FAFB;
      }
      
      .process-timeline {
        margin-top: var(--space-10);
        display: flex;
        justify-content: space-between;
        position: relative;
        padding: var(--space-8) 0;
      }
      
      .process-timeline::before {
        content: '';
        position: absolute;
        top: 50px;
        left: 10%;
        right: 10%;
        height: 3px;
        background: var(--gradient-gold);
        z-index: 0;
      }
      
      .process-step {
        flex: 1;
        text-align: center;
        position: relative;
        z-index: 1;
      }
      
      .process-number {
        width: 100px;
        height: 100px;
        margin: 0 auto var(--space-4);
        background: var(--color-white);
        border: 4px solid var(--color-accent-gold);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--text-3xl);
        font-weight: 800;
        color: var(--color-primary);
        box-shadow: var(--shadow-lg);
      }
      
      .process-step h4 {
        color: var(--color-primary);
        margin-bottom: var(--space-2);
      }
      
      /* Testimonials Section */
      .testimonials-section {
        padding: var(--space-12) 0;
        background: var(--color-white);
      }
      
      .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-6);
        margin-top: var(--space-8);
      }
      
      .testimonial-card {
        background: var(--color-white);
        border-radius: var(--radius-xl);
        padding: var(--space-6);
        box-shadow: var(--shadow-lg);
        transition: all var(--transition-base);
      }
      
      .testimonial-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-2xl);
      }
      
      .testimonial-header {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        margin-bottom: var(--space-4);
      }
      
      .testimonial-photo {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: var(--gradient-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-white);
        font-size: var(--text-2xl);
        font-weight: 700;
      }
      
      .testimonial-info h4 {
        margin: 0 0 var(--space-1);
        font-size: var(--text-lg);
      }
      
      .testimonial-info p {
        margin: 0;
        font-size: var(--text-sm);
        color: #6B7280;
      }
      
      .testimonial-quote {
        font-style: italic;
        color: var(--color-dark);
        line-height: 1.6;
        position: relative;
        padding-left: var(--space-4);
        border-left: 3px solid var(--color-accent-gold);
      }
      
      /* Final CTA Section */
      .final-cta {
        padding: var(--space-12) 0;
        background: var(--gradient-primary);
        color: var(--color-white);
        text-align: center;
      }
      
      .final-cta h2 {
        color: var(--color-white);
        margin-bottom: var(--space-6);
      }
      
      .final-cta-buttons {
        display: flex;
        gap: var(--space-4);
        justify-content: center;
        flex-wrap: wrap;
      }
      
      /* Responsive */
      @media (max-width: 1024px) {
        .why-grid,
        .testimonials-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        
        .stats-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        
        .process-timeline {
          flex-direction: column;
          gap: var(--space-6);
        }
        
        .process-timeline::before {
          display: none;
        }
      }
      
      @media (max-width: 768px) {
        .hero h1 {
          font-size: var(--text-4xl);
        }
        
        .hero-subtitle {
          font-size: var(--text-xl);
        }
        
        .why-grid,
        .testimonials-grid,
        .stats-grid {
          grid-template-columns: 1fr;
        }
        
        .hero-cta {
          flex-direction: column;
        }
        
        .hero-cta .btn {
          width: 100%;
        }
      }
    </style>
    
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container container">
        <h1>Programme National de Bourses<br>Excellentia-RDC</h1>
        <p class="hero-subtitle">Récompenser le mérite, former l'élite de demain</p>
        <div class="hero-cta">
          <a href="#/eligibilite" class="btn btn-primary btn-lg">Vérifier mon éligibilité</a>
          <a href="#/programme" class="btn btn-white btn-lg">Découvrir le programme</a>
        </div>
      </div>
    </section>
    
    <!-- Why Excellentia Section -->
    <section class="why-section">
      <div class="container">
        <h2 class="text-center">Pourquoi Excellentia-RDC ?</h2>
        <div class="why-grid">
          <div class="why-card">
            <div class="why-icon">🏛️</div>
            <h3>Un programme national</h3>
            <p>Une politique publique portée par le Gouvernement de la RDC, avec un budget d'État dédié et un cadre légal solide.</p>
          </div>
          
          <div class="why-card">
            <div class="why-icon">🎯</div>
            <h3>Sélection basée sur le mérite</h3>
            <p>Seuls les meilleurs sont retenus : ≥80% à l'Examen d'État, concours national transparent et rigoureux.</p>
          </div>
          
          <div class="why-card">
            <div class="why-icon">🌟</div>
            <h3>Investissement dans la jeunesse</h3>
            <p>Former la nouvelle élite congolaise pour bâtir le Congo de demain, avec un engagement de retour au pays.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <h2 class="text-center">Excellentia-RDC en chiffres</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">${mockStatistics.totalInscrits.toLocaleString()}</div>
            <div class="stat-label">Candidats inscrits</div>
          </div>
          
          <div class="stat-card">
            <div class="stat-number">${mockStatistics.provincesCouverts}</div>
            <div class="stat-label">Provinces couvertes</div>
          </div>
          
          <div class="stat-card">
            <div class="stat-number">${mockStatistics.tauxFilles}%</div>
            <div class="stat-label">Filles</div>
          </div>
          
          <div class="stat-card">
            <div class="stat-number">${mockStatistics.tauxGarcons}%</div>
            <div class="stat-label">Garçons</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Process Section -->
    <section class="process-section">
      <div class="container">
        <h2 class="text-center">Le processus en 5 étapes</h2>
        <div class="process-timeline">
          <div class="process-step">
            <div class="process-number">1</div>
            <h4>Présélection</h4>
            <p>Identification automatique des lauréats ≥80%</p>
          </div>
          
          <div class="process-step">
            <div class="process-number">2</div>
            <h4>Notification</h4>
            <p>Les présélectionnés sont informés</p>
          </div>
          
          <div class="process-step">
            <div class="process-number">3</div>
            <h4>Concours</h4>
            <p>Épreuves nationales</p>
          </div>
          
          <div class="process-step">
            <div class="process-number">4</div>
            <h4>Admission</h4>
            <p>Résultats et sélection finale</p>
          </div>
          
          <div class="process-step">
            <div class="process-number">5</div>
            <h4>Contrat</h4>
            <p>Signature du contrat de bourse</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <h2 class="text-center">Témoignages de boursiers</h2>
        <div class="testimonials-grid" id="testimonialsGrid"></div>
      </div>
    </section>
    
    <!-- Final CTA Section -->
    <section class="final-cta">
      <div class="container">
        <h2>Tu as obtenu au moins 80% à l'Examen d'État ?</h2>
        <div class="final-cta-buttons">
          <a href="#/eligibilite" class="btn btn-primary btn-lg">Vérifier mon éligibilité</a>
          <a href="#/programme" class="btn btn-white btn-lg">Lire les conditions complètes</a>
        </div>
      </div>
    </section>
  `;

    // Populate testimonials
    setTimeout(() => {
        const grid = page.querySelector('#testimonialsGrid');
        if (grid) {
            grid.innerHTML = mockTestimonials.map(t => `
        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="testimonial-photo">${t.nom.charAt(0)}</div>
            <div class="testimonial-info">
              <h4>${t.nom}</h4>
              <p>${t.filiere} - ${t.universite}, ${t.pays}</p>
            </div>
          </div>
          <div class="testimonial-quote">
            "${t.citation}"
          </div>
        </div>
      `).join('');
        }
    }, 0);

    return page;
}
