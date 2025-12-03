// Candidater Page

export function CandidaterPage() {
    const page = document.createElement('div');
    page.className = 'candidater-page';

    page.innerHTML = `
    <style>
      .checker-section {
        background: var(--color-white);
        padding: var(--space-10);
        border-radius: var(--radius-xl);
        box-shadow: var(--shadow-xl);
        max-width: 600px;
        margin: var(--space-8) auto;
      }
      
      .checker-section h3 {
        color: var(--color-primary);
        margin-bottom: var(--space-6);
        text-align: center;
      }
      
      .steps-info {
        background: #F9FAFB;
        padding: var(--space-6);
        border-radius: var(--radius-lg);
        margin-top: var(--space-8);
      }
      
      .steps-info h4 {
        color: var(--color-primary);
        margin-bottom: var(--space-4);
      }
      
      .steps-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .steps-list li {
        padding: var(--space-3) 0;
        padding-left: var(--space-6);
        position: relative;
      }
      
      .steps-list li::before {
        content: '→';
        position: absolute;
        left: 0;
        color: var(--color-accent-gold);
        font-weight: 700;
      }
      
      .info-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-6);
        margin-top: var(--space-10);
      }
      
      .info-card {
        text-align: center;
        padding: var(--space-6);
        background: var(--color-white);
        border-radius: var(--radius-xl);
        box-shadow: var(--shadow-md);
      }
      
      .info-icon {
        font-size: var(--text-5xl);
        margin-bottom: var(--space-3);
      }
      
      @media (max-width: 768px) {
        .info-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>
    
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>Candidater au Programme</h1>
        <p>Vérifiez votre éligibilité et créez votre compte candidat</p>
      </div>
    </section>
    
    <!-- Eligibility Checker -->
    <section class="section">
      <div class="container">
        <div class="checker-section">
          <h3>🎯 Vérifier mon éligibilité</h3>
          <p style="text-align: center; margin-bottom: var(--space-6);">
            Entrez vos informations pour vérifier si vous êtes éligible au programme
          </p>
          
          <form id="eligibilityForm">
            <div class="form-group">
              <label class="form-label">Numéro d'Examen d'État</label>
              <input type="text" class="form-input" id="numeroExetat" placeholder="Ex: EX2024001234" required>
            </div>
            
            <div class="form-group">
              <label class="form-label">Année</label>
              <select class="form-select" id="annee" required>
                <option value="">Sélectionner...</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>
            
            <div class="form-group">
              <label class="form-label">Date de naissance</label>
              <input type="date" class="form-input" id="dateNaissance" required>
            </div>
            
            <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
              Vérifier mon éligibilité
            </button>
          </form>
          
          <div id="eligibilityResult" style="margin-top: var(--space-6); display: none;"></div>
          
          <div class="steps-info">
            <h4>Ce que permet le compte candidat :</h4>
            <ul class="steps-list">
              <li>Compléter votre dossier de candidature</li>
              <li>Télécharger vos documents (carte d'identité, relevé de notes, photo)</li>
              <li>Suivre l'avancement de votre candidature en temps réel</li>
              <li>Recevoir des notifications sur les prochaines étapes</li>
              <li>Accéder aux informations sur le concours</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Info Section -->
    <section class="section" style="background: #F9FAFB;">
      <div class="container">
        <h2 class="text-center">Pourquoi créer un compte ?</h2>
        
        <div class="info-grid">
          <div class="info-card">
            <div class="info-icon">📝</div>
            <h4>Dossier complet</h4>
            <p>Complétez votre profil et téléchargez tous les documents nécessaires en toute sécurité</p>
          </div>
          
          <div class="info-card">
            <div class="info-icon">📊</div>
            <h4>Suivi en temps réel</h4>
            <p>Consultez l'état de votre candidature à tout moment et recevez des mises à jour</p>
          </div>
          
          <div class="info-card">
            <div class="info-icon">🔔</div>
            <h4>Notifications</h4>
            <p>Soyez alerté par email et SMS des étapes importantes de votre parcours</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Help Section -->
    <section class="section">
      <div class="container">
        <div class="alert alert-info">
          <h4 style="margin-bottom: var(--space-3);">💡 Besoin d'aide ?</h4>
          <p>Si vous rencontrez des difficultés pour créer votre compte ou vérifier votre éligibilité, consultez notre <a href="#/faq">FAQ</a> ou <a href="#/contact">contactez notre support</a>.</p>
        </div>
      </div>
    </section>
  `;

    // Add event listeners
    setTimeout(() => {
        const form = page.querySelector('#eligibilityForm');
        const result = page.querySelector('#eligibilityResult');

        if (form && result) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                // Simulate eligibility check
                const score = Math.random() * 20 + 75;
                const isEligible = score >= 80;

                result.style.display = 'block';

                if (isEligible) {
                    result.innerHTML = `
            <div class="alert alert-success">
              <h4 style="margin-bottom: var(--space-3);">✅ Félicitations ! Vous êtes éligible</h4>
              <p>Votre score estimé est de ${score.toFixed(1)}%. Vous pouvez maintenant créer votre compte candidat.</p>
              <button onclick="showAccountCreation()" class="btn btn-primary" style="margin-top: var(--space-4); width: 100%;">
                Créer mon compte candidat
              </button>
            </div>
          `;
                } else {
                    result.innerHTML = `
            <div class="alert alert-warning">
              <h4 style="margin-bottom: var(--space-3);">❌ Non éligible</h4>
              <p>Votre score estimé est de ${score.toFixed(1)}%. Le seuil minimum requis est de 80%.</p>
              <p style="margin-bottom: var(--space-3);">Nous vous encourageons à :</p>
              <ul style="margin: 0; padding-left: var(--space-5);">
                <li>Consulter la <a href="#/faq">FAQ</a> pour plus d'informations</li>
                <li>Vérifier les <a href="#/eligibilite">conditions d'éligibilité</a></li>
                <li>Nous <a href="#/contact">contacter</a> si vous pensez qu'il y a une erreur</li>
              </ul>
            </div>
          `;
                }
            });
        }
    }, 0);

    // Global function for account creation (would open a modal in real implementation)
    window.showAccountCreation = function () {
        alert('Fonctionnalité de création de compte à venir.\n\nDans la version complète, un formulaire d\'inscription s\'ouvrira ici pour créer votre compte candidat avec :\n- Email et mot de passe\n- Informations personnelles\n- Coordonnées de contact');
    };

    return page;
}
