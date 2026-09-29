/* ================================================
   NOVA BTP SARL — APP.JS
   SPA Router + Data + Dynamic Content
   ================================================ */

// ============================================================
// DONNÉES
// ============================================================
const COMPANY = {
  name: 'NOVA BTP SARL',
  phones: { primary: '+235 68 38 37 08', technical: '+235 87 91 12 08', emergencies: '+235 91 71 98 94' },
  email: 'contact@novabtptchad.com',
  director: 'Asrane Gauthier',
  rccm: 'TD-NDJ-01-2022-B12',
};

const SERVICES = [
  {
    id: 'genie-civil',
    number: 'PÔLE 01',
    title: 'Génie Civil & Construction',
    icon: 'bi-building',
    shortDesc: "Conception et réalisation intégrale d'infrastructures : fondations profondes, gros œuvre en béton armé, élévations structurelles, voiries et réseaux divers (VRD) adaptés aux sols sahéliens.",
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
    filterTag: 'gros-oeuvre',
    metrics: [
      { val: '+120 000 m²', label: 'Béton coulé et contrôlé' },
      { val: '100%', label: 'Conformité plans BAEL' },
      { val: '10 Ans', label: 'Garantie Décennale' },
    ],
    bulletPoints: [
      'Fondations profondes & pieux forés adaptés aux sols argileux gonflants',
      'Caniveaux de drainage pluvial urbains et ouvrages d\'art',
      'Dallages industriels à fort tonnage & voiries lourdes en pavés autobloquants',
      'Structures en béton armé conformes aux normes Eurocode 2 et BAEL 91',
    ],
  },
  {
    id: 'decoration-design',
    number: 'PÔLE 02',
    title: "Décoration & Architecture d'Intérieur",
    icon: 'bi-palette',
    shortDesc: "Aménagement et mise en valeur des espaces intérieurs et extérieurs : création de plafonds suspendus décoratifs, éclairage d'ambiance architectural et agencements harmonieux.",
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    filterTag: 'deco',
    metrics: [
      { val: '+65', label: 'Chantiers de prestige livrés' },
      { val: '35 dB', label: 'Gain confort acoustique' },
      { val: 'Inclus', label: 'Conception plans 3D & BIM' },
    ],
    bulletPoints: [
      'Faux plafonds staff & placoplâtre isolant avec corniches travaillées',
      'Éclairages LED scénarisés, gorges lumineuses et domotique moderne',
      'Cloisonnements acoustiques, parois vitrées bord à bord et amovibles',
      'Habillages muraux bois composite, panneaux 3D et parements pierre',
    ],
  },
  {
    id: 'peinture-revetements',
    number: 'PÔLE 03',
    title: 'Peinture & Revêtements Techniques',
    icon: 'bi-brush',
    shortDesc: "Application experte de peintures résistantes aux fortes chaleurs et poussières sahéliennes. Finitions mates, satinées, laquées et traitements d'étanchéité de façades durables.",
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    filterTag: 'peinture',
    metrics: [
      { val: '5 Ans', label: 'Garantie Tenue Extérieure' },
      { val: '-6°C', label: 'Gain thermique constaté' },
      { val: '48°C+', label: 'Résistance Chaleur Sahel' },
    ],
    bulletPoints: [
      'Peintures thermo-isolantes anti-UV et anti-décoloration sous fort ensoleillement',
      'Résines époxy et polyuréthane autonivelantes pour sols industriels et parkings',
      "Étanchéité toiture terrasse & acrotères par résine armée et calandrite",
      'Enduits à la chaux, badigeons minéraux et stucs vénitiens d\'apparat',
    ],
  },
  {
    id: 'renovation-rehabilitation',
    number: 'PÔLE 04',
    title: 'Rénovation & Réhabilitation',
    icon: 'bi-tools',
    shortDesc: "Modernisation complète de bâtiments existants, renforcement de structures affaiblies, réaménagement spatial et optimisation énergétique des locaux professionnels et résidences.",
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    filterTag: 'renovation',
    metrics: [
      { val: '+35', label: 'Bâtiments réhabilités' },
      { val: 'Gratuit', label: 'Audit structurel & pathologie' },
      { val: '100%', label: 'Conformité ERP & sécurité' },
    ],
    bulletPoints: [
      'Reprise en sous-œuvre et chemisage en béton armé de poteaux fatigués',
      'Remise aux normes ERP, accessibilité PMR et conformité sécurité incendie',
      "Surélévation d'étages en charpente métallique légère et bardage isolé",
      'Traitement anti-salpêtre, cuvelage étanche et assèchement des murs',
    ],
  },
  {
    id: 'retouche-finitions',
    number: 'PÔLE 05',
    title: 'Retouche & Finitions de Précision',
    icon: 'bi-rulers',
    shortDesc: "Travaux de correction minutieuse, calfeutrage, réparations de fissures, pose de plinthes, enduits fins et finitions soignées pour garantir une livraison irréprochable.",
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    filterTag: 'peinture',
    metrics: [
      { val: '< 1 mm', label: "Tolérance d'alignement" },
      { val: 'Validé', label: 'Protocole Zéro Défaut' },
      { val: '100%', label: 'Étanchéité sable & poussière' },
    ],
    bulletPoints: [
      'Pose carrelage grand format (60x120, 100x100) avec double encollage',
      'Menuiserie aluminium thermolaquée, double vitrage et joints néoprène',
      "Moulures, plinthes affleurantes et joints d'étanchéité souples anti-poussière",
      'Ferronnerie d\'art, grilles de défense forgées et garde-corps inox brossé',
    ],
  },
  {
    id: 'formation-genie-civil',
    number: 'PÔLE 06',
    title: 'Formation Certifiante en Génie Civil',
    icon: 'bi-mortarboard',
    shortDesc: "Programmes de formation certifiants et perfectionnement technique : lecture de plans, métrés, ferraillage, QHSE et gestion de chantier pour étudiants et professionnels tchadiens.",
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    filterTag: 'formation',
    metrics: [
      { val: '+280', label: 'Techniciens diplômés' },
      { val: '91%', label: "Taux d'insertion professionnelle" },
      { val: 'Reconnu', label: "Attestation d'État" },
    ],
    bulletPoints: [
      'Techniques de construction modernes & formulation de béton en climat aride',
      "Lecture et interprétation approfondie de plans d'architecte & béton armé",
      'Métré opérationnel, établissement de DQE et calcul des volumes réels',
      'Management QHSE, prévention des risques et pilotage de chantier (OPC)',
    ],
  },
];

const PROJECTS = [
  {
    id: 'complexe-sabangali',
    title: 'Complexe Résidentiel R+2',
    category: 'Gros Œuvre & Bâtiment',
    filterTag: 'gros-oeuvre',
    location: "N'Djamena • Quartier Sabangali",
    year: '2024',
    surface: '1 200 m²',
    duration: '9 mois',
    status: 'Livré',
    description: "Chantier clé en main : terrassement, semelles filantes, béton armé, poutres et planchers hourdis avec enduits hydrofuges.",
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    details: "Réalisation des fondations sur radier général en béton vibré, isolation périphérique pour sols gonflants et élévation de 12 appartements de haut standing.",
    clientType: 'Promoteur Immobilier Privé',
    keyTechnicalPoint: 'Béton dosé à 350 kg/m³ avec cure continue et armature FeE 500.',
  },
  {
    id: 'siege-charles-de-gaulle',
    title: 'Siège Corporatif & Bureaux',
    category: 'Rénovation & Réhabilitation',
    filterTag: 'renovation',
    location: "Avenue Charles de Gaulle • N'Djamena",
    year: '2025',
    surface: '850 m²',
    duration: '14 mois',
    status: 'Livré',
    description: "Réhabilitation intégrale, redistribution d'espaces de travail et renforcement parasismique des piliers porteurs.",
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    details: "Chemisage des poteaux en béton armé, installation de réseau électrique ondulé, faux plafonds staff et façades vitrées isolantes.",
    clientType: 'Société Multinationale de Services',
    keyTechnicalPoint: "Travaux exécutés en site partiellement occupé sans rupture d'activité.",
  },
  {
    id: 'villa-gassi',
    title: 'Villa Contemporaine & Staff',
    category: 'Décoration Intérieure',
    filterTag: 'deco',
    location: "Quartier Gassi • N'Djamena",
    year: '2025',
    surface: '450 m²',
    duration: '5 mois',
    status: 'Livré',
    description: "Conception de faux plafonds en staff, éclairage LED indirect, carrelage grand format et peinture décorative stuc.",
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    details: "Agencement sur mesure de 4 suites parentales, salon de réception de 120 m² avec stuc vénitien nacré et carrelage 120x60 effet marbre.",
    clientType: 'Client Particulier Haute Exigence',
    keyTechnicalPoint: "Isolation phonique sous plafond et domotique d'ambiance scénarisée.",
  },
  {
    id: 'batiment-farcha',
    title: 'Bâtiment Institutionnel',
    category: 'Peinture & Finition',
    filterTag: 'peinture',
    location: "Farcha • N'Djamena",
    year: '2024',
    surface: '2 100 m²',
    duration: '4 mois',
    status: 'Livré',
    description: "Application de peinture thermorégulatrice élastomère garantissant une protection anti-fissuration et anti-poussière.",
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
    details: "Ravalement de façade de 4 étages avec peinture thermo-réflective blanche et beige sahélien résistant aux rayons UV intenses.",
    clientType: 'Organisme Public National',
    keyTechnicalPoint: 'Réduction de 5.8°C sur les parois murales extérieures exposées plein sud.',
  },
  {
    id: 'cloture-chagoua',
    title: 'Clôtures & Pavage Renforcé',
    category: 'Gros Œuvre & Bâtiment',
    filterTag: 'gros-oeuvre',
    location: "Chagoua • N'Djamena",
    year: '2024',
    surface: '4 500 m²',
    duration: '4 mois',
    status: 'Livré',
    description: "Périmètre sécurisé, semelles filantes en béton cyclopéen, chaînages raidisseurs et aménagement de caniveaux.",
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    details: "Dallage lourd renforcé pour le passage de camions semi-remorques (40 tonnes/essieu) et réseau de caniveaux couverts.",
    clientType: 'Plateforme Logistique Régionale',
    keyTechnicalPoint: 'Béton haute résistance avec fibres synthétiques anti-fissuration.',
  },
  {
    id: 'refection-residentielle',
    title: 'Réfection Décorative Extérieure',
    category: 'Peinture & Finition',
    filterTag: 'peinture',
    location: "Zone Résidentielle • N'Djamena",
    year: '2024',
    surface: '620 m²',
    duration: '2 mois',
    status: 'Livré',
    description: "Ponçage au grain fin, application de sous-couche hydrofuge et finitions personnalisées aux teintes de terre sahéliennes.",
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    details: "Traitement préventif contre les remontées salpêtreuses et finition par enduit décoratif gratté fin.",
    clientType: 'Résidence Diplomatique',
    keyTechnicalPoint: "Micro-pores respirants empêchant l'écaillement en saison des pluies.",
  },
];

const TEAM = [
  {
    name: 'Asrane Gauthier',
    role: 'DIRECTEUR GÉNÉRAL & FONDATEUR',
    specialty: 'Ingénieur en Chef des Travaux Publics',
    bio: "Supervise la stratégie globale, la conduite contractuelle des grands marchés et l'intégrité technique de l'ensemble des chantiers Nova BTP.",
    experience: "18 ans d'expérience",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    phone: '+235 68 38 37 08',
  },
  {
    name: 'Mahamat Saleh',
    role: "DIRECTEUR BUREAU D'ÉTUDES",
    specialty: 'Ingénieur Génie Civil Polytech',
    bio: "Spécialiste du calcul béton armé, de la résistance des matériaux sous fortes chaleurs et du dimensionnement géotechnique des fondations.",
    experience: '12 ans exp.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Fatimé Zara',
    role: 'ARCHITECTE PRINCIPALE',
    specialty: 'Responsable Aménagement & Déco',
    bio: "Dirige le département finitions, plomberie sanitaire, revêtements carrelés haut standing et agencements intérieurs pour résidences et sièges sociaux.",
    experience: '9 ans exp.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Djibrine Ahmat',
    role: 'DIRECTEUR QHSE & LOGISTIQUE',
    specialty: "Superviseur Parc d'Engins & Sécurité",
    bio: "Garant de la sécurité des personnels sur les chantiers, de la conformité environnementale et du déploiement logistique des toupies et grues.",
    experience: '14 ans exp.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
  },
];

const TRAINING_MODULES = [
  {
    number: '01',
    title: 'Techniques de construction modernes',
    description: 'Connaissance des matériaux, formulations de béton, techniques de coulage, vibration et cure adaptée au climat aride.',
    duration: '4 Semaines (60h pratiques)',
    prerequisites: 'Niveau BEPC / Bac ou expérience ouvrière',
    competencies: [
      'Identification et dosage des granulats et ciments CPA',
      "Maîtrise de la vibration d'aiguille et prévention des nids de gravier",
      'Application des produits de cure et protection thermique > 40°C',
    ],
  },
  {
    number: '02',
    title: 'Lecture et interprétation de plans & béton armé',
    description: "Plans de coffrage, armatures, nomenclature de ferraillage et repérage spatial des réservations techniques.",
    duration: '3 Semaines (45h)',
    prerequisites: 'Techniciens, conducteurs ou étudiants BTP',
    competencies: [
      "Lecture de coupes, élévations et détails d'ancrage",
      'Façonnage et ligaturage des étriers et cadres FeE 500',
      "Vérification des cales d'enrobage et conformité CCTP",
    ],
  },
  {
    number: '03',
    title: 'Bases fondamentales du génie civil et métrés',
    description: "Établissement des devis quantitatifs et estimatifs (DQE), calcul des volumes de terrassement et dosages de mortier.",
    duration: '4 Semaines (60h)',
    prerequisites: 'Bacheliers scientifiques ou métreurs juniors',
    competencies: [
      'Cubage précis des terrassements et fouilles en rigole',
      'Décomposition des prix unitaires (fourniture, transport, pose)',
      "Élaboration d'un planning prévisionnel d'approvisionnement",
    ],
  },
  {
    number: '04',
    title: 'Techniques et sécurité de chantier (QHSE)',
    description: "Prévention des risques, équipements de protection individuelle (EPI), gestion des déchets de chantier et protocoles d'urgence.",
    duration: '2 Semaines (30h)',
    prerequisites: 'Ouvert à tout personnel de chantier',
    competencies: [
      'Mise en place du balisage et sécurisation des fouilles profondes',
      'Audit sécurité journalier (Toolbox meeting / Briefing)',
      "Gestion des incidents et protocoles de premiers secours d'urgence",
    ],
  },
  {
    number: '05',
    title: 'Gestion, planification et organisation des travaux',
    description: "Ordonnancement, pilotage (OPC), gestion des approvisionnements sur site et tenue du journal de chantier.",
    duration: '3 Semaines (45h)',
    prerequisites: 'Chefs de chantiers et techniciens confirmés',
    competencies: [
      'Construction du diagramme de Gantt et chemin critique',
      'Rapprochement quotidien prévisions vs réalisations',
      'Rédaction du procès-verbal de réception de travaux',
    ],
  },
];

const TESTIMONIALS = [
  {
    quote: "La rigueur de l'équipe Nova BTP sur notre siège de 1 200 m² à Sabangali a été exemplaire. Le planning de livraison a été respecté au jour près avec zéro réserve majeure.",
    author: "Mahamat Nour B.",
    role: "Directeur Général Société Commerciale",
    project: "Siège Administratif Sabangali",
  },
  {
    quote: "En tant qu'architecte à N'Djamena, j'exige des dosages de béton et des enrobages d'acier impeccables. Nova BTP maîtrise parfaitement les contraintes des sols argileux de notre capitale.",
    author: "Arch. Djimet Moussa",
    role: "Architecte Urbaniste D.P.L.G",
    project: "Villa R+2 Grand Standing",
  },
  {
    quote: "Leur intervention en réhabilitation lourde et étanchéité thermique sur nos entrepôts de Farcha a fait baisser la température intérieure de plus de 5°C sans surcoût excessif.",
    author: "Abakar Souleyman",
    role: "Responsable Logistique & Patrimoine",
    project: "Plateforme Industrielle Farcha",
  },
];

const FAQS = [
  {
    q: "Quel est le délai réel de remise d'un devis chiffré ?",
    a: "Pour les travaux courants (peinture, retouches, finitions et réfection), l'estimation est fournie sous 24 heures ouvrées. Pour les programmes de génie civil et gros œuvre nécessitant des calculs de structure, notre bureau d'études remet son étude en 48 à 72 heures.",
  },
  {
    q: "La visite technique de terrain est-elle gratuite ?",
    a: "Oui, 100% gratuite et sans aucun engagement sur l'ensemble des 10 arrondissements de N'Djamena (Gassi, Farcha, Dembé, Sabangali, Walia, Chagoua, etc.). Un conducteur de travaux se déplace avec les outils de métré pour certifier les cotes exactes avant émission du devis contractuel.",
  },
  {
    q: "Quelles sont les garanties offertes par Nova BTP SARL ?",
    a: "Tous nos ouvrages de construction neuve bénéficient de la garantie décennale (10 ans) et de la garantie de parfait achèvement. Nos approvisionnements répondent rigoureusement aux normes de résistance tropicale en vigueur en zone CEMAC.",
  },
  {
    q: "Intervenez-vous également en province en dehors de N'Djamena ?",
    a: "Absolument. Nova BTP déploie des bases-vie mobiles et du matériel motorisé sur l'ensemble du territoire tchadien (Moundou, Sarh, Abéché, Kélo, Bongor, Doba, Mongo, etc.) pour des marchés institutionnels, privés ou des chantiers miniers et logistiques.",
  },
  {
    q: "Comment s'inscrire aux formations de l'Académie Nova BTP ?",
    a: "Les inscriptions se font directement en ligne via notre formulaire ou au siège de Gassi. Les sessions démarrent le premier lundi de chaque mois. Un certificat technique reconnu est remis à l'issue de la validation des épreuves pratiques sur chantier.",
  },
];

const SAHELIAN_NORMS = [
  {
    category: "Fondations sur sols argileux gonflants",
    norm: "BAEL 91 Modifié & Fascicule 62",
    standard: "Semelles filantes surdimensionnées, longrines rigides et coupures capillaires",
    localAdvantage: "Empêche les fissures structurelles lors de l'alternance saison sèche / saison des pluies.",
  },
  {
    category: "Formulation des bétons en forte chaleur (>40°C)",
    norm: "Ciment CEM II 42.5R Haute Résistance",
    standard: "Rapport E/C <= 0.45, adjuvants retardateurs de prise et cure par émulsion protectrice",
    localAdvantage: "Résistance à 28 jours supérieure à 30 MPa sans micro-fissuration thermique.",
  },
  {
    category: "Armatures et enrobage anti-corrosion",
    norm: "Aciers FeE 500 Haute Adhérence",
    standard: "Enrobage minimal de 40 mm avec cales d'armature en mortier résistant",
    localAdvantage: "Protège les armatures contre les sels et la dégradation en milieu aride.",
  },
  {
    category: "Isolation thermique & inertie du bâtiment",
    norm: "Briques alvéolaires & BTCS stabilisées",
    standard: "Double vitrage teinté, toitures ventilées et casquettes pare-soleil calculées",
    localAdvantage: "Réduit la consommation de climatisation électrique de 25% à 35%.",
  },
  {
    category: "Peintures extérieures & revêtements de façade",
    norm: "Résines acryliques siloxanes anti-UV",
    standard: "Hydrofuges de masse microporeux laissant respirer les murs en saison humide",
    localAdvantage: "Évite l'écaillement et la décoloration sous l'harmattan et les vents de sable.",
  },
];

// ============================================================
// SPA ROUTER
// ============================================================
let currentPage = 'home';

function navigateTo(page) {
  // Hide all pages
  document.querySelectorAll('.page-content').forEach(el => el.classList.add('d-none'));
  // Show target page
  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.remove('d-none');
    currentPage = page;
  }
  // Update active nav link
  document.querySelectorAll('.nav-link-page').forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('data-active', 'false');
    if (btn.dataset.page === page) {
      btn.classList.add('active');
      btn.setAttribute('data-active', 'true');
    }
  });
  // Close mobile nav
  const navCollapse = document.getElementById('navbarMain');
  if (navCollapse) {
    const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
    if (bsCollapse) bsCollapse.hide();
  }
  // Scroll top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Render page content if needed
  renderPageContent(page);
}

// ============================================================
// RENDER FUNCTIONS
// ============================================================

/* ---- HOME ---- */
function renderHome() {
  renderHomeServices();
  renderHomeProjects('all');
  renderHomeTrainingModules();
  renderHomeTestimonials();
  renderFAQ();
}

function renderHomeServices() {
  const grid = document.getElementById('home-services-grid');
  if (!grid || grid.dataset.rendered) return;
  grid.dataset.rendered = '1';
  grid.innerHTML = SERVICES.map(s => `
    <div class="col-md-6 col-lg-4">
      <div class="service-card h-100">
        <div class="service-card-img">
          <img src="${s.image}" alt="${s.title}" loading="lazy" />
          <div class="service-img-overlay"></div>
          <span class="service-pole-badge">${s.number}</span>
          <h3 class="service-title-overlay">${s.title}</h3>
        </div>
        <div class="service-card-body">
          <p class="service-desc">${s.shortDesc}</p>
          <div class="service-bullets">
            ${s.bulletPoints.slice(0,3).map(b => `
              <div class="service-bullet">
                <i class="bi bi-check-circle-fill"></i>
                <span>${b}</span>
              </div>`).join('')}
          </div>
          <div class="service-card-footer">
            <button class="btn-detail open-service-detail" data-id="${s.id}">
              Détails techniques <i class="bi bi-chevron-right"></i>
            </button>
            <button class="btn btn-orange btn-sm open-quote" data-service="${s.title}">Devis rapide</button>
          </div>
        </div>
      </div>
    </div>`).join('');
}

function renderHomeProjects(filter) {
  const grid = document.getElementById('home-projects-grid');
  if (!grid) return;
  const projects = filter === 'all' ? PROJECTS.slice(0, 4) :
    PROJECTS.filter(p => p.filterTag === filter).slice(0, 4);
  grid.innerHTML = projects.length ? projects.map(p => projectCardHTML(p)).join('') :
    '<div class="col-12 text-center text-muted py-5">Aucun projet dans cette catégorie.</div>';
}

function renderHomeTrainingModules() {
  const grid = document.getElementById('home-training-modules');
  if (!grid || grid.dataset.rendered) return;
  grid.dataset.rendered = '1';
  grid.innerHTML = TRAINING_MODULES.slice(0, 4).map(m => `
    <div class="col-sm-6">
      <div class="module-mini-card">
        <div class="d-flex justify-content-between align-items-center text-warning fw-bold mb-1" style="font-size:.75rem;">
          <span>MODULE ${m.number}</span>
          <span class="text-muted" style="font-size:.7rem;">${m.duration}</span>
        </div>
        <div class="fw-bold text-white small">${m.title}</div>
        <p class="text-muted mb-0 mt-1" style="font-size:.75rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${m.description}</p>
      </div>
    </div>`).join('');
}

function renderHomeTestimonials() {
  const grid = document.getElementById('home-testimonials');
  if (!grid || grid.dataset.rendered) return;
  grid.dataset.rendered = '1';
  grid.innerHTML = TESTIMONIALS.map(t => `
    <div class="col-md-4">
      <div class="testimonial-card">
        <div>
          <div class="testimonial-stars mb-3">${'★'.repeat(5)}</div>
          <div class="quote-icon mb-2"><i class="bi bi-quote"></i></div>
          <p class="fst-italic" style="font-size:.875rem;color:#475569;line-height:1.7;">"${t.quote}"</p>
        </div>
        <div class="d-flex align-items-center justify-content-between border-top pt-3 mt-4">
          <div>
            <h5 class="fw-bold mb-0" style="font-size:.875rem;color:#0B2545;">${t.author}</h5>
            <p class="text-muted mb-0" style="font-size:.75rem;">${t.role}</p>
          </div>
          <span class="badge bg-light text-muted" style="font-size:.7rem;">${t.project}</span>
        </div>
      </div>
    </div>`).join('');
}

function renderFAQ() {
  const acc = document.getElementById('faqAccordion');
  if (!acc || acc.dataset.rendered) return;
  acc.dataset.rendered = '1';
  acc.innerHTML = FAQS.map((f, i) => `
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button ${i > 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#faq-${i}">
          ${f.q}
        </button>
      </h2>
      <div id="faq-${i}" class="accordion-collapse collapse ${i === 0 ? 'show' : ''}" data-bs-parent="#faqAccordion">
        <div class="accordion-body">${f.a}</div>
      </div>
    </div>`).join('');
}

/* ---- ABOUT ---- */
function renderAbout() {
  renderTeamGrid();
}

function renderTeamGrid() {
  const grid = document.getElementById('about-team-grid');
  if (!grid || grid.dataset.rendered) return;
  grid.dataset.rendered = '1';
  grid.innerHTML = TEAM.map(m => `
    <div class="col-md-6 col-lg-3">
      <div class="team-card">
        <div class="team-card-img">
          <img src="${m.image}" alt="${m.name}" loading="lazy" />
        </div>
        <div class="team-card-body">
          <div class="team-role">${m.role}</div>
          <div class="team-name">${m.name}</div>
          <div class="team-spec">${m.specialty}</div>
          <p class="team-bio">${m.bio}</p>
          <span class="team-exp"><i class="bi bi-clock me-1"></i>${m.experience}</span>
          ${m.phone ? `<div class="mt-2"><a href="tel:${m.phone}" class="text-orange text-decoration-none small fw-semibold"><i class="bi bi-telephone me-1"></i>${m.phone}</a></div>` : ''}
        </div>
      </div>
    </div>`).join('');
}

/* ---- SERVICES ---- */
function renderServices() {
  renderServicesDetailGrid();
  renderSahelianNorms();
}

function renderServicesDetailGrid() {
  const grid = document.getElementById('services-detail-grid');
  if (!grid || grid.dataset.rendered) return;
  grid.dataset.rendered = '1';
  grid.innerHTML = SERVICES.map(s => `
    <div class="service-detail-block" id="service-${s.id}">
      <div class="service-detail-header">
        <div class="float-icon-orange"><i class="${s.icon} fs-5"></i></div>
        <div>
          <div style="font-size:.7rem;font-weight:800;color:#fbbf24;text-transform:uppercase;letter-spacing:.1em;">${s.number}</div>
          <h3 style="font-family:'Playfair Display',serif;font-weight:700;margin:0;">${s.title}</h3>
        </div>
      </div>
      <div class="service-detail-body">
        <div class="row g-4">
          <div class="col-lg-8">
            <p class="text-muted">${s.shortDesc}</p>
            <div class="row g-2 mt-3">
              ${s.bulletPoints.map(b => `
                <div class="col-sm-6">
                  <div class="d-flex align-items-start gap-2 text-sm">
                    <i class="bi bi-check-circle-fill text-success mt-1" style="font-size:.85rem;"></i>
                    <span style="font-size:.85rem;">${b}</span>
                  </div>
                </div>`).join('')}
            </div>
            <div class="d-flex gap-2 mt-4">
              <button class="btn btn-orange open-quote" data-service="${s.title}">
                <i class="bi bi-file-text me-2"></i>Demander un devis
              </button>
            </div>
          </div>
          <div class="col-lg-4">
            <img src="${s.image}" alt="${s.title}" class="img-fluid rounded-3 mb-3" style="height:200px;width:100%;object-fit:cover;" />
            <div class="row g-2">
              ${s.metrics.map(m => `
                <div class="col-12">
                  <div class="service-metric-card">
                    <div class="service-metric-val">${m.val}</div>
                    <div class="service-metric-label">${m.label}</div>
                  </div>
                </div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>`).join('');
}

function renderSahelianNorms() {
  const grid = document.getElementById('sahelian-norms-grid');
  if (!grid || grid.dataset.rendered) return;
  grid.dataset.rendered = '1';
  grid.innerHTML = SAHELIAN_NORMS.map(n => `
    <div class="col-md-6 col-lg-4">
      <div class="norm-card">
        <div class="norm-category mb-2">${n.category}</div>
        <h5 class="fw-bold text-navy small mb-2">${n.norm}</h5>
        <p class="text-muted mb-2" style="font-size:.8rem;">${n.standard}</p>
        <div class="d-flex align-items-start gap-2">
          <i class="bi bi-check-circle-fill text-success mt-1" style="font-size:.85rem;"></i>
          <span class="text-success" style="font-size:.8rem;font-weight:500;">${n.localAdvantage}</span>
        </div>
      </div>
    </div>`).join('');
}

/* ---- PROJECTS ---- */
function renderProjects(filter) {
  const grid = document.getElementById('projects-full-grid');
  if (!grid) return;
  const projects = filter === 'all' ? PROJECTS :
    PROJECTS.filter(p => p.filterTag === filter);
  grid.innerHTML = projects.length ? projects.map(p => projectCardHTML(p)).join('') :
    '<div class="col-12 text-center text-muted py-5">Aucun projet dans cette catégorie.</div>';
}

/* ---- TRAINING ---- */
function renderTraining() {
  renderTrainingModulesGrid();
}

function renderTrainingModulesGrid() {
  const grid = document.getElementById('training-modules-grid');
  if (!grid || grid.dataset.rendered) return;
  grid.dataset.rendered = '1';
  grid.innerHTML = TRAINING_MODULES.map(m => `
    <div class="training-module-card">
      <div class="row g-4 align-items-start">
        <div class="col-lg-8">
          <div class="d-flex align-items-center gap-3 mb-2">
            <span class="module-number">MODULE ${m.number}</span>
            <span class="module-duration">${m.duration}</span>
          </div>
          <h4 class="module-title">${m.title}</h4>
          <p class="text-muted small mb-3">${m.description}</p>
          <div class="d-flex flex-column gap-2">
            ${m.competencies.map(c => `
              <div class="competency-item">
                <i class="bi bi-check-circle-fill text-success" style="font-size:.85rem;"></i>
                <span>${c}</span>
              </div>`).join('')}
          </div>
        </div>
        <div class="col-lg-4">
          <div class="bg-light rounded-3 p-3 text-center">
            <div class="text-muted small fw-semibold mb-1">Prérequis</div>
            <div class="fw-bold text-navy small">${m.prerequisites}</div>
          </div>
          <button class="btn btn-orange w-100 mt-3 open-quote" data-service="Formation Professionnelle">
            <i class="bi bi-mortarboard me-2"></i>S'inscrire
          </button>
        </div>
      </div>
    </div>`).join('');
}

/* ---- SHARED ---- */
function projectCardHTML(p) {
  const filterColors = {
    'gros-oeuvre': '#0B2545',
    'peinture': '#1e40af',
    'renovation': '#6d28d9',
    'deco': '#be185d',
    'formation': '#065f46',
  };
  return `
    <div class="col-md-6 col-lg-4">
      <div class="project-card open-project-detail" data-id="${p.id}">
        <div class="project-card-img">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
          <div style="position:absolute;top:.75rem;left:.75rem;">
            <span class="badge text-white" style="background:${filterColors[p.filterTag] || '#0B2545'};font-size:.65rem;">${p.category}</span>
          </div>
          <div style="position:absolute;top:.75rem;right:.75rem;">
            <span class="badge bg-success" style="font-size:.65rem;">${p.status}</span>
          </div>
          <div style="position:absolute;bottom:.5rem;left:.75rem;right:.75rem;background:rgba(0,0,0,.5);backdrop-filter:blur(4px);padding:.25rem .5rem;border-radius:.375rem;display:flex;justify-content:space-between;align-items:center;">
            <span class="text-white" style="font-size:.7rem;"><i class="bi bi-geo-alt-fill text-warning me-1"></i>${p.location}</span>
            <span class="text-white" style="font-size:.7rem;">${p.year}</span>
          </div>
        </div>
        <div class="project-card-body">
          <div>
            <h4 class="fw-bold text-navy mb-1" style="font-size:.95rem;">${p.title}</h4>
            <p class="text-muted mb-0" style="font-size:.8rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${p.description}</p>
          </div>
          <div class="project-card-footer">
            <span class="fw-semibold text-dark">Surf: ${p.surface}</span>
            <span class="fw-bold text-navy">Fiche chantier <i class="bi bi-chevron-right"></i></span>
          </div>
        </div>
      </div>
    </div>`;
}

function renderPageContent(page) {
  if (page === 'home') renderHome();
  else if (page === 'about') renderAbout();
  else if (page === 'services') renderServices();
  else if (page === 'projects') renderProjects('all');
  else if (page === 'training') renderTraining();
}

// ============================================================
// MODALS
// ============================================================
function openQuoteModal(service) {
  const sel = document.getElementById('quote-service');
  if (sel && service) {
    for (let i = 0; i < sel.options.length; i++) {
      if (sel.options[i].text === service || sel.options[i].text.includes(service)) {
        sel.selectedIndex = i;
        break;
      }
    }
  }
  const modal = new bootstrap.Modal(document.getElementById('quoteModal'));
  modal.show();
}

function openEstimatorModal() {
  calculateEstimate();
  const modal = new bootstrap.Modal(document.getElementById('estimatorModal'));
  modal.show();
}

function openTechnicalGuideModal() {
  renderTechnicalGuide();
  const modal = new bootstrap.Modal(document.getElementById('technicalGuideModal'));
  modal.show();
}

function openProjectDetailModal(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;
  const content = document.getElementById('project-detail-content');
  content.innerHTML = `
    <div>
      <img src="${project.image}" alt="${project.title}" class="img-fluid rounded-3 w-100 mb-4" style="height:280px;object-fit:cover;" />
      <div class="d-flex flex-wrap gap-2 mb-3">
        <span class="badge bg-navy text-white">${project.category}</span>
        <span class="badge bg-success">${project.status}</span>
        <span class="badge bg-light text-dark">${project.year}</span>
      </div>
      <h3 class="fw-black text-navy mb-3">${project.title}</h3>
      <p class="text-muted">${project.details}</p>
      <div class="row g-3 mt-2">
        <div class="col-sm-4">
          <div class="service-metric-card">
            <div class="service-metric-val">${project.surface}</div>
            <div class="service-metric-label">Surface totale</div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="service-metric-card">
            <div class="service-metric-val">${project.duration}</div>
            <div class="service-metric-label">Durée du chantier</div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="service-metric-card">
            <div class="service-metric-val" style="font-size:1rem;">${project.clientType}</div>
            <div class="service-metric-label">Type de client</div>
          </div>
        </div>
      </div>
      <div class="alert-nova mt-4">
        <i class="bi bi-lightbulb-fill text-orange me-2"></i>
        <div><strong>Point technique clé :</strong> ${project.keyTechnicalPoint}</div>
      </div>
      <div class="mt-3 d-flex align-items-center gap-2 text-muted small">
        <i class="bi bi-geo-alt-fill text-orange"></i>
        <span>${project.location}</span>
      </div>
    </div>`;

  const btn = document.getElementById('btn-project-to-quote');
  if (btn) {
    btn.onclick = () => {
      bootstrap.Modal.getInstance(document.getElementById('projectDetailModal')).hide();
      setTimeout(() => openQuoteModal(project.title), 300);
    };
  }
  const modal = new bootstrap.Modal(document.getElementById('projectDetailModal'));
  modal.show();
}

function renderTechnicalGuide() {
  const container = document.getElementById('technical-guide-norms');
  if (!container || container.dataset.rendered) return;
  container.dataset.rendered = '1';
  container.innerHTML = SAHELIAN_NORMS.map(n => `
    <div class="norm-card mb-3">
      <div class="norm-category mb-1">${n.category}</div>
      <h6 class="fw-bold text-navy">${n.norm}</h6>
      <p class="text-muted small mb-2">${n.standard}</p>
      <div class="d-flex align-items-start gap-2">
        <i class="bi bi-check-circle-fill text-success" style="font-size:.85rem;"></i>
        <span class="text-success small fw-medium">${n.localAdvantage}</span>
      </div>
    </div>`).join('');
}

// Estimator
window.calculateEstimate = function () {
  const type = document.getElementById('est-type')?.value || 'construction';
  const surface = parseFloat(document.getElementById('est-surface')?.value) || 100;
  const finition = document.getElementById('est-finition')?.value || 'standard';
  const etages = parseFloat(document.getElementById('est-etages')?.value) || 1;

  const basePrices = {
    construction: 200000,
    renovation: 120000,
    peinture: 15000,
    deco: 80000,
    finition: 35000,
  };
  const finitionMult = { standard: 1, premium: 1.4, luxe: 1.9 };
  const etagesMult = { 1: 1, 2: 1.15, 3: 1.3, 4: 1.5 };

  const base = basePrices[type] || 200000;
  const fm = finitionMult[finition] || 1;
  const em = etagesMult[etages] || 1;
  const low = Math.round(base * surface * fm * em * 0.85);
  const high = Math.round(base * surface * fm * em * 1.15);

  const fmt = n => n.toLocaleString('fr-FR') + ' FCFA';
  const result = document.getElementById('estimator-result');
  if (result) {
    result.innerHTML = `
      <div class="estimator-low mb-1">Fourchette estimée :</div>
      <div class="estimator-range">${fmt(low)} — ${fmt(high)}</div>
      <div class="estimator-label">(Estimation indicative • Surface : ${surface} m² • ${type} • Finition ${finition})</div>`;
  }
};

// Show toast
function showSuccessToast() {
  const toastEl = document.getElementById('successToast');
  if (toastEl) {
    const toast = new bootstrap.Toast(toastEl, { delay: 4000 });
    toast.show();
  }
}

// ============================================================
// EVENT LISTENERS
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Initial render
  renderHome();

  // Nav page links
  document.addEventListener('click', (e) => {
    // nav-link-page (navigate buttons)
    const navBtn = e.target.closest('.nav-link-page');
    if (navBtn && navBtn.dataset.page) {
      e.preventDefault();
      navigateTo(navBtn.dataset.page);
      // If targeting a specific service, scroll to it after navigate
      const serviceId = navBtn.dataset.service;
      if (serviceId && navBtn.dataset.page === 'services') {
        setTimeout(() => {
          const el = document.getElementById('service-' + serviceId);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
      return;
    }

    // Open quote modal
    if (e.target.closest('.open-quote')) {
      const btn = e.target.closest('.open-quote');
      openQuoteModal(btn.dataset.service || '');
      return;
    }

    // Open project detail
    if (e.target.closest('.open-project-detail')) {
      const card = e.target.closest('.open-project-detail');
      openProjectDetailModal(card.dataset.id);
      return;
    }

    // Filter tabs (home)
    if (e.target.closest('#project-filter-tabs .project-tab')) {
      const tab = e.target.closest('.project-tab');
      document.querySelectorAll('#project-filter-tabs .project-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderHomeProjects(tab.dataset.filter);
      return;
    }

    // Filter tabs (projects page)
    if (e.target.closest('#projects-filter-full .project-tab')) {
      const tab = e.target.closest('.project-tab');
      document.querySelectorAll('#projects-filter-full .project-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderProjects(tab.dataset.filter);
      return;
    }
  });

  // Quote buttons
  const quoteButtons = ['btn-hero-quote', 'btn-open-quote-nav', 'btn-cta-quote', 'btn-services-quote', 'btn-faq-contact'];
  quoteButtons.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', () => openQuoteModal(''));
  });

  // Estimator buttons
  const estimatorButtons = ['btn-hero-estimator', 'btn-banner-estimator'];
  estimatorButtons.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', openEstimatorModal);
  });

  // Guide buttons
  ['btn-guide-technique', 'btn-guide-home'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', openTechnicalGuideModal);
  });

  // Estimator -> Quote
  const btnEstToQuote = document.getElementById('btn-estimator-to-quote');
  if (btnEstToQuote) {
    btnEstToQuote.addEventListener('click', () => {
      bootstrap.Modal.getInstance(document.getElementById('estimatorModal')).hide();
      setTimeout(() => openQuoteModal(''), 300);
    });
  }

  // Guide -> Quote
  const btnGuideToQuote = document.getElementById('btn-guide-to-quote');
  if (btnGuideToQuote) {
    btnGuideToQuote.addEventListener('click', () => {
      bootstrap.Modal.getInstance(document.getElementById('technicalGuideModal')).hide();
      setTimeout(() => openQuoteModal('Gros Œuvre & Normes Sahéliennes'), 300);
    });
  }

  // Form submissions
  document.querySelectorAll('#quote-form, #contact-form, #training-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Close any open modal
      document.querySelectorAll('.modal.show').forEach(m => {
        bootstrap.Modal.getInstance(m)?.hide();
      });
      setTimeout(showSuccessToast, 400);
      form.reset();
    });
  });

  // Estimator real-time inputs
  ['est-type', 'est-surface', 'est-finition', 'est-etages'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', window.calculateEstimate);
  });

  // Active nav on load
  document.querySelectorAll('.nav-link-page').forEach(btn => {
    if (btn.dataset.page === 'home') {
      btn.classList.add('active');
      btn.setAttribute('data-active', 'true');
    }
  });
});
