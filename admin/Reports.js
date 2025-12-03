// Admin Reports Page

import { AdminLayout } from '../components/AdminLayout.js';
import { storage, mockProvinces, mockStatistics } from '../utils/mockData.js';

export function AdminReportsPage() {
    const content = document.createElement('div');

    const candidates = storage.getCandidates();

    content.innerHTML = `
    <style>
      .report-filters {
        background: var(--color-white);
        padding: var(--space-5);
        border-radius: var(--radius-lg);
        margin-bottom: var(--space-6);
        display: flex;
        gap: var(--space-4);
        align-items: end;
      }
      
      .report-filters > div {
        flex: 1;
      }
      
      .charts-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-6);
        margin-bottom: var(--space-6);
      }
      
      .chart-card {
        background: var(--color-white);
        padding: var(--space-6);
        border-radius: var(--radius-lg);
      }
      
      .chart-card h3 {
        margin-bottom: var(--space-5);
        color: var(--color-primary);
      }
      
      .evolution-chart {
        height: 300px;
        background: #F9FAFB;
        border-radius: var(--radius-md);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6B7280;
      }
      
      .province-table {
        width: 100%;
        border-collapse: collapse;
      }
      
      .province-table th {
        text-align: left;
        padding: var(--space-3);
        background: #F9FAFB;
        font-size: var(--text-sm);
        font-weight: 600;
        border-bottom: 2px solid #E5E7EB;
      }
      
      .province-table td {
        padding: var(--space-3);
        border-bottom: 1px solid #F3F4F6;
        font-size: var(--text-sm);
      }
      
      .province-table tr:hover {
        background: #F9FAFB;
      }
      
      .export-section {
        background: var(--color-white);
        padding: var(--space-6);
        border-radius: var(--radius-lg);
        text-align: center;
      }
      
      .export-buttons {
        display: flex;
        gap: var(--space-4);
        justify-content: center;
        margin-top: var(--space-5);
      }
      
      @media (max-width: 1024px) {
        .charts-grid {
          grid-template-columns: 1fr;
        }
        
        .report-filters {
          flex-direction: column;
        }
      }
    </style>
    
    <div class="dashboard-header">
      <h1>Rapports & KPI</h1>
      <p>Analyses et statistiques du programme</p>
    </div>
    
    <!-- Filters -->
    <div class="report-filters">
      <div>
        <label class="form-label">Date de début</label>
        <input type="date" class="form-input" id="startDate">
      </div>
      
      <div>
        <label class="form-label">Date de fin</label>
        <input type="date" class="form-input" id="endDate">
      </div>
      
      <div>
        <label class="form-label">Province</label>
        <select class="form-select" id="provinceFilter">
          <option value="">Toutes les provinces</option>
          ${mockProvinces.map(p => `<option value="${p.nom}">${p.nom}</option>`).join('')}
        </select>
      </div>
      
      <div>
        <button class="btn btn-primary" id="applyFiltersBtn" style="width: 100%;">
          Appliquer
        </button>
      </div>
    </div>
    
    <!-- Charts -->
    <div class="charts-grid">
      <!-- Evolution Chart -->
      <div class="chart-card">
        <h3>Évolution des inscriptions</h3>
        <div class="evolution-chart">
          📊 Graphique d'évolution<br>
          <span style="font-size: var(--text-sm);">(Chart.js sera intégré ici)</span>
        </div>
      </div>
      
      <!-- Status Distribution -->
      <div class="chart-card">
        <h3>Répartition par statut</h3>
        <div style="padding: var(--space-4);">
          <div class="province-bar" style="margin-bottom: var(--space-4);">
            <div class="province-header">
              <span class="province-name">Retenu pour concours</span>
              <span class="province-count">${candidates.filter(c => c.statut === 'Retenu pour concours').length}</span>
            </div>
            <div class="province-progress">
              <div class="province-progress-bar" style="width: ${(candidates.filter(c => c.statut === 'Retenu pour concours').length / candidates.length) * 100}%; background: #10B981;"></div>
            </div>
          </div>
          
          <div class="province-bar" style="margin-bottom: var(--space-4);">
            <div class="province-header">
              <span class="province-name">Dossier complet</span>
              <span class="province-count">${candidates.filter(c => c.statut === 'Dossier complet').length}</span>
            </div>
            <div class="province-progress">
              <div class="province-progress-bar" style="width: ${(candidates.filter(c => c.statut === 'Dossier complet').length / candidates.length) * 100}%; background: var(--color-accent-cyan);"></div>
            </div>
          </div>
          
          <div class="province-bar" style="margin-bottom: var(--space-4);">
            <div class="province-header">
              <span class="province-name">Dossier incomplet</span>
              <span class="province-count">${candidates.filter(c => c.statut === 'Dossier incomplet').length}</span>
            </div>
            <div class="province-progress">
              <div class="province-progress-bar" style="width: ${(candidates.filter(c => c.statut === 'Dossier incomplet').length / candidates.length) * 100}%; background: #F59E0B;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Province Summary Table -->
    <div class="chart-card">
      <h3>Tableau récapitulatif par province</h3>
      <div style="overflow-x: auto;">
        <table class="province-table">
          <thead>
            <tr>
              <th>Province</th>
              <th>Éligibles</th>
              <th>Inscrits</th>
              <th>Complets</th>
              <th>Retenus</th>
              <th>Taux de conversion</th>
            </tr>
          </thead>
          <tbody>
            ${mockProvinces.map(p => `
              <tr>
                <td><strong>${p.nom}</strong></td>
                <td>${p.eligibles.toLocaleString()}</td>
                <td>${p.inscrits.toLocaleString()}</td>
                <td>${p.complets.toLocaleString()}</td>
                <td>${p.retenus.toLocaleString()}</td>
                <td><strong>${((p.inscrits / p.eligibles) * 100).toFixed(1)}%</strong></td>
              </tr>
            `).join('')}
          </tbody>
          <tfoot>
            <tr style="background: #F9FAFB; font-weight: 700;">
              <td>TOTAL</td>
              <td>${mockProvinces.reduce((sum, p) => sum + p.eligibles, 0).toLocaleString()}</td>
              <td>${mockProvinces.reduce((sum, p) => sum + p.inscrits, 0).toLocaleString()}</td>
              <td>${mockProvinces.reduce((sum, p) => sum + p.complets, 0).toLocaleString()}</td>
              <td>${mockProvinces.reduce((sum, p) => sum + p.retenus, 0).toLocaleString()}</td>
              <td>${((mockProvinces.reduce((sum, p) => sum + p.inscrits, 0) / mockProvinces.reduce((sum, p) => sum + p.eligibles, 0)) * 100).toFixed(1)}%</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    
    <!-- Export Section -->
    <div class="export-section">
      <h3 style="margin-bottom: var(--space-4);">Exporter les rapports</h3>
      <p style="color: #6B7280; margin-bottom: var(--space-5);">
        Téléchargez les données pour les présenter au Ministère ou aux partenaires
      </p>
      
      <div class="export-buttons">
        <button class="btn btn-primary btn-lg" id="exportExcelBtn">
          📊 Exporter en Excel
        </button>
        <button class="btn btn-secondary btn-lg" id="exportPdfBtn">
          📄 Exporter en PDF
        </button>
        <button class="btn btn-outline btn-lg" id="printBtn">
          🖨️ Imprimer
        </button>
      </div>
    </div>
  `;

    // Add event listeners
    setTimeout(() => {
        // Export buttons
        const exportExcelBtn = content.querySelector('#exportExcelBtn');
        const exportPdfBtn = content.querySelector('#exportPdfBtn');
        const printBtn = content.querySelector('#printBtn');

        exportExcelBtn?.addEventListener('click', () => {
            alert('📊 Export Excel\n\nLe fichier Excel sera généré avec toutes les données du rapport.\n\nFonctionnalité à implémenter avec une bibliothèque comme SheetJS.');
        });

        exportPdfBtn?.addEventListener('click', () => {
            alert('📄 Export PDF\n\nLe rapport PDF sera généré avec les graphiques et tableaux.\n\nFonctionnalité à implémenter avec une bibliothèque comme jsPDF.');
        });

        printBtn?.addEventListener('click', () => {
            window.print();
        });

        // Apply filters
        const applyBtn = content.querySelector('#applyFiltersBtn');
        applyBtn?.addEventListener('click', () => {
            const startDate = content.querySelector('#startDate')?.value;
            const endDate = content.querySelector('#endDate')?.value;
            const province = content.querySelector('#provinceFilter')?.value;

            alert(`Filtres appliqués:\nDébut: ${startDate || 'Non défini'}\nFin: ${endDate || 'Non défini'}\nProvince: ${province || 'Toutes'}`);
        });
    }, 0);

    return AdminLayout(content, 'reports');
}
