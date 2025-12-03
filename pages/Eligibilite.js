// Eligibilite Page

export function EligibilitePage() {
    const page = document.createElement('div');
    page.className = 'eligibilite-page';

    page.innerHTML = `
    <style>
      .eligibility-checker {
        background: var(--gradient-primary);
        color: var(--color-white);
        padding: var(--space-8);
        border-radius: var(--radius-xl);
        margin: var(--space-8) 0;
      }
      
      .eligibility-checker h3 {
        color: var(--color-accent-gold);
        margin-bottom: var(--space-4);
        text-align: center;
      }
      
      .checker-form {
        max-width: 500px;
        margin: 0 auto;
      }
      
      .checker-form .form-input {
        background: rgba(255, 255, 255, 0.9);
      }
      
      .conditions-list {
        list-style: none;
        padding: 0;
        margin: var(--space-6) 0;
      }
      
      .conditions-list li {
        padding: var(--space-4);
        margin-bottom: var(--space-3);
        background: var(--color-white);
        border-radius: var(--radius-lg);
        border-left: 4px solid var(--color-accent-gold);
        display: flex;
        align-items: center;
        gap: var(--space-3);
        box-shadow: var(--shadow-sm);
      }
      
      .conditions-list li::before {
        content: '✓';
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        background: var(--color-accent-gold);
        color: var(--color-primary);
        border-radius: 50%;
        font-weight: 700;
        flex-shrink: 0;
      }
      
      .warning-box {
        background: rgba(237, 28, 36, 0.1);
        border: 2px solid var(--color-accent-red);
        border-radius: var(--radius-lg);
        padding: var(--space-5);
        margin: var(--space-6) 0;
      }
      
      .warning-box h4 {
        color: var(--color-accent-red);
        margin-bottom: var(--space-3);
        display: flex;
        align-items: center;
        gap: var(--space-2);
      }
      
      .mini-faq {
        margin-top: var(--space-8);
      }
      
      .mini-faq-item {
        background: #F9FAFB;
        border-radius: var(--radius-lg);
        margin-bottom: var(--space-3);
        overflow: hidden;
      }
      
      .mini-faq-question {
        padding: var(--space-4) var(--space-5);
        background: var(--color-white);
        cursor: pointer;
        font-weight: 600;
        color: var(--color-primary);
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: background var(--transition-fast);
      }
      
      .mini-faq-question:hover {
        background: #F9FAFB;
      }
      
      .mini-faq-answer {
        padding: 0 var(--space-5);
        max-height: 0;
        overflow: hidden;
        transition: all var(--transition-base);
      }
      
      .mini-faq-item.active .mini-faq-answer {
        padding: var(--space-4) var(--space-5);
        max-height: 500px;
      }
      
      .mini-faq-icon {
        transition: transform var(--transition-base);
      }
      
      .mini-faq-item.active .mini-faq-icon {
        transform: rotate(180deg);
      }
    </style>
    
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>Éligibilité & Processus</h1>
        <p>Vérifiez si vous pouvez candidater et découvrez les étapes du programme</p>
      </div>
    </section>
    
    <!-- Eligibility Conditions -->
    <section class="section">
      <div class="container">
        <h2 class="text-center">Conditions d'éligibilité</h2>
        
        <ul class="conditions-list">
          <li>
            <span>Être de nationalité congolaise (RDC)</span>
          </li>
          <li>
            <span>Avoir obtenu au moins <strong>80%</strong> à l'Examen d'État de l'année en cours</span>
          </li>
          <li>
            <span>Être lauréat de l'année académique en cours (pas de candidatures rétroactives)</span>
          </li>
        </ul>
        
        <div class="warning-box">
          <h4>⚠️ Important - Processus 100% gratuit</h4>
          <p><strong>Aucune somme d'argent ne doit être payée à quelque étape que ce soit.</strong></p>
          <p>Le processus de candidature, le concours, et tous les services liés au programme Excellentia-RDC sont entièrement gratuits. Méfiez-vous de toute personne qui vous demanderait de l'argent en échange d'une place ou d'un avantage.</p>
        </div>
        
        <!-- Eligibility Checker -->
        <div class="eligibility-checker">
          <h3>🎯 Vérifier mon éligibilité</h3>
          <form class="checker-form" id="eligibilityForm">
            <div class="form-group">
              <label class="form-label" style="color: white;">Numéro d'Examen d'État</label>
              <input type="text" class="form-input" id="numeroExetat" placeholder="Ex: EX2024001234" required>
            </div>
            
            <div class="form-group">
              <label class="form-label" style="color: white;">Année</label>
              <select class="form-select" id="annee" required>
                <option value="">Sélectionner...</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>
            
            <div class="form-group">
              <label class="form-label" style="color: white;">Date de naissance</label>
              <input type="date" class="form-input" id="dateNaissance" required>
            </div>
            
            <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
              Vérifier mon éligibilité
            </button>
          </form>
          
          <div id="eligibilityResult" style="margin-top: var(--space-6); display: none;"></div>
        </div>
      </div>
    </section>
    
    <!-- Process Timeline -->
    <section class="section bg-gradient-primary" style="background: #F9FAFB;">
      <div class="container">
        <h2 class="text-center">Processus étape par étape</h2>
        
        <div class="timeline" style="margin-top: var(--space-10);">
          <div class="timeline-item">
            <div class="timeline-marker">1</div>
            <div class="timeline-content">
              <h4>Identification automatique</h4>
              <p>Les résultats de l'Examen d'État sont analysés automatiquement. Tous les lauréats ayant obtenu au moins 80% sont identifiés et présélectionnés.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker">2</div>
            <div class="timeline-content">
              <h4>Notification des présélectionnés</h4>
              <p>Les candidats éligibles reçoivent une notification par SMS, email ou via le site web. Ils sont invités à créer leur compte et compléter leur dossier.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker">3</div>
            <div class="timeline-content">
              <h4>Concours national</h4>
              <p>Les candidats présélectionnés passent un concours comprenant des épreuves écrites et un entretien oral pour évaluer leurs compétences et leur motivation.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker">4</div>
            <div class="timeline-content">
              <h4>Admission au programme</h4>
              <p>Les résultats du concours sont publiés. Les candidats retenus reçoivent leur lettre d'admission officielle au programme Excellentia-RDC.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker">5</div>
            <div class="timeline-content">
              <h4>Signature du contrat de bourse</h4>
              <p>Les boursiers signent leur contrat définissant les modalités de la bourse, leurs engagements, et les conditions de retour au pays après les études.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Mini FAQ -->
    <section class="section">
      <div class="container">
        <h2 class="text-center">Questions fréquentes</h2>
        
        <div class="mini-faq">
          <div class="mini-faq-item">
            <div class="mini-faq-question">
              <span>Que se passe-t-il si j'ai obtenu 79% ?</span>
              <span class="mini-faq-icon">▼</span>
            </div>
            <div class="mini-faq-answer">
              <p>Malheureusement, le seuil minimum est de 80%. Nous vous encourageons à poursuivre vos études avec excellence.</p>
            </div>
          </div>
          
          <div class="mini-faq-item">
            <div class="mini-faq-question">
              <span>Y a-t-il des frais pour postuler ?</span>
              <span class="mini-faq-icon">▼</span>
            </div>
            <div class="mini-faq-answer">
              <p>Non, absolument pas. Le processus est 100% gratuit. Aucune somme ne doit être payée.</p>
            </div>
          </div>
          
          <div class="mini-faq-item">
            <div class="mini-faq-question">
              <span>Puis-je retenter l'année suivante ?</span>
              <span class="mini-faq-icon">▼</span>
            </div>
            <div class="mini-faq-answer">
              <p>Le programme cible les lauréats de l'année en cours. Si vous redoublez et obtenez ≥80%, vous pourrez candidater l'année suivante.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

    // Add event listeners
    setTimeout(() => {
        // Eligibility form
        const form = page.querySelector('#eligibilityForm');
        const result = page.querySelector('#eligibilityResult');

        if (form && result) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                // Simulate eligibility check
                const score = Math.random() * 20 + 75; // Random score between 75-95
                const isEligible = score >= 80;

                result.style.display = 'block';

                if (isEligible) {
                    result.innerHTML = `
            <div class="alert alert-success">
              <h4 style="margin-bottom: var(--space-3);">✅ Félicitations ! Vous êtes éligible</h4>
              <p>Votre score estimé est de ${score.toFixed(1)}%. Vous pouvez créer votre compte candidat pour compléter votre dossier.</p>
              <a href="#/candidater" class="btn btn-primary" style="margin-top: var(--space-4);">Créer mon compte candidat</a>
            </div>
          `;
                } else {
                    result.innerHTML = `
            <div class="alert alert-warning">
              <h4 style="margin-bottom: var(--space-3);">❌ Non éligible</h4>
              <p>Votre score estimé est de ${score.toFixed(1)}%. Le seuil minimum requis est de 80%.</p>
              <p>Nous vous encourageons à consulter la <a href="#/faq">FAQ</a> pour plus d'informations.</p>
            </div>
          `;
                }
            });
        }

        // Mini FAQ accordion
        const faqItems = page.querySelectorAll('.mini-faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.mini-faq-question');
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
    }, 0);

    return page;
}
