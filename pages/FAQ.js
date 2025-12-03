// FAQ Page

import { mockFAQ } from '../utils/mockData.js';

export function FAQPage() {
    const page = document.createElement('div');
    page.className = 'faq-page';

    page.innerHTML = `
    <style>
      .faq-search {
        max-width: 600px;
        margin: var(--space-8) auto;
      }
      
      .faq-categories {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-4);
        margin-bottom: var(--space-8);
      }
      
      .category-btn {
        padding: var(--space-3) var(--space-4);
        background: var(--color-white);
        border: 2px solid #E5E7EB;
        border-radius: var(--radius-lg);
        cursor: pointer;
        transition: all var(--transition-fast);
        font-weight: 600;
        color: var(--color-primary);
      }
      
      .category-btn:hover,
      .category-btn.active {
        background: var(--color-primary);
        color: var(--color-white);
        border-color: var(--color-primary);
      }
      
      .faq-section {
        margin-bottom: var(--space-10);
      }
      
      .faq-section h3 {
        color: var(--color-primary);
        margin-bottom: var(--space-5);
        padding-bottom: var(--space-3);
        border-bottom: 3px solid var(--color-accent-gold);
      }
      
      @media (max-width: 768px) {
        .faq-categories {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    </style>
    
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>Questions Fréquentes</h1>
        <p>Trouvez rapidement les réponses à vos questions</p>
      </div>
    </section>
    
    <!-- Search -->
    <section class="section">
      <div class="container">
        <div class="faq-search">
          <div class="form-group">
            <input 
              type="text" 
              class="form-input" 
              id="faqSearch" 
              placeholder="🔍 Rechercher une question..."
            >
          </div>
        </div>
        
        <!-- Category Filter -->
        <div class="faq-categories" id="categoryFilter">
          <button class="category-btn active" data-category="all">Toutes</button>
        </div>
        
        <!-- FAQ Content -->
        <div id="faqContent"></div>
      </div>
    </section>
    
    <!-- Contact CTA -->
    <section class="section" style="background: #F9FAFB;">
      <div class="container text-center">
        <h2>Vous ne trouvez pas la réponse ?</h2>
        <p style="font-size: var(--text-lg); margin-bottom: var(--space-6);">
          Notre équipe est là pour vous aider
        </p>
        <a href="#/contact" class="btn btn-primary btn-lg">Contactez-nous</a>
      </div>
    </section>
  `;

    // Populate FAQ
    setTimeout(() => {
        const categoryFilter = page.querySelector('#categoryFilter');
        const faqContent = page.querySelector('#faqContent');
        const searchInput = page.querySelector('#faqSearch');

        // Add category buttons
        if (categoryFilter) {
            mockFAQ.forEach(cat => {
                const btn = document.createElement('button');
                btn.className = 'category-btn';
                btn.textContent = cat.categorie;
                btn.dataset.category = cat.categorie;
                categoryFilter.appendChild(btn);
            });
        }

        // Render FAQ
        function renderFAQ(filter = 'all', searchTerm = '') {
            if (!faqContent) return;

            let filteredFAQ = mockFAQ;

            // Filter by category
            if (filter !== 'all') {
                filteredFAQ = mockFAQ.filter(cat => cat.categorie === filter);
            }

            // Filter by search
            if (searchTerm) {
                filteredFAQ = filteredFAQ.map(cat => ({
                    ...cat,
                    questions: cat.questions.filter(q =>
                        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        q.reponse.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                })).filter(cat => cat.questions.length > 0);
            }

            faqContent.innerHTML = filteredFAQ.map(category => `
        <div class="faq-section">
          <h3>${category.categorie}</h3>
          ${category.questions.map((q, index) => `
            <div class="accordion-item">
              <div class="accordion-header" data-index="${index}">
                <span>${q.question}</span>
                <span class="accordion-icon">▼</span>
              </div>
              <div class="accordion-content">
                <div class="accordion-body">
                  ${q.reponse}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `).join('');

            // Add accordion functionality
            const accordionHeaders = faqContent.querySelectorAll('.accordion-header');
            accordionHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const item = header.parentElement;
                    item.classList.toggle('active');
                });
            });
        }

        // Initial render
        renderFAQ();

        // Category filter
        if (categoryFilter) {
            categoryFilter.addEventListener('click', (e) => {
                if (e.target.classList.contains('category-btn')) {
                    // Update active state
                    categoryFilter.querySelectorAll('.category-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    e.target.classList.add('active');

                    // Filter FAQ
                    const category = e.target.dataset.category;
                    renderFAQ(category, searchInput?.value || '');
                }
            });
        }

        // Search
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const activeCategory = categoryFilter?.querySelector('.category-btn.active')?.dataset.category || 'all';
                renderFAQ(activeCategory, e.target.value);
            });
        }
    }, 0);

    return page;
}
