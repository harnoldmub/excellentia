// Admin Import Page

import { AdminLayout } from '../components/AdminLayout.js';
import { storage } from '../utils/mockData.js';

export function AdminImportPage() {
    const content = document.createElement('div');

    content.innerHTML = `
    <style>
      .upload-section {
        background: var(--color-white);
        padding: var(--space-8);
        border-radius: var(--radius-lg);
        margin-bottom: var(--space-6);
        text-align: center;
      }
      
      .upload-zone {
        border: 3px dashed #E5E7EB;
        border-radius: var(--radius-lg);
        padding: var(--space-10);
        background: #F9FAFB;
        cursor: pointer;
        transition: all var(--transition-base);
      }
      
      .upload-zone:hover {
        border-color: var(--color-accent-cyan);
        background: rgba(0, 174, 239, 0.05);
      }
      
      .upload-icon {
        font-size: var(--text-6xl);
        margin-bottom: var(--space-4);
      }
      
      .file-input {
        display: none;
      }
      
      .preview-section {
        background: var(--color-white);
        padding: var(--space-6);
        border-radius: var(--radius-lg);
        margin-bottom: var(--space-6);
        display: none;
      }
      
      .summary-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-4);
        margin-top: var(--space-6);
      }
      
      .summary-card {
        padding: var(--space-5);
        background: #F9FAFB;
        border-radius: var(--radius-lg);
        text-align: center;
      }
      
      .summary-number {
        font-size: var(--text-4xl);
        font-weight: 800;
        margin-bottom: var(--space-2);
      }
      
      .summary-number.success {
        color: #10B981;
      }
      
      .summary-number.warning {
        color: #F59E0B;
      }
      
      .summary-number.danger {
        color: var(--color-accent-red);
      }
      
      @media (max-width: 768px) {
        .summary-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>
    
    <div class="dashboard-header">
      <h1>Import / Gestion des Éligibles</h1>
      <p>Importer les résultats de l'Examen d'État</p>
    </div>
    
    <!-- Upload Section -->
    <div class="upload-section">
      <h3 style="margin-bottom: var(--space-6);">Importer un fichier CSV/Excel</h3>
      
      <div class="upload-zone" id="uploadZone">
        <div class="upload-icon">📁</div>
        <h4>Glissez-déposez votre fichier ici</h4>
        <p style="color: #6B7280; margin-bottom: var(--space-4);">ou cliquez pour sélectionner</p>
        <button class="btn btn-primary">Choisir un fichier</button>
        <input type="file" class="file-input" id="fileInput" accept=".csv,.xlsx,.xls">
      </div>
      
      <div class="alert alert-info" style="margin-top: var(--space-6); text-align: left;">
        <h4 style="margin-bottom: var(--space-3);">📋 Format attendu</h4>
        <p>Le fichier doit contenir les colonnes suivantes :</p>
        <ul style="margin: var(--space-3) 0 0 var(--space-5);">
          <li><strong>Numéro Exetat</strong> - Numéro unique de l'examen</li>
          <li><strong>Nom</strong> - Nom de famille</li>
          <li><strong>Prénom</strong> - Prénom(s)</li>
          <li><strong>Score</strong> - Pourcentage obtenu (ex: 85.5)</li>
          <li><strong>Province</strong> - Province d'origine</li>
          <li><strong>Genre</strong> - M ou F</li>
        </ul>
      </div>
    </div>
    
    <!-- Preview Section -->
    <div class="preview-section" id="previewSection">
      <h3 style="margin-bottom: var(--space-5);">Aperçu des données</h3>
      
      <div class="table-container">
        <table class="table" id="previewTable">
          <thead>
            <tr>
              <th>N° Exetat</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Score</th>
              <th>Province</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody id="previewTableBody"></tbody>
        </table>
      </div>
      
      <div class="summary-grid">
        <div class="summary-card">
          <div class="summary-number success" id="importedCount">0</div>
          <div class="summary-label">Lignes importées</div>
        </div>
        
        <div class="summary-card">
          <div class="summary-number warning" id="duplicatesCount">0</div>
          <div class="summary-label">Doublons détectés</div>
        </div>
        
        <div class="summary-card">
          <div class="summary-number danger" id="errorsCount">0</div>
          <div class="summary-label">Erreurs</div>
        </div>
      </div>
      
      <div style="margin-top: var(--space-6); text-align: center;">
        <button class="btn btn-primary btn-lg" id="confirmImportBtn">
          Confirmer l'import
        </button>
        <button class="btn btn-outline btn-lg" id="cancelImportBtn" style="margin-left: var(--space-3);">
          Annuler
        </button>
      </div>
    </div>
  `;

    // Add file upload handler
    setTimeout(() => {
        const uploadZone = content.querySelector('#uploadZone');
        const fileInput = content.querySelector('#fileInput');
        const previewSection = content.querySelector('#previewSection');

        // Click to upload
        uploadZone?.addEventListener('click', () => {
            fileInput?.click();
        });

        // File selection
        fileInput?.addEventListener('change', (e) => {
            const file = e.target.files?.[0];
            if (file) {
                processFile(file);
            }
        });

        // Drag and drop
        uploadZone?.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadZone.style.borderColor = 'var(--color-accent-cyan)';
        });

        uploadZone?.addEventListener('dragleave', () => {
            uploadZone.style.borderColor = '#E5E7EB';
        });

        uploadZone?.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadZone.style.borderColor = '#E5E7EB';

            const file = e.dataTransfer?.files?.[0];
            if (file) {
                processFile(file);
            }
        });

        // Process file (mock)
        function processFile(file) {
            // Simulate file processing
            const mockData = [
                { numeroExetat: 'EX2024010001', nom: 'Kabila', prenom: 'Jean', score: 92.5, province: 'Kinshasa', genre: 'M', eligible: true },
                { numeroExetat: 'EX2024010002', nom: 'Tshisekedi', prenom: 'Marie', score: 88.3, province: 'Kasaï', genre: 'F', eligible: true },
                { numeroExetat: 'EX2024010003', nom: 'Mbuyi', prenom: 'Patrick', score: 75.2, province: 'Haut-Katanga', genre: 'M', eligible: false },
                { numeroExetat: 'EX2024010004', nom: 'Lukaku', prenom: 'Sarah', score: 95.7, province: 'Nord-Kivu', genre: 'F', eligible: true },
                { numeroExetat: 'EX2024001234', nom: 'Mukendi', prenom: 'Grace', score: 92.5, province: 'Kinshasa', genre: 'F', eligible: true }, // Duplicate
            ];

            // Show preview
            if (previewSection) {
                previewSection.style.display = 'block';
            }

            // Populate table
            const tbody = content.querySelector('#previewTableBody');
            if (tbody) {
                tbody.innerHTML = mockData.map(row => `
          <tr style="${!row.eligible ? 'background: rgba(237, 28, 36, 0.1);' : ''}">
            <td>${row.numeroExetat}</td>
            <td>${row.nom}</td>
            <td>${row.prenom}</td>
            <td><strong>${row.score}%</strong></td>
            <td>${row.province}</td>
            <td>
              ${row.eligible ?
                        '<span class="badge badge-success">✓ Éligible (≥80%)</span>' :
                        '<span class="badge badge-danger">✗ Non éligible (<80%)</span>'}
            </td>
          </tr>
        `).join('');
            }

            // Update summary
            const eligible = mockData.filter(r => r.eligible).length;
            const duplicates = 1; // Mock duplicate
            const errors = mockData.filter(r => !r.eligible).length;

            const importedCount = content.querySelector('#importedCount');
            const duplicatesCount = content.querySelector('#duplicatesCount');
            const errorsCount = content.querySelector('#errorsCount');

            if (importedCount) importedCount.textContent = eligible;
            if (duplicatesCount) duplicatesCount.textContent = duplicates;
            if (errorsCount) errorsCount.textContent = errors;
        }

        // Confirm import
        const confirmBtn = content.querySelector('#confirmImportBtn');
        confirmBtn?.addEventListener('click', () => {
            alert('Import confirmé ! Les données ont été ajoutées à la base de données.');
            if (previewSection) previewSection.style.display = 'none';
            if (fileInput) fileInput.value = '';
        });

        // Cancel import
        const cancelBtn = content.querySelector('#cancelImportBtn');
        cancelBtn?.addEventListener('click', () => {
            if (previewSection) previewSection.style.display = 'none';
            if (fileInput) fileInput.value = '';
        });
    }, 0);

    return AdminLayout(content, 'import');
}
