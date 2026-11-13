export const projectDetails = {
  "dnd-desktop": {
    "context": "Business software · ISTN3AS",
    "role": "Team contributor · Horizon Innovations",
    "contribution": "Developed with the five-person Horizon Innovations team as an ISTN3AS Group 22 project for DnD Trading & General Supplies.",
    "problem": "Connect client requests, supplier products, payments and reporting in one stationery-supply workflow.",
    "features": [
      "Search and maintain client, supplier and product records.",
      "Capture orders, supplier-product selections, quantities and totals.",
      "Track payments with separate sales representative and manager menus.",
      "Produce Crystal Reports and configurable email payment requests."
    ],
    "outcome": "A Windows Forms application linking client requests to order and payment records, backed by SQL Server and an ADO.NET typed DataSet.",
    "documentationUrl": "https://github.com/ArjunRamphal/DnD-Trading/blob/main/README.md",
    "imageAlt": "DnD Trading desktop application sign-in screen"
  },
  "dnd-website": {
    "context": "Web development · ISTN3SI",
    "role": "Team contributor · Horizon Innovations",
    "contribution": "Worked with the five-person Horizon Innovations team on the Group 22 website project for DnD Trading & General Supplies.",
    "problem": "Let clients request products and track orders while staff manage sourcing, fulfilment and payments.",
    "features": [
      "Client registration, sign-in and account management.",
      "Supplier-product browsing, product requests and order information.",
      "Staff workflows for suppliers, fulfilment and payment records.",
      "Manager charts for revenue, popular products and sales performance."
    ],
    "outcome": "An ASP.NET Web Forms website connecting client ordering to staff and manager workflows, using SQL Server for shared business records.",
    "documentationUrl": "https://github.com/ArjunRamphal/DNDWebsite/blob/main/README.md",
    "imageAlt": "DnD Trading website home page"
  },
  "dungeon-descent": {
    "context": "Game development · COMP315",
    "role": "Team contributor · ongoing development",
    "contribution": "Originally developed with the nine-person COMP315 Group 7 team. I continue developing the game, including its native SFML version and gameplay features.",
    "problem": "Combine a branching fantasy story, timed riddles and turn-based combat into one connected dungeon adventure.",
    "features": [
      "Four hero classes across three connected floors and five biomes.",
      "Timed riddles, combat, shops, encounters and persistent run choices.",
      "Four branching endings, including a perfect-run ending.",
      "Four difficulties with local top-ten, three-initial leaderboards."
    ],
    "outcome": "A playable C++/SFML adventure with connected progression, narrated story content and local score persistence. The repository includes a Windows single-executable build target.",
    "documentationUrl": "https://github.com/ArjunRamphal/Dungeon_Descent/blob/main/README.md",
    "imageAlt": "Dungeon Descent main menu"
  },
  "notely": {
    "context": "Android development · Personal project",
    "role": "App development",
    "contribution": "Created a Kotlin and Jetpack Compose notes app combining note organisation with optional PIN, auto-lock and screen privacy controls.",
    "problem": "Keep everyday notes easy to find while giving the user control over when their contents are visible.",
    "features": [
      "Search by note title, content or tags.",
      "Organise notes with tags and favourites.",
      "Optional PIN access, inactivity auto-lock and screenshot prevention.",
      "Material 3 themes, dynamic colours and note font choices."
    ],
    "outcome": "An Android note-taking workflow built with MVVM, Room, coroutines and Flow, with privacy controls integrated into the interface.",
    "documentationUrl": "https://github.com/ArjunRamphal/Notely/blob/master/README.md"
  },
  "bookly": {
    "context": "Android development · Personal project",
    "role": "App development",
    "contribution": "Created a Kotlin and Jetpack Compose reader with background file parsing, library import and persistent reading progress.",
    "problem": "Read locally stored books in different formats through one consistent Android interface.",
    "features": [
      "Read EPUB, PDF and TXT books.",
      "Chapter navigation, reading gestures and saved reading positions.",
      "Folder-based import and cached EPUB cover extraction.",
      "Adjustable font size with light and dark reading themes."
    ],
    "outcome": "A multi-format Android reader combining a local book library with a customisable reading experience and automatic position saving.",
    "documentationUrl": "https://github.com/ArjunRamphal/Bookly/blob/master/README.md"
  },
  "banknotes": {
    "context": "Computer vision · COMP702",
    "role": "Team contributor · four-person project",
    "contribution": "One of four authors of the COMP702 project comparing image-processing and template-matching pipelines for banknote recognition.",
    "problem": "Recognise five South African denominations while comparing preprocessing, segmentation and feature-matching methods.",
    "features": [
      "Compare contrast enhancement and filtering methods.",
      "Evaluate contour warping and mask-based segmentation.",
      "Compare SIFT, ORB, AKAZE and HSV histogram matching.",
      "Generate classification reports, image predictions and a pipeline summary."
    ],
    "outcome": "The supplied comparison uses 40 reference templates and 100 evaluation images across R10, R20, R50, R100 and R200 banknotes.",
    "documentationUrl": "https://github.com/ArjunRamphal/south-african-banknote-recognition/blob/main/README.md",
    "outcomeLabel": "Evaluation scope"
  },
  "ontology": {
    "context": "Knowledge representation · COMP720",
    "role": "Team contributor · four-person project",
    "contribution": "One of four authors of the COMP720 cloud-security ontology and competency-question query collection.",
    "problem": "Represent cloud assets, threats, controls and compliance concepts through explicit relationships that can be explored and queried.",
    "features": [
      "OWL classes, object properties and restrictions for cloud security.",
      "Relationships between assets, vulnerabilities, attacks and controls.",
      "Twenty-four SPARQL competency-question queries from the report.",
      "Protégé exploration and an optional Python query helper."
    ],
    "outcome": "The asserted model contains 86 named classes, 31 object properties and 56 OWL restrictions. The repository preserves the original model and all 24 report-derived queries.",
    "documentationUrl": "https://github.com/ArjunRamphal/CloudSecurityOntology/blob/master/README.md",
    "imageAlt": "Cloud security ontology overview"
  },
  "lab-optimizer": {
    "context": "Optimisation & modelling · COMP719",
    "role": "Team contributor · six-person project",
    "contribution": "One of six authors of the COMP719 lab-allocation project, exploring greedy allocation and hill-climbing local search in Python.",
    "problem": "Assign modules to labs with enough seats and the required software while minimising unused capacity across separate teaching sessions.",
    "features": [
      "Load lab capacities, installed software and module requirements.",
      "Choose the smallest compatible lab using a greedy allocation.",
      "Explore feasible alternative assignments with hill-climbing search.",
      "Report assignments, unused seats and per-stage execution times."
    ],
    "outcome": "For the supplied four-lab, ten-module dataset, both methods produce 140 unused seats summed across separate sessions. Exhaustive evaluation of 648 feasible allocations confirms this minimum; the greedy solution is already optimal for this model.",
    "documentationUrl": "https://github.com/ArjunRamphal/CampusLabSpaceOptimizer/blob/master/README.md",
    "outcomeLabel": "Bundled dataset result"
  },
  "action-recognition": {
    "context": "Machine learning · COMP703",
    "role": "Team contributor · four-person project",
    "contribution": "One of four authors of the COMP703 video-action classification project comparing recurrent, Transformer and state space models.",
    "problem": "Recognise actions from video frame sequences and compare how different sequence models use the same extracted features.",
    "features": [
      "Extract MobileNetV2 embeddings for six KTH action classes.",
      "Prepare fixed-length sequences with disjoint subject groups.",
      "Compare RNN, GRU, LSTM, BiLSTM, Transformer and bidirectional SSM.",
      "Record validation metrics, learning curves and confusion matrices."
    ],
    "outcome": "The original notebook records 88.02% accuracy and 88.25% weighted F1 for the bidirectional SSM on 192 validation videos. Those validation videos were also used during model selection.",
    "documentationUrl": "https://github.com/ArjunRamphal/kth-human-action-recognition/blob/master/README.md",
    "outcomeLabel": "Recorded validation result",
    "imageCaption": "KTH dataset examples; labels identify action classes"
  },
  "appliance-identification": {
    "context": "Machine learning & cybersecurity · COMP700",
    "role": "Co-author · Honours research",
    "contribution": "Co-authored this COMP700 Honours research project with Darian Robert, supervised by Prof. Okuthe Paul Kogeda and Prof. Mluleki Bryan Sinqadu.",
    "problem": "Identify ten known smart-home appliance classes from engineered network-traffic features while comparing classification performance, explainability and CPU inference cost.",
    "features": [
      "Audit the dataset, remove duplicate rows and create a stratified train/validation/test split with preprocessing and SMOTE fitted only on training data.",
      "Compare five neural architectures over five seeds and a tuned Random Forest, selecting saved models using validation performance or training-only cross-validation.",
      "Use Kernel and Partition SHAP to examine feature importance, explanation stability and confusion among difficult appliance classes.",
      "Convert neural models to FP32 LiteRT and profile prepared-input inference on x86_64 and an Oracle ARM64 virtual machine."
    ],
    "outcome": "On the common 376-case held-out set, the selected CNN–BiLSTM achieves 82.713% accuracy and the tuned Random Forest 83.511%. The CNN–BiLSTM takes about 4 ms per case on the profiled x86_64 and ARM64 CPUs; this measures prepared-input inference, excluding traffic capture and feature engineering.",
    "documentationUrl": "https://github.com/ArjunRamphal/smart-home-appliance-identification-using-deep-learning/blob/master/README.md",
    "outcomeLabel": "Held-out evaluation & inference",
    "imageAlt": "Thesis chart comparing held-out accuracy, balanced accuracy and macro-F1 for five neural models and a tuned Random Forest",
    "imageCaption": "Figure 5 from the COMP700 thesis: selected-model comparison on the common 376-case held-out set."
  },
  "soil-moisture": {
    "context": "IoT & applied machine learning · COMP717A",
    "role": "Team contributor · five-person project",
    "contribution": "Worked with the five-person COMP717A team on a garden prototype connecting soil readings, measured manual watering and a browser dashboard.",
    "problem": "Help a gardener decide when to water, how much to add next and when to stop using measured soil feedback.",
    "features": [
      "Collect Arduino moisture readings on a Raspberry Pi over USB serial.",
      "Display ADC readings, a calibrated moisture index and dry warnings.",
      "Learn quantity guidance from trials and record measured additions.",
      "Show history and calendar summaries, with CSV and JSON exports."
    ],
    "outcome": "In one recorded check, the saved final-method recalculation estimated approximately 6.1 mL against 5.5 mL measured water. The prototype supports manual, measured watering with sensor feedback after each portion.",
    "documentationUrl": "https://github.com/ArjunRamphal/garden-iot-watering-guidance/blob/master/README.md",
    "outcomeLabel": "Recorded prototype check",
    "imageAlt": "Soil dashboard with ADC readings, moisture index and cumulative water"
  }
};
