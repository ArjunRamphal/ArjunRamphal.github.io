import { projectDetails } from './projectDetails';
import stationeryPOSSystemThumbnail from '../images/thumbnails/dnd_trading.webp';
import dndTradingWebsiteThumbnail from '../images/thumbnails/dnd_website.webp';
import visualNovelRoguelikeThumbnail from '../images/thumbnails/dungeon_descent.webp';
import notelyThumbnail from '../images/thumbnails/notely.webp';
import booklyThumbnail from '../images/thumbnails/bookly.webp';
import bankNoteRecognitionThumbnail from '../images/thumbnails/bank_note.webp';
import cloudSecurityOntologyThumbnail from '../images/thumbnails/cloud_security.webp';
import labOptimizerThumbnail from '../images/thumbnails/lab_optimizer.webp';
import soilMoistureDashboardThumbnail from '../images/thumbnails/soil_moisture_dashboard.webp';
import applianceIdentificationThumbnail from '../images/thumbnails/smart_home_appliance_identification.webp';
import stationeryPOSSystem from '../images/dnd_trading.png';
import dndTradingWebsite from '../images/dnd_website.png';
import visualNovelRoguelike from '../images/dungeon_descent.png';
import notely from '../images/notely.png';
import bookly from '../images/bookly.jpg';
import bankNoteRecognition from '../images/bank_note.jpg';
import cloudSecurityOntology from '../images/cloud_security.png';
import labOptimizer from '../images/lab_optimizer.png';
import humanActionRecognition from '../images/action_recognition.svg';
import soilMoistureDashboard from '../images/soil_moisture_dashboard.jpg';
import applianceIdentificationResults from '../images/smart_home_appliance_identification.png';

export const projects = [
  {
    id: "dnd-desktop",
    title: "Stationery POS System",
    startDate: "2025-02",
    endDate: "2025-11",
    description: "A Windows desktop application connecting client requests, supplier products, orders, payments and reporting for a stationery supplier.",
    tech: ["C#", ".NET", "SQL"],
    githubLink: "https://github.com/ArjunRamphal/DnD-Trading",
    image: stationeryPOSSystemThumbnail,
    detailImage: stationeryPOSSystem,
    details: projectDetails["dnd-desktop"]
  },
  {
    id: "dnd-website",
    title: "DND Trading Website",
    startDate: "2025-07",
    endDate: "2025-11",
    description: "An ASP.NET website for client ordering, staff fulfilment and manager reporting at DnD Trading & General Supplies.",
    tech: ["C#", "ASP.NET Web Forms", "SQL Server", "JavaScript"],
    githubLink: "https://github.com/ArjunRamphal/DNDWebsite",
    image: dndTradingWebsiteThumbnail,
    detailImage: dndTradingWebsite,
    details: projectDetails["dnd-website"]
  },
  {
    id: "dungeon-descent",
    title: "Dungeon Descent",
    subtitle: "Story-driven visual novel roguelike",
    startDate: "2025-02",
    endDate: "2025-06",
    description: "A C++/SFML fantasy adventure with connected dungeon floors, timed riddles, turn-based combat and branching endings.",
    tech: ["C++", "SFML"],
    githubLink: "https://github.com/ArjunRamphal/Dungeon_Descent",
    image: visualNovelRoguelikeThumbnail,
    detailImage: visualNovelRoguelike,
    details: projectDetails["dungeon-descent"]
  },
  {
    id: "notely",
    title: "Notely",
    startDate: null,
    endDate: null,
    ongoing: true,
    sortDate: "2026-01-12",
    description: "A privacy-focused Android notes app with tags, search, PIN access, auto-lock and customisable Material 3 themes.",
    tech: ["Kotlin", "Jetpack Compose"],
    githubLink: "https://github.com/ArjunRamphal/Notely",
    image: notelyThumbnail,
    detailImage: notely,
    details: projectDetails["notely"]
  },
  {
    id: "bookly",
    title: "Bookly",
    startDate: null,
    endDate: null,
    ongoing: true,
    sortDate: "2026-01-15",
    description: "An Android eBook reader for EPUB, PDF and TXT, with folder-based import, chapter navigation and saved reading progress.",
    tech: ["Kotlin", "Jetpack Compose"],
    githubLink: "https://github.com/ArjunRamphal/Bookly",
    image: booklyThumbnail,
    detailImage: bookly,
    details: projectDetails["bookly"]
  },
  {
    id: "banknotes",
    title: "South African Banknote Recognition",
    startDate: "2026-05",
    endDate: "2026-05",
    description: "A computer vision comparison of preprocessing, segmentation and template matching for five South African banknote denominations.",
    tech: ["Python", "OpenCV", "Computer Vision"],
    githubLink: "https://github.com/ArjunRamphal/south-african-banknote-recognition",
    image: bankNoteRecognitionThumbnail,
    detailImage: bankNoteRecognition,
    details: projectDetails["banknotes"]
  },
  {
    id: "ontology",
    title: "Cloud Security Ontology",
    startDate: "2026-02",
    endDate: "2026-06",
    description: "An OWL knowledge model for cloud assets, threats and controls, with 24 SPARQL competency-question queries from the project report.",
    tech: ["Protégé", "OWL", "SPARQL"],
    githubLink: "https://github.com/ArjunRamphal/CloudSecurityOntology",
    image: cloudSecurityOntologyThumbnail,
    detailImage: cloudSecurityOntology,
    details: projectDetails["ontology"]
  },
  {
    id: "lab-optimizer",
    title: "Campus Lab Space Optimizer",
    startDate: "2026-02",
    endDate: "2026-06",
    description: "A Python allocation tool comparing greedy and hill-climbing methods to match modules with compatible labs and minimise unused seats.",
    tech: ["Python", "Algorithms", "Local Search"],
    githubLink: "https://github.com/ArjunRamphal/CampusLabSpaceOptimizer",
    image: labOptimizerThumbnail,
    detailImage: labOptimizer,
    details: projectDetails["lab-optimizer"]
  },
  {
    id: "action-recognition",
    title: "KTH Human Action Recognition",
    startDate: "2026-02",
    endDate: "2026-06",
    description: "A video-classification pipeline comparing six sequence models using MobileNetV2 frame features from the KTH action dataset.",
    tech: ["Python", "PyTorch", "Sequence Models"],
    githubLink: "https://github.com/ArjunRamphal/kth-human-action-recognition",
    image: humanActionRecognition,
    details: projectDetails["action-recognition"],
    imagePosition: "center",
    imageFit: "contain"
  },
  {
    id: "appliance-identification",
    title: "Smart Home Appliance Identification",
    startDate: "2026-03",
    endDate: "2026-10",
    description: "A COMP700 research project identifying ten IoT appliance classes from network-traffic features, with model comparisons, SHAP explanations and CPU inference profiling.",
    tech: ["Python", "TensorFlow / Keras", "SHAP", "LiteRT", "Scikit-learn"],
    githubLink: "https://github.com/ArjunRamphal/smart-home-appliance-identification-using-deep-learning",
    image: applianceIdentificationThumbnail,
    detailImage: applianceIdentificationResults,
    details: projectDetails["appliance-identification"],
    imagePosition: "center",
    imageFit: "contain"
  },
  {
    id: "soil-moisture",
    title: "Soil Moisture Monitoring & Watering Guidance",
    startDate: "2026-09",
    endDate: "2026-11",
    description: "A COMP717A group project connecting Arduino and Raspberry Pi to a Flask dashboard for live soil monitoring, dry-soil alerts, and learned water-quantity guidance for manual watering.",
    tech: ["Python", "Flask", "SQLite", "Arduino", "Raspberry Pi"],
    githubLink: "https://github.com/ArjunRamphal/garden-iot-watering-guidance",
    image: soilMoistureDashboardThumbnail,
    detailImage: soilMoistureDashboard,
    details: projectDetails["soil-moisture"],
    imagePosition: "center",
    imageFit: "contain"
  }
];
