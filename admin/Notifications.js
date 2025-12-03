// Admin Notifications Page

import { AdminLayout } from '../components/AdminLayout.js';
import { storage } from '../utils/mockData.js';

export function AdminNotificationsPage() {
    const content = document.createElement('div');

    const candidates = storage.getCandidates();

    content.innerHTML = `
    <style>
      .notification-form {
        background: var(--color-white);
        padding: var(--space-6);
        border-radius: var(--radius-lg);
        margin-bottom: var(--space-6);
      }
      
      .form-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-5);
      }
      
      .form-full {
        grid-column: span 2;
      }
      
      .channel-selector {
        display: flex;
        gap: var(--space-3);
        margin-top: var(--space-3);
      }
      
      .channel-option {
        flex: 1;
        padding: var(--space-4);
        border: 2px solid #E5E7EB;
        border-radius: var(--radius-lg);
        cursor: pointer;
        text-align: center;
        transition: all var(--transition-fast);
      }
      
      .channel-option:hover {
        border-color: var(--color-accent-cyan);
      }
      
      .channel-option.selected {
        border-color: var(--color-accent-gold);
        background: rgba(252, 209, 22, 0.1);
      }
      
      .channel-icon {
        font-size: var(--text-3xl);
        margin-bottom: var(--space-2);
      }
      
      .variables-help {
        background: #F9FAFB;
        padding: var(--space-4);
        border-radius: var(--radius-md);
        margin-top: var(--space-4);
      }
      
      .variable-tag {
        display: inline-block;
        padding: var(--space-1) var(--space-2);
        background: var(--color-primary);
        color: var(--color-white);
        border-radius: var(--radius-sm);
        font-size: var(--text-xs);
        font-family: monospace;
        margin-right: var(--space-2);
        margin-bottom: var(--space-2);
      }
      
      .preview-section {
        background: var(--color-white);
        padding: var(--space-6);
        border-radius: var(--radius-lg);
      }
      
      .preview-box {
        background: #F9FAFB;
        padding: var(--space-5);
        border-radius: var(--radius-lg);
        border: 2px solid #E5E7EB;
        margin-top: var(--space-4);
      }
      
      @media (max-width: 768px) {
        .form-grid {
          grid-template-columns: 1fr;
        }
        
        .form-full {
          grid-column: span 1;
        }
        
        .channel-selector {
          flex-direction: column;
        }
      }
    </style>
    
    <div class="dashboard-header">
      <h1>Notifications</h1>
      <p>Envoyer des notifications aux candidats</p>
    </div>
    
    <!-- Notification Form -->
    <div class="notification-form">
      <h3 style="margin-bottom: var(--space-5);">Créer une notification</h3>
      
      <form id="notificationForm">
        <div class="form-grid">
          <div>
            <label class="form-label">Filtrer par statut</label>
            <select class="form-select" id="statusFilter">
              <option value="all">Tous les candidats</option>
              <option value="Retenu pour concours">Retenus pour concours</option>
              <option value="Dossier complet">Dossier complet</option>
              <option value="Dossier incomplet">Dossier incomplet</option>
            </select>
          </div>
          
          <div>
            <label class="form-label">Nombre de destinataires</label>
            <input 
              type="text" 
              class="form-input" 
              id="recipientCount" 
              value="${candidates.length} candidats"
              readonly
            >
          </div>
          
          <div class="form-full">
            <label class="form-label">Canal de communication</label>
            <div class="channel-selector">
              <div class="channel-option selected" data-channel="email">
                <div class="channel-icon">📧</div>
                <div>Email</div>
              </div>
              
              <div class="channel-option" data-channel="sms">
                <div class="channel-icon">📱</div>
                <div>SMS</div>
              </div>
              
              <div class="channel-option" data-channel="whatsapp">
                <div class="channel-icon">💬</div>
                <div>WhatsApp</div>
              </div>
            </div>
            <input type="hidden" id="channelInput" value="email">
          </div>
          
          <div class="form-full">
            <label class="form-label">Titre du message</label>
            <input 
              type="text" 
              class="form-input" 
              id="messageTitle" 
              placeholder="Ex: Convocation au concours Excellentia-RDC"
              required
            >
          </div>
          
          <div class="form-full">
            <label class="form-label">Message</label>
            <textarea 
              class="form-textarea" 
              id="messageContent" 
              rows="8"
              placeholder="Rédigez votre message ici..."
              required
            ></textarea>
            
            <div class="variables-help">
              <strong>Variables disponibles :</strong><br>
              <span class="variable-tag">{nom}</span>
              <span class="variable-tag">{prenom}</span>
              <span class="variable-tag">{date_concours}</span>
              <span class="variable-tag">{centre_concours}</span>
              <span class="variable-tag">{heure}</span>
            </div>
          </div>
        </div>
        
        <div style="margin-top: var(--space-6); display: flex; gap: var(--space-3);">
          <button type="button" class="btn btn-secondary" id="previewBtn">
            👁️ Aperçu
          </button>
          <button type="submit" class="btn btn-primary">
            📤 Envoyer la notification
          </button>
        </div>
      </form>
    </div>
    
    <!-- Preview Section -->
    <div class="preview-section" id="previewSection" style="display: none;">
      <h3 style="margin-bottom: var(--space-4);">Aperçu du message</h3>
      <div class="preview-box" id="previewBox"></div>
    </div>
  `;

    // Add event listeners
    setTimeout(() => {
        // Channel selection
        const channelOptions = content.querySelectorAll('.channel-option');
        const channelInput = content.querySelector('#channelInput');

        channelOptions.forEach(option => {
            option.addEventListener('click', () => {
                channelOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                if (channelInput) {
                    channelInput.value = option.dataset.channel;
                }
            });
        });

        // Status filter
        const statusFilter = content.querySelector('#statusFilter');
        const recipientCount = content.querySelector('#recipientCount');

        statusFilter?.addEventListener('change', (e) => {
            const status = e.target.value;
            let count = candidates.length;

            if (status !== 'all') {
                count = candidates.filter(c => c.statut === status).length;
            }

            if (recipientCount) {
                recipientCount.value = `${count} candidat${count > 1 ? 's' : ''}`;
            }
        });

        // Preview
        const previewBtn = content.querySelector('#previewBtn');
        const previewSection = content.querySelector('#previewSection');
        const previewBox = content.querySelector('#previewBox');

        previewBtn?.addEventListener('click', () => {
            const title = content.querySelector('#messageTitle')?.value || '';
            const message = content.querySelector('#messageContent')?.value || '';
            const channel = content.querySelector('#channelInput')?.value || 'email';

            if (!title || !message) {
                alert('Veuillez remplir le titre et le message');
                return;
            }

            // Replace variables with example data
            const previewMessage = message
                .replace(/{nom}/g, 'Mukendi')
                .replace(/{prenom}/g, 'Grace')
                .replace(/{date_concours}/g, '15 janvier 2025')
                .replace(/{centre_concours}/g, 'Lycée Bosangani, Kinshasa')
                .replace(/{heure}/g, '08h00');

            if (previewBox) {
                previewBox.innerHTML = `
          <div style="margin-bottom: var(--space-4);">
            <strong>Canal:</strong> ${channel === 'email' ? '📧 Email' : channel === 'sms' ? '📱 SMS' : '💬 WhatsApp'}
          </div>
          <div style="margin-bottom: var(--space-3);">
            <strong>Titre:</strong> ${title}
          </div>
          <div style="padding: var(--space-4); background: var(--color-white); border-radius: var(--radius-md);">
            ${previewMessage.replace(/\n/g, '<br>')}
          </div>
        `;
            }

            if (previewSection) {
                previewSection.style.display = 'block';
            }
        });

        // Form submission
        const form = content.querySelector('#notificationForm');
        form?.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = content.querySelector('#messageTitle')?.value;
            const count = content.querySelector('#recipientCount')?.value;

            alert(`✅ Notification envoyée avec succès!\n\nTitre: ${title}\nDestinataires: ${count}`);

            // Reset form
            form.reset();
            if (previewSection) previewSection.style.display = 'none';
        });
    }, 0);

    return AdminLayout(content, 'notifications');
}
