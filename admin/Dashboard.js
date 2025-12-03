// Admin Dashboard Page

import { AdminLayout } from '../components/AdminLayout.js';
import { storage, mockStatistics, mockProvinces } from '../utils/mockData.js';

export function AdminDashboardPage() {
    const content = document.createElement('div');

    const candidates = storage.getCandidates();
    const stats = {
        totalEligibles: mockStatistics.totalEligibles,
        totalInscrits: candidates.length,
        dossiersComplets: candidates.filter(c => c.statut === 'Dossier complet' || c.statut === 'Retenu pour concours').length,
        retenus: candidates.filter(c => c.statut === 'Retenu pour concours').length
    };

    content.innerHTML = `
    <style>
      .dashboard-header {
        background: var(--color-white);
        padding: var(--space-5) var(--space-6);
        border-radius: var(--radius-xl);
        margin-bottom: var(--space-6);
        box-shadow: var(--shadow-sm);
      }
      
      .dashboard-header h1 {
        margin: 0 0 var(--space-2);
        font-size: var(--text-3xl);
        color: var(--color-primary);
      }
      
      .dashboard-header p {
        margin: 0;
        color: #6B7280;
      }
      
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-4);
        margin-bottom: var(--space-6);
      }
      
      .stat-widget {
        background: var(--color-white);
        padding: var(--space-5);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        border-left: 4px solid var(--color-accent-gold);
      }
      
      .stat-label {
        font-size: var(--text-sm);
        color: #6B7280;
        margin-bottom: var(--space-2);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .stat-value {
        font-size: var(--text-4xl);
        font-weight: 800;
        color: var(--color-primary);
        font-family: var(--font-heading);
      }
      
      .chart-section {
        background: var(--color-white);
        padding: var(--space-6);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        margin-bottom: var(--space-6);
      }
      
      .chart-section h3 {
        margin-bottom: var(--space-5);
        color: var(--color-primary);
      }
      
      .province-bar {
        margin-bottom: var(--space-4);
      }
      
      .province-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: var(--space-2);
        font-size: var(--text-sm);
      }
      
      .province-name {
        font-weight: 600;
        color: var(--color-primary);
      }
      
      .province-count {
        color: #6B7280;
      }
      
      .province-progress {
        height: 8px;
        background: #E5E7EB;
        border-radius: var(--radius-full);
        overflow: hidden;
      }
      
      .province-progress-bar {
        height: 100%;
        background: var(--gradient-gold);
        transition: width var(--transition-slow);
      }
      
      .recent-table {
        width: 100%;
        border-collapse: collapse;
      }
      
      .recent-table th {
        text-align: left;
        padding: var(--space-3);
        background: #F9FAFB;
        font-size: var(--text-sm);
        color: var(--color-primary);
        font-weight: 600;
        border-bottom: 2px solid #E5E7EB;
      }
      
      .recent-table td {
        padding: var(--space-3);
        border-bottom: 1px solid #F3F4F6;
        font-size: var(--text-sm);
      }
      
      .recent-table tr:hover {
        background: #F9FAFB;
      }
      
      @media (max-width: 1024px) {
        .stats-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      
      @media (max-width: 768px) {
        .stats-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>
    
    <div class="dashboard-header">
      <h1>Dashboard</h1>
      <p>Vue d'ensemble du programme Excellentia-RDC</p>
    </div>
    
    <!-- Stats Widgets -->
    <div class="stats-grid">
      <div class="stat-widget">
        <div class="stat-label">Éligibles identifiés</div>
        <div class="stat-value">${stats.totalEligibles.toLocaleString()}</div>
      </div>
      
      <div class="stat-widget">
        <div class="stat-label">Candidats inscrits</div>
        <div class="stat-value">${stats.totalInscrits.toLocaleString()}</div>
      </div>
      
      <div class="stat-widget">
        <div class="stat-label">Dossiers complets</div>
        <div class="stat-value">${stats.dossiersComplets.toLocaleString()}</div>
      </div>
      
      <div class="stat-widget">
        <div class="stat-label">Retenus concours</div>
        <div class="stat-value">${stats.retenus.toLocaleString()}</div>
      </div>
    </div>
    
    <!-- Province Distribution -->
    <div class="chart-section">
      <h3>Répartition par province</h3>
      <div id="provinceChart"></div>
    </div>
    
    <!-- Recent Candidates -->
    <div class="chart-section">
      <h3>Derniers candidats inscrits</h3>
      <table class="recent-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Province</th>
            <th>Score</th>
            <th>Statut</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="recentCandidates"></tbody>
      </table>
    </div>
  `;

    // Populate province chart
    setTimeout(() => {
        const chartDiv = content.querySelector('#provinceChart');
        if (chartDiv) {
            const maxInscrits = Math.max(...mockProvinces.map(p => p.inscrits));

            chartDiv.innerHTML = mockProvinces.slice(0, 8).map(province => `
        <div class="province-bar">
          <div class="province-header">
            <span class="province-name">${province.nom}</span>
            <span class="province-count">${province.inscrits} inscrits</span>
          </div>
          <div class="province-progress">
            <div class="province-progress-bar" style="width: ${(province.inscrits / maxInscrits) * 100}%"></div>
          </div>
        </div>
      `).join('');
        }

        // Populate recent candidates
        const recentTable = content.querySelector('#recentCandidates');
        if (recentTable) {
            const recent = candidates.slice(0, 5);
            recentTable.innerHTML = recent.map(c => `
        <tr>
          <td><strong>${c.nom} ${c.prenom}</strong></td>
          <td>${c.province}</td>
          <td>${c.score}%</td>
          <td><span class="badge ${getStatusBadgeClass(c.statut)}">${c.statut}</span></td>
          <td>${new Date(c.dateInscription).toLocaleDateString('fr-FR')}</td>
        </tr>
      `).join('');
        }
    }, 0);

    return AdminLayout(content, 'dashboard');
}

function getStatusBadgeClass(statut) {
    const classes = {
        'Retenu pour concours': 'badge-success',
        'Dossier complet': 'badge-primary',
        'Dossier incomplet': 'badge-warning',
        'Rejeté': 'badge-danger'
    };
    return classes[statut] || 'badge-primary';
}
