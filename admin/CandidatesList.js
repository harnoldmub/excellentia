// Admin Candidates List Page

import { AdminLayout } from '../components/AdminLayout.js';
import { storage } from '../utils/mockData.js';
import router from '../router.js';

export function AdminCandidatesPage() {
    const content = document.createElement('div');

    const candidates = storage.getCandidates();

    content.innerHTML = `
    <style>
      .filters-section {
        background: #F9FAFB;
        padding: var(--space-5);
        border-radius: var(--radius-lg);
        margin-bottom: var(--space-6);
      }
      
      .filters-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-4);
      }
      
      .search-box {
        grid-column: span 2;
      }
      
      .candidates-table-container {
        overflow-x: auto;
      }
      
      .action-btn {
        padding: var(--space-2) var(--space-3);
        font-size: var(--text-sm);
        margin-right: var(--space-2);
      }
      
      @media (max-width: 1024px) {
        .filters-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        
        .search-box {
          grid-column: span 2;
        }
      }
      
      @media (max-width: 768px) {
        .filters-grid {
          grid-template-columns: 1fr;
        }
        
        .search-box {
          grid-column: span 1;
        }
      }
    </style>
    
    <div class="dashboard-header">
      <h1>Gestion des Candidats</h1>
      <p>Liste complète des candidats avec filtres</p>
    </div>
    
    <!-- Filters -->
    <div class="filters-section">
      <div class="filters-grid">
        <div class="search-box">
          <input 
            type="text" 
            class="form-input" 
            id="searchInput" 
            placeholder="🔍 Rechercher par nom, numéro..."
          >
        </div>
        
        <div>
          <select class="form-select" id="provinceFilter">
            <option value="">Toutes les provinces</option>
            <option value="Kinshasa">Kinshasa</option>
            <option value="Haut-Katanga">Haut-Katanga</option>
            <option value="Kongo Central">Kongo Central</option>
            <option value="Nord-Kivu">Nord-Kivu</option>
            <option value="Kasaï">Kasaï</option>
          </select>
        </div>
        
        <div>
          <select class="form-select" id="statusFilter">
            <option value="">Tous les statuts</option>
            <option value="Retenu pour concours">Retenu pour concours</option>
            <option value="Dossier complet">Dossier complet</option>
            <option value="Dossier incomplet">Dossier incomplet</option>
            <option value="Rejeté">Rejeté</option>
          </select>
        </div>
        
        <div>
          <select class="form-select" id="scoreFilter">
            <option value="">Tous les scores</option>
            <option value="95">≥ 95%</option>
            <option value="90">≥ 90%</option>
            <option value="85">≥ 85%</option>
            <option value="80">≥ 80%</option>
          </select>
        </div>
      </div>
    </div>
    
    <!-- Table -->
    <div class="candidates-table-container">
      <table class="table">
        <thead>
          <tr>
            <th>Nom & Prénom</th>
            <th>N° Exetat</th>
            <th>Score</th>
            <th>Province</th>
            <th>Genre</th>
            <th>Statut</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="candidatesTableBody"></tbody>
      </table>
    </div>
  `;

    // Render table
    function renderTable(filteredCandidates = candidates) {
        const tbody = content.querySelector('#candidatesTableBody');
        if (!tbody) return;

        tbody.innerHTML = filteredCandidates.map(c => `
      <tr>
        <td><strong>${c.nom} ${c.prenom}</strong></td>
        <td>${c.numeroExetat}</td>
        <td><strong>${c.score}%</strong></td>
        <td>${c.province}</td>
        <td>${c.genre === 'F' ? '👩 F' : '👨 M'}</td>
        <td><span class="badge ${getStatusBadgeClass(c.statut)}">${c.statut}</span></td>
        <td>${new Date(c.dateInscription).toLocaleDateString('fr-FR')}</td>
        <td>
          <button class="btn btn-sm btn-primary action-btn" data-id="${c.id}">Voir</button>
        </td>
      </tr>
    `).join('');

        // Add click handlers
        tbody.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                router.navigate(`/admin/candidate/${id}`);
            });
        });
    }

    // Filter function
    function applyFilters() {
        const searchTerm = content.querySelector('#searchInput')?.value.toLowerCase() || '';
        const province = content.querySelector('#provinceFilter')?.value || '';
        const status = content.querySelector('#statusFilter')?.value || '';
        const minScore = content.querySelector('#scoreFilter')?.value || '';

        let filtered = candidates;

        if (searchTerm) {
            filtered = filtered.filter(c =>
                c.nom.toLowerCase().includes(searchTerm) ||
                c.prenom.toLowerCase().includes(searchTerm) ||
                c.numeroExetat.toLowerCase().includes(searchTerm)
            );
        }

        if (province) {
            filtered = filtered.filter(c => c.province === province);
        }

        if (status) {
            filtered = filtered.filter(c => c.statut === status);
        }

        if (minScore) {
            filtered = filtered.filter(c => c.score >= parseFloat(minScore));
        }

        renderTable(filtered);
    }

    // Add event listeners
    setTimeout(() => {
        renderTable();

        const searchInput = content.querySelector('#searchInput');
        const provinceFilter = content.querySelector('#provinceFilter');
        const statusFilter = content.querySelector('#statusFilter');
        const scoreFilter = content.querySelector('#scoreFilter');

        if (searchInput) searchInput.addEventListener('input', applyFilters);
        if (provinceFilter) provinceFilter.addEventListener('change', applyFilters);
        if (statusFilter) statusFilter.addEventListener('change', applyFilters);
        if (scoreFilter) scoreFilter.addEventListener('change', applyFilters);
    }, 0);

    return AdminLayout(content, 'candidates');
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
