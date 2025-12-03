// Programme Page

export function ProgrammePage() {
    const page = document.createElement('div');
    page.className = 'programme-page';

    page.innerHTML = `
    <style>
      .page-hero {
        background: var(--gradient-primary);
        color: var(--color-white);
        padding: var(--space-10) 0;
        text-align: center;
      }
      
      .page-hero h1 {
        color: var(--color-white);
        margin-bottom: var(--space-4);
      }
      
      .page-hero p {
        font-size: var(--text-xl);
        opacity: 0.9;
        max-width: 800px;
        margin: 0 auto;
      }
      
      .origin-section {
        padding: var(--space-12) 0;
        background: var(--color-white);
      }
      
      .origin-content {
        max-width: 900px;
        margin: 0 auto;
        background: linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%);
        padding: var(--space-8);
        border-radius: var(--radius-xl);
        border-left: 5px solid var(--color-accent-gold);
      }
      
      .origin-content h3 {
        color: var(--color-accent-red);
        margin-bottom: var(--space-4);
      }
      
      .mission-section {
        padding: var(--space-12) 0;
        background: #F9FAFB;
      }
      
      .mission-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-6);
        margin-top: var(--space-8);
      }
      
      .mission-card {
        background: var(--color-white);
        padding: var(--space-6);
        border-radius: var(--radius-xl);
        text-align: center;
        box-shadow: var(--shadow-md);
        transition: all var(--transition-base);
      }
      
      .mission-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-xl);
      }
      
      .mission-icon {
        font-size: var(--text-5xl);
        margin-bottom: var(--space-4);
      }
      
      .values-section {
        padding: var(--space-12) 0;
        background: var(--color-white);
      }
      
      .values-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-6);
        margin-top: var(--space-8);
      }
      
      .value-card {
        background: var(--gradient-primary);
        color: var(--color-white);
        padding: var(--space-6);
        border-radius: var(--radius-xl);
        display: flex;
        align-items: center;
        gap: var(--space-4);
      }
      
      .value-icon {
        font-size: var(--text-4xl);
        background: rgba(252, 209, 22, 0.2);
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      
      .value-content h4 {
        color: var(--color-accent-gold);
        margin-bottom: var(--space-2);
      }
      
      .value-content p {
        margin: 0;
        opacity: 0.9;
      }
      
      .legal-section {
        padding: var(--space-12) 0;
        background: #F9FAFB;
      }
      
      .legal-box {
        max-width: 800px;
        margin: var(--space-8) auto 0;
        background: var(--color-white);
        padding: var(--space-8);
        border-radius: var(--radius-xl);
        border: 3px solid var(--color-accent-gold);
        box-shadow: var(--shadow-lg);
      }
      
      .legal-box h3 {
        color: var(--color-primary);
        margin-bottom: var(--space-4);
        display: flex;
        align-items: center;
        gap: var(--space-3);
      }
      
      .legal-box p {
        margin-bottom: var(--space-4);
      }
      
      @media (max-width: 1024px) {
        .mission-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      
      @media (max-width: 768px) {
        .mission-grid,
        .values-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>
    
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>Programme Excellentia-RDC</h1>
        <p>D'un rêve à une politique nationale d'excellence</p>
      </div>
    </section>
    
    <!-- Origin Section -->
    <section class="origin-section">
      <div class="container">
        <div class="origin-content">
          <h3>D'un rêve à une politique nationale</h3>
          <p>Le Programme Excellentia-RDC est né d'une vision portée par la Fondation Denise Nyakeru Tshisekedi : celle de récompenser l'excellence scolaire et d'offrir aux meilleurs élèves congolais les moyens de réaliser leur plein potentiel.</p>
          <p>Conscient de l'importance stratégique de former une nouvelle génération de leaders compétents et engagés, le Gouvernement de la République Démocratique du Congo a fait de cette initiative une politique publique nationale.</p>
          <p>Aujourd'hui, Excellentia-RDC est un programme d'État, doté d'un budget dédié et d'un cadre légal solide, qui accompagne chaque année les meilleurs lauréats de l'Examen d'État vers des études supérieures de qualité, en RDC et à l'étranger.</p>
        </div>
      </div>
    </section>
    
    <!-- Mission Section -->
    <section class="mission-section">
      <div class="container">
        <h2 class="text-center">Notre Mission</h2>
        <div class="mission-grid">
          <div class="mission-card">
            <div class="mission-icon">📚</div>
            <h3>Promouvoir l'excellence scolaire</h3>
            <p>Encourager les élèves congolais à viser l'excellence académique dès le secondaire</p>
          </div>
          
          <div class="mission-card">
            <div class="mission-icon">🎓</div>
            <h3>Former une nouvelle élite</h3>
            <p>Créer une génération de leaders compétents, intègres et engagés pour le développement du pays</p>
          </div>
          
          <div class="mission-card">
            <div class="mission-icon">🌍</div>
            <h3>Accompagner les talents</h3>
            <p>Offrir aux meilleurs élèves l'accès à des formations supérieures de qualité en RDC et à l'international</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <h2 class="text-center">Nos Valeurs</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">⭐</div>
            <div class="value-content">
              <h4>Mérite</h4>
              <p>Seule l'excellence académique compte. Pas de favoritisme, pas de corruption. Les meilleurs sont récompensés.</p>
            </div>
          </div>
          
          <div class="value-card">
            <div class="value-icon">⚖️</div>
            <div class="value-content">
              <h4>Égalité des chances</h4>
              <p>Tous les lauréats éligibles, quelle que soit leur province ou leur origine sociale, ont les mêmes opportunités.</p>
            </div>
          </div>
          
          <div class="value-card">
            <div class="value-icon">🔍</div>
            <div class="value-content">
              <h4>Transparence</h4>
              <p>Processus de sélection clair, critères objectifs, résultats publics. Tout est transparent.</p>
            </div>
          </div>
          
          <div class="value-card">
            <div class="value-icon">🇨🇩</div>
            <div class="value-content">
              <h4>Engagement envers le pays</h4>
              <p>Les boursiers s'engagent à revenir contribuer au développement de la RDC après leurs études.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Legal Framework Section -->
    <section class="legal-section">
      <div class="container">
        <h2 class="text-center">Cadre Légal</h2>
        <div class="legal-box">
          <h3>📜 Décret Présidentiel</h3>
          <p><strong>Titre :</strong> Décret portant création et organisation du Programme National de Bourses d'Excellence Excellentia-RDC</p>
          <p><strong>Date :</strong> [À compléter selon le décret officiel]</p>
          <p><strong>Autorité :</strong> Présidence de la République Démocratique du Congo</p>
          <a href="#" onclick="alert('Le document PDF sera disponible prochainement')" class="btn btn-primary">
            📥 Télécharger le décret (PDF)
          </a>
        </div>
      </div>
    </section>
  `;

    return page;
}
