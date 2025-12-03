// Main Application Entry Point

import './styles/global.css';
import './styles/components.css';
import router from './router.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { storage } from './utils/mockData.js';

// Import Pages
import { HomePage } from './pages/Home.js';
import { ProgrammePage } from './pages/Programme.js';
import { EligibilitePage } from './pages/Eligibilite.js';
import { AvantagesPage } from './pages/Avantages.js';
import { CandidaterPage } from './pages/Candidater.js';
import { BoursiersPage } from './pages/Boursiers.js';
import { FAQPage } from './pages/FAQ.js';
import { ContactPage } from './pages/Contact.js';

// Import Admin Pages
import { AdminLoginPage } from './admin/Login.js';

// App container
const app = document.getElementById('app');

// Check if admin route
function isAdminRoute() {
    const hash = window.location.hash.slice(1);
    return hash.startsWith('/admin');
}

// Render layout
function renderLayout(content) {
    app.innerHTML = '';

    // Don't show header/footer on admin pages
    if (!isAdminRoute()) {
        app.appendChild(Header());
    }

    app.appendChild(content);

    if (!isAdminRoute()) {
        app.appendChild(Footer());
    }
}

// Register routes
router.register('/', async () => {
    renderLayout(HomePage());
});

router.register('/programme', async () => {
    renderLayout(ProgrammePage());
});

router.register('/eligibilite', async () => {
    renderLayout(EligibilitePage());
});

router.register('/avantages', async () => {
    renderLayout(AvantagesPage());
});

router.register('/candidater', async () => {
    renderLayout(CandidaterPage());
});

router.register('/boursiers', async () => {
    renderLayout(BoursiersPage());
});

router.register('/faq', async () => {
    renderLayout(FAQPage());
});

router.register('/contact', async () => {
    renderLayout(ContactPage());
});

// Admin routes
router.register('/admin/login', async () => {
    renderLayout(AdminLoginPage());
});

router.register('/admin/dashboard', async () => {
    // Check if logged in
    if (!storage.isAdminLoggedIn()) {
        router.navigate('/admin/login');
        return;
    }

    // Import and render dashboard (will be created next)
    const { AdminDashboardPage } = await import('./admin/Dashboard.js');
    renderLayout(AdminDashboardPage());
});

router.register('/admin/candidates', async () => {
    if (!storage.isAdminLoggedIn()) {
        router.navigate('/admin/login');
        return;
    }

    const { AdminCandidatesPage } = await import('./admin/CandidatesList.js');
    renderLayout(AdminCandidatesPage());
});

router.register('/admin/candidate/:id', async () => {
    if (!storage.isAdminLoggedIn()) {
        router.navigate('/admin/login');
        return;
    }

    const { AdminCandidateDetailPage } = await import('./admin/CandidateDetail.js');
    renderLayout(AdminCandidateDetailPage());
});

router.register('/admin/import', async () => {
    if (!storage.isAdminLoggedIn()) {
        router.navigate('/admin/login');
        return;
    }

    const { AdminImportPage } = await import('./admin/Import.js');
    renderLayout(AdminImportPage());
});

router.register('/admin/notifications', async () => {
    if (!storage.isAdminLoggedIn()) {
        router.navigate('/admin/login');
        return;
    }

    const { AdminNotificationsPage } = await import('./admin/Notifications.js');
    renderLayout(AdminNotificationsPage());
});

router.register('/admin/reports', async () => {
    if (!storage.isAdminLoggedIn()) {
        router.navigate('/admin/login');
        return;
    }

    const { AdminReportsPage } = await import('./admin/Reports.js');
    renderLayout(AdminReportsPage());
});

// Initialize app
console.log('🚀 Excellentia-RDC Application Started');
