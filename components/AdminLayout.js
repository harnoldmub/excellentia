// Admin Layout Component

import { storage } from '../utils/mockData.js';
import router from '../router.js';

export function AdminLayout(content, activeRoute = '') {
  const container = document.createElement('div');
  container.className = 'admin-layout';

  const session = storage.getAdminSession();

  container.innerHTML = `
    <style>
      .admin-layout {
        display: flex;
        min-height: 100vh;
        background: #F9FAFB;
      }
      
      .admin-sidebar {
        width: 260px;
        background: var(--gradient-primary);
        color: var(--color-white);
        padding: var(--space-6);
        position: fixed;
        height: 100vh;
        overflow-y: auto;
      }
      
      .admin-logo {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        margin-bottom: var(--space-8);
        padding-bottom: var(--space-6);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      .admin-logo img {
        height: 40px;
        filter: brightness(0) invert(1);
      }
      
      .admin-logo-text {
        font-weight: 700;
        font-size: var(--text-lg);
      }
      
      .admin-user {
        background: rgba(255, 255, 255, 0.1);
        padding: var(--space-4);
        border-radius: var(--radius-lg);
        margin-bottom: var(--space-6);
      }
      
      .admin-user-name {
        font-weight: 600;
        margin-bottom: var(--space-1);
      }
      
      .admin-user-role {
        font-size: var(--text-sm);
        opacity: 0.8;
      }
      
      .admin-nav {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .admin-nav-item {
        margin-bottom: var(--space-2);
      }
      
      .admin-nav-link {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        padding: var(--space-3) var(--space-4);
        color: var(--color-white);
        text-decoration: none;
        border-radius: var(--radius-md);
        transition: all var(--transition-fast);
        cursor: pointer;
      }
      
      .admin-nav-link:hover {
        background: rgba(255, 255, 255, 0.1);
      }
      
      .admin-nav-link.active {
        background: var(--color-accent-gold);
        color: var(--color-primary);
        font-weight: 600;
      }
      
      .admin-logout {
        margin-top: var(--space-8);
        padding-top: var(--space-6);
        border-top: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      .admin-main {
        margin-left: 260px;
        flex: 1;
        padding: var(--space-6);
      }
      
      .admin-header {
        background: var(--color-white);
        padding: var(--space-5) var(--space-6);
        border-radius: var(--radius-xl);
        margin-bottom: var(--space-6);
        box-shadow: var(--shadow-sm);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .admin-header h1 {
        margin: 0;
        font-size: var(--text-3xl);
        color: var(--color-primary);
      }
      
      .admin-content {
        background: var(--color-white);
        padding: var(--space-6);
        border-radius: var(--radius-xl);
        box-shadow: var(--shadow-sm);
        min-height: calc(100vh - 200px);
      }
      
      @media (max-width: 768px) {
        .admin-sidebar {
          width: 100%;
          position: relative;
          height: auto;
        }
        
        .admin-main {
          margin-left: 0;
        }
      }
    </style>
    
    <div class="admin-sidebar">
      <div class="admin-logo">
        <img src="/logo-header.png" alt="Excellentia-RDC">
        <div class="admin-logo-text">Admin</div>
      </div>
      
      <div class="admin-user">
        <div class="admin-user-name">${session?.email || 'Admin'}</div>
        <div class="admin-user-role">${getRoleLabel(session?.role)}</div>
      </div>
      
      <ul class="admin-nav">
        <li class="admin-nav-item">
          <a class="admin-nav-link ${activeRoute === 'dashboard' ? 'active' : ''}" data-route="/admin/dashboard">
            📊 Dashboard
          </a>
        </li>
        <li class="admin-nav-item">
          <a class="admin-nav-link ${activeRoute === 'candidates' ? 'active' : ''}" data-route="/admin/candidates">
            👥 Candidats
          </a>
        </li>
        <li class="admin-nav-item">
          <a class="admin-nav-link ${activeRoute === 'import' ? 'active' : ''}" data-route="/admin/import">
            📥 Import / Gestion
          </a>
        </li>
        <li class="admin-nav-item">
          <a class="admin-nav-link ${activeRoute === 'notifications' ? 'active' : ''}" data-route="/admin/notifications">
            🔔 Notifications
          </a>
        </li>
        <li class="admin-nav-item">
          <a class="admin-nav-link ${activeRoute === 'reports' ? 'active' : ''}" data-route="/admin/reports">
            📈 Rapports
          </a>
        </li>
      </ul>
      
      <div class="admin-logout">
        <button class="admin-nav-link" id="logoutBtn" style="width: 100%; border: none; background: none; text-align: left;">
          🚪 Déconnexion
        </button>
      </div>
    </div>
    
    <div class="admin-main">
      <div id="adminContent"></div>
    </div>
  `;

  // Add navigation
  setTimeout(() => {
    const links = container.querySelectorAll('[data-route]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const route = link.getAttribute('data-route');
        router.navigate(route);
      });
    });

    // Logout
    const logoutBtn = container.querySelector('#logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        storage.clearAdminSession();
        router.navigate('/admin/login');
      });
    }

    // Insert content
    const contentDiv = container.querySelector('#adminContent');
    if (contentDiv && content) {
      contentDiv.appendChild(content);
    }
  }, 0);

  return container;
}

function getRoleLabel(role) {
  const labels = {
    'admin_national': 'Administrateur National',
    'admin_provincial': 'Administrateur Provincial',
    'lecture': 'Lecture seule'
  };
  return labels[role] || 'Administrateur';
}
