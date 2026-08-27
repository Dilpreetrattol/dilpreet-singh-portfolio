import type { Project } from "./types";

// The only two files you should need to edit to add or change a project:
// this file, and ./site.ts. To add a project, append an entry below —
// featured projects render first and larger; entries without `details`
// link straight to GitHub with no detail page.

export const projects: Project[] = [
  {
    slug: "chess-ai",
    title: "Chess AI Engine",
    tags: ["Algorithms"],
    featured: true,
    language: "C++",
    oneLiner:
      "A chess engine with an adjustable-difficulty AI opponent, built on minimax search with alpha-beta pruning.",
    stack: ["C++", "Minimax", "Alpha-Beta Pruning"],
    repoUrl: "https://github.com/Dilpreetrattol/chess-ai",
    details: {
      problem:
        "Playing a legal, competent game of chess against a computer opponent requires searching a game tree that branches too fast to explore exhaustively — a naive full search becomes intractable within a handful of moves. The engine needed a way to look ahead far enough to play credibly, at more than one difficulty level, without the search blowing up.",
      approach:
        "The engine uses minimax search: it recursively explores the tree of possible moves, assuming the opponent always plays their best response, and propagates position evaluations back up to pick the move that maximizes the engine's worst-case outcome. On top of plain minimax, alpha-beta pruning is used to cut branches of the tree that cannot affect the final decision — once a branch is known to be worse than an alternative already found, the search abandons it rather than evaluating it fully. This reduces the effective branching factor substantially without changing the result minimax would have produced on its own. Difficulty is configurable via search depth: Easy searches 1 ply, Medium searches 2 plies, and Hard searches 3 plies. Increasing the depth lets the AI consider more future responses and generally improves move quality, at the cost of increased computation.",
      challenges:
        "The main challenge was search efficiency: raw minimax without pruning was too slow to search deep enough to play well, and even with alpha-beta pruning, move ordering mattered — searching stronger candidate moves first lets pruning cut more branches earlier. Estimated search size is roughly 20–40 nodes per move at depth 1, 400–1,600 at depth 2, and 8,000–64,000 at depth 3, depending on the position's branching factor — with move latency expected to stay under 10ms on Easy, 10–50ms on Medium, and 50–500ms on Hard. These are estimates rather than measured benchmarks, since the repository doesn't yet include node-count or timing instrumentation. The other significant piece of work was the evaluation function used to score non-terminal positions (material balance, and positional factors), since the quality of the AI's play is bounded by how well it can judge a position it hasn't fully resolved.",
      outcome:
        "The engine plays a full legal game of chess against a human opponent with selectable difficulty, trading off move strength against response time via search depth.",
    },
  },
  {
    slug: "syllabus-tracker",
    title: "Syllabus Tracker",
    tags: ["Web"],
    featured: true,
    language: "Flask",
    oneLiner:
      "A multi-role academic syllabus platform with separate dashboards for students, teachers, HODs, and coordinators.",
    stack: ["Python", "Flask", "SQLite", "Jinja", "RBAC"],
    repoUrl: "https://github.com/Dilpreetrattol/syllabus-tracker",
    details: {
      problem:
        "Tracking syllabus completion across a department involves several distinct audiences — students who want visibility into progress, teachers who need to record it, HODs who need a department-wide view, and coordinators who manage structure — each of whom needs a different slice of the same data and a different set of permissions on it. A single generic dashboard doesn't serve any of them well.",
      approach:
        "The application is built around role-based access control (RBAC) with four distinct roles — student, teacher, HOD, and coordinator — each with its own dashboard and its own permitted actions, enforced server-side rather than just hidden in the UI. Authentication uses hashed passwords rather than plaintext storage. The data model organizes content as departments containing academic years, containing subjects, containing topics, each of which carries a completion state that teachers update and students and HODs can view. The interface is built on a shared set of CSS design tokens (spacing, color, type scale) so the four dashboards stay visually consistent while showing different data, and is responsive down to mobile.",
      challenges:
        "Permission modelling was the hardest part: the same subject/topic data needed to be readable and writable in different combinations depending on role, and getting that consistent across every route (not just the ones with an obvious permission check) took deliberate design rather than ad hoc guards. The second major challenge was progress tracking itself — correctly aggregating topic-level completion up to subject- and department-level views as teachers update it, so the HOD dashboard reflects an accurate real-time picture rather than a stale or double-counted one.",
      outcome:
        "The platform runs with working login and role separation for all four roles, lets teachers mark topic-level completion, and rolls that up into subject- and department-level views for HODs and coordinators.",
    },
  },
  {
    slug: "university-helpdesk",
    title: "TIET RAG Helpdesk Chatbot",
    tags: ["ML / AI"],
    language: "Python",
    oneLiner:
      "A retrieval-augmented chatbot answering TIET fresher questions from official institute documents.",
    stack: ["Python", "LlamaIndex", "ChromaDB", "HuggingFace", "Gemini API", "Streamlit"],
    repoUrl: "https://github.com/Dilpreetrattol/university-helpdesk",
    details: {
      problem:
        "Information new students at TIET need — hostel rules, academic policies, department procedures — exists mostly as scattered official PDFs. There's no way to ask a plain-language question and get an answer sourced from those documents; a fresher either reads through dense PDFs manually or asks around and gets inconsistent answers.",
      approach:
        "The system implements a full retrieval-augmented generation (RAG) pipeline. Institute PDFs are ingested and split into chunks, each chunk is embedded using a HuggingFace embedding model, and the embeddings are stored in a ChromaDB vector store. LlamaIndex sits on top as the query engine: an incoming question is embedded and matched against the stored chunks to retrieve the most relevant passages, which are then passed as context to the Gemini API to generate a grounded answer. Conversation memory is layered in so follow-up questions can reference earlier turns rather than being treated as isolated queries. Streamlit provides the chat interface.",
      challenges:
        "Chunking strategy had a direct, sometimes surprising effect on retrieval quality — chunks that were too large diluted relevance scores and pulled in irrelevant context, while chunks that were too small lost surrounding context needed to answer correctly, so the split size and overlap needed tuning against real questions. The other significant challenge was handling Gemini API rate limits gracefully: naive retries mid-conversation would either stall the chat or silently drop conversation state, so request handling needed to back off and recover without breaking the flow of an ongoing conversation.",
      outcome:
        "The chatbot answers fresher questions grounded in the actual institute documents, holds a multi-turn conversation with memory, and runs as a usable Streamlit app.",
    },
  },
  {
    slug: "esp32-air-quality",
    title: "ESP32 Air Quality Monitor",
    tags: ["Embedded / IoT"],
    language: "C++",
    oneLiner:
      "A real-time air quality station with live AQI readout, threshold alerting, and phone notifications.",
    stack: ["ESP32", "MQ135", "MQ2", "I2C LCD", "Blynk IoT", "C++"],
    repoUrl: "https://github.com/Dilpreetrattol/esp32-air-quality-monitor",
    details: {
      problem:
        "Getting a usable air-quality reading out of cheap gas sensors (MQ135 for general air quality, MQ2 for smoke/combustible gases) means turning a raw analog resistance reading into something meaningful like an AQI number, then surfacing it locally and remotely without a microcontroller-class device stalling or missing events.",
      approach:
        "An ESP32 reads both sensors, drives a local I2C LCD for an at-a-glance readout, and pushes readings to Blynk IoT so the station is monitorable from a phone, with threshold-based alerts when air quality crosses into an unsafe range.",
      challenges:
        "Sensor calibration was the first real problem: MQ-series sensors don't output AQI directly, they output a resistance that changes with gas concentration, and turning that into a usable number required using the sensor's Rs/Ro ratio and its documented power-law relationship (AQI-relevant concentration scales as a power function of Rs/Ro) rather than a linear guess — an early linear mapping produced readings that were clearly wrong at both ends of the range. Getting Ro (the baseline resistance in clean air) required a proper calibration pass rather than a fixed constant, since it drifts with the individual sensor and its environment.\n\nThe second problem was the alert buzzer: the first version drove it with a blocking delay() call inside the main loop, which meant sensor polling and the Blynk connection both froze for the duration of every alert tone — under sustained bad air quality, the whole device effectively hung. The fix was rewriting the buzzer logic to be non-blocking, tracking on/off state and timing with millis() comparisons in the main loop instead of a blocking wait, so alerting and sensing run concurrently.\n\nThird, pushing every sensor reading straight to Blynk hit its free-tier rate limits under continuous polling, throwing off both the live readout and the alert notifications. The fix was throttling how often events are sent — reporting on a fixed interval and on threshold crossings rather than on every loop iteration — which kept the station inside Blynk's limits without losing responsiveness to real air-quality changes.",
      outcome:
        "The station gives a live local AQI readout on the LCD, pushes readings to a phone via Blynk, and raises non-blocking alerts when air quality crosses a set threshold, without hanging or exceeding API rate limits under continuous operation.",
    },
  },
  {
    slug: "pet-mri-fusion",
    title: "Hybrid AI Breast Cancer Detection — PET-MRI Fusion",
    tags: ["ML / AI"],
    language: "Python",
    oneLiner:
      "A research project on multimodal medical image fusion using a dual-encoder architecture with explainability.",
    stack: ["Python", "PyTorch", "Grad-CAM", "Federated Learning"],
    team: { size: 4 },
    details: {
      problem:
        "Breast cancer detection from a single imaging modality misses information the other modality carries — PET captures metabolic activity, MRI captures structural detail. Fusing them can improve detection, but naively combining two imaging modalities risks losing the interpretability clinicians need to trust a model's output, and centralizing sensitive medical imaging data across institutions raises privacy concerns.",
      approach:
        "The team's approach centers on a dual-encoder architecture: separate encoders process the PET and MRI inputs so each modality's features are learned in a representation suited to it, before the two streams are fused for classification. Grad-CAM is integrated for explainability, producing visual heatmaps over the input images that show which regions drove the model's decision, rather than treating it as a black box. A federated learning approach was adopted so the model can be trained across data held at different sites without pooling raw patient imaging into one place.",
      challenges:
        "Designing a fusion point that let each modality contribute its own signal without one modality's features swamping the other required iterating on where in the network the two encoder streams merge. Integrating Grad-CAM meaningfully across a dual-encoder (rather than a single standard CNN) took care to make sure the heatmaps could be attributed back to each modality's input correctly. Coordinating a federated training setup added its own complexity on top of the modelling work.",
      outcome:
        "The project delivered a working dual-encoder fusion pipeline with Grad-CAM-based explainability and a federated training approach, along with the written methodology and literature survey underpinning the design choices.",
      contribution:
        "Technical ML pipeline design: the dual-encoder architecture, Grad-CAM explainability integration, and the federated learning approach. Also authored the methodology, literature survey, and design goals sections of the written report.",
    },
  },
  {
    slug: "placement-log",
    title: "PlacementLog",
    tags: ["Web"],
    language: "Flask",
    status: "In progress",
    oneLiner:
      "A placement-season application tracker with a dashboard for pipeline status and outcome analytics.",
    stack: ["Python", "Flask", "SQLite", "Chart.js"],
    repoUrl: "https://github.com/Dilpreetrattol/Placement_log",
    details: {
      problem:
        "Tracking applications across a placement season — which companies applied to, at what stage, with what outcome — gets unwieldy in a spreadsheet once the number of applications grows, and a spreadsheet has no way to visualize pipeline status at a glance.",
      approach:
        "A Flask backend with a SQLite database models companies, application stages, and outcomes, with a dashboard on top rendering pipeline status and outcome analytics via Chart.js. It was built deliberately from scratch as an exercise in Flask fundamentals — routing, templating, and the ORM layer — rather than to ship the fastest possible version.",
      challenges:
        "Modelling an application's lifecycle (applied → shortlisted → interview rounds → result) as clean database state that the dashboard could aggregate cleanly, while keeping the schema simple enough to extend as new stages or companies came up during the season.",
      outcome:
        "The tracker is in active use for the current placement season; the dashboard and analytics views are functional and being extended as the season progresses.",
    },
  },
  {
    slug: "rfid-security",
    title: "RFID Home Security System",
    tags: ["Embedded / IoT"],
    language: "C++",
    oneLiner:
      "An access control system with RFID card authentication driving a solenoid lock.",
    stack: ["Arduino Uno", "RFID-RC522", "C++"],
    // TODO: confirm this is the exact repo name/casing once pushed.
    repoUrl: "https://github.com/Dilpreetrattol/rfid-security",
  },
];
