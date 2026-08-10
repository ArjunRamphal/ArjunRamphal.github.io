import stationeryPOSSystem from '../images/dnd_trading.png';
import dndTradingWebsite from '../images/dnd_website.png';
import visualNovelRoguelike from '../images/dungeon_descent.png';
import notely from '../images/notely.png';
import bookly from '../images/bookly.jpg';
import bankNoteRecognition from '../images/bank_note.jpg';
import cloudSecurityOntology from '../images/cloud_security.png';
import labOptimizer from '../images/lab_optimizer.png';
import humanActionRecognition from '../images/action_recognition.png';

export const projects = [
{
    title: "Stationery POS System",
    description: "A C# Point of Sale system designed to handle retail transactions, inventory, and user management.",
    tech: ["C#", ".NET", "SQL"],
    githubLink: "https://github.com/ArjunRamphal/DnD-Trading",
    image: stationeryPOSSystem
  },
  {
    title: "DND Trading Website",
    description: "The official website component for DND Trading & General Supplies, complementing the Stationery POS system.",
    tech: ["HTML/CSS", "JavaScript", "C#", ".NET"], 
    githubLink: "https://github.com/ArjunRamphal/DNDWebsite",
    image: dndTradingWebsite
  },
  {
    title: "Visual Novel Roguelike",
    description: "A unique roguelike game built in C++ blending dungeon crawling with visual novel storytelling mechanics.",
    tech: ["C++", "SFML"],
    githubLink: "https://github.com/ArjunRamphal/Dungeon_Descent",
    image: visualNovelRoguelike
  },
  {
    title: "Notely",
    description: "A streamlined Android note-taking application for organizing personal tasks and ideas.",
    tech: ["Kotlin", "Jetpack Compose"],
    githubLink: "https://github.com/ArjunRamphal/Notely",
    image: notely
  },
  {
    title: "Bookly",
    description: "A digital library manager for Android to track book collections and reading progress.",
    tech: ["Kotlin", "Jetpack Compose"],
    githubLink: "https://github.com/ArjunRamphal/Bookly",
    image: bookly
  },
  {
    title: "SA Bank Note Recognition System",
    description: "An image processing system designed to recognize South African bank notes using dual structural and statistical strategies.",
    tech: ["Python", "Computer Vision", "Image Processing"],
    githubLink: "https://github.com/ArjunRamphal/COMP702Project",
    image: bankNoteRecognition
  },
  {
    title: "Cloud Security Ontology",
    description: "A formal knowledge model establishing a shared semantic vocabulary for automated reasoning engines.",
    tech: ["Protégé", "OWL RDF/XML", "Description Logic"],
    githubLink: "https://github.com/ArjunRamphal/CloudSecurityOntology",
    image: cloudSecurityOntology
  },
  {
    title: "Campus Lab Space Optimizer",
    description: "A Python-based system utilizing a Greedy Algorithm and Hill Climbing Local Search to minimize unused university laboratory seats.",
    tech: ["Python", "Algorithms", "Local Search"],
    githubLink: "https://github.com/ArjunRamphal/CampusLabSpaceOptimizer",
    image: labOptimizer
  },
  {
    title: "Human Action Recognition Pipeline",
    description: "A deep learning pipeline evaluating recurrent baselines and advanced sequence models for automated human action recognition.",
    tech: ["Python", "GRU/LSTM", "Vision Sequence Transformers"],
    githubLink: "https://github.com/ArjunRamphal/COMP703HumanActionRecognition",
    image: humanActionRecognition
  }
];