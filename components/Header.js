// Header Component

import router from '../router.js';

export function Header() {
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
    <style>
      .header {
        position: sticky;
        top: 0;
        z-index: var(--z-sticky);
        background: var(--color-white);
        box-shadow: var(--shadow-md);
        transition: all var(--transition-base);
      }
      
      .header-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-4) var(--space-4);
        max-width: 1440px;
        margin: 0 auto;
      }
      
      .header-logo {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        text-decoration: none;
        cursor: pointer;
      }
      
      .header-logo img {
        height: 50px;
        width: auto;
      }
      
      .header-logo-text {
        display: flex;
        flex-direction: column;
      }
      
      .header-logo-title {
        font-family: var(--font-heading);
        font-size: var(--text-lg);
        font-weight: 700;
        color: var(--color-primary);
        line-height: 1.2;
      }
      
      .header-logo-subtitle {
        font-size: var(--text-xs);
        color: var(--color-accent-red);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .header-nav {
        display: flex;
        align-items: center;
        gap: var(--space-6);
      }
      
      .nav-menu {
        display: flex;
        gap: var(--space-5);
        list-style: none;
        margin: 0;
        padding: 0;
      }
      
      .nav-link {
        font-weight: 600;
        color: var(--color-primary);
        text-decoration: none;
        padding: var(--space-2) var(--space-3);
        border-radius: var(--radius-md);
        transition: all var(--transition-fast);
        cursor: pointer;
      }
      
      .nav-link:hover {
        background: rgba(0, 58, 112, 0.1);
        color: var(--color-accent-cyan);
      }
      
      .nav-link.active {
        background: var(--color-primary);
        color: var(--color-white);
      }
      
      .header-actions {
        display: flex;
        gap: var(--space-3);
      }
      
      .mobile-menu-toggle {
        display: none;
        background: none;
        border: none;
        font-size: var(--text-2xl);
        color: var(--color-primary);
        cursor: pointer;
        padding: var(--space-2);
      }
      
      @media (max-width: 1024px) {
        .nav-menu {
          gap: var(--space-3);
        }
        
        .header-actions .btn {
          padding: var(--space-2) var(--space-4);
          font-size: var(--text-sm);
        }
      }
      
      @media (max-width: 768px) {
        .header-logo-text {
          display: none;
        }
        
        .header-nav {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          background: var(--color-white);
          flex-direction: column;
          padding: var(--space-6);
          box-shadow: var(--shadow-xl);
          transform: translateY(-100%);
          opacity: 0;
          transition: all var(--transition-base);
          pointer-events: none;
        }
        
        .header-nav.active {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }
        
        .nav-menu {
          flex-direction: column;
          width: 100%;
        }
        
        .nav-link {
          width: 100%;
          text-align: center;
          padding: var(--space-3);
        }
        
        .header-actions {
          flex-direction: column;
          width: 100%;
        }
        
        .header-actions .btn {
          width: 100%;
        }
        
        .mobile-menu-toggle {
          display: block;
        }
      }
    </style>
    
    <div class="header-container">
      <a class="header-logo" data-link="/">
        <img src="/logo-header.png" alt="Excellentia-RDC - Programme National de Bourses Universitaires">
      </a>
      
      <nav class="header-nav" id="headerNav">
        <ul class="nav-menu">
          <li><a class="nav-link" data-link="/">Accueil</a></li>
          <li><a class="nav-link" data-link="/programme">Programme</a></li>
          <li><a class="nav-link" data-link="/eligibilite">Éligibilité</a></li>
          <li><a class="nav-link" data-link="/avantages">Avantages</a></li>
          <li><a class="nav-link" data-link="/boursiers">Boursiers</a></li>
          <li><a class="nav-link" data-link="/faq">FAQ</a></li>
          <li><a class="nav-link" data-link="/contact">Contact</a></li>
        </ul>
        
        <div class="header-actions">
          <a href="#/candidater" class="btn btn-primary btn-sm">Candidater</a>
          <a href="#/admin/login" class="btn btn-outline btn-sm">Admin</a>
        </div>
      </nav>
      
      <button class="mobile-menu-toggle" id="mobileMenuToggle">
        ☰
      </button>
    </div>
  `;

  // Add event listeners
  setTimeout(() => {
    // Navigation links
    const links = header.querySelectorAll('[data-link]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const path = link.getAttribute('data-link');
        router.navigate(path);

        // Close mobile menu
        const nav = document.getElementById('headerNav');
        if (nav) nav.classList.remove('active');
      });
    });

    // Mobile menu toggle
    const toggle = header.querySelector('#mobileMenuToggle');
    const nav = header.querySelector('#headerNav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
      });
    }

    // Update active link
    updateActiveLink();
  }, 0);

  return header;
}

function updateActiveLink() {
  const currentPath = window.location.hash.slice(1) || '/';
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    const linkPath = link.getAttribute('data-link');
    if (linkPath === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Update active link on route change
window.addEventListener('hashchange', updateActiveLink);
