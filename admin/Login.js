// Admin Login Page

import { storage } from '../utils/mockData.js';
import router from '../router.js';

export function AdminLoginPage() {
    const page = document.createElement('div');
    page.className = 'admin-login-page';

    page.innerHTML = `
    <style>
      .login-container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--gradient-primary);
        padding: var(--space-4);
      }
      
      .login-box {
        background: var(--color-white);
        border-radius: var(--radius-xl);
        padding: var(--space-10);
        box-shadow: var(--shadow-2xl);
        max-width: 450px;
        width: 100%;
      }
      
      .login-header {
        text-align: center;
        margin-bottom: var(--space-8);
      }
      
      .login-logo {
        width: 80px;
        height: auto;
        margin-bottom: var(--space-4);
      }
      
      .login-header h2 {
        color: var(--color-primary);
        margin-bottom: var(--space-2);
      }
      
      .login-header p {
        color: #6B7280;
        margin: 0;
      }
      
      .back-link {
        display: inline-flex;
        align-items: center;
        gap: var(--space-2);
        color: var(--color-accent-cyan);
        text-decoration: none;
        margin-bottom: var(--space-6);
        font-weight: 600;
        transition: color var(--transition-fast);
      }
      
      .back-link:hover {
        color: var(--color-primary);
      }
    </style>
    
    <div class="login-container">
      <div class="login-box">
        <a href="#/" class="back-link">← Retour au site</a>
        
        <div class="login-header">
          <img src="/Logo@4x.png" alt="Excellentia-RDC" class="login-logo">
          <h2>Espace Administrateur</h2>
          <p>Connectez-vous pour accéder au back-office</p>
        </div>
        
        <form id="loginForm">
          <div class="form-group">
            <label class="form-label">Email</label>
            <input 
              type="email" 
              class="form-input" 
              id="email" 
              placeholder="admin@excellentia-rdc.cd"
              required
            >
          </div>
          
          <div class="form-group">
            <label class="form-label">Mot de passe</label>
            <input 
              type="password" 
              class="form-input" 
              id="password" 
              placeholder="••••••••"
              required
            >
          </div>
          
          <div class="form-group">
            <label class="form-label">Rôle</label>
            <select class="form-select" id="role" required>
              <option value="">Sélectionner...</option>
              <option value="admin_national">Admin National</option>
              <option value="admin_provincial">Admin Provincial</option>
              <option value="lecture">Lecture seule</option>
            </select>
          </div>
          
          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%; margin-top: var(--space-4);">
            Se connecter
          </button>
          
          <div id="loginError" style="margin-top: var(--space-4); display: none;"></div>
        </form>
        
        <div class="alert alert-info" style="margin-top: var(--space-6);">
          <p style="margin: 0; font-size: var(--text-sm);">
            <strong>Demo:</strong> Utilisez n'importe quel email et mot de passe pour accéder au back-office de démonstration.
          </p>
        </div>
      </div>
    </div>
  `;

    // Add form handler
    setTimeout(() => {
        const form = page.querySelector('#loginForm');
        const errorDiv = page.querySelector('#loginError');

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const email = page.querySelector('#email').value;
                const role = page.querySelector('#role').value;

                if (!role) {
                    errorDiv.style.display = 'block';
                    errorDiv.innerHTML = `
            <div class="alert alert-danger">
              Veuillez sélectionner un rôle
            </div>
          `;
                    return;
                }

                // Save session
                storage.saveAdminSession({
                    email,
                    role,
                    loginTime: new Date().toISOString()
                });

                // Redirect to dashboard
                router.navigate('/admin/dashboard');
            });
        }
    }, 0);

    return page;
}
