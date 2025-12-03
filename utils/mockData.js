// Mock data for Excellentia-RDC

export const mockCandidates = [
    {
        id: 1,
        nom: 'Mukendi',
        prenom: 'Grace',
        numeroExetat: 'EX2024001234',
        score: 92.5,
        province: 'Kinshasa',
        genre: 'F',
        dateNaissance: '2006-03-15',
        email: 'grace.mukendi@example.com',
        telephone: '+243 812 345 678',
        ecole: 'Lycée Bosangani',
        statut: 'Retenu pour concours',
        dateInscription: '2024-07-15',
        documents: {
            identite: true,
            releve: true,
            photo: true
        }
    },
    {
        id: 2,
        nom: 'Kabongo',
        prenom: 'David',
        numeroExetat: 'EX2024005678',
        score: 88.3,
        province: 'Haut-Katanga',
        genre: 'M',
        dateNaissance: '2006-08-22',
        email: 'david.kabongo@example.com',
        telephone: '+243 823 456 789',
        ecole: 'Institut Technique de Lubumbashi',
        statut: 'Dossier complet',
        dateInscription: '2024-07-18',
        documents: {
            identite: true,
            releve: true,
            photo: false
        }
    },
    {
        id: 3,
        nom: 'Nzuzi',
        prenom: 'Sarah',
        numeroExetat: 'EX2024009012',
        score: 95.7,
        province: 'Kongo Central',
        genre: 'F',
        dateNaissance: '2006-01-10',
        email: 'sarah.nzuzi@example.com',
        telephone: '+243 834 567 890',
        ecole: 'Collège Boboto',
        statut: 'Retenu pour concours',
        dateInscription: '2024-07-12',
        documents: {
            identite: true,
            releve: true,
            photo: true
        }
    },
    {
        id: 4,
        nom: 'Tshimanga',
        prenom: 'Patrick',
        numeroExetat: 'EX2024003456',
        score: 82.1,
        province: 'Kasaï',
        genre: 'M',
        dateNaissance: '2006-11-05',
        email: 'patrick.tshimanga@example.com',
        telephone: '+243 845 678 901',
        ecole: 'Athénée de Kananga',
        statut: 'Dossier incomplet',
        dateInscription: '2024-07-20',
        documents: {
            identite: true,
            releve: false,
            photo: false
        }
    },
    {
        id: 5,
        nom: 'Mbuyi',
        prenom: 'Esther',
        numeroExetat: 'EX2024007890',
        score: 90.4,
        province: 'Nord-Kivu',
        genre: 'F',
        dateNaissance: '2006-06-18',
        email: 'esther.mbuyi@example.com',
        telephone: '+243 856 789 012',
        ecole: 'Institut Mikeno',
        statut: 'Retenu pour concours',
        dateInscription: '2024-07-14',
        documents: {
            identite: true,
            releve: true,
            photo: true
        }
    }
];

export const mockProvinces = [
    { nom: 'Kinshasa', eligibles: 1250, inscrits: 980, complets: 856, retenus: 245 },
    { nom: 'Haut-Katanga', eligibles: 890, inscrits: 720, complets: 645, retenus: 198 },
    { nom: 'Kongo Central', eligibles: 650, inscrits: 520, complets: 478, retenus: 142 },
    { nom: 'Nord-Kivu', eligibles: 780, inscrits: 610, complets: 534, retenus: 167 },
    { nom: 'Sud-Kivu', eligibles: 620, inscrits: 495, complets: 432, retenus: 128 },
    { nom: 'Kasaï', eligibles: 540, inscrits: 430, complets: 378, retenus: 115 },
    { nom: 'Kasaï-Central', eligibles: 480, inscrits: 385, complets: 342, retenus: 98 },
    { nom: 'Lualaba', eligibles: 420, inscrits: 340, complets: 298, retenus: 87 },
    { nom: 'Ituri', eligibles: 390, inscrits: 310, complets: 267, retenus: 76 },
    { nom: 'Tshopo', eligibles: 360, inscrits: 285, complets: 245, retenus: 68 }
];

export const mockStatistics = {
    totalEligibles: 6380,
    totalInscrits: 5075,
    dossiersComplets: 4475,
    retenusConours: 1324,
    tauxFilles: 48,
    tauxGarcons: 52,
    provincesCouverts: 26
};

export const mockTestimonials = [
    {
        id: 1,
        nom: 'Marie Kalala',
        photo: '/assets/scholars/scholar-1.jpg',
        filiere: 'Médecine',
        universite: 'Université de Montréal',
        pays: 'Canada',
        citation: "Excellentia m'a permis de réaliser mon rêve d'étudier la médecine à l'étranger. Je suis reconnaissante pour cette opportunité qui change ma vie."
    },
    {
        id: 2,
        nom: 'Jean-Paul Mbala',
        photo: '/assets/scholars/scholar-2.jpg',
        filiere: 'Ingénierie Informatique',
        universite: 'École Polytechnique',
        pays: 'France',
        citation: "Le programme Excellentia ne se limite pas au financement. C'est un accompagnement complet qui nous prépare à devenir les leaders de demain."
    },
    {
        id: 3,
        nom: 'Joséphine Ilunga',
        photo: '/assets/scholars/scholar-3.jpg',
        filiere: 'Économie',
        universite: 'Université de Kinshasa',
        pays: 'RDC',
        citation: "Grâce à Excellentia, je peux me concentrer pleinement sur mes études sans me soucier des contraintes financières. Mon objectif est de contribuer au développement économique de notre pays."
    }
];

export const mockScholars = [
    { nom: 'Amani K.', filiere: 'Médecine', pays: 'Canada', photo: '/assets/scholars/scholar-1.jpg' },
    { nom: 'Blaise M.', filiere: 'Ingénierie', pays: 'France', photo: '/assets/scholars/scholar-2.jpg' },
    { nom: 'Chantal N.', filiere: 'Droit', pays: 'Belgique', photo: '/assets/scholars/scholar-3.jpg' },
    { nom: 'Daniel T.', filiere: 'Architecture', pays: 'RDC', photo: '/assets/scholars/scholar-4.jpg' },
    { nom: 'Esther L.', filiere: 'Économie', pays: 'RDC', photo: '/assets/scholars/scholar-5.jpg' },
    { nom: 'François K.', filiere: 'Sciences Politiques', pays: 'Suisse', photo: '/assets/scholars/scholar-6.jpg' }
];

export const mockFAQ = [
    {
        categorie: 'Éligibilité',
        questions: [
            {
                question: 'Que se passe-t-il si j\'ai obtenu 79% à l\'Examen d\'État ?',
                reponse: 'Malheureusement, le seuil minimum pour être éligible au programme Excellentia-RDC est de 80%. Nous vous encourageons à poursuivre vos études avec excellence et à retenter votre chance l\'année prochaine si vous redoublez.'
            },
            {
                question: 'Dois-je payer des frais pour postuler au programme ?',
                reponse: 'Non, absolument pas. Le processus de candidature est 100% gratuit. Aucune somme d\'argent ne doit être payée à quelque étape que ce soit. Méfiez-vous de toute personne qui vous demanderait de l\'argent.'
            },
            {
                question: 'Puis-je candidater si j\'ai obtenu mon Examen d\'État il y a 2 ans ?',
                reponse: 'Le programme Excellentia-RDC cible principalement les lauréats de l\'année en cours. Pour les cas exceptionnels, veuillez contacter notre service d\'assistance.'
            }
        ]
    },
    {
        categorie: 'Concours',
        questions: [
            {
                question: 'En quoi consiste le concours national ?',
                reponse: 'Le concours comprend des épreuves écrites dans les matières principales (mathématiques, français, sciences) ainsi qu\'un entretien oral pour évaluer votre motivation et votre projet d\'études.'
            },
            {
                question: 'Où se déroule le concours ?',
                reponse: 'Le concours est organisé dans les chefs-lieux de province pour faciliter l\'accès à tous les candidats présélectionnés. Vous serez informé du centre d\'examen le plus proche de votre domicile.'
            }
        ]
    },
    {
        categorie: 'Bourse à l\'étranger',
        questions: [
            {
                question: 'Puis-je choisir mon pays de destination ?',
                reponse: 'Vous pouvez exprimer vos préférences, mais l\'affectation finale dépend de plusieurs facteurs : votre filière d\'études, les partenariats universitaires disponibles, et votre classement au concours.'
            },
            {
                question: 'La bourse couvre-t-elle les frais de visa ?',
                reponse: 'Oui, la bourse couvre tous les frais liés à votre départ, y compris les frais de visa, de voyage et d\'installation dans votre pays d\'accueil.'
            }
        ]
    },
    {
        categorie: 'Bourse en RDC',
        questions: [
            {
                question: 'Quel est le montant de l\'allocation pour les études en RDC ?',
                reponse: 'Le montant de l\'allocation forfaitaire annuelle sera communiqué lors de la signature du contrat de bourse. Il est conçu pour couvrir vos frais académiques et de subsistance.'
            }
        ]
    },
    {
        categorie: 'Contrat & engagements',
        questions: [
            {
                question: 'Que se passe-t-il si je ne retourne pas au pays après mes études ?',
                reponse: 'Le retour au pays est une obligation contractuelle. En cas de non-respect, vous devrez rembourser l\'intégralité de la bourse reçue, avec les intérêts applicables.'
            },
            {
                question: 'Combien de temps dois-je travailler en RDC après mes études ?',
                reponse: 'Les modalités précises seront définies dans votre contrat de bourse, généralement proportionnelles à la durée de vos études financées.'
            }
        ]
    }
];

export const mockDestinations = [
    { pays: 'France', ville: 'Paris', count: 45 },
    { pays: 'Canada', ville: 'Montréal', count: 38 },
    { pays: 'Belgique', ville: 'Bruxelles', count: 32 },
    { pays: 'RDC', ville: 'Kinshasa', count: 156 },
    { pays: 'Suisse', ville: 'Genève', count: 12 },
    { pays: 'Sénégal', ville: 'Dakar', count: 18 },
    { pays: 'Maroc', ville: 'Rabat', count: 22 },
    { pays: 'Afrique du Sud', ville: 'Le Cap', count: 15 }
];

// Storage helper functions
export const storage = {
    // Get all candidates
    getCandidates() {
        const stored = localStorage.getItem('excellentia_candidates');
        return stored ? JSON.parse(stored) : mockCandidates;
    },

    // Save candidates
    saveCandidates(candidates) {
        localStorage.setItem('excellentia_candidates', JSON.stringify(candidates));
    },

    // Get candidate by ID
    getCandidateById(id) {
        const candidates = this.getCandidates();
        return candidates.find(c => c.id === parseInt(id));
    },

    // Update candidate
    updateCandidate(id, updates) {
        const candidates = this.getCandidates();
        const index = candidates.findIndex(c => c.id === parseInt(id));
        if (index !== -1) {
            candidates[index] = { ...candidates[index], ...updates };
            this.saveCandidates(candidates);
            return candidates[index];
        }
        return null;
    },

    // Add candidate
    addCandidate(candidate) {
        const candidates = this.getCandidates();
        const newId = Math.max(...candidates.map(c => c.id), 0) + 1;
        const newCandidate = { ...candidate, id: newId };
        candidates.push(newCandidate);
        this.saveCandidates(candidates);
        return newCandidate;
    },

    // Get admin session
    getAdminSession() {
        const session = localStorage.getItem('excellentia_admin_session');
        return session ? JSON.parse(session) : null;
    },

    // Save admin session
    saveAdminSession(session) {
        localStorage.setItem('excellentia_admin_session', JSON.stringify(session));
    },

    // Clear admin session
    clearAdminSession() {
        localStorage.removeItem('excellentia_admin_session');
    },

    // Check if admin is logged in
    isAdminLoggedIn() {
        return this.getAdminSession() !== null;
    }
};
