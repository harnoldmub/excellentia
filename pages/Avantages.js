// Avantages Page

export function AvantagesPage() {
    const page = document.createElement('div');
    page.className = 'avantages-page';

    page.innerHTML = `
    <style>
      .benefits-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-8);
        margin-top: var(--space-8);
      }
      
      .benefit-card {
        background: var(--color-white);
        border-radius: var(--radius-xl);
        padding: var(--space-8);
        box-shadow: var(--shadow-lg);
        border-top: 5px solid var(--color-accent-gold);
      }
      
      .benefit-card h3 {
        color: var(--color-primary);
        margin-bottom: var(--space-5);
        display: flex;
        align-items: center;
        gap: var(--space-3);
      }
      
      .benefit-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .benefit-list li {
        padding: var(--space-3) 0;
        padding-left: var(--space-6);
        position: relative;
        border-bottom: 1px solid #F3F4F6;
      }
      
      .benefit-list li:last-child {
        border-bottom: none;
      }
      
      .benefit-list li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--color-accent-gold);
        font-weight: 700;
        font-size: var(--text-lg);
      }
      
      .engagement-section {
        background: var(--gradient-primary);
        color: var(--color-white);
        padding: var(--space-10);
        border-radius: var(--radius-xl);
        margin-top: var(--space-10);
        text-align: center;
      }
      
      .engagement-section h3 {
        color: var(--color-accent-gold);
        margin-bottom: var(--space-6);
      }
      
      .engagement-list {
        list-style: none;
        padding: 0;
        margin: var(--space-6) 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-6);
      }
      
      .engagement-item {
        background: rgba(255, 255, 255, 0.1);
        padding: var(--space-5);
        border-radius: var(--radius-lg);
        backdrop-filter: blur(10px);
      }
      
      .engagement-icon {
        font-size: var(--text-4xl);
        margin-bottom: var(--space-3);
      }
      
      .comparison-table {
        margin-top: var(--space-10);
        overflow-x: auto;
      }
      
      @media (max-width: 768px) {
        .benefits-grid {
          grid-template-columns: 1fr;
        }
        
        .engagement-list {
          grid-template-columns: 1fr;
        }
      }
    </style>
    
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>Avantages de la Bourse</h1>
        <p>Découvrez ce que couvre la bourse Excellentia-RDC</p>
      </div>
    </section>
    
    <!-- Benefits Section -->
    <section class="section">
      <div class="container">
        <h2 class="text-center">Ce que couvre la bourse</h2>
        
        <div class="benefits-grid">
          <!-- International Studies -->
          <div class="benefit-card">
            <h3>🌍 Études à l'étranger</h3>
            <ul class="benefit-list">
              <li><strong>Frais d'inscription et académiques</strong><br>
                Prise en charge complète des frais universitaires</li>
              
              <li><strong>Frais de transport</strong><br>
                Billet d'avion aller-retour vers le pays d'études</li>
              
              <li><strong>Frais d'hébergement</strong><br>
                Logement étudiant ou allocation logement</li>
              
              <li><strong>Allocation mensuelle forfaitaire</strong><br>
                Pour couvrir les dépenses courantes (nourriture, transport local, fournitures)</li>
              
              <li><strong>Assurance santé</strong><br>
                Couverture médicale durant toute la durée des études</li>
              
              <li><strong>Frais de visa et documents</strong><br>
                Tous les frais administratifs liés au départ</li>
            </ul>
          </div>
          
          <!-- RDC Studies -->
          <div class="benefit-card">
            <h3>🇨🇩 Études en RDC</h3>
            <ul class="benefit-list">
              <li><strong>Allocation forfaitaire annuelle</strong><br>
                Montant fixe versé chaque année pour soutenir votre parcours académique</li>
              
              <li><strong>Frais d'inscription</strong><br>
                Prise en charge des frais universitaires</li>
              
              <li><strong>Accompagnement académique</strong><br>
                Mentorat et suivi personnalisé tout au long du cursus</li>
              
              <li><strong>Accès au réseau Excellentia</strong><br>
                Connexion avec les autres boursiers et alumni</li>
              
              <li><strong>Opportunités de stages</strong><br>
                Facilitation de stages dans des institutions partenaires</li>
              
              <li><strong>Formations complémentaires</strong><br>
                Ateliers de développement personnel et professionnel</li>
            </ul>
          </div>
        </div>
        
        <!-- Engagement Section -->
        <div class="engagement-section">
          <h3>Engagement du boursier</h3>
          <p>En contrepartie de cette bourse, chaque boursier s'engage à :</p>
          
          <ul class="engagement-list">
            <li class="engagement-item">
              <div class="engagement-icon">🎓</div>
              <h4>Excellence académique</h4>
              <p>Maintenir un niveau d'excellence tout au long des études</p>
            </li>
            
            <li class="engagement-item">
              <div class="engagement-icon">🇨🇩</div>
              <h4>Retour au pays</h4>
              <p>Revenir en RDC à la fin des études pour contribuer au développement national</p>
            </li>
            
            <li class="engagement-item">
              <div class="engagement-icon">📋</div>
              <h4>Respect du contrat</h4>
              <p>Respecter toutes les clauses du contrat de bourse signé</p>
            </li>
          </ul>
          
          <div class="alert alert-warning" style="margin-top: var(--space-6); text-align: left;">
            <h4 style="color: #92400E; margin-bottom: var(--space-2);">⚠️ Important</h4>
            <p style="margin: 0; color: #92400E;">Le non-respect des engagements, notamment le non-retour au pays, entraînera le remboursement intégral de la bourse avec les intérêts applicables.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="section" style="background: #F9FAFB;">
      <div class="container text-center">
        <h2>Prêt à candidater ?</h2>
        <p style="font-size: var(--text-lg); margin-bottom: var(--space-6);">
          Vérifiez votre éligibilité et rejoignez la nouvelle génération de leaders congolais
        </p>
        <div style="display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap;">
          <a href="#/eligibilite" class="btn btn-primary btn-lg">Vérifier mon éligibilité</a>
          <a href="#/candidater" class="btn btn-secondary btn-lg">Créer mon compte</a>
        </div>
      </div>
    </section>
  `;

    return page;
}
