// Admin Candidate Detail Page

import { AdminLayout } from '../components/AdminLayout.js';
import { storage } from '../utils/mockData.js';
import router from '../router.js';

export function AdminCandidateDetailPage() {
    const params = router.getParams();
    const candidate = storage.getCandidateById(params.id);

    if (!candidate) {
        router.navigate('/admin/candidates');
        return document.createElement('div');
    }

    const content = document.createElement('div');

    content.innerHTML = `
    <style>
      .detail-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: var(--space-6);
      }
      
      .detail-main {
        background: var(--color-white);
        border-radius: var(--radius-lg);
        overflow: hidden;
      }
      
      .detail-sidebar {
        background: var(--color-white);
        padding: var(--space-6);
        border-radius: var(--radius-lg);
        height: fit-content;
      }
      
      .tab-content {
        padding: var(--space-6);
      }
      
      .info-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-4);
      }
      
      .info-item {
        padding: var(--space-4);
        background: #F9FAFB;
        border-radius: var(--radius-md);
      }
      
      .info-label {
        font-size: var(--text-sm);
        color: #6B7280;
        margin-bottom: var(--space-1);
      }
      
      .info-value {
        font-weight: 600;
        color: var(--color-primary);
      }
      
      .documents-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-4);
      }
      
      .document-card {
        padding: var(--space-5);
        background: #F9FAFB;
        border-radius: var(--radius-lg);
        text-align: center;
      }
      
      .document-icon {
        font-size: var(--text-4xl);
        margin-bottom: var(--space-3);
      }
      
      .document-status {
        margin-top: var(--space-3);
      }
      
      @media (max-width: 1024px) {
        .detail-grid {
          grid-template-columns: 1fr;
        }
        
        .info-grid,
        .documents-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>
    
    <div class="dashboard-header">
      <div>
        <button class="btn btn-outline btn-sm" onclick="history.back()" style="margin-bottom: var(--space-3);">
          ← Retour à la liste
        </button>
        <h1>${candidate.nom} ${candidate.prenom}</h1>
        <p>N° Exetat: ${candidate.numeroExetat}</p>
      </div>
    </div>
    
    <div class="detail-grid">
      <div class="detail-main">
        <!-- Tabs -->
        <div class="tabs">
          <ul class="tabs-list">
            <li class="tab active" data-tab="profil">Profil</li>
            <li class="tab" data-tab="resultats">Résultats</li>
            <li class="tab" data-tab="documents">Documents</li>
            <li class="tab" data-tab="historique">Historique</li>
          </ul>
        </div>
        
        <!-- Tab Content -->
        <div class="tab-content">
          <div id="tab-profil" class="tab-pane active">
            <h3 style="margin-bottom: var(--space-5);">Informations personnelles</h3>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Nom complet</div>
                <div class="info-value">${candidate.nom} ${candidate.prenom}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">Date de naissance</div>
                <div class="info-value">${new Date(candidate.dateNaissance).toLocaleDateString('fr-FR')}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">Genre</div>
                <div class="info-value">${candidate.genre === 'F' ? 'Féminin' : 'Masculin'}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">Province</div>
                <div class="info-value">${candidate.province}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">Email</div>
                <div class="info-value">${candidate.email}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">Téléphone</div>
                <div class="info-value">${candidate.telephone}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">École d'origine</div>
                <div class="info-value">${candidate.ecole}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">Date d'inscription</div>
                <div class="info-value">${new Date(candidate.dateInscription).toLocaleDateString('fr-FR')}</div>
              </div>
            </div>
          </div>
          
          <div id="tab-resultats" class="tab-pane" style="display: none;">
            <h3 style="margin-bottom: var(--space-5);">Résultats Examen d'État</h3>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Numéro Exetat</div>
                <div class="info-value">${candidate.numeroExetat}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">Score global</div>
                <div class="info-value" style="font-size: var(--text-3xl); color: var(--color-accent-gold);">
                  ${candidate.score}%
                </div>
              </div>
            </div>
            
            <div class="alert alert-info" style="margin-top: var(--space-6);">
              <p style="margin: 0;">Le détail des matières sera disponible après l'import complet des données de l'Examen d'État.</p>
            </div>
          </div>
          
          <div id="tab-documents" class="tab-pane" style="display: none;">
            <h3 style="margin-bottom: var(--space-5);">Documents téléchargés</h3>
            <div class="documents-grid">
              <div class="document-card">
                <div class="document-icon">🪪</div>
                <h4>Carte d'identité</h4>
                <div class="document-status">
                  ${candidate.documents.identite ?
            '<span class="badge badge-success">✓ Validé</span>' :
            '<span class="badge badge-warning">En attente</span>'}
                </div>
              </div>
              
              <div class="document-card">
                <div class="document-icon">📄</div>
                <h4>Relevé de notes</h4>
                <div class="document-status">
                  ${candidate.documents.releve ?
            '<span class="badge badge-success">✓ Validé</span>' :
            '<span class="badge badge-warning">En attente</span>'}
                </div>
              </div>
              
              <div class="document-card">
                <div class="document-icon">📸</div>
                <h4>Photo d'identité</h4>
                <div class="document-status">
                  ${candidate.documents.photo ?
            '<span class="badge badge-success">✓ Validé</span>' :
            '<span class="badge badge-warning">En attente</span>'}
                </div>
              </div>
            </div>
          </div>
          
          <div id="tab-historique" class="tab-pane" style="display: none;">
            <h3 style="margin-bottom: var(--space-5);">Historique des actions</h3>
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-marker">1</div>
                <div class="timeline-content">
                  <h4>Inscription</h4>
                  <p>Candidat inscrit sur la plateforme - ${new Date(candidate.dateInscription).toLocaleDateString('fr-FR')}</p>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-marker">2</div>
                <div class="timeline-content">
                  <h4>Statut actuel</h4>
                  <p>${candidate.statut}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Sidebar -->
      <div class="detail-sidebar">
        <h4 style="margin-bottom: var(--space-4);">Gestion du statut</h4>
        
        <div class="form-group">
          <label class="form-label">Statut du dossier</label>
          <select class="form-select" id="statusSelect">
            <option value="Dossier incomplet" ${candidate.statut === 'Dossier incomplet' ? 'selected' : ''}>Dossier incomplet</option>
            <option value="Dossier complet" ${candidate.statut === 'Dossier complet' ? 'selected' : ''}>Dossier complet</option>
            <option value="Retenu pour concours" ${candidate.statut === 'Retenu pour concours' ? 'selected' : ''}>Retenu pour concours</option>
            <option value="Rejeté" ${candidate.statut === 'Rejeté' ? 'selected' : ''}>Rejeté</option>
          </select>
        </div>
        
        <button class="btn btn-primary" id="updateStatusBtn" style="width: 100%; margin-bottom: var(--space-4);">
          Mettre à jour le statut
        </button>
        
        <div class="divider"></div>
        
        <h4 style="margin-bottom: var(--space-4);">Actions rapides</h4>
        
        <button class="btn btn-outline" style="width: 100%; margin-bottom: var(--space-3);">
          📧 Envoyer un email
        </button>
        
        <button class="btn btn-outline" style="width: 100%; margin-bottom: var(--space-3);">
          📱 Envoyer un SMS
        </button>
        
        <button class="btn btn-outline" style="width: 100%;">
          📥 Télécharger le dossier
        </button>
      </div>
    </div>
  `;

    // Add tab switching
    setTimeout(() => {
        const tabs = content.querySelectorAll('.tab');
        const panes = content.querySelectorAll('.tab-pane');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.dataset.tab;

                // Update active tab
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Show corresponding pane
                panes.forEach(pane => {
                    pane.style.display = 'none';
                });
                const activePane = content.querySelector(`#tab-${tabName}`);
                if (activePane) activePane.style.display = 'block';
            });
        });

        // Status update
        const updateBtn = content.querySelector('#updateStatusBtn');
        const statusSelect = content.querySelector('#statusSelect');

        if (updateBtn && statusSelect) {
            updateBtn.addEventListener('click', () => {
                const newStatus = statusSelect.value;
                storage.updateCandidate(candidate.id, { statut: newStatus });

                alert(`Statut mis à jour: ${newStatus}`);
            });
        }
    }, 0);

    return AdminLayout(content, 'candidates');
}
