// Italian copy, keyed by the English text passed to t().
// Every key in spanish.ts and every literal t("...") must appear here
// (checked by tests/i18n-content.test.mjs).
export const italian: Record<string, string> = {
  // Project catalog
  Engineering: "Ingegneria",
  "Atlas logo": "Logo di Atlas",
  "Research artifact": "Risultato di ricerca",
  Agents: "Agenti",
  Statistics: "Statistica",
  "Data Systems": "Sistemi di dati",
  Clusters: "Cluster",
  Risk: "Rischio",
  "Regularization in CNNs: Internal Activation Dynamics":
    "Regolarizzazione nelle CNN: dinamica delle attivazioni interne",
  "Deep Learning Research": "Ricerca in deep learning",
  "Final-year thesis studying how seven regularization techniques affect both external accuracy and the internal activation geometry of CNNs across CIFAR-10 and SVHN.":
    "Tesi triennale che studia come sette tecniche di regolarizzazione influiscono sia sull'accuratezza esterna sia sulla geometria delle attivazioni interne delle CNN, su CIFAR-10 e SVHN.",
  "Compared L1, L2, Dropout, Early Stopping, Gaussian Noise, Data Augmentation, and Batch Normalization.":
    "Confronto tra L1, L2, Dropout, Early Stopping, rumore gaussiano, Data Augmentation e Batch Normalization.",
  "Measured internal behavior through Shannon entropy, dispersion ratios, and unique activation states.":
    "Comportamento interno misurato con l'entropia di Shannon, i rapporti di dispersione e gli stati di attivazione unici.",
  "Built a reproducible training and analysis pipeline with checkpoint extraction and robustness experiments.":
    "Pipeline riproducibile di addestramento e analisi, con estrazione dei checkpoint ed esperimenti di robustezza.",
  Entropy: "Entropia",
  Latent: "Latente",
  "01 / Thesis": "01 / Tesi",
  "Regularizer comparison across accuracy and robustness metrics":
    "Confronto tra regolarizzatori su metriche di accuratezza e robustezza",
  "Radar comparison of regularizers across datasets and robustness axes":
    "Radar dei regolarizzatori per dataset e assi di robustezza",
  "Live / Learning Platform": "Online / Piattaforma di apprendimento",
  "Interactive Learning & Full-Stack Engineering":
    "Apprendimento interattivo e ingegneria full-stack",
  "A bilingual learning platform I built to turn AI theory into interactive experiments, worked problems, and guided practice. Now used by 30+ unique users.":
    "Una piattaforma bilingue che ho costruito per trasformare la teoria dell'IA in esperimenti interattivi, esercizi svolti e pratica guidata. Già usata da più di 30 utenti unici.",
  "157 lessons and 26 interactive laboratories across symbolic AI, deep learning, and generative AI, available in English and Spanish.":
    "157 lezioni e 26 laboratori interattivi di IA simbolica, deep learning e IA generativa, in inglese e spagnolo.",
  "Reusable course modules and independently tested simulation engines for reasoning, search, and neural-network experiments.":
    "Moduli di corso riutilizzabili e motori di simulazione testati in modo indipendente per esperimenti di ragionamento, ricerca e reti neurali.",
  "Google sign-in, private cloud profiles, cross-device progress, and a feedback pipeline backed by Supabase Edge Functions and PostgreSQL.":
    "Accesso con Google, profili privati nel cloud, progressi sincronizzati tra dispositivi e una pipeline di feedback basata su Supabase Edge Functions e PostgreSQL.",
  "Atlas: training a small image-denoising network in the browser":
    "Atlas: addestrare nel browser una piccola rete per togliere il rumore dalle immagini",
  "Atlas image-denoising laboratory with training progress and reconstructed samples":
    "Laboratorio di denoising di Atlas con l'andamento dell'addestramento e i campioni ricostruiti",
  "Diffusion-based Generative AI for Images":
    "IA generativa per immagini basata sulla diffusione",
  "02 / Generative AI": "02 / IA generativa",
  "Score-based Modeling": "Modelli basati sullo score",
  "Research-grade diffusion package for training, sampling, conditioning, and evaluating image generation systems with multiple stochastic processes and samplers.":
    "Pacchetto di diffusione di livello di ricerca per addestrare, campionare, condizionare e valutare sistemi di generazione di immagini con diversi processi stocastici e sampler.",
  "Implemented VE, VP, and Sub-VP diffusion processes with modular sampling strategies.":
    "Processi di diffusione VE, VP e Sub-VP implementati con strategie di campionamento modulari.",
  "Supported class-conditional generation, colorization, imputation, and benchmarking utilities.":
    "Generazione condizionata per classe, colorazione, imputazione e strumenti di benchmark.",
  "Evaluated models with FID, Inception Score, bits-per-dimension, and runtime profiling.":
    "Modelli valutati con FID, Inception Score, bit per dimensione e profilazione dei tempi.",
  "Reverse-time denoising pipeline from noise to samples":
    "Pipeline di denoising a tempo inverso, dal rumore ai campioni",
  "Generated samples and diffusion experiment output":
    "Campioni generati e risultati degli esperimenti di diffusione",
  "AthenAI Competition Project": "Progetto per la competizione AthenAI",
  "03 / Challenge": "03 / Competizione",
  "Applied ML Decision Systems": "Sistemi decisionali di ML applicato",
  "Scholarship-winning challenge work focused on turning noisy tabular signals into a practical decision pipeline with validation, backtesting, and readable outputs.":
    "Lavoro premiato con una borsa di studio: trasformare segnali tabellari rumorosi in una pipeline decisionale pratica, con validazione, backtesting e risultati leggibili.",
  "Built an experiment loop for comparing feature sets, decision rules, and evaluation windows.":
    "Ciclo di esperimenti per confrontare insiemi di feature, regole di decisione e finestre di valutazione.",
  "Prioritized interpretability and sensitivity checks over black-box confidence.":
    "Priorità all'interpretabilità e ai controlli di sensibilità rispetto alla fiducia nella scatola nera.",
  "Translated model outputs into concise, judge-readable technical reasoning.":
    "Risultati del modello tradotti in un ragionamento tecnico conciso e leggibile per la giuria.",
  Scholarship: "Borsa di studio",
  Challenge: "Competizione",
  Validation: "Validazione",
  Reporting: "Report",
  "Signal validation and decision ranking under competition constraints":
    "Validazione dei segnali e classificazione delle decisioni con i vincoli della competizione",
  "AthenAI clustering diagnostics from the experimental report":
    "Diagnostica del clustering di AthenAI tratta dal report sperimentale",
  "Database Performance Comparison": "Confronto delle prestazioni dei database",
  "04 / Data Systems": "04 / Sistemi di dati",
  "Benchmarking & Profiling": "Benchmark e profilazione",
  "Benchmarking suite comparing PostgreSQL, MongoDB, SQLite, and DuckDB across CRUD workloads, cache behavior, indexing decisions, and profiling outputs.":
    "Suite di benchmark che confronta PostgreSQL, MongoDB, SQLite e DuckDB su carichi CRUD, comportamento della cache, scelte di indicizzazione e profilazione.",
  "Automated data generation, schema setup, CRUD testing, and result export.":
    "Generazione dei dati, creazione degli schemi, test CRUD ed esportazione dei risultati automatizzati.",
  "Compared primary-key lookups, joins, update workloads, cache behavior, and memory impact.":
    "Confronto tra ricerche per chiave primaria, join, carichi di aggiornamento, cache e uso della memoria.",
  "Produced plots and a modular pipeline for reproducible performance analysis.":
    "Grafici e una pipeline modulare per analisi delle prestazioni riproducibili.",
  Plots: "Grafici",
  "Multi-engine workload profiler with cache experiments":
    "Profilatore di carichi su più motori, con esperimenti sulla cache",
  "Database benchmarking charts and profiling output":
    "Grafici di benchmark dei database e risultati della profilazione",
  "Reinforcement Learning Analysis": "Analisi di reinforcement learning",
  "05 / Agents": "05 / Agenti",
  "RL Algorithms": "Algoritmi di RL",
  "Implementation and analysis of Q-Learning, SARSA, and DQN agents in Gymnasium environments with training curves, policy comparisons, and behavior inspection.":
    "Implementazione e analisi di agenti Q-Learning, SARSA e DQN in ambienti Gymnasium, con curve di addestramento, confronto tra policy e analisi del comportamento.",
  "Trained tabular and neural agents on FrozenLake, CartPole, and LunarLander setups.":
    "Agenti tabellari e neurali addestrati su FrozenLake, CartPole e LunarLander.",
  "Visualized reward, episode length, exploration behavior, and convergence signals.":
    "Visualizzazione di ricompensa, durata degli episodi, esplorazione e segnali di convergenza.",
  "Compared hyperparameter sensitivity across exploration and learning-rate choices.":
    "Confronto della sensibilità agli iperparametri tra strategie di esplorazione e learning rate.",
  "Agent loop for policy learning and value updates":
    "Ciclo dell'agente per l'apprendimento della policy e l'aggiornamento dei valori",
  "Reinforcement learning training visualization":
    "Visualizzazione dell'addestramento di reinforcement learning",
  "Clustering Techniques Evaluation": "Valutazione di tecniche di clustering",
  "06 / Machine Learning": "06 / Machine learning",
  "Unsupervised Learning": "Apprendimento non supervisionato",
  "Comparative evaluation of K-Means, Fuzzy C-Means, Spectral Clustering, and Gaussian Mixtures on synthetic and real-world datasets.":
    "Valutazione comparativa di K-Means, Fuzzy C-Means, Spectral Clustering e Gaussian Mixtures su dataset sintetici e reali.",
  "Implemented and compared clustering methods across separable and non-linear structures.":
    "Metodi di clustering implementati e confrontati su strutture separabili e non lineari.",
  "Used Silhouette, Dunn Index, Adjusted Rand Index, NMI, accuracy, and F1-score.":
    "Metriche usate: Silhouette, indice di Dunn, Adjusted Rand Index, NMI, accuratezza e F1-score.",
  "Explained cluster interpretability through PCA projections and metric tradeoffs.":
    "Interpretabilità dei cluster spiegata con proiezioni PCA e compromessi tra metriche.",
  "Cluster geometry compared across algorithms and metrics":
    "Geometria dei cluster confrontata tra algoritmi e metriche",
  "Clustering evaluation plots and projected clusters":
    "Grafici di valutazione del clustering e cluster proiettati",
  "Cardiac Health Risk Analysis in R": "Analisi del rischio cardiaco in R",
  "07 / Statistics": "07 / Statistica",
  "Clinical Data Analysis": "Analisi di dati clinici",
  "Statistical analysis of heart failure records with PCA, PLS, clustering, and LDA to study patient profiles, risk factors, and classification behavior.":
    "Analisi statistica di cartelle sull'insufficienza cardiaca con PCA, PLS, clustering e LDA per studiare profili dei pazienti, fattori di rischio e classificazione.",
  "Explored a heart failure dataset with 299 observations and multivariate risk factors.":
    "Esplorazione di un dataset sull'insufficienza cardiaca con 299 osservazioni e fattori di rischio multivariati.",
  "Combined dimensionality reduction, clustering, and discriminant analysis.":
    "Riduzione della dimensionalità, clustering e analisi discriminante combinati.",
  "Summarized clinical patterns and modeling limitations in a compact technical report.":
    "Schemi clinici e limiti del modello riassunti in un report tecnico compatto.",
  "Multivariate analysis pipeline for patient risk profiles":
    "Pipeline di analisi multivariata per i profili di rischio dei pazienti",
  "Cardiac health analysis dashboard":
    "Dashboard di analisi della salute cardiaca",

  // Project index, errors, navigation
  "Research / Products / Applied ML": "Ricerca / Prodotti / ML applicato",
  "Things I've built": "Cose che ho costruito",
  "Some start with a research question. Others start with a problem I want to solve.":
    "Alcune nascono da una domanda di ricerca. Altre da un problema che voglio risolvere.",
  "Full technical portfolio": "Portfolio tecnico completo",
  "Filter projects": "Filtra i progetti",
  All: "Tutti",
  projects: "progetti",
  "Page not found": "Pagina non trovata",
  "404 / Page not found": "404 / Pagina non trovata",
  "This page isn't here": "Questa pagina non c'è",
  "The address may have changed, or the link may be incomplete.":
    "L'indirizzo potrebbe essere cambiato o il link potrebbe essere incompleto.",
  "Back to home": "Torna alla home",
  Loading: "Caricamento",
  "Loading...": "Caricamento...",
  "Technical portfolio": "Portfolio tecnico",
  "Technical Portfolio": "Portfolio tecnico",
  Portfolio: "Portfolio",
  Writing: "Articoli",
  About: "Chi sono",
  Work: "Lavori",
  "Download CV": "Scarica il CV",
  "Skip to content": "Vai al contenuto",
  "Main navigation": "Navigazione principale",
  "Mobile navigation": "Navigazione mobile",
  "Open navigation": "Apri il menu",
  "Close navigation": "Chiudi il menu",
  "Email Adam": "Scrivi ad Adam",
  Projects: "Progetti",
  "Current research": "Ricerca in corso",
  "All projects": "Tutti i progetti",
  Research: "Ricerca",
  Products: "Prodotti",
  "Data & ML": "Dati e ML",
  Source: "Codice",
  Paper: "Paper",
  Blog: "Blog",
  "Case study": "Caso di studio",
  Details: "Dettagli",
  Highlights: "In evidenza",
  Close: "Chiudi",
  "Live product": "Prodotto online",
  "Visit Atlas": "Visita Atlas",
  "Get In Touch": "Contatti",
  "The work behind it.": "Il lavoro che c'è dietro.",
  "Tools & methods": "Strumenti e metodi",
  "Let's talk about it": "Parliamone",
  Thesis: "Tesi",
  "Generative AI": "IA generativa",
  "Applied ML": "ML applicato",
  "Building Atlas": "Costruire Atlas",

  // Blog
  "Back to blog": "Torna agli articoli",
  "Read article": "Leggi l'articolo",
  "Field notes.": "Appunti dal campo.",
  "Neural networks, product engineering, and the things I learn by building.":
    "Reti neurali, ingegneria di prodotto e quello che imparo costruendo.",
  "Article not found": "Articolo non trovato",
  "The article you are looking for is not available in this portfolio.":
    "L'articolo che cerchi non è disponibile.",
  "Research results table": "Tabella dei risultati di ricerca",
  "Research. Products. Community.": "Ricerca, prodotti e community.",
  "Madrid, Spain": "Madrid, Spagna",
  "04 / Get in touch": "Contatti",
  Languages: "Lingue",

  // Portfolio, experience and education
  "AI Engineering / Data Science / Research":
    "Ingegneria dell'IA / Data science / Ricerca",
  "The technical portfolio": "Il portfolio tecnico",
  "Experiments, production-oriented systems, and the engineering behind them.":
    "Esperimenti, sistemi pensati per la produzione e l'ingegneria che c'è dietro.",
  "Experience & education": "Esperienza e formazione",
  "Skills & awards": "Competenze e premi",
  Contact: "Contatti",
  "Featured Projects": "Progetti in evidenza",
  "Deep learning research, interactive learning, and data systems. Built, evaluated, and shared.":
    "Ricerca in deep learning, apprendimento interattivo e sistemi di dati. Costruiti, valutati e condivisi.",
  "Experience & Education": "Esperienza e formazione",
  "Professional work, technical leadership, and academic foundations across AI, data science, and developer communities.":
    "Lavoro professionale, leadership tecnica e basi accademiche tra IA, data science e community di sviluppatori.",
  "Professional Experience": "Esperienza professionale",
  Education: "Formazione",
  President: "Presidente",
  Current: "Attuale",
  "Co-founder & Treasurer, Board Member":
    "Cofondatore e tesoriere, membro del direttivo",
  "Jul 2025 - Present": "Lug 2025 - oggi",
  "Elected President in Jul 2026 after co-founding the chapter and serving as Treasurer.":
    "Eletto presidente a luglio 2026, dopo aver cofondato il gruppo ed esserne stato tesoriere.",
  "Led 10+ technical events with 250+ attendees and helped grow the community to 275 members.":
    "Ho guidato più di 10 eventi tecnici con oltre 250 partecipanti e contribuito a far crescere la community fino a 275 membri.",
  "Managed teams of 6 to 13 people across AI, software, and student innovation initiatives.":
    "Ho coordinato team da 6 a 13 persone in iniziative di IA, software e innovazione studentesca.",
  Leadership: "Leadership",
  Events: "Eventi",
  AI: "IA",
  Community: "Community",
  "Data & AI Scientist Intern": "Data & AI Scientist (tirocinio)",
  "Oct 2025 - Apr 2026": "Ott 2025 - apr 2026",
  "Developed internal MCP servers and integrated external ones into a full-stack AI application.":
    "Ho sviluppato server MCP interni e integrato quelli esterni in un'applicazione di IA full-stack.",
  "Built agentic chatbot systems, data anomaly detection, automated reporting, and AI-generated summaries.":
    "Ho costruito chatbot ad agenti, rilevamento di anomalie nei dati, report automatici e riassunti generati con IA.",
  "Worked across the data science pipeline, from data preparation to modeling and visualization.":
    "Ho lavorato su tutta la pipeline di data science, dalla preparazione dei dati alla modellazione e visualizzazione.",
  "Received a return offer following the internship.":
    "Al termine del tirocinio ho ricevuto un'offerta per restare.",
  "AI Agents": "Agenti di IA",
  "Data Pipelines": "Pipeline di dati",
  Automation: "Automazione",
  Dashboards: "Dashboard",
  "AI Engineer Intern": "AI Engineer (tirocinio)",
  "Feb - Jun 2025": "Feb - giu 2025",
  "Built an LLM-based RAG system for querying intelligence data.":
    "Ho costruito un sistema RAG basato su LLM per interrogare dati di intelligence.",
  "Integrated APIs and geospatial data into production-oriented pipelines.":
    "Ho integrato API e dati geospaziali in pipeline pensate per la produzione.",
  "Documented systems and workflows with clarity for technical handoff.":
    "Ho documentato sistemi e flussi di lavoro in modo chiaro per il passaggio di consegne.",
  Geospatial: "Geospaziale",
  "Freelance Full-Stack Developer": "Sviluppatore full-stack freelance",
  "Self-employed": "Autonomo",
  Remote: "Da remoto",
  "Feb 2023 - Dec 2024": "Feb 2023 - dic 2024",
  "Delivered end-to-end web applications using Python, JavaScript, and SQL.":
    "Ho consegnato applicazioni web complete con Python, JavaScript e SQL.",
  "Managed client needs, development scope, implementation, and deployment.":
    "Ho gestito esigenze dei clienti, perimetro dello sviluppo, implementazione e deployment.",
  Clients: "Clienti",
  "MSc in Artificial Intelligence":
    "Laurea magistrale in Intelligenza Artificiale",
  "Scientific foundations of AI, research methodology, advanced theory, and technical development.":
    "Fondamenti scientifici dell'IA, metodologia della ricerca, teoria avanzata e sviluppo tecnico.",
  "Thesis in progress: latent representation editing in LLMs for deceptive behavior unlearning and alignment.":
    "Tesi magistrale in corso: modifica delle rappresentazioni latenti negli LLM per disimparare comportamenti ingannevoli e per l'allineamento.",
  "BSc in Data Science and Engineering":
    "Laurea triennale in Scienza e Ingegneria dei Dati",
  "Focused on machine learning, generative AI, and advanced statistical modeling.":
    "Focus su machine learning, IA generativa e modellazione statistica avanzata.",
  "Class Delegate for two years and active contributor to student innovation events.":
    "Rappresentante di classe per due anni e partecipante attivo agli eventi di innovazione studentesca.",
  "Thesis: Study of regularization effects on neural networks' internal activations.":
    "Tesi triennale: studio degli effetti della regolarizzazione sulle attivazioni interne delle reti neurali.",
  GPA: "Media",
  "Microcredential: Liga de Inversores": "Microcredenziale: Liga de Inversores",
  "1st Place Winner": "Primo posto",
  "Won the league through data-driven portfolio decisions in a guided academic simulation.":
    "Ho vinto la lega con decisioni di portafoglio basate sui dati, in una simulazione accademica guidata.",
  "Applied predictive modeling, backtesting, and collaborative analysis under competition constraints.":
    "Modelli predittivi, backtesting e analisi collaborativa con i vincoli della competizione.",
  "Data Analysis": "Analisi dei dati",

  // About (technical portfolio)
  "About Me": "Chi sono",
  "A passionate data scientist with a strong international background and expertise in quantitative analysis, machine learning, and full-stack development.":
    "Un data scientist appassionato, con un forte background internazionale ed esperienza in analisi quantitativa, machine learning e sviluppo full-stack.",
  Background: "Percorso",
  "I'm a Data Scientist and AI Engineer with a BSc in Data Science and Engineering from Universidad Autónoma de Madrid, currently pursuing an MSc in Artificial Intelligence. My experience spans technology consulting at Accenture, building cloud-native LLM and RAG architectures, and leading data science projects across geospatial intelligence, applied AI, and web development.":
    "Sono data scientist e AI engineer, laureato in Scienza e Ingegneria dei Dati all'Universidad Autónoma de Madrid, e frequento la laurea magistrale in Intelligenza Artificiale. Ho lavorato nella consulenza tecnologica in Accenture, su architetture cloud con LLM e RAG e su progetti di data science tra intelligence geospaziale, IA applicata e sviluppo web.",
  "Currently serving as President of the Google Developer Group on Campus UAM, driving AI and tech innovation events. I've built production LLM+RAG systems at GMV-ISTAR, delivered data-driven consulting solutions at Accenture, and developed research-oriented projects in generative AI, model evaluation, and statistical analysis.":
    "Oggi sono presidente del Google Developer Group on Campus UAM, dove organizzo eventi di IA e innovazione tecnologica. Ho costruito sistemi LLM+RAG in produzione in GMV-ISTAR, consegnato soluzioni di consulenza basate sui dati in Accenture e sviluppato progetti di ricerca su IA generativa, valutazione dei modelli e analisi statistica.",
  "Interested in collaboration or have questions?":
    "Ti interessa collaborare o hai domande?",
  "Let's connect →": "Scrivimi →",
  "Technical Skills": "Competenze tecniche",
  "Frameworks & Programming": "Framework e programmazione",
  "AI & Data Science": "IA e data science",
  "Soft Skills & Interests": "Soft skill e interessi",
  "Machine Learning": "Machine learning",
  "Deep Learning": "Deep learning",
  NLP: "NLP",
  "Computer Vision": "Visione artificiale",
  "Model Evaluation": "Valutazione dei modelli",
  "Statistical Modeling": "Modellazione statistica",
  "Team Working": "Lavoro di squadra",
  "Public Speaking": "Parlare in pubblico",
  Mentoring: "Mentoring",
  "Technical Writing": "Scrittura tecnica",
  "Developer Communities": "Community di sviluppatori",
  Innovation: "Innovazione",
  "Event Management": "Organizzazione di eventi",
  Entrepreneurship: "Imprenditorialità",
  "English (C1)": "Inglese (C1)",
  "Spanish (Native)": "Spagnolo (madrelingua)",
  "Italian (Native)": "Italiano (madrelingua)",
  "French (B2)": "Francese (B2)",
  "Honors & Awards": "Premi e riconoscimenti",
  "1st Place - UAM Investor's League": "1° posto - Liga de Inversores UAM",
  "Excellence Scholarship - Community of Madrid":
    "Borsa di eccellenza - Comunidad de Madrid",
  "2nd Prize - Inmune Institute Sports Tech Innovation":
    "2° premio - Sports Tech Innovation, Inmune Institute",
  "3rd Place - Olimpiada Científica Juvenil Española (Madrid)":
    "3° posto - Olimpiada Científica Juvenil Española (Madrid)",

  // Project metric labels
  Regularizers: "Regolarizzatori",
  Datasets: "Dataset",
  Focus: "Focus",
  "Unique users": "Utenti unici",
  Lessons: "Lezioni",
  Processes: "Processi",
  Samplers: "Sampler",
  Reports: "Report",
  Outcome: "Risultato",
  Mode: "Modalità",
  Decisions: "Decisioni",
  Databases: "Database",
  Layer: "Livello",
  Output: "Output",
  Algorithms: "Algoritmi",
  Envs: "Ambienti",
  Solved: "Risolti",
  Methods: "Metodi",
  Metrics: "Metriche",
  View: "Vista",
  Patients: "Pazienti",
  Variables: "Variabili",
  Model: "Modello",

  // Contact
  "Write to me": "Scrivimi",
  "What I am looking for": "Cosa cerco",
  "An AI engineering role where I can keep working on making language models more reliable. If you are organising something for students, or want to talk about Atlas or GDG UAM, write too.":
    "Un ruolo di AI engineer in cui continuare a lavorare per rendere più affidabili i modelli linguistici. Se organizzi qualcosa per studenti o vuoi parlare di Atlas o di GDG UAM, scrivimi pure.",
  "Time zone": "Fuso orario",
  "Spanish and Italian (native), English (C1), French (B2+)":
    "Spagnolo e italiano (madrelingua), inglese (C1), francese (B2+)",

  // Current research
  "Current research · MSc thesis, in progress":
    "Ricerca in corso · tesi magistrale",
  "Latent representation editing in LLMs to unlearn deceptive behaviour.":
    "Modificare le rappresentazioni latenti degli LLM per disimparare il comportamento ingannevole.",
  "The question is whether deceptive behaviour in a language model can be located in its latent representations and removed by editing them, as a contribution to alignment. It continues my bachelor's thesis, which measured how regularisation changes the internal activations of a CNN.":
    "La domanda è se il comportamento ingannevole di un modello linguistico si possa localizzare nelle sue rappresentazioni latenti e rimuovere modificandole, come contributo all'allineamento. Prosegue la mia tesi triennale, che misurava come la regolarizzazione cambia le attivazioni interne di una CNN.",
  "Universidad Autónoma de Madrid · 2026–2027":
    "Universidad Autónoma de Madrid · 2026–2027",
  "Slides: the state of the art on LLM internal activations":
    "Slide: lo stato dell'arte sulle attivazioni interne degli LLM",
  "Bachelor's thesis, as an article":
    "La tesi triennale, raccontata in un articolo",

  // Home
  Language: "Lingua",
  "A little about me": "Qualcosa su di me",
  "More than a job title.": "Più di una qualifica.",
  "What interests me": "Cosa mi interessa",
  "Not everything starts at a keyboard.":
    "Non tutto comincia davanti a una tastiera.",
  "Workshops and events": "Workshop ed eventi",
  "Looking ahead": "Guardando avanti",
  "A few more personal notes": "Qualche nota più personale",
  "Right now": "In questo momento",
  "What I am up to.": "Di cosa mi occupo.",
  Updated: "Aggiornato il",
  "The technical side": "La parte tecnica",
  "Projects, research, results, reports, and professional experience.":
    "Progetti, ricerca, risultati, report ed esperienza professionale.",
  "AI Engineer & Data Scientist": "AI engineer e data scientist",
  "Open to AI engineering roles": "Cerco un ruolo da AI engineer",
  "More about me": "Di più su di me",

  // Route boundary
  "Unable to load this page": "Impossibile caricare questa pagina",
  "Something did not load": "Qualcosa non si è caricato",
  "Please try again.": "Riprova.",
  Reload: "Ricarica",
  Explore: "Esplora",

  // /about
  "Beyond the CV": "Oltre il CV",
  "A more personal page": "Una pagina più personale",
  "Say hello": "Scrivimi",

  // /atlas
  "Learning, by trying things": "Imparare provando",
  "An explanation is a start.": "Una spiegazione è un inizio.",
  "I wanted to go further.": "Volevo andare oltre.",
  "I built Atlas because reading about an algorithm and understanding its decisions are not the same thing. It brings theory, worked examples, simulations, and practice into one place, in English and Spanish.":
    "Ho costruito Atlas perché leggere di un algoritmo e capire le sue decisioni non sono la stessa cosa. Riunisce teoria, esempi svolti, simulazioni e pratica in un unico posto, in inglese e spagnolo.",
  "Open Atlas": "Apri Atlas",
  "Atlas image-denoising experiment: clean image, noise prediction, and reconstruction":
    "Esperimento di denoising di Atlas: immagine pulita, previsione del rumore e ricostruzione",
  "Interactive laboratories": "Laboratori interattivi",
  "AI subjects": "Materie di IA",
  "The point is to do something with the idea.":
    "Il punto è poter fare qualcosa con quello che impari.",
  "Change a search heuristic. See which nodes an algorithm visits. Follow a gradient through a small network. A good explanation should leave you with something you can investigate, not just something you can repeat.":
    "Cambiare un'euristica di ricerca. Vedere quali nodi visita un algoritmo. Seguire un gradiente attraverso una piccola rete. Una buona spiegazione dovrebbe lasciarti qualcosa da indagare, non solo qualcosa da ripetere.",
  "Each lesson moves through explanation, exploration, practice, and a check on your understanding. Hints and reasoned solutions are there when you need them. Written answers are for comparison and self-assessment, not automatic grading.":
    "Ogni lezione passa per spiegazione, esplorazione, pratica e una verifica della comprensione. Suggerimenti e soluzioni ragionate ci sono quando servono. Le risposte scritte servono per confrontarsi e autovalutarsi, non per un voto automatico.",
  "Still early. Already growing.": "Ancora all'inizio. Già in crescita.",
  "Atlas now includes symbolic AI, deep learning, and generative AI. The latest expansion added stochastic processes, energy-based models, score matching, and diffusion experiments. Courses share the same learning experience, so adding a subject does not mean starting over.":
    "Atlas oggi comprende IA simbolica, deep learning e IA generativa. L'ultima espansione ha aggiunto processi stocastici, modelli basati sull'energia, score matching ed esperimenti di diffusione. I corsi condividono la stessa esperienza di apprendimento, quindi aggiungere una materia non significa ricominciare da zero.",
  "The next step is to understand where the experience helps and where it gets in the way. I want to improve the experiments and learning paths before treating a bigger catalog as a result in itself.":
    "Il passo successivo è capire dove l'esperienza aiuta e dove intralcia. Voglio migliorare esperimenti e percorsi prima di considerare un catalogo più grande un risultato in sé.",
  "The other side of Atlas": "L'altra faccia di Atlas",
  "How it is built.": "Come è costruito.",
  "Architecture, simulation engines, cloud profiles, and the boundaries around telemetry.":
    "Architettura, motori di simulazione, profili nel cloud e i limiti della telemetria.",
  "Technical case study": "Caso di studio tecnico",

  // /portfolio/atlas
  "Atlas: engineering": "Atlas: ingegneria",
  "Software / Learning systems": "Software / Sistemi di apprendimento",
  "A static, bilingual learning platform with isolated scientific engines and account-owned cloud profiles. I build the interface, content structure, engines, and supporting services.":
    "Una piattaforma di apprendimento statica e bilingue, con motori scientifici isolati e profili nel cloud legati all'account. Costruisco l'interfaccia, la struttura dei contenuti, i motori e i servizi di supporto.",
  "Purpose and product": "Scopo e prodotto",
  "Shared content contracts": "Contratti di contenuto condivisi",
  Architecture: "Architettura",
  "GitHub Pages serves the static app. Courses supply manifests and bilingual content. A shared shell owns navigation, identity, profiles, feedback, and telemetry; course plugins only own the experiments.":
    "GitHub Pages serve l'app statica. I corsi forniscono manifest e contenuti bilingui. Una struttura comune gestisce navigazione, identità, profili, feedback e telemetria; i plugin dei corsi gestiscono solo gli esperimenti.",
  "Course manifests": "Manifest dei corsi",
  "Stable IDs, ES/EN content": "ID stabili, contenuti ES/EN",
  "Shared learning shell": "Struttura di apprendimento comune",
  "Views + independent engines": "Viste e motori indipendenti",
  "Account services": "Servizi dell'account",
  "Google OAuth + private profiles": "Google OAuth e profili privati",
  "Supabase services": "Servizi Supabase",
  "PostgreSQL + Edge Functions": "PostgreSQL ed Edge Functions",
  "Experiments are not account code.":
    "Gli esperimenti non sono codice dell'account.",
  "Each simulation separates a pure numerical or logical engine from its visual adapter. The engine can be tested without the interface. Plugins do not manage identities, store learner profiles, or send telemetry directly. New subjects reuse the same learning and account components.":
    "Ogni simulazione separa un motore numerico o logico puro dal suo adattatore visivo. Il motore si può testare senza interfaccia. I plugin non gestiscono identità, non salvano profili e non inviano telemetria direttamente. Le nuove materie riusano gli stessi componenti di apprendimento e di account.",
  "Inputs + parameters": "Input e parametri",
  "Pure engine": "Motore puro",
  "Intermediate states": "Stati intermedi",
  "Visual adapter": "Adattatore visivo",
  "Private profiles, automatic persistence.":
    "Profili privati, salvataggio automatico.",
  "The authenticated Supabase UUID owns the profile row. Display names and browser storage do not grant access. Preferences, drafts, enrollment, and progress synchronise automatically; the browser cache keeps pending changes for the verified account. Changing a language or leaving a course does not erase progress.":
    "Il profilo appartiene all'UUID autenticato di Supabase. Né il nome visualizzato né lo storage del browser danno accesso. Preferenze, bozze, iscrizioni e progressi si sincronizzano da soli; la cache del browser conserva le modifiche in sospeso per l'account verificato. Cambiare lingua o lasciare un corso non cancella i progressi.",
  "Telemetry has a separate boundary.": "La telemetria ha un confine a parte.",
  "Shared shell": "Struttura comune",
  "Bounded events": "Eventi delimitati",
  "Validation + limits": "Validazione e limiti",
  "Strict schema, batches, quotas": "Schema rigido, batch e quote",
  "Private reports": "Report privati",
  "Aggregates → owner dashboard": "Aggregati → dashboard del proprietario",
  "Reports require private authentication. Account identity and analytics pseudonyms are separate. The event schema excludes names, emails, photos, written answers, drafts, and credentials. Opt-out and Global Privacy Control block passive collection; deliberate lesson feedback is independent.":
    "I report richiedono un'autenticazione privata. L'identità dell'account e gli pseudonimi delle analisi sono separati. Lo schema degli eventi esclude nomi, email, foto, risposte scritte, bozze e credenziali. L'opt-out e il Global Privacy Control bloccano la raccolta passiva; il feedback volontario sulle lezioni è indipendente.",
  "This is the implemented reporting flow, not a public copy of the dashboard. No live user data or private credentials are embedded here.":
    "Questo è il flusso di report implementato, non una copia pubblica della dashboard. Qui non ci sono dati reali degli utenti né credenziali private.",
  "What the checks cover.": "Cosa coprono i controlli.",
  "The release pipeline checks content schemas, locale parity, stable identities, plugin contracts, and syntax before tests and a static build. Engine, profile, authentication, synchronisation, and analytics tests cover their own boundaries. Recorded activity measures interaction, not understanding or mastery.":
    "La pipeline di rilascio verifica schemi dei contenuti, parità tra lingue, identità stabili, contratti dei plugin e sintassi prima dei test e della build statica. I test di motori, profili, autenticazione, sincronizzazione e analisi coprono ciascuno il proprio ambito. L'attività registrata misura l'interazione, non la comprensione né la padronanza.",
  "Back to why.": "Torna al perché.",
  "The learning experience, its first users, and where I want to take it.":
    "L'esperienza di apprendimento, i primi utenti e dove voglio portarla.",
  "Atlas: the project": "Atlas: il progetto",
  "Experiments, equations, and what I learned from them.":
    "Esperimenti, equazioni e quello che ne ho imparato.",
  "Adam Maltoni": "Adam Maltoni",

  // /gdg
  "Co-founder. Treasurer. Now president.":
    "Cofondatore. Tesoriere. Ora presidente.",
  "A place to meet people who want to build things, and actually build them together.":
    "Un posto per conoscere persone che vogliono costruire cose, e costruirle davvero insieme.",
  "Second edition of the GDG UAM Git and GitHub workshop":
    "Seconda edizione del workshop di Git e GitHub di GDG UAM",
  "Git and GitHub workshop · September 2026 · GDG UAM":
    "Workshop di Git e GitHub · settembre 2026 · GDG UAM",
  "Events led": "Eventi organizzati",
  Attendees: "Partecipanti",
  "Community members": "Membri della community",
  "People in the teams I coordinate": "Persone nei team che coordino",
  "Figures as of November 2026. Events and attendees are cumulative, not per-event counts.":
    "Dati di novembre 2026. Eventi e partecipanti sono cumulativi, non per evento.",
  "My part in a shared effort.": "La mia parte in un lavoro collettivo.",
  "I helped start the chapter and served as treasurer before being elected president in July 2026. My role is to turn ideas into events: coordinating the team, organising the practical work, and helping the chapter keep moving between sessions.":
    "Ho contribuito a fondare il gruppo e ne sono stato tesoriere prima di essere eletto presidente a luglio 2026. Il mio ruolo è trasformare le idee in eventi: coordinare il team, organizzare il lavoro pratico e far andare avanti il gruppo tra un incontro e l'altro.",
  "The work is collective. Our workshops cover Git, AI agents, Hugging Face, robotics, and reinforcement learning. For the second Git and GitHub workshop, Ibón and I took participants beyond commands into branches, conflicts, pull requests, and automation.":
    "Il lavoro è collettivo. I nostri workshop trattano Git, agenti di IA, Hugging Face, robotica e reinforcement learning. Nella seconda edizione del workshop di Git e GitHub, Ibón e io abbiamo portato i partecipanti oltre i comandi: branch, conflitti, pull request e automazione.",
  "Our first machine learning contest.":
    "La nostra prima gara di machine learning.",
  "From 29 October to 12 November 2026, teams of one to three people had two weeks to classify time series into eight classes: four channels of 256 steps, with missing values, and a test set that does not look quite like the training data. Every model ran on one CPU thread with no GPU, and every answer was timed, so the score balanced accuracy against speed.":
    "Dal 29 ottobre al 12 novembre 2026, squadre da una a tre persone hanno avuto due settimane per classificare serie temporali in otto classi: quattro canali da 256 passi, con valori mancanti e un test che non somiglia del tutto ai dati di addestramento. Ogni modello girava su un solo thread di CPU, senza GPU, e ogni risposta era cronometrata: il punteggio bilanciava accuratezza e velocità.",
  "I organised it with Ibón de Mingo and Héctor Tablero, with €250 in prizes. Whatever the result, everyone left with a machine learning project on a real problem.":
    "L'ho organizzata con Ibón de Mingo e Héctor Tablero, con 250 € di premi. Vincitori o no, tutti sono usciti con un progetto di machine learning su un problema reale.",
  "Read the contest guide": "Leggi la guida della gara",
  "From the chapter calendar": "Dal calendario del gruppo",
  "What is happening.": "Cosa succede.",
  "Full calendar": "Calendario completo",
  "Event period": "Periodo degli eventi",
  Upcoming: "Prossimi",
  Past: "Passati",
  "No upcoming events in this snapshot. The full calendar may have newer ones.":
    "Non ci sono prossimi eventi in questo elenco. Il calendario completo potrebbe averne di più recenti.",
  "No past events yet.": "Ancora nessun evento passato.",
  "Calendar snapshot: 18 November 2026. Check the chapter site for changes and registration.":
    "Calendario aggiornato al 18 novembre 2026. Consulta il sito del gruppo per modifiche e iscrizioni.",
  "The results belong to the chapter.": "I risultati sono del gruppo.",
  "The event write-ups, resources, and photographs live on the GDG website.":
    "Resoconti, materiali e foto degli eventi sono sul sito del GDG.",
  "Read the event write-ups": "Leggi i resoconti",
};
